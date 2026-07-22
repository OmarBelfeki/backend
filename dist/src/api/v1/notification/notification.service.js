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
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let NotificationService = class NotificationService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(user, createNotificationDto) {
        if (!user.tenantId) {
            user.tenantId = createNotificationDto.tenantId;
        }
        const tenant = await this.prismaService.tenant.findUnique({
            where: { id: user.tenantId },
        });
        if (!tenant)
            throw new common_1.NotFoundException('tenant not found');
        const date = new Date(createNotificationDto.dateTime);
        const now = new Date();
        if (date <= now) {
            return this.prismaService.notification.create({
                data: {
                    ...createNotificationDto,
                    tenantId: user.tenantId,
                    sender: user.email,
                    dateTime: date,
                    createdAt: now,
                },
            });
        }
        else {
            const delay = date.getTime() - now.getTime();
            setTimeout(async () => {
                await this.prismaService.notification.create({
                    data: {
                        ...createNotificationDto,
                        tenantId: user.tenantId,
                        sender: user.email,
                        dateTime: date,
                        createdAt: now,
                    },
                });
            }, delay);
            return { message: 'Notification scheduled' };
        }
    }
    async findAll(user) {
        const conditions = [
            { sender: user.email },
            { to: user.sub },
        ];
        if (user.tenantId) {
            conditions.push({ tenantId: user.tenantId });
        }
        return this.prismaService.notification.findMany({
            where: { OR: conditions },
            orderBy: { createdAt: 'desc' }
        });
    }
    async findOne(id) {
        const exist = await this.prismaService.notification.findUnique({
            where: { id },
        });
        if (!exist)
            throw new common_1.NotFoundException('Notification not found ');
        return exist;
    }
    async update(id, updateNotificationDto) {
        const notification = await this.findOne(id);
        if (updateNotificationDto.dateTime && new Date(updateNotificationDto.dateTime).getTime() < Date.now()) {
            updateNotificationDto.dateTime = notification.dateTime;
        }
        return this.prismaService.notification.update({
            where: { id },
            data: { ...updateNotificationDto },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prismaService.notification.delete({ where: { id } });
    }
    async removeMany(ids) {
        if (!ids || ids.length === 0) {
            throw new Error('No IDs provided');
        }
        return this.prismaService.notification.deleteMany({
            where: { id: { in: ids } },
        });
    }
    async removeNotificationsCompany(tenantId) {
        if (!tenantId) {
            throw new Error('tenantId is required');
        }
        return this.prismaService.notification.deleteMany({
            where: { tenantId },
        });
    }
    async removeNotificationsCompanies(tenantIds) {
        if (!tenantIds) {
            throw new Error('no tenantId is provided');
        }
        return this.prismaService.notification.deleteMany({
            where: { tenantId: { in: tenantIds } },
        });
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NotificationService);
//# sourceMappingURL=notification.service.js.map