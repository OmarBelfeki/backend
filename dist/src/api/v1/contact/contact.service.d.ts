import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from '../../../prisma/prisma.service';
import { Queue } from 'bullmq';
export declare class ContactService {
    private readonly prismaService;
    private readonly importQueue;
    constructor(prismaService: PrismaService, importQueue: Queue);
    create(tenantId: string, createContactDto: CreateContactDto): Promise<{
        id: string;
        phone: string;
        createdAt: Date;
        tenantId: string;
        status: import("../../../generated/prisma/enums").ContactStatus | null;
        firstName: string | null;
        lastName: string | null;
        customFields: string | null;
        error: boolean;
    } | {
        message: string;
        contact: {
            groups: {
                id: string;
                createdAt: Date;
                tenantId: string;
                name: string;
                description: string | null;
                nbContact: number | null;
            }[];
        } & {
            id: string;
            phone: string;
            createdAt: Date;
            tenantId: string;
            status: import("../../../generated/prisma/enums").ContactStatus | null;
            firstName: string | null;
            lastName: string | null;
            customFields: string | null;
            error: boolean;
        };
    }>;
    findAll(tenantId: string): Promise<{
        id: string;
        phone: string;
        createdAt: Date;
        tenantId: string;
        status: import("../../../generated/prisma/enums").ContactStatus | null;
        firstName: string | null;
        lastName: string | null;
        customFields: string | null;
        error: boolean;
    }[]>;
    findOne(tenantId: string, id: string): Promise<{
        id: string;
        phone: string;
        createdAt: Date;
        tenantId: string;
        status: import("../../../generated/prisma/enums").ContactStatus | null;
        firstName: string | null;
        lastName: string | null;
        customFields: string | null;
        error: boolean;
    }>;
    update(tenantId: string, id: string, updateContactDto: UpdateContactDto): Promise<{
        id: string;
        phone: string;
        createdAt: Date;
        tenantId: string;
        status: import("../../../generated/prisma/enums").ContactStatus | null;
        firstName: string | null;
        lastName: string | null;
        customFields: string | null;
        error: boolean;
    }>;
    remove(tenantId: string, id: string): Promise<{
        id: string;
        phone: string;
        createdAt: Date;
        tenantId: string;
        status: import("../../../generated/prisma/enums").ContactStatus | null;
        firstName: string | null;
        lastName: string | null;
        customFields: string | null;
        error: boolean;
    }>;
    blacklist(tenantId: string, id: string): Promise<{
        id: string;
        phone: string;
        createdAt: Date;
        tenantId: string;
        status: import("../../../generated/prisma/enums").ContactStatus | null;
        firstName: string | null;
        lastName: string | null;
        customFields: string | null;
        error: boolean;
    }>;
    uploadFile(tenantId: string, id: string, file: Express.Multer.File): Promise<{
        id: string;
        phone: string;
        createdAt: Date;
        tenantId: string;
        status: import("../../../generated/prisma/enums").ContactStatus | null;
        firstName: string | null;
        lastName: string | null;
        customFields: string | null;
        error: boolean;
    } | undefined>;
    importStatus(tenantId: string, id: string): Promise<{
        customFields: string | null;
    }>;
    removeMany(tenantId: string, ids: string[]): Promise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    import(tenantId: string, file: Express.Multer.File, dto: any): Promise<{
        message: string;
        jobId: string | undefined;
    }>;
    groupContact(tenantId: string, dto: {
        groupName: string;
        ids: string[];
    }): Promise<{
        contacts: {
            id: string;
            phone: string;
            createdAt: Date;
            tenantId: string;
            status: import("../../../generated/prisma/enums").ContactStatus | null;
            firstName: string | null;
            lastName: string | null;
            customFields: string | null;
            error: boolean;
        }[];
    } & {
        id: string;
        createdAt: Date;
        tenantId: string;
        name: string;
        description: string | null;
        nbContact: number | null;
    }>;
    copyTo(tenantId: string, dto: {
        to: string;
        ids: string[];
        from?: string;
        groupName?: string;
    }): Promise<{
        contacts: {
            id: string;
            phone: string;
            createdAt: Date;
            tenantId: string;
            status: import("../../../generated/prisma/enums").ContactStatus | null;
            firstName: string | null;
            lastName: string | null;
            customFields: string | null;
            error: boolean;
        }[];
    } & {
        id: string;
        createdAt: Date;
        tenantId: string;
        name: string;
        description: string | null;
        nbContact: number | null;
    }>;
    moveTo(tenantId: string, dto: {
        to: string;
        ids: string[];
        from?: string;
    }): Promise<({
        contacts: {
            id: string;
            phone: string;
            createdAt: Date;
            tenantId: string;
            status: import("../../../generated/prisma/enums").ContactStatus | null;
            firstName: string | null;
            lastName: string | null;
            customFields: string | null;
            error: boolean;
        }[];
    } & {
        id: string;
        createdAt: Date;
        tenantId: string;
        name: string;
        description: string | null;
        nbContact: number | null;
    }) | null>;
}
