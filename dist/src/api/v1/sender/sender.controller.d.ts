import { SenderService } from './sender.service';
import { CreateSenderDto } from './dto/create-sender.dto';
import { UpdateSenderDto } from './dto/update-sender.dto';
export declare class SenderController {
    private readonly senderService;
    constructor(senderService: SenderService);
    create(req: any, createSenderDto: CreateSenderDto): Promise<{
        id: string;
        tenantId: string;
        label: string;
        status: import("../../../generated/prisma/enums").SenderStatus;
        requestedAt: Date;
    }>;
    findAll(req: any): Promise<{
        id: string;
        tenantId: string;
        label: string;
        status: import("../../../generated/prisma/enums").SenderStatus;
        requestedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        tenantId: string;
        label: string;
        status: import("../../../generated/prisma/enums").SenderStatus;
        requestedAt: Date;
    }>;
    update(req: any, id: string, data: UpdateSenderDto): Promise<{
        id: string;
        tenantId: string;
        label: string;
        status: import("../../../generated/prisma/enums").SenderStatus;
        requestedAt: Date;
    }>;
    approve(id: string): Promise<{
        id: string;
        tenantId: string;
        label: string;
        status: import("../../../generated/prisma/enums").SenderStatus;
        requestedAt: Date;
    }>;
    block(id: string): Promise<{
        id: string;
        tenantId: string;
        label: string;
        status: import("../../../generated/prisma/enums").SenderStatus;
        requestedAt: Date;
    }>;
    remove(req: any, id: string): Promise<{
        id: string;
        tenantId: string;
        label: string;
        status: import("../../../generated/prisma/enums").SenderStatus;
        requestedAt: Date;
    }>;
    removeMany(ids: string[]): Promise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
}
