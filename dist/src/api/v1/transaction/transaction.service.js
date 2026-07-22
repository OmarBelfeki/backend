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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const mailer_service_1 = require("../../../mailer/mailer.service");
const payments_service_1 = require("../payments/payments.service");
let TransactionService = class TransactionService {
    prismaService;
    mailerService;
    payments;
    constructor(prismaService, mailerService, payments) {
        this.prismaService = prismaService;
        this.mailerService = mailerService;
        this.payments = payments;
    }
    async create(user, createTransactionDto) {
        if (!user.tenantId) {
            user.tenantId = createTransactionDto.tenantId;
        }
        const tenant = await this.prismaService.tenant.findUnique({
            where: { id: user.tenantId },
        });
        if (!tenant)
            throw new common_1.NotFoundException('Tenant not found');
        const pay = await this.payments.createPayment({
            amount: Number(createTransactionDto.amount),
            firstName: user.email,
            lastName: '',
            email: user.email,
            phoneNumber: user.phone
        });
        const trans = await this.prismaService.transaction.create({
            data: {
                ...createTransactionDto,
                tenantId: user.tenantId,
                konnectRef: pay.paymentRef
            },
        });
        return { transaction: trans, paymentUrl: pay.payUrl };
    }
    async findAll() {
        return this.prismaService.transaction.findMany({ orderBy: { createdAt: 'desc' } });
    }
    async findOne(id) {
        const exist = await this.prismaService.transaction.findUnique({
            where: { id },
        });
        if (!exist)
            throw new common_1.NotFoundException('Transaction not found');
        return exist;
    }
    async update(user, id, updateTransactionDto) {
        const tran = await this.findOne(id);
        const tenant = await this.prismaService.tenant.findUnique({
            where: { id: tran.tenantId },
        });
        if (user.role === 'SUPER_ADMIN' && tenant && updateTransactionDto.status === 'COMPLETED') {
            const tenantUpdated = await this.prismaService.tenant.update({
                where: { id: tran.tenantId },
                data: {
                    virtualBalance: Number(tenant.virtualBalance) + Number(updateTransactionDto.amount),
                },
            });
            await this.prismaService.transaction.update({
                where: { id: tran.id },
                data: {
                    remainingSMS: tran.nbSMS
                }
            });
            const user = await this.prismaService.user.findFirst({
                where: { tenantId: tran.tenantId, role: 'ADMIN_CLIENT' }
            });
            await this.mailerService.sendNotification('account-credited', {
                "subject": "Succès: votre solde a été mis à jour",
                "amount_credited": `${updateTransactionDto.amount} TND`,
                "new_balance": `${tenantUpdated.virtualBalance} TND`,
                "transaction_ref": updateTransactionDto.konnectRef,
                "invoice_url": updateTransactionDto.invoiceUrl,
            }, [{ name: 'SMSIng.tn', address: user?.email }]);
        }
        if (user.role === 'SUPER_ADMIN' && tenant && updateTransactionDto.status === 'FAILED') {
            const user = await this.prismaService.user.findFirst({
                where: { tenantId: tran.tenantId, role: 'ADMIN_CLIENT' }
            });
            await this.mailerService.sendNotification('payment-failed', {
                "subject": "Action requise: échec de la tentative de paiement",
                "amount": updateTransactionDto.amount,
                "pack_name": "SMS Pack",
                "failure_reason": "Votre carte ne dispose pas des fonds nécessaire",
                "retry_url": `${process.env.FRONTEND}/transaction-detail?id=${tenant.id}&name=${tenant.companyName}`
            }, [{ name: 'SMSIng.tn', address: user?.email }]);
        }
        const pay = await this.payments.createPayment({
            amount: Number(updateTransactionDto.amount),
            firstName: user.email,
            lastName: '',
            email: user.email,
            phoneNumber: user.phone
        });
        const update = await this.prismaService.transaction.update({
            where: { id },
            data: { ...updateTransactionDto, konnectRef: pay.paymentRef },
        });
        return { transaction: update, paymentUrl: pay.payUrl };
    }
    async remove(id) {
        await this.findOne(id);
        return this.prismaService.transaction.delete({
            where: { id },
        });
    }
    async removeMany(ids) {
        if (!ids || ids.length === 0) {
            throw new Error('No IDs provided');
        }
        return this.prismaService.transaction.deleteMany({
            where: { id: { in: ids } },
        });
    }
    async removeTransactionCompany(tenantId) {
        if (!tenantId) {
            throw new Error('tenantId is required');
        }
        return this.prismaService.transaction.deleteMany({
            where: { tenantId },
        });
    }
    async removeTransactionCompanies(tenantIds) {
        if (!tenantIds) {
            throw new Error('no tenantId is provided');
        }
        return this.prismaService.transaction.deleteMany({
            where: { tenantId: { in: tenantIds } },
        });
    }
    async breakdown(tenantId) {
        const now = new Date();
        return this.prismaService.transaction.findMany({
            where: {
                tenantId: tenantId,
                status: 'COMPLETED',
                remainingSMS: { gt: 0 },
                OR: [
                    { endAt: null },
                    { endAt: { gt: now } }
                ]
            },
            select: {
                remainingSMS: true,
                rateSMS: true,
                createdAt: true
            },
            orderBy: {
                createdAt: 'asc'
            }
        });
    }
    async rate(dto) {
        const id = 12345;
        return this.prismaService.ratePerSMS.upsert({
            where: { id: id },
            create: {
                id: id,
                ranges: dto.ranges
            },
            update: {
                ranges: dto.ranges
            }
        });
    }
    async getRate() {
        return this.prismaService.ratePerSMS.findFirst({
            where: { id: 12345 }
        });
    }
};
exports.TransactionService = TransactionService;
exports.TransactionService = TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mailer_service_1.MailerService,
        payments_service_1.PaymentsService])
], TransactionService);
//# sourceMappingURL=transaction.service.js.map