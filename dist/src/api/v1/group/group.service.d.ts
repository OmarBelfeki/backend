import { CreateGroupDto } from './dto/create-group.dto';
import { PrismaService } from '../../../prisma/prisma.service';
import { UpdateGroupDto } from './dto/update-group.dto';
export declare class GroupService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(tenantId: string, createGroupDto: CreateGroupDto): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        name: string;
        description: string | null;
        nbContact: number | null;
    }>;
    findAll(tenantId: string): Promise<{
        nbContact: number;
        _count: undefined;
        id: string;
        createdAt: Date;
        tenantId: string;
        name: string;
        description: string | null;
    }[]>;
    findOne(tenantId: string, id: string): Promise<{
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
    remove(tenantId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        name: string;
        description: string | null;
        nbContact: number | null;
    }>;
    update(tenantId: string, id: string, updateGroupDto: UpdateGroupDto): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        name: string;
        description: string | null;
        nbContact: number | null;
    }>;
    addContact(tenantId: string, id: string, idContact: string): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        name: string;
        description: string | null;
        nbContact: number | null;
    }>;
    removeContact(tenantId: string, id: string, idContact: string): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        name: string;
        description: string | null;
        nbContact: number | null;
    }>;
    removeMany(tenantId: string, ids: string[]): Promise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    removeManyContacts(tenantId: string, groupId: string, contactIds: string[]): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        name: string;
        description: string | null;
        nbContact: number | null;
    }>;
}
