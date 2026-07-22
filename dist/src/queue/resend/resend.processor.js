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
exports.ResendProcessor = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const prisma_service_1 = require("../../prisma/prisma.service");
const bullmq_2 = require("bullmq");
const common_1 = require("@nestjs/common");
const xml2js_1 = require("xml2js");
let ResendProcessor = class ResendProcessor extends bullmq_1.WorkerHost {
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
        const { ids, cost } = job.data;
        for (const id of ids) {
            const message = await this.prismaService.message.update({
                where: { id: id },
                data: {
                    costInCredits: cost
                }
            });
            await this.sendMessage(id);
            await this.afterSmsSent(message);
        }
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
exports.ResendProcessor = ResendProcessor;
exports.ResendProcessor = ResendProcessor = __decorate([
    (0, bullmq_1.Processor)('resend-sms', { concurrency: 5 }),
    __param(1, (0, bullmq_1.InjectQueue)('dlr-queue')),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        bullmq_2.Queue])
], ResendProcessor);
//# sourceMappingURL=resend.processor.js.map