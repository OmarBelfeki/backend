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
exports.CampaignService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const message_service_1 = require("../message/message.service");
const queue_service_1 = require("../../../queue/queue.service");
const utils_1 = require("../../../utils");
const mailer_service_1 = require("../../../mailer/mailer.service");
let CampaignService = class CampaignService {
    prismaService;
    messageService;
    queueService;
    mailerService;
    constructor(prismaService, messageService, queueService, mailerService) {
        this.prismaService = prismaService;
        this.messageService = messageService;
        this.queueService = queueService;
        this.mailerService = mailerService;
    }
    async create(tenantId, createCampaignDto) {
        const exist = await this.prismaService.campaign.findFirst({
            where: {
                name: createCampaignDto.name,
                tenantId: tenantId,
            },
        });
        if (exist)
            throw new common_1.ConflictException('Campaign already exists');
        const sender = await this.prismaService.senderID.findUnique({
            where: { id: createCampaignDto.senderId, tenantId: tenantId },
        });
        if (!sender)
            throw new common_1.NotFoundException('Sender not found');
        if (sender.status === 'BLOCKED')
            throw new common_1.BadRequestException('Sender is Blocked you can go with him');
        if (sender.status === 'PENDING')
            throw new common_1.BadRequestException('Sender is Pending to validate bu super admin you can go with him');
        const group = await this.prismaService.group.findUnique({
            where: { id: createCampaignDto.groupId, tenantId: tenantId },
        });
        if (!group)
            throw new common_1.NotFoundException('Group not found');
        if (createCampaignDto.type === 'IMMEDIATE') {
            createCampaignDto.scheduledAt = new Date();
        }
        const scheduledAt = new Date(createCampaignDto.scheduledAt);
        if (createCampaignDto.type === 'SCHEDULED' &&
            (!createCampaignDto.scheduledAt ||
                isNaN(scheduledAt.getTime()) ||
                scheduledAt.getTime() <= Date.now())) {
            throw new common_1.UnprocessableEntityException('should enter scheduled at and should be a future date');
        }
        const smsPerContact = await (0, utils_1.calculateCost)(createCampaignDto.messageContent);
        const totalSmsNeeded = createCampaignDto.totalContacts * smsPerContact;
        const layers = await this.prismaService.transaction.findMany({
            where: { tenantId, status: 'COMPLETED', remainingSMS: { gt: 0 } },
            orderBy: { createdAt: 'asc' },
        });
        const totalAvailable = layers.reduce((acc, curr) => acc + (curr.remainingSMS || 0), 0);
        if (totalAvailable < totalSmsNeeded) {
            throw new common_1.BadRequestException(`Insufficient credits. You need ${totalSmsNeeded} SMS but only have ${totalAvailable} available.`);
        }
        let remainingToCalculate = totalSmsNeeded;
        let estimatedCost = 0;
        for (const layer of layers) {
            if (remainingToCalculate <= 0)
                break;
            const take = Math.min(layer.remainingSMS || 0, remainingToCalculate);
            const rate = Number(layer.rateSMS || 0);
            estimatedCost += take * rate;
            remainingToCalculate -= take;
        }
        return this.prismaService.campaign.create({
            data: {
                ...createCampaignDto,
                tenantId: tenantId,
                estimatedCost: estimatedCost,
            },
        });
    }
    async findAll(tenantId) {
        return this.prismaService.campaign.findMany({
            where: { tenantId: tenantId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(tenantId, id) {
        const exist = await this.prismaService.campaign.findUnique({
            where: { id, tenantId },
        });
        if (!exist)
            throw new common_1.NotFoundException('Campaign not found');
        return exist;
    }
    async update(tenantId, id, updateCampaignDto) {
        await this.findOne(tenantId, id);
        const exist = await this.prismaService.campaign.findFirst({
            where: {
                name: updateCampaignDto.name,
                tenantId: tenantId,
            },
        });
        if (exist && exist.id !== id)
            throw new common_1.ConflictException('Campaign with name : ' + updateCampaignDto.name + ' exists');
        return this.prismaService.campaign.update({
            where: { id, tenantId },
            data: {
                ...updateCampaignDto,
                tenantId: tenantId,
            },
        });
    }
    async remove(tenantId, id) {
        await this.findOne(tenantId, id);
        return this.prismaService.campaign.delete({
            where: { id, tenantId },
        });
    }
    async send2(tenantId, id) {
        const campaign = await this.findOne(tenantId, id);
        const tenant = await this.prismaService.tenant.findUnique({ where: { id: tenantId } });
        if (tenant && tenant.virtualBalance < campaign.estimatedCost) {
            throw new common_1.BadRequestException('Your dont have money');
        }
        const contacts = await this.prismaService.contact.findMany({
            where: {
                groups: {
                    some: { id: campaign.groupId },
                },
            },
        });
        const messages = await Promise.all(contacts.map((contact) => this.prismaService.message.create({
            data: {
                phone: contact.phone,
                messageBody: campaign.messageContent,
                campaignId: campaign.id,
                costInCredits: (Number(campaign.estimatedCost) / Number(campaign.totalContacts)),
                senderId: campaign.senderId,
                tenantId,
                type: 'GROUP'
            },
        })));
        await this.prismaService.tenant.update({
            where: { id: tenantId },
            data: {
                virtualBalance: {
                    decrement: Number(campaign.estimatedCost)
                }
            }
        });
        const sender = await this.prismaService.senderID.findUnique({ where: { id: campaign.senderId } });
        try {
            await this.deductSmsCredits(tenantId, messages.length);
            const jobs = messages.map((msg) => ({
                phone: msg.phone,
                message: msg.messageBody,
                messageId: msg.id,
                senderName: sender?.label || 'Not found',
                cost: campaign.estimatedCost,
                campaignId: campaign.id,
                tenantId,
            }));
            await this.mailerService.sendNotification('campaign-launched', {
                "subject": "Confirmation : Votre campagne est maintenant en ligne",
                "campaign_name": campaign.name,
                "sender_name": sender?.label,
                "volume": jobs.length,
                "estimated_cost": `${campaign.estimatedCost} TND`,
                "scheduled_time": "Now"
            });
            await this.queueService.addBulkSms(jobs);
        }
        catch (error) {
            const user = await this.prismaService.user.findUnique({ where: { id: tenantId, role: 'ADMIN_CLIENT' } });
            await this.mailerService.sendNotification('campaign-blocked', {
                subject: "Urgent : Votre campagne a été mise en pause",
                "block_reason": "Crédits insuffisants pour compléter la livraison",
                "campaign_name": campaign.name,
                "corrective_action": `Veuillez recharger au moins ${campaign.estimatedCost} TND`,
                "recharge_url": `${process.env.FRONTEND}/transaction-detail?id=${tenant?.id}&name=${tenant?.companyName}`
            }, [{ name: 'SMSIng.tn', address: user?.email }]);
        }
        await this.mailerService.sendNotification('campaign-launch', {
            subject: "Alerte administrateur : grande campagne en file d'attente",
            "tenant_name": tenant?.companyName,
            "campaign_name": campaign.name,
            "volume_estimate": campaign.estimatedCost,
            "sender_name": sender?.label,
            "anti_fraud_status": "Verified - Safe"
        });
        return {
            messages: 'Finished',
        };
    }
    async send(tenantId, id) {
        const campaign = await this.findOne(tenantId, id);
        const sender = await this.prismaService.senderID.findUnique({ where: { id: campaign.senderId } });
        const aggregate = await this.prismaService.transaction.aggregate({
            where: { tenantId, status: 'COMPLETED', remainingSMS: { gt: 0 } },
            _sum: { remainingSMS: true }
        });
        const smsPartsPerMessage = await (0, utils_1.calculateCost)(campaign.messageContent);
        const totalCreditsNeeded = campaign.totalContacts * smsPartsPerMessage;
        const totalAvailableSms = aggregate._sum.remainingSMS || 0;
        if (totalAvailableSms < campaign.totalContacts) {
            const user = await this.prismaService.user.findFirst({ where: { tenantId, role: 'ADMIN_CLIENT' } });
            await this.mailerService.sendNotification('campaign-blocked', {
                subject: "Urgent : Votre campagne a été mise en pause",
                "block_reason": "Crédits SMS insuffisants",
                "campaign_name": campaign.name,
                "corrective_action": `Il vous manque ${totalCreditsNeeded} SMS.`,
            }, [{ name: 'SMSIng.tn', address: user?.email }]);
            throw new common_1.BadRequestException('Insufficient SMS credits balance');
        }
        try {
            const r = await this.deductSmsCredits(tenantId, totalCreditsNeeded);
            await this.prismaService.campaign.update({
                where: { id: campaign.id },
                data: {
                    estimatedCost: r.totalCostDeducted,
                    status: 'SENT'
                }
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Credit deduction failed: ' + error.message);
        }
        const contacts = await this.prismaService.contact.findMany({
            where: { groups: { some: { id: campaign.groupId } } },
        });
        const costPerSMS = Number(campaign.estimatedCost) / Number(campaign.totalContacts);
        const messages = await Promise.all(contacts.map((contact) => {
            let personalizedMessage = campaign.messageContent
                .replace(/\[\[firstName\]\]/g, contact.firstName || '')
                .replace(/\[\[lastName\]\]/g, contact.lastName || '');
            console.log(personalizedMessage);
            return this.prismaService.message.create({
                data: {
                    phone: contact.phone,
                    messageBody: personalizedMessage,
                    campaignId: campaign.id,
                    costInCredits: costPerSMS,
                    senderId: campaign.senderId,
                    deliveredAt: new Date(),
                    tenantId,
                    type: 'GROUP'
                },
            });
        }));
        const jobs = messages.map((msg) => ({
            phone: msg.phone,
            message: msg.messageBody,
            messageId: msg.id,
            senderName: sender?.label || 'Not found',
            cost: campaign.estimatedCost,
            campaignId: campaign.id,
            tenantId,
        }));
        await this.queueService.addBulkSms(jobs);
        await this.mailerService.sendNotification('campaign-launched', {
            "subject": "Confirmation : Votre campagne est maintenant en ligne",
            "campaign_name": campaign.name,
            "sender_name": sender?.label,
            "volume": jobs.length,
            "estimated_cost": `${campaign.estimatedCost} TND`,
            "scheduled_time": "Now"
        });
        return { messages: 'Finished' };
    }
    async updateSchedule(tenantId, id, body) {
        await this.findOne(tenantId, id);
        return this.prismaService.campaign.update({
            where: { id, tenantId },
            data: {
                type: 'SCHEDULED',
                scheduledAt: body.scheduledAt,
            },
        });
    }
    async removeMany(ids) {
        if (!ids || ids.length === 0) {
            throw new Error('No IDs provided');
        }
        return this.prismaService.campaign.deleteMany({ where: { id: { in: ids } } });
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
};
exports.CampaignService = CampaignService;
exports.CampaignService = CampaignService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        message_service_1.MessageService,
        queue_service_1.QueueService,
        mailer_service_1.MailerService])
], CampaignService);
//# sourceMappingURL=campaign.service.js.map