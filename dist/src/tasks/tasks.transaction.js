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
var TasksTransaction_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksTransaction = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const prisma_service_1 = require("../prisma/prisma.service");
let TasksTransaction = TasksTransaction_1 = class TasksTransaction {
    prisma;
    logger = new common_1.Logger(TasksTransaction_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async handleExpiredSms() {
        const now = new Date();
        const expiredTransactions = await this.prisma.transaction.findMany({
            where: {
                status: 'COMPLETED',
                remainingSMS: { gt: 0 },
                endAt: { lt: now },
            },
        });
        if (expiredTransactions.length === 0) {
            return;
        }
        for (const tx of expiredTransactions) {
            const monetaryLoss = Number(tx.remainingSMS) * Number(tx.rateSMS);
            try {
                await this.prisma.$transaction(async (db) => {
                    await db.transaction.update({
                        where: { id: tx.id },
                        data: {
                            status: 'FAILED',
                            remainingSMS: 0,
                        },
                    });
                    await db.tenant.update({
                        where: { id: tx.tenantId },
                        data: {
                            virtualBalance: { decrement: monetaryLoss },
                        },
                    });
                });
            }
            catch (err) {
                this.logger.error(`Failed to expire transaction ${tx.id}: ${err.message}`);
            }
        }
    }
};
exports.TasksTransaction = TasksTransaction;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_MIDNIGHT, {
        timeZone: 'Africa/Tunis'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TasksTransaction.prototype, "handleExpiredSms", null);
exports.TasksTransaction = TasksTransaction = TasksTransaction_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TasksTransaction);
//# sourceMappingURL=tasks.transaction.js.map