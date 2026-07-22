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
exports.ContactsProcessor = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const prisma_service_1 = require("../../prisma/prisma.service");
const common_1 = require("@nestjs/common");
const utils_1 = require("../../utils");
let ContactsProcessor = class ContactsProcessor extends bullmq_1.WorkerHost {
    prismaService;
    constructor(prismaService) {
        super();
        this.prismaService = prismaService;
    }
    async process(job) {
        const { tenantId, fileBuffer, groupId, originalName, mimetype } = job.data;
        const buffer = Buffer.from(fileBuffer, 'base64');
        const fakeFile = {
            buffer,
            originalname: originalName,
            fieldname: 'file',
            encoding: '7bit',
            mimetype,
            size: buffer.length,
            destination: '',
            filename: '',
            path: '',
            stream: null,
        };
        const stats = {
            added: 0,
            errors: 0,
            duplicated: 0,
        };
        const contacts = (0, utils_1.importContacts)(fakeFile);
        if (!Array.isArray(contacts) || contacts.length === 0) {
            throw new common_1.BadRequestException('File is empty or invalid');
        }
        const normalizedContacts = contacts.map((c) => {
            const normalized = (0, utils_1.normalizePhone)(c.MOBILE);
            return {
                original: c,
                phone: normalized,
                isError: normalized?.length !== 11,
            };
        });
        const validPhones = normalizedContacts
            .filter((c) => c.phone)
            .map((c) => c.phone);
        const existingContacts = await this.prismaService.contact.findMany({
            where: {
                phone: { in: validPhones },
                tenantId,
            },
            include: {
                groups: true,
            },
        });
        const existingMap = new Map(existingContacts.map((c) => [c.phone, c]));
        const newContactsData = [];
        const contactsToConnect = [];
        for (const item of normalizedContacts) {
            const c = item.original;
            const existing = item.phone ? existingMap.get(item.phone) : null;
            if (item.isError) {
                stats.errors++;
                newContactsData.push({
                    phone: c.MOBILE,
                    firstName: c.NOM,
                    lastName: c.PRENOM,
                    status: 'ACTIVE',
                    tenantId,
                    createdAt: new Date(),
                    error: true,
                });
                continue;
            }
            if (!existing) {
                stats.added++;
                newContactsData.push({
                    phone: item.phone,
                    firstName: c.NOM,
                    lastName: c.PRENOM,
                    status: 'ACTIVE',
                    tenantId,
                    createdAt: new Date(),
                    error: false,
                });
            }
            else {
                const alreadyInGroup = existing.groups.some((g) => g.id === groupId);
                if (alreadyInGroup) {
                    stats.duplicated++;
                }
                else {
                    contactsToConnect.push(existing.id);
                }
            }
        }
        if (newContactsData.length > 0) {
            await this.prismaService.contact.createMany({
                data: newContactsData,
                skipDuplicates: true,
            });
        }
        const allRelevantContacts = await this.prismaService.contact.findMany({
            where: {
                phone: {
                    in: normalizedContacts.map((c) => c.phone).filter(Boolean),
                },
                tenantId,
            },
            select: { id: true, phone: true },
        });
        const allMap = new Map(allRelevantContacts.map((c) => [c.phone, c.id]));
        const connectIds = new Set();
        for (const item of normalizedContacts) {
            if (!item.phone)
                continue;
            const id = allMap.get(item.phone);
            if (!id)
                continue;
            const existing = existingMap.get(item.phone);
            if (!existing) {
                connectIds.add(id);
            }
            else {
                const alreadyInGroup = existing.groups.some((g) => g.id === groupId);
                if (!alreadyInGroup) {
                    connectIds.add(id);
                }
            }
        }
        if (connectIds.size > 0) {
            const ids = Array.from(connectIds);
            for (let i = 0; i < ids.length; i += 1000) {
                const chunk = ids.slice(i, i + 1000);
                await this.prismaService.group.update({
                    where: { id: groupId },
                    data: {
                        contacts: {
                            connect: chunk.map((id) => ({ id })),
                        },
                    },
                });
            }
        }
        if (stats.errors >= 5)
            await this.prismaService.notification.create({
                data: {
                    title: `${stats.errors} Wrong Number`,
                    message: 'Please this number below and if want download file and fix numbers',
                    type: 'WARNING',
                    data: await normalizedContacts
                        .filter((c) => c.isError)
                        .map((c) => c.original),
                    tenantId: tenantId,
                    sender: 'System',
                    status: 'RECEIVED',
                    to: tenantId,
                },
            });
        return {
            message: 'Successfully',
            stats,
        };
    }
};
exports.ContactsProcessor = ContactsProcessor;
exports.ContactsProcessor = ContactsProcessor = __decorate([
    (0, bullmq_1.Processor)('import-contacts', { concurrency: 5 }),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ContactsProcessor);
//# sourceMappingURL=contacts.processor.js.map