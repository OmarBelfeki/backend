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
exports.QueueProcessor = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const bullmq_2 = require("bullmq");
const prisma_service_1 = require("../../prisma/prisma.service");
const mailer_service_1 = require("../../mailer/mailer.service");
const common_1 = require("@nestjs/common");
const xml2js_1 = require("xml2js");
let QueueProcessor = class QueueProcessor extends bullmq_1.WorkerHost {
    prisma;
    mailerService;
    dlrQueue;
    constructor(prisma, mailerService, dlrQueue) {
        super();
        this.prisma = prisma;
        this.mailerService = mailerService;
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
        const { phone, message, messageId } = job.data;
        try {
            await this.sendMessage(messageId);
            await this.afterSmsSent(messageId);
        }
        catch (error) {
            console.error('❌ SMS failed:', phone);
            throw error;
        }
    }
    async sendMessage(messageId) {
        const message = await this.prisma.message.findUnique({
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
            await this.prisma.message.update({
                where: {
                    id: message.id,
                },
                data: {
                    providerMsgId: providerMessageId,
                    deliveredAt: success ? new Date() : new Date(),
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
            await this.prisma.message.update({
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
    async fakeSmsProvider(phone, message) {
        await new Promise((r) => setTimeout(r, 1000));
        const rand = Math.random();
        if (rand < 0.7) {
            return { status: 'SUCCESS', id: 'msg_' + Date.now() };
        }
        if (rand < 0.85) {
            throw new Error('Provider error');
        }
        return { status: 'ACCEPTED', id: 'msg_' + Date.now() };
    }
    async simulateDelivery(messageId) {
        const delay = Math.random() * 5000 + 2000;
        setTimeout(async () => {
            const rand = Math.random();
            let status = 'DELIVRD';
            if (rand < 0.1)
                status = 'EXPIRED';
            else if (rand < 0.2)
                status = 'REJECTED';
            else if (rand < 0.25)
                status = 'UNKNOWN';
            await this.prisma.message.update({
                where: { id: messageId },
                data: {
                    status,
                    deliveredAt: new Date(),
                },
            });
            console.log(`📬 DLR update: ${messageId} → ${status}`);
        }, delay);
    }
    async onFailed(job) {
        const { messageId } = job.data;
        await this.prisma.message.update({
            where: { id: messageId },
            data: {
                status: 'REJECTED',
            },
        });
    }
    async onCompleted(job) {
        const { campaignId } = job.data;
        const stats = await this.prisma.message.aggregate({
            where: { campaignId },
            _count: {
                '_all': true,
                'status': true,
            },
            _sum: {
                costInCredits: true,
            },
        });
        const total = stats._count._all;
        const delivrd = stats._count.status['DELIVRD'] ?? 0;
        const finalCost = stats._sum.costInCredits ?? 0;
        const campaign = await this.prisma.campaign.update({
            where: { id: campaignId },
            data: { status: 'COMPLETED' },
        });
        const user = await this.prisma.user.findFirst({
            where: { tenantId: campaign.tenantId, role: 'ADMIN_CLIENT' },
        });
    }
};
exports.QueueProcessor = QueueProcessor;
__decorate([
    (0, bullmq_1.OnWorkerEvent)('failed'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bullmq_2.Job]),
    __metadata("design:returntype", Promise)
], QueueProcessor.prototype, "onFailed", null);
__decorate([
    (0, bullmq_1.OnWorkerEvent)('completed'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bullmq_2.Job]),
    __metadata("design:returntype", Promise)
], QueueProcessor.prototype, "onCompleted", null);
exports.QueueProcessor = QueueProcessor = __decorate([
    (0, bullmq_1.Processor)('sms-queue', { concurrency: 10 }),
    __param(2, (0, bullmq_1.InjectQueue)('dlr-queue')),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mailer_service_1.MailerService,
        bullmq_2.Queue])
], QueueProcessor);
//# sourceMappingURL=queue.processor.js.map