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
exports.GroupService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let GroupService = class GroupService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(tenantId, createGroupDto) {
        const exist = await this.prismaService.group.findFirst({
            where: {
                name: createGroupDto.name,
                tenantId: tenantId,
            },
        });
        if (exist)
            throw new common_1.ConflictException('Group already exists');
        return this.prismaService.group.create({
            data: {
                ...createGroupDto,
                tenantId: tenantId,
            },
        });
    }
    async findAll(tenantId) {
        const groups = await this.prismaService.group.findMany({
            where: { tenantId },
            include: {
                _count: {
                    select: {
                        contacts: {
                            where: {
                                error: false,
                                status: 'ACTIVE',
                            },
                        },
                    },
                },
            },
            orderBy: { createdAt: 'desc' }
        });
        return groups.map((group) => ({
            ...group,
            nbContact: group._count.contacts,
            _count: undefined
        }));
    }
    async findOne(tenantId, id) {
        const exist = await this.prismaService.group.findUnique({
            where: { id, tenantId },
            include: {
                contacts: {
                    where: {
                        error: false,
                        status: 'ACTIVE',
                    },
                },
            },
        });
        if (!exist)
            throw new common_1.NotFoundException('Group not found');
        return exist;
    }
    async remove(tenantId, id) {
        await this.findOne(tenantId, id);
        return this.prismaService.group.delete({ where: { id, tenantId } });
    }
    async update(tenantId, id, updateGroupDto) {
        await this.findOne(tenantId, id);
        return this.prismaService.group.update({
            where: { id, tenantId },
            data: {
                ...updateGroupDto,
                tenantId: tenantId,
            },
        });
    }
    async addContact(tenantId, id, idContact) {
        await this.findOne(tenantId, id);
        const contact = await this.prismaService.contact.findUnique({
            where: { id: idContact, tenantId },
        });
        if (!contact)
            throw new common_1.NotFoundException('Contact not found');
        return this.prismaService.group.update({
            where: { id, tenantId },
            data: {
                contacts: {
                    connect: { id: idContact },
                },
                nbContact: {
                    increment: 1,
                },
            },
        });
    }
    async removeContact(tenantId, id, idContact) {
        await this.findOne(tenantId, id);
        const contact = await this.prismaService.contact.findUnique({
            where: { id: idContact, tenantId },
        });
        if (!contact)
            throw new common_1.NotFoundException('Contact not found');
        return this.prismaService.group.update({
            where: { id, tenantId },
            data: {
                contacts: {
                    disconnect: { id: idContact },
                },
                nbContact: { decrement: 1 },
            },
        });
    }
    async removeMany(tenantId, ids) {
        if (!ids || ids.length === 0) {
            throw new Error('No IDs provided');
        }
        return this.prismaService.group.deleteMany({
            where: { id: { in: ids }, tenantId },
        });
    }
    async removeManyContacts(tenantId, groupId, contactIds) {
        if (!Array.isArray(contactIds) || contactIds.length === 0) {
            throw new common_1.BadRequestException('contactIds must be an array');
        }
        await this.findOne(tenantId, groupId);
        const contacts = await this.prismaService.contact.findMany({
            where: {
                id: {
                    in: contactIds,
                },
                tenantId,
            },
        });
        return this.prismaService.group.update({
            where: { id: groupId, tenantId },
            data: {
                contacts: {
                    disconnect: contacts.map((c) => ({ id: c.id })),
                },
                nbContact: {
                    decrement: contacts.length,
                },
            },
        });
    }
};
exports.GroupService = GroupService;
exports.GroupService = GroupService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], GroupService);
//# sourceMappingURL=group.service.js.map