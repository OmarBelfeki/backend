"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const sync_1 = require("csv-parse/sync");
const XLSX = __importStar(require("xlsx"));
const bullmq_1 = require("@nestjs/bullmq");
const bullmq_2 = require("bullmq");
const utils_1 = require("../../../utils");
let ContactService = class ContactService {
    prismaService;
    importQueue;
    constructor(prismaService, importQueue) {
        this.prismaService = prismaService;
        this.importQueue = importQueue;
    }
    async create(tenantId, createContactDto) {
        const { phone, groupId, ...rest } = createContactDto;
        const existingContact = await this.prismaService.contact.findFirst({
            where: {
                phone,
                tenantId,
            },
            include: {
                groups: {
                    where: { id: groupId },
                },
            },
        });
        if (!existingContact) {
            return this.prismaService.contact.create({
                data: {
                    phone,
                    ...rest,
                    tenantId,
                    groups: {
                        connect: { id: groupId },
                    },
                },
            });
        }
        const alreadyInGroup = existingContact.groups.length > 0;
        if (alreadyInGroup) {
            return {
                message: 'Contact already exists in this group',
                contact: existingContact,
            };
        }
        return this.prismaService.contact.update({
            where: { id: existingContact.id },
            data: {
                groups: {
                    connect: { id: groupId },
                },
            },
        });
    }
    async findAll(tenantId) {
        return this.prismaService.contact.findMany({
            where: { tenantId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(tenantId, id) {
        const exist = await this.prismaService.contact.findUnique({
            where: { id, tenantId },
        });
        if (!exist)
            throw new common_1.NotFoundException('Contact not found');
        return exist;
    }
    async update(tenantId, id, updateContactDto) {
        await this.findOne(tenantId, id);
        const normalized = (0, utils_1.normalizePhone)(updateContactDto.phone);
        updateContactDto.error = normalized?.length !== 11;
        return this.prismaService.contact.update({
            where: { id, tenantId },
            data: {
                ...updateContactDto,
                tenantId: tenantId,
            },
        });
    }
    async remove(tenantId, id) {
        await this.findOne(tenantId, id);
        return this.prismaService.contact.delete({ where: { id, tenantId } });
    }
    async blacklist(tenantId, id) {
        const exist = await this.findOne(tenantId, id);
        return this.prismaService.contact.update({
            where: { id, tenantId },
            data: {
                status: exist.status === 'BLACKLISTED' ? 'ACTIVE' : 'BLACKLISTED',
            },
        });
    }
    async uploadFile(tenantId, id, file) {
        await this.findOne(tenantId, id);
        if (!file)
            throw new common_1.BadRequestException('File missing');
        if (file.mimetype === 'text/csv') {
            const content = file.buffer.toString();
            const records = (0, sync_1.parse)(content, {
                columns: true,
                skip_empty_lines: true,
            });
            const normalizeRecords = records
                .map((record) => {
                return {
                    ...record,
                    Mobile: (0, utils_1.normalizePhone)(record.Mobile),
                };
            })
                .filter((record) => record.Mobile !== null);
            const seen = new Set();
            const uniqueRecords = normalizeRecords.filter((record) => {
                if (seen.has(record.Mobile)) {
                    return false;
                }
                seen.add(record.Mobile);
                return true;
            });
            const header = Object.keys(uniqueRecords[0]).join(',');
            const rows = uniqueRecords.map((record) => Object.values(record).join(','));
            const newCsv = [header, ...rows].join('\n');
            return this.prismaService.contact.update({
                where: { tenantId, id },
                data: {
                    customFields: newCsv,
                },
            });
        }
        if (file.mimetype === 'application/vnd.ms-excel') {
            const workbook = XLSX.read(file.buffer, { type: 'buffer' });
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const records = XLSX.utils.sheet_to_json(sheet);
            const normalizeRecords = records
                .map((record) => ({
                ...record,
                Mobile: (0, utils_1.normalizePhone)(record.Mobile),
            }))
                .filter((record) => record.Mobile !== null);
            const seen = new Set();
            const uniqueRecords = normalizeRecords.filter((record) => {
                if (seen.has(record.Mobile))
                    return false;
                seen.add(record.Mobile);
                return true;
            });
            const parsed = JSON.parse(JSON.stringify(uniqueRecords, null, 2));
            const headers = ['Mobile', 'Prenom', 'Nom', 'Param1'];
            const csv = [
                headers.join(','),
                ...parsed.map((row) => headers.map((h) => row[h] ?? '').join(',')),
            ].join('\n');
            return this.prismaService.contact.update({
                where: { tenantId, id },
                data: {
                    customFields: csv,
                },
            });
        }
    }
    async importStatus(tenantId, id) {
        await this.findOne(tenantId, id);
        const fileExists = await this.prismaService.contact.findFirst({
            where: { id, tenantId },
            select: { customFields: true },
        });
        if (!fileExists)
            throw new common_1.NotFoundException('File does not exist');
        console.table(fileExists.customFields);
        return fileExists;
    }
    async removeMany(tenantId, ids) {
        if (!ids || ids.length === 0) {
            throw new Error('No IDs provided');
        }
        return this.prismaService.contact.deleteMany({
            where: { id: { in: ids }, tenantId },
        });
    }
    async import(tenantId, file, dto) {
        const job = await this.importQueue.add('import', {
            tenantId,
            groupId: dto.groupId,
            fileBuffer: file.buffer.toString('base64'),
            originalName: file.originalname,
            mimetype: file.mimetype,
        }, {
            removeOnComplete: true,
            removeOnFail: true,
        });
        return {
            message: 'Import started',
            jobId: job.id,
        };
    }
    async groupContact(tenantId, dto) {
        const { groupName, ids } = dto;
        let group = await this.prismaService.group.findFirst({
            where: {
                name: groupName,
                tenantId,
            },
            include: {
                contacts: true,
            },
        });
        if (!group) {
            group = await this.prismaService.group.create({
                data: {
                    name: groupName,
                    tenantId,
                    contacts: {
                        connect: ids.map((id) => ({ id })),
                    },
                },
                include: { contacts: true },
            });
            return group;
        }
        const existingContactIds = new Set(group.contacts.map((c) => c.id));
        const newIds = ids.filter((id) => !existingContactIds.has(id));
        if (newIds.length > 0) {
            group = await this.prismaService.group.update({
                where: { id: group.id },
                data: {
                    contacts: {
                        connect: newIds.map((id) => ({ id })),
                    },
                },
                include: { contacts: true },
            });
        }
        return group;
    }
    async copyTo(tenantId, dto) {
        const { to, ids, from, groupName } = dto;
        let targetGroup = await this.prismaService.group.findUnique({
            where: { id: to },
            include: { contacts: true },
        });
        if (!targetGroup) {
            if (!groupName)
                throw new Error('Group does not exist. Provide groupName to create it.');
            targetGroup = await this.prismaService.group.create({
                data: {
                    id: to,
                    name: groupName,
                    tenantId,
                    contacts: { connect: ids.map((id) => ({ id })) },
                },
                include: { contacts: true },
            });
            return targetGroup;
        }
        let contactsToAddIds = [];
        if (from) {
            const sourceGroup = await this.prismaService.group.findUnique({
                where: { id: from },
                include: { contacts: { where: { id: { in: ids }, tenantId } } },
            });
            if (!sourceGroup)
                throw new Error('Source group not found');
            const existingTargetIds = new Set(targetGroup.contacts.map((c) => c.id));
            contactsToAddIds = sourceGroup.contacts
                .map((c) => c.id)
                .filter((id) => !existingTargetIds.has(id));
        }
        else {
            const existingTargetIds = new Set(targetGroup.contacts.map((c) => c.id));
            contactsToAddIds = ids.filter((id) => !existingTargetIds.has(id));
        }
        if (contactsToAddIds.length === 0)
            return targetGroup;
        return this.prismaService.group.update({
            where: { id: to },
            data: { contacts: { connect: contactsToAddIds.map((id) => ({ id })) } },
            include: { contacts: true },
        });
    }
    async moveTo(tenantId, dto) {
        const { to, ids, from } = dto;
        if (!ids || ids.length === 0) {
            throw new Error('No contact IDs provided');
        }
        const targetGroup = await this.prismaService.group.findUnique({
            where: { id: to },
            select: { id: true },
        });
        if (!targetGroup) {
            throw new Error('Target group not found');
        }
        if (from) {
            const sourceGroup = await this.prismaService.group.findUnique({
                where: { id: from },
                select: { id: true },
            });
            if (!sourceGroup) {
                throw new Error('Source group not found');
            }
            await this.prismaService.group.update({
                where: { id: from },
                data: {
                    contacts: {
                        disconnect: ids.map((id) => ({ id })),
                    },
                },
            });
        }
        else {
            const groupsWithContacts = await this.prismaService.group.findMany({
                where: {
                    contacts: {
                        some: {
                            id: { in: ids },
                        },
                    },
                },
                select: { id: true },
            });
            await Promise.all(groupsWithContacts.map((group) => this.prismaService.group.update({
                where: { id: group.id },
                data: {
                    contacts: {
                        disconnect: ids.map((id) => ({ id })),
                    },
                },
            })));
        }
        await this.prismaService.group.update({
            where: { id: to },
            data: {
                contacts: {
                    connect: ids.map((id) => ({ id })),
                },
            },
        });
        return this.prismaService.group.findUnique({
            where: { id: to },
            include: { contacts: true },
        });
    }
};
exports.ContactService = ContactService;
exports.ContactService = ContactService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, bullmq_1.InjectQueue)('import-contacts')),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        bullmq_2.Queue])
], ContactService);
//# sourceMappingURL=contact.service.js.map