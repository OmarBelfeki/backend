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
exports.DlrProcessor = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const bullmq_2 = require("bullmq");
const prisma_service_1 = require("../../prisma/prisma.service");
const task_DlrService_1 = require("../../tasks/task.DlrService");
let DlrProcessor = class DlrProcessor extends bullmq_1.WorkerHost {
    prisma;
    dlrService;
    dlrQueue;
    constructor(prisma, dlrService, dlrQueue) {
        super();
        this.prisma = prisma;
        this.dlrService = dlrService;
        this.dlrQueue = dlrQueue;
    }
    async process(job) {
        const { messageId } = job.data;
        const msg = await this.prisma.message.findFirst({
            where: { id: messageId },
            include: { tenant: true },
        });
        if (!msg || !msg.providerMsgId)
            return;
        if (['DELIVRD', 'REJECTED', 'EXPIRED'].includes(msg.status)) {
            return;
        }
        try {
            await this.dlrService.checkSingleMessage(msg);
        }
        catch (err) {
            console.error(`Provider check failed for ${messageId}`, err);
            throw err;
        }
        const updated = await this.prisma.message.findFirst({
            where: { id: messageId },
        });
        if (updated && !['DELIVRD', 'REJECTED', 'EXPIRED'].includes(updated.status)) {
            await this.dlrQueue.add('check-dlr', { messageId }, {
                delay: 2 * 60 * 1000,
            });
        }
    }
};
exports.DlrProcessor = DlrProcessor;
exports.DlrProcessor = DlrProcessor = __decorate([
    (0, bullmq_1.Processor)('dlr-queue'),
    __param(2, (0, bullmq_1.InjectQueue)('dlr-queue')),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        task_DlrService_1.DlrService,
        bullmq_2.Queue])
], DlrProcessor);
//# sourceMappingURL=dlr.processor.js.map