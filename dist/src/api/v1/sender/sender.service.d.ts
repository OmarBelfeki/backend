import { CreateSenderDto } from './dto/create-sender.dto';
import { PrismaService } from '../../../prisma/prisma.service';
import { UpdateSenderDto } from './dto/update-sender.dto';
import { MailerService } from '../../../mailer/mailer.service';
export declare class SenderService {
    private readonly prismaService;
    private readonly mailerService;
    constructor(prismaService: PrismaService, mailerService: MailerService);
    create(tenantId: string, createSenderDto: CreateSenderDto): Promise<{
        id: string;
        tenantId: string;
        label: string;
        status: import("../../../generated/prisma/enums").SenderStatus;
        requestedAt: Date;
    }>;
    findAll(user: any): Promise<{
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
    update(tenantId: string, id: string, data: UpdateSenderDto): Promise<{
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
    remove(tenantId: string, id: string): Promise<{
        id: string;
        tenantId: string;
        label: string;
        status: import("../../../generated/prisma/enums").SenderStatus;
        requestedAt: Date;
    }>;
    removeMany(ids: string[]): Promise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
}
