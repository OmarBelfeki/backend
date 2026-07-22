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
exports.ModuleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let ModuleService = class ModuleService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createModuleDto) {
        const exist = await this.prismaService.module.findFirst({
            where: { name: createModuleDto.name }
        });
        if (exist)
            throw new common_1.BadRequestException(`Module already exists`);
        return this.prismaService.module.create({
            data: { ...createModuleDto }
        });
    }
    async findAll() {
        return this.prismaService.module.findMany({
            include: {
                tenants: true
            }
        });
    }
    async findOne(id) {
        const exist = await this.prismaService.module.findUnique({
            where: { id },
            include: { tenants: true }
        });
        if (!exist)
            throw new common_1.NotFoundException();
        return exist;
    }
    async update(id, updateModuleDto) {
        if (updateModuleDto.name) {
            const existing = await this.prismaService.module.findFirst({
                where: { name: updateModuleDto.name },
            });
            if (existing && existing.id !== id) {
                throw new common_1.BadRequestException(`Module with name "${updateModuleDto.name}" already exists.`);
            }
        }
        return this.prismaService.module.update({
            where: { id: id },
            data: updateModuleDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prismaService.module.delete({ where: { id } });
    }
    async bye(dto) {
        const module = await this.findOne(dto.id);
        const now = new Date();
        return await this.prismaService.$transaction(async (tx) => {
            const tenant = await tx.tenant.findUnique({ where: { id: dto.tenantId } });
            if (!tenant || Number(module.price) > Number(tenant.virtualBalance)) {
                throw new common_1.BadRequestException('Solde Insuffisant');
            }
            const hasModule = await tx.module.findFirst({
                where: { id: dto.id, tenants: { some: { id: dto.tenantId } } },
            });
            if (hasModule) {
                throw new common_1.BadRequestException('Vous avez déjà acheté ce module');
            }
            const activeLayers = await tx.transaction.findMany({
                where: {
                    tenantId: dto.tenantId,
                    status: 'COMPLETED',
                    remainingSMS: { gt: 0 },
                    OR: [
                        { endAt: null },
                        { endAt: { gt: now } }
                    ]
                },
                orderBy: { createdAt: 'asc' },
            });
            let debtRemaining = Number(module.price);
            for (const layer of activeLayers) {
                if (debtRemaining <= 0)
                    break;
                const rate = Number(layer.rateSMS);
                const layerValue = Number(layer.remainingSMS) * rate;
                if (layerValue <= debtRemaining) {
                    debtRemaining -= layerValue;
                    await tx.transaction.update({
                        where: { id: layer.id },
                        data: { remainingSMS: 0 },
                    });
                }
                else {
                    const smsToSubtract = Math.ceil(debtRemaining / rate);
                    await tx.transaction.update({
                        where: { id: layer.id },
                        data: { remainingSMS: { decrement: smsToSubtract } },
                    });
                    debtRemaining = 0;
                }
            }
            if (debtRemaining > 0.01) {
                throw new common_1.BadRequestException('Erreur de synchronisation : Pas assez de crédits SMS valides pour cet achat');
            }
            await tx.tenant.update({
                where: { id: dto.tenantId },
                data: {
                    virtualBalance: { decrement: module.price },
                },
            });
            return tx.module.update({
                where: { id: dto.id },
                data: {
                    tenants: {
                        connect: { id: dto.tenantId },
                    },
                },
            });
        });
    }
};
exports.ModuleService = ModuleService;
exports.ModuleService = ModuleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ModuleService);
//# sourceMappingURL=module.service.js.map