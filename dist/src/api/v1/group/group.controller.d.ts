import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
export declare class GroupController {
    private readonly groupService;
    constructor(groupService: GroupService);
    create(req: any, createGroupDto: CreateGroupDto): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        name: string;
        description: string | null;
        nbContact: number | null;
    }>;
    findAll(req: any): Promise<{
        nbContact: number;
        _count: undefined;
        id: string;
        createdAt: Date;
        tenantId: string;
        name: string;
        description: string | null;
    }[]>;
    findOne(req: any, id: string): Promise<{
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
    update(req: any, id: string, updateGroupDto: UpdateGroupDto): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        name: string;
        description: string | null;
        nbContact: number | null;
    }>;
    remove(req: any, id: string): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        name: string;
        description: string | null;
        nbContact: number | null;
    }>;
    addContact(req: any, id: string, idContact: string): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        name: string;
        description: string | null;
        nbContact: number | null;
    }>;
    removeContact(req: any, id: string, idContact: string): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        name: string;
        description: string | null;
        nbContact: number | null;
    }>;
    removeMany(req: any, ids: string[]): Promise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    removeManyContacts(req: any, id: string, contactIds: string[]): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        name: string;
        description: string | null;
        nbContact: number | null;
    }>;
}
