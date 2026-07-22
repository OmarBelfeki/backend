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
exports.TemplateService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let TemplateService = class TemplateService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(tenantId, createTemplateDto) {
        if (!tenantId) {
            const exist = await this.prismaService.template.findFirst({
                where: { name: createTemplateDto.name },
            });
            if (exist)
                throw new common_1.BadRequestException('template already exists');
            return this.prismaService.template.create({
                data: { ...createTemplateDto },
            });
        }
        const exist = await this.prismaService.template.findFirst({
            where: { name: createTemplateDto.name, tenantId },
        });
        if (exist)
            throw new common_1.BadRequestException('template already exists');
        return this.prismaService.template.create({
            data: { ...createTemplateDto, tenantId: tenantId },
        });
    }
    async findAll(tenantId) {
        return this.prismaService.template.findMany({
            where: { OR: [{ tenantId: tenantId }, { tenantId: null }] },
            orderBy: { createdAt: 'desc' }
        });
    }
    async findOne(tenantId, id) {
        const exist = await this.prismaService.template.findUnique({
            where: { id, tenantId },
        });
        if (!exist)
            throw new common_1.NotFoundException('Template not exists');
        return exist;
    }
    async update(tenantId, id, updateTemplateDto) {
        const template = await this.findOne(tenantId, id);
        if (template.name === updateTemplateDto.name && template.id !== id)
            throw new common_1.BadRequestException('Template Already Exists');
        return this.prismaService.template.update({
            where: { id, tenantId },
            data: { ...updateTemplateDto },
        });
    }
    async remove(tenantId, id) {
        await this.findOne(tenantId, id);
        return this.prismaService.template.delete({ where: { id, tenantId } });
    }
    async removeMany(tenantId, ids) {
        if (!ids || ids.length === 0) {
            throw new Error('No IDs provided');
        }
        return this.prismaService.template.deleteMany({ where: { tenantId, id: { in: ids } } });
    }
};
exports.TemplateService = TemplateService;
exports.TemplateService = TemplateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TemplateService);
//# sourceMappingURL=template.service.js.map