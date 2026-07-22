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
exports.TenantService = void 0;
const common_1 = require("@nestjs/common");
const create_tenant_dto_1 = require("./dto/create-tenant.dto");
const prisma_service_1 = require("../../../prisma/prisma.service");
let TenantService = class TenantService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(req, createTenantDto) {
        const exist = await this.prisma.tenant.findFirst({
            where: {
                email: createTenantDto.email,
            },
        });
        if (exist)
            throw new common_1.ConflictException('Tenant already exists');
        return this.prisma.tenant.create({
            data: {
                ...createTenantDto,
            },
        });
    }
    async findAll() {
        return this.prisma.tenant.findMany({ orderBy: { createdAt: 'desc' } });
    }
    async findOne(id) {
        const exist = await this.prisma.tenant.findFirst({ where: { id: id } });
        if (!exist)
            throw new common_1.NotFoundException('Tenant not found');
        return exist;
    }
    async update(id, updateTenantDto) {
        await this.findOne(id);
        const tenant = await this.prisma.tenant.findFirst({
            where: { email: updateTenantDto.email },
        });
        if (tenant && tenant.email === updateTenantDto.email && id != tenant.id) {
            throw new common_1.BadRequestException('Tenant already exists');
        }
        return this.prisma.tenant.update({
            where: { id },
            data: {
                ...updateTenantDto,
            },
        });
    }
    async remove(id) {
        return this.prisma.tenant.delete({ where: { id: id } });
    }
    async updateStatus(id) {
        const exist = await this.prisma.user.findUnique({ where: { id } });
        if (!exist)
            throw new common_1.NotFoundException('user not found');
        return this.prisma.user.update({
            where: { id },
            data: { isActive: exist.isActive === 'yes' ? 'no' : 'yes' },
        });
    }
    async removeMany(ids) {
        if (!ids || ids.length === 0) {
            throw new Error('No IDs provided');
        }
        return this.prisma.tenant.deleteMany({ where: { id: { in: ids } } });
    }
};
exports.TenantService = TenantService;
__decorate([
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_tenant_dto_1.CreateTenantDto]),
    __metadata("design:returntype", Promise)
], TenantService.prototype, "create", null);
exports.TenantService = TenantService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TenantService);
//# sourceMappingURL=tenant.service.js.map