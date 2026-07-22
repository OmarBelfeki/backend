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
exports.SenderService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const role_enum_1 = require("../role/role.enum");
const mailer_service_1 = require("../../../mailer/mailer.service");
let SenderService = class SenderService {
    prismaService;
    mailerService;
    constructor(prismaService, mailerService) {
        this.prismaService = prismaService;
        this.mailerService = mailerService;
    }
    async create(tenantId, createSenderDto) {
        if (!tenantId)
            tenantId = createSenderDto.tenantId;
        const exist = await this.prismaService.senderID.findFirst({
            where: { label: createSenderDto.label, tenantId },
        });
        if (exist)
            throw new common_1.BadRequestException('Sender already exists');
        if (new Date(createSenderDto.requestedAt).getTime() <= Date.now())
            createSenderDto.requestedAt = new Date();
        const tenant = await this.prismaService.tenant.findUnique({ where: { id: tenantId } });
        const user = await this.prismaService.user.findFirst({ where: { tenantId, role: 'ADMIN_CLIENT' } });
        await this.mailerService.sendNotification("sender-request", {
            "subject": "Alerte administrateur : Nouvelle demande d'identifiant d'expéditeur",
            "tenant_name": tenant?.companyName,
            "requested_label": createSenderDto.label,
            "user_name": user?.email,
            "approval_link": `${process.env.FRONTEND}/senders`,
        });
        return this.prismaService.senderID.create({
            data: {
                ...createSenderDto,
                tenantId: tenantId,
            },
        });
    }
    async findAll(user) {
        if (user.role === role_enum_1.Role.SUPER_ADMIN)
            return this.prismaService.senderID.findMany({ orderBy: { requestedAt: 'desc' } });
        return this.prismaService.senderID.findMany({
            where: { tenantId: user.tenantId }, orderBy: { requestedAt: 'desc' }
        });
    }
    async findOne(id) {
        const exist = await this.prismaService.senderID.findUnique({
            where: { id },
        });
        if (!exist)
            throw new common_1.NotFoundException('Sender not exists');
        return exist;
    }
    async update(tenantId, id, data) {
        await this.findOne(id);
        const sender = await this.prismaService.senderID.findFirst({ where: { label: data.label, tenantId } });
        if (sender && sender.id !== id) {
            throw new common_1.BadRequestException('Sender already exists');
        }
        if (sender && data.requestedAt && new Date(data.requestedAt).getTime() <= new Date(sender.requestedAt).getTime())
            data.requestedAt = sender.requestedAt;
        return this.prismaService.senderID.update({
            where: { id, tenantId },
            data: { ...data },
        });
    }
    async approve(id) {
        const sender = await this.findOne(id);
        const user = await this.prismaService.user.findFirst({
            where: { tenantId: sender.tenantId, role: 'ADMIN_CLIENT' }
        });
        await this.prismaService.notification.create({
            data: {
                title: 'Mise à jour : le statut de votre demande d\'identifiant d\'expéditeur',
                message: 'sender Approved',
                to: user?.id,
                sender: 'System',
                status: 'RECEIVED'
            }
        });
        await this.mailerService.sendNotification('sender-status', {
            subject: "Mise à jour : le statut de votre demande d'identifiant d'expéditeur",
            sender_name: sender?.label,
            status: "Approved",
            update_date: new Date().toLocaleDateString('fr-FR'),
            usage_instructions: "Vous pouvez maintenant sélectionner cet ID dans le créateur de campagne.",
            rejection_reason: "N/A"
        }, [
            { name: "", address: user?.email }
        ]);
        return this.prismaService.senderID.update({
            where: { id },
            data: { status: 'VALIDATED' },
        });
    }
    async block(id) {
        const sender = await this.findOne(id);
        const user = await this.prismaService.user.findFirst({
            where: { tenantId: sender.tenantId, role: 'ADMIN_CLIENT' }
        });
        await this.mailerService.sendNotification('sender-status', {
            subject: "Mise à jour Sender ID : Demande Refusée",
            sender_name: sender?.label,
            status: "Refusé",
            update_date: new Date().toLocaleDateString('fr-FR'),
            usage_instructions: "Veuillez mettre à jour votre profil avec les documents valides et réessayer.",
            rejection_reason: "Preuve de propriété de la marque manquante ou invalide."
        }, [
            { name: "", address: user?.email }
        ]);
        return this.prismaService.senderID.update({
            where: { id },
            data: { status: 'BLOCKED' },
        });
    }
    async remove(tenantId, id) {
        await this.findOne(id);
        return this.prismaService.senderID.delete({ where: { id, tenantId } });
    }
    async removeMany(ids) {
        if (!ids || ids.length === 0) {
            throw new Error('No IDs provided');
        }
        return this.prismaService.senderID.deleteMany({ where: { id: { in: ids } } });
    }
};
exports.SenderService = SenderService;
exports.SenderService = SenderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mailer_service_1.MailerService])
], SenderService);
//# sourceMappingURL=sender.service.js.map