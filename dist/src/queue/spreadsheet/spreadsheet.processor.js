"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpreadsheetProcessor = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const prisma_service_1 = require("../../prisma/prisma.service");
const bullmq_2 = require("bullmq");
const common_1 = require("@nestjs/common");
const utils_1 = require("../../utils");
const xml2js_1 = require("xml2js");
function formatLocalizedDate(date, locale = navigator.language) {
    const month = date.toLocaleString(locale, { month: 'short' });
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    const second = String(date.getSeconds()).padStart(2, '0');
    return `${month}-${day}-${year}-${hour}-${minute}-${second}`;
}
let SpreadsheetProcessor = class SpreadsheetProcessor extends bullmq_1.WorkerHost {
    prismaService;
    dlrQueue;
    constructor(prismaService, dlrQueue) {
        super();
        this.prismaService = prismaService;
        this.dlrQueue = dlrQueue;
    }
    async afterSmsSent(message) {
        await this.dlrQueue.add('check-dlr', {
            messageId: message.id,
        }, {
            delay: 2 * 60 * 1000,
            attempts: 5,
            backoff: {
                type: 'exponential',
                delay: 60 * 1000,
            },
            removeOnComplete: true,
            removeOnFail: true
        });
    }
    async process(job) {
        const { tenantId, fileBuffer, senderId, originalName, mimetype, messageBody, } = job.data;
        const buffer = Buffer.from(fileBuffer, 'base64');
        const fakeFile = {
            buffer,
            originalname: originalName,
            fieldname: 'file',
            encoding: '7bit',
            mimetype,
            size: buffer.length,
            destination: '',
            filename: '',
            path: '',
            stream: null,
        };
        const stats = {
            sent: 0,
            errors: 0,
            duplicated: 0,
        };
        const phones = (0, utils_1.importContacts)(fakeFile);
        if (!Array.isArray(phones) || phones.length === 0) {
            throw new common_1.BadRequestException('File is empty or invalid');
        }
        const baseMessage = messageBody;
        const seenInFile = new Set();
        const toInsert = [];
        for (const p of phones) {
            const phone = (0, utils_1.normalizePhone)(p.MOBILE);
            let personalizedMessage = baseMessage;
            Object.keys(p).forEach((key) => {
                const regex = new RegExp(`\\[\\[${key}\\]\\]`, 'g');
                personalizedMessage = personalizedMessage.replace(regex, p[key] ?? '');
            });
            const isError = !phone || phone.length !== 11;
            if (isError) {
                stats.errors++;
                toInsert.push({
                    phone: p?.MOBILE || '',
                    messageBody: personalizedMessage,
                    error: true,
                });
                continue;
            }
            if (seenInFile.has(phone)) {
                stats.duplicated++;
                continue;
            }
            seenInFile.add(phone);
            stats.sent++;
            toInsert.push({
                phone,
                messageBody: personalizedMessage,
                error: false,
            });
        }
        const aggregate = await this.prismaService.transaction.aggregate({
            where: { tenantId, status: 'COMPLETED', remainingSMS: { gt: 0 } },
            _sum: { remainingSMS: true },
        });
        const smsPartsPerMessage = await (0, utils_1.calculateCost)(baseMessage);
        const totalCreditsNeeded = toInsert.length * smsPartsPerMessage;
        const totalAvailableSms = aggregate._sum.remainingSMS || 0;
        if (totalAvailableSms < totalCreditsNeeded) {
            throw new common_1.BadRequestException('Insufficient SMS credits balance');
        }
        const sender = await this.prismaService.senderID.findUnique({
            where: { id: senderId },
        });
        try {
            const r = await this.deductSmsCredits(tenantId, totalCreditsNeeded);
            const comp = await this.prismaService.campaign.create({
                data: {
                    name: `${sender?.label}-xl-${formatLocalizedDate(new Date())}`,
                    type: 'IMMEDIATE',
                    messageContent: 'SPREADSHEET',
                    status: 'QUEUED',
                    totalContacts: toInsert.length,
                    estimatedCost: r.totalCostDeducted,
                    tenantId: tenantId,
                    senderId: senderId,
                },
            });
            const costPerMsg = Number(r.totalCostDeducted) / toInsert.length;
            for (const msg of toInsert) {
                const message = await this.prismaService.message.create({
                    data: {
                        phone: msg.phone,
                        messageBody: msg.messageBody,
                        type: 'SPREADSHEET',
                        costInCredits: costPerMsg,
                        tenantId,
                        sentAt: new Date(),
                        deliveredAt: new Date(),
                        error: msg.error,
                        campaignId: comp.id,
                        senderId,
                    },
                });
                await this.sendMessage(message.id);
                await this.afterSmsSent(message);
            }
            await this.prismaService.campaign.update({
                where: { id: comp.id },
                data: {
                    status: 'COMPLETED',
                }
            });
        }
        catch (e) {
            throw new common_1.BadRequestException('Credit deduction failed: ' + e.message);
        }
        return {
            message: 'Successfully',
            stats,
        };
    }
    async deductSmsCredits(tenantId, smsCountNeeded) {
        const now = new Date();
        return await this.prismaService.$transaction(async (tx) => {
            const availableLayers = await tx.transaction.findMany({
                where: {
                    tenantId: tenantId,
                    status: 'COMPLETED',
                    remainingSMS: { gt: 0 },
                    OR: [
                        { endAt: null },
                        { endAt: { gt: now } },
                    ]
                },
                orderBy: {
                    createdAt: 'asc',
                },
            });
            let remainingToDeduct = smsCountNeeded;
            let totalMonetaryCost = 0;
            for (const layer of availableLayers) {
                if (remainingToDeduct <= 0)
                    break;
                const availableInLayer = layer.remainingSMS || 0;
                const amountToTake = Math.min(availableInLayer, remainingToDeduct);
                const rate = Number(layer.rateSMS || 0);
                totalMonetaryCost += amountToTake * rate;
                await tx.transaction.update({
                    where: { id: layer.id },
                    data: {
                        remainingSMS: {
                            decrement: amountToTake
                        }
                    }
                });
                remainingToDeduct -= amountToTake;
            }
            if (remainingToDeduct > 0) {
                throw new Error("Insufficient SMS balance!");
            }
            await tx.tenant.update({
                where: { id: tenantId },
                data: {
                    virtualBalance: {
                        decrement: totalMonetaryCost
                    }
                }
            });
            return {
                success: true,
                totalCostDeducted: totalMonetaryCost
            };
        });
    }
    async sendMessage(messageId) {
        const message = await this.prismaService.message.findUnique({
            where: { id: messageId },
            include: {
                tenant: true,
                sender: true,
                campaign: true,
            },
        });
        if (!message) {
            throw new common_1.BadRequestException('Message not found');
        }
        if (!message.tenant) {
            throw new common_1.BadRequestException('Tenant not found');
        }
        const myMobile = message.phone;
        const mySms = message.messageBody;
        const mySender = message.sender?.label;
        const key = message.tenant.providerApiKey;
        const tunisianPhoneRegex = /^(216)?[2459]\d{7}$/;
        if (!tunisianPhoneRegex.test(myMobile)) {
            throw new common_1.BadRequestException('Invalid Tunisian mobile number');
        }
        if (!mySender ||
            mySender.length < 3 ||
            mySender.length > 11) {
            throw new common_1.BadRequestException('Sender must be between 3 and 11 characters');
        }
        if (!key) {
            throw new common_1.BadRequestException('API key is required');
        }
        const normalizedMobile = myMobile.startsWith('216')
            ? myMobile
            : `216${myMobile}`;
        const smsErrors = {
            '200': 'Data OK',
            '400': 'Absence de la clé',
            '401': 'Clé non autorisée',
            '402': 'Crédit insuffisant',
            '420': 'Quota journalier dépassé',
            '430': 'Contenu manquant',
            '431': 'Destination manquante',
            '440': 'Contenu trop long',
            '441': 'Destination non autorisée',
            '442': 'Sender non autorisée',
        };
        const url = `http://bulk.smsing.tn/Api/Api.aspx?fct=sms&key=${key}&mobile=${normalizedMobile}&sms=${mySms}&sender=${mySender}`;
        try {
            const res = await fetch(url);
            const xml = await res.text();
            const parsed = await (0, xml2js_1.parseStringPromise)(xml);
            const status = parsed.response.status[0];
            const statusCode = status.status_code[0];
            const statusMsg = status.status_msg[0];
            const providerMessageId = status.message_id?.[0] || null;
            const success = statusCode === '200';
            console.log(success);
            console.log(statusMsg);
            console.log(providerMessageId);
            await this.prismaService.message.update({
                where: {
                    id: message.id,
                },
                data: {
                    providerMsgId: providerMessageId,
                    deliveredAt: success ? new Date() : null,
                },
            });
            return {
                success,
                code: statusCode,
                message: smsErrors[statusCode] ||
                    statusMsg,
                providerMessage: statusMsg,
                providerMessageId,
            };
        }
        catch (err) {
            await this.prismaService.message.update({
                where: {
                    id: message.id,
                },
                data: {
                    status: 'UNDELIV',
                },
            });
            return {
                success: false,
                message: err.message,
            };
        }
    }
};
exports.SpreadsheetProcessor = SpreadsheetProcessor;
exports.SpreadsheetProcessor = SpreadsheetProcessor = __decorate([
    (0, bullmq_1.Processor)('import-spreadsheet', { concurrency: 5 }),
    __param(1, (0, bullmq_1.InjectQueue)('dlr-queue')),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        bullmq_2.Queue])
], SpreadsheetProcessor);
//# sourceMappingURL=spreadsheet.processor.js.map