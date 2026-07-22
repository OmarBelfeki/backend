import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    create(req: any, createContactDto: CreateContactDto): Promise<{
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
    findAll(req: any): Promise<{
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
    findOne(req: any, id: string): Promise<{
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
    update(req: any, id: string, updateContactDto: UpdateContactDto): Promise<{
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
    remove(req: any, id: string): Promise<{
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
    blacklist(req: any, id: string): Promise<{
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
    uploadFile(req: any, id: string, file: Express.Multer.File): Promise<{
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
    importStatus(req: any, id: string): Promise<{
        customFields: string | null;
    }>;
    removeMany(req: any, ids: string[]): Promise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    import(req: any, file: Express.Multer.File, body: any): Promise<{
        message: string;
        jobId: string | undefined;
    }>;
    groupContact(req: any, dto: {
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
    copyTo(req: any, dto: {
        from?: string;
        to: string;
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
    moveTo(req: any, dto: {
        from?: string;
        to: string;
        ids: string[];
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
