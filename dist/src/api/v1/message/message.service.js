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
exports.MessageService = void 0;
exports.createSampleMessages = createSampleMessages;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const bullmq_1 = require("@nestjs/bullmq");
const bullmq_2 = require("bullmq");
const utils_1 = require("../../../utils");
const xml2js_1 = require("xml2js");
let MessageService = class MessageService {
    prismaService;
    importQueue;
    dlrQueue;
    ResendQueue;
    constructor(prismaService, importQueue, dlrQueue, ResendQueue) {
        this.prismaService = prismaService;
        this.importQueue = importQueue;
        this.dlrQueue = dlrQueue;
        this.ResendQueue = ResendQueue;
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
    async create(createMessageDto) {
        const exist = await this.prismaService.message.findFirst({
            where: {
                phone: createMessageDto.phone,
                campaignId: createMessageDto.campaignId,
            },
        });
        if (exist)
            throw new common_1.ConflictException('Message already exists');
        const campaign = await this.prismaService.campaign.findUnique({
            where: { id: createMessageDto.campaignId },
        });
        if (!campaign)
            throw new common_1.NotFoundException('Campaign not found');
        return this.prismaService.message.create({
            data: {
                ...createMessageDto,
            },
        });
    }
    async createSMS(tenantId, createMessageDto) {
        const phones = createMessageDto.phone
            .split(';')
            .map(p => p.trim())
            .filter(p => p.length > 0);
        const uniquePhones = [...new Set(phones)];
        const aggregate = await this.prismaService.transaction.aggregate({
            where: { tenantId, status: 'COMPLETED', remainingSMS: { gt: 0 } },
            _sum: { remainingSMS: true }
        });
        const smsPartsPerMessage = await (0, utils_1.calculateCost)(createMessageDto.messageBody);
        const totalCreditsNeeded = uniquePhones.length * smsPartsPerMessage;
        const totalAvailableSms = aggregate._sum.remainingSMS || 0;
        if (totalAvailableSms < uniquePhones.length)
            throw new common_1.BadRequestException('Insufficient SMS credits balance.');
        try {
            const r = await this.deductSmsCredits(tenantId, totalCreditsNeeded);
            createMessageDto.tenantId = tenantId;
            for (const phone of uniquePhones) {
                createMessageDto.phone = phone;
                const cost = Number(r.totalCostDeducted) / Number(uniquePhones.length);
                const message = await this.prismaService.message.create({
                    data: {
                        ...createMessageDto,
                        costInCredits: cost,
                        type: 'SMS'
                    },
                });
                await this.sendMessage(message.id);
                await this.afterSmsSent(message);
            }
        }
        catch (e) {
            throw new common_1.BadRequestException('Credit deduction failed: ' + e.message);
        }
        return { message: 'Send Successfully' };
    }
    async createSpreadsheet(tenantId, file, createMessageDto) {
        const job = await this.importQueue.add('import', {
            tenantId,
            senderId: createMessageDto.senderId,
            fileBuffer: file.buffer.toString('base64'),
            originalName: file.originalname,
            mimetype: file.mimetype,
            messageBody: createMessageDto.messageBody,
        }, {
            removeOnComplete: true,
            removeOnFail: true,
        });
        return {
            message: 'Import started',
            jobId: job.id,
        };
    }
    async findByCampaign(campaignId) {
        return this.prismaService.message.findMany({
            where: campaignId ? { campaignId } : {},
            orderBy: { sentAt: 'desc' },
        });
    }
    async findAll() {
        return this.prismaService.message.findMany({
            orderBy: {
                sentAt: 'desc',
            },
        });
    }
    async findByType(tenantId, type) {
        return this.prismaService.message.findMany({
            where: { type, tenantId },
            orderBy: { sentAt: 'desc' },
        });
    }
    async findOne(id) {
        const exist = await this.prismaService.message.findUnique({
            where: { id },
        });
        if (!exist)
            throw new common_1.NotFoundException('Campaign not found');
        return exist;
    }
    async update(id, updateMessageDto) {
        await this.findOne(id);
        return this.prismaService.message.update({
            where: { id },
            data: { ...updateMessageDto },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prismaService.message.delete({
            where: { id },
        });
    }
    async removeMany(ids) {
        if (!ids || ids.length === 0) {
            throw new Error('No IDs provided');
        }
        return this.prismaService.message.deleteMany({
            where: { id: { in: ids } },
        });
    }
    async resendSMS(tenantId, ids) {
        if (!ids || ids.length === 0) {
            throw new Error('No IDs provided');
        }
        if (!tenantId) {
            throw new Error('No tenant id provided');
        }
        const aggregate = await this.prismaService.transaction.aggregate({
            where: { tenantId, status: 'COMPLETED', remainingSMS: { gt: 0 } },
            _sum: { remainingSMS: true }
        });
        const message = await this.prismaService.message.findFirst({
            where: {
                id: ids[0],
            }
        });
        const smsPartsPerMessage = await (0, utils_1.calculateCost)(message?.messageBody);
        const totalCreditsNeeded = ids.length * smsPartsPerMessage;
        const totalAvailableSms = aggregate._sum.remainingSMS || 0;
        if (totalAvailableSms < ids.length)
            throw new common_1.BadRequestException('Insufficient SMS credits balance.');
        try {
            const r = await this.deductSmsCredits(tenantId, totalCreditsNeeded);
            const cost = Number(r.totalCostDeducted) / Number(ids.length);
            for (const id of ids) {
                const message = await this.prismaService.message.update({
                    where: { id: id },
                    data: {
                        costInCredits: cost,
                        status: 'UNDELIV'
                    }
                });
                await this.sendMessage(id);
                await this.afterSmsSent(message);
            }
        }
        catch (e) {
            throw new common_1.BadRequestException('Credit deduction failed: ' + e.message);
        }
        return {
            message: 'Resend successfully',
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
exports.MessageService = MessageService;
exports.MessageService = MessageService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, bullmq_1.InjectQueue)('import-spreadsheet')),
    __param(2, (0, bullmq_1.InjectQueue)('dlr-queue')),
    __param(3, (0, bullmq_1.InjectQueue)('resend-queue')),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        bullmq_2.Queue,
        bullmq_2.Queue,
        bullmq_2.Queue])
], MessageService);
function getRandomEnumValue(enumObj) {
    const values = Object.values(enumObj);
    return values[Math.floor(Math.random() * values.length)];
}
async function createSampleMessages(prismaService, tenantId, senderId) {
    let DlrStatus;
    (function (DlrStatus) {
        DlrStatus["DELIVRD"] = "DELIVRD";
        DlrStatus["UNDELIV"] = "UNDELIV";
        DlrStatus["EXPIRED"] = "EXPIRED";
        DlrStatus["REJECTED"] = "REJECTED";
        DlrStatus["UNKNOWN"] = "UNKNOWN";
    })(DlrStatus || (DlrStatus = {}));
    let MessageType;
    (function (MessageType) {
        MessageType["GROUP"] = "GROUP";
        MessageType["SPREADSHEET"] = "SPREADSHEET";
        MessageType["SMS"] = "SMS";
        MessageType["OTHER"] = "OTHER";
    })(MessageType || (MessageType = {}));
    const typeCounts = {
        [MessageType.OTHER]: 500,
        [MessageType.SPREADSHEET]: 1000,
        [MessageType.SMS]: 1500,
        [MessageType.GROUP]: 2000,
    };
    for (let monthOffset = 0; monthOffset < 7; monthOffset++) {
        const baseDate = new Date();
        baseDate.setMonth(baseDate.getMonth() - monthOffset);
        for (const [type, count] of Object.entries(typeCounts)) {
            for (let i = 0; i < count; i++) {
                const phone = `216${Math.floor(10000000 + Math.random() * 89999999)}`;
                const sentAt = new Date(baseDate);
                const deliveredAt = new Date(baseDate);
                const createMessageDto = {
                    phone,
                    messageBody: `Sample ${type} message #${i + 1} (month ${monthOffset + 1})`,
                    status: getRandomEnumValue(DlrStatus),
                    type: type,
                    costInCredits: 0.039,
                    sentAt,
                    deliveredAt,
                    tenantId,
                    senderId,
                };
                await prismaService.message.create({
                    data: createMessageDto,
                });
            }
            console.log(`Inserted ${count} messages of type ${type} for month ${monthOffset + 1}`);
        }
    }
}
//# sourceMappingURL=message.service.js.map