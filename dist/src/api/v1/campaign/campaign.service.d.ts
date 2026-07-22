import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { PrismaService } from '../../../prisma/prisma.service';
import { MessageService } from '../message/message.service';
import { QueueService } from '../../../queue/queue.service';
import { UpdateCampaignScheduleDto } from './dto/update-campaign-schedule.dto';
import { MailerService } from '../../../mailer/mailer.service';
export declare class CampaignService {
    private readonly prismaService;
    private readonly messageService;
    private readonly queueService;
    private readonly mailerService;
    constructor(prismaService: PrismaService, messageService: MessageService, queueService: QueueService, mailerService: MailerService);
    create(tenantId: string, createCampaignDto: CreateCampaignDto): Promise<{
        id: string;
        createdAt: Date;
        isActive: boolean | null;
        tenantId: string;
        status: import("../../../generated/prisma/enums").CampaignStatus;
        name: string;
        type: import("../../../generated/prisma/enums").CampaignType;
        messageContent: string;
        scheduledAt: Date | null;
        totalContacts: number;
        estimatedCost: import("@prisma/client-runtime-utils").Decimal;
        senderId: string;
        groupId: string | null;
    }>;
    findAll(tenantId: string): Promise<{
        id: string;
        createdAt: Date;
        isActive: boolean | null;
        tenantId: string;
        status: import("../../../generated/prisma/enums").CampaignStatus;
        name: string;
        type: import("../../../generated/prisma/enums").CampaignType;
        messageContent: string;
        scheduledAt: Date | null;
        totalContacts: number;
        estimatedCost: import("@prisma/client-runtime-utils").Decimal;
        senderId: string;
        groupId: string | null;
    }[]>;
    findOne(tenantId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        isActive: boolean | null;
        tenantId: string;
        status: import("../../../generated/prisma/enums").CampaignStatus;
        name: string;
        type: import("../../../generated/prisma/enums").CampaignType;
        messageContent: string;
        scheduledAt: Date | null;
        totalContacts: number;
        estimatedCost: import("@prisma/client-runtime-utils").Decimal;
        senderId: string;
        groupId: string | null;
    }>;
    update(tenantId: string, id: string, updateCampaignDto: UpdateCampaignDto): Promise<{
        id: string;
        createdAt: Date;
        isActive: boolean | null;
        tenantId: string;
        status: import("../../../generated/prisma/enums").CampaignStatus;
        name: string;
        type: import("../../../generated/prisma/enums").CampaignType;
        messageContent: string;
        scheduledAt: Date | null;
        totalContacts: number;
        estimatedCost: import("@prisma/client-runtime-utils").Decimal;
        senderId: string;
        groupId: string | null;
    }>;
    remove(tenantId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        isActive: boolean | null;
        tenantId: string;
        status: import("../../../generated/prisma/enums").CampaignStatus;
        name: string;
        type: import("../../../generated/prisma/enums").CampaignType;
        messageContent: string;
        scheduledAt: Date | null;
        totalContacts: number;
        estimatedCost: import("@prisma/client-runtime-utils").Decimal;
        senderId: string;
        groupId: string | null;
    }>;
    send2(tenantId: string, id: string): Promise<{
        messages: string;
    }>;
    send(tenantId: string, id: string): Promise<{
        messages: string;
    }>;
    updateSchedule(tenantId: string, id: string, body: UpdateCampaignScheduleDto): Promise<{
        id: string;
        createdAt: Date;
        isActive: boolean | null;
        tenantId: string;
        status: import("../../../generated/prisma/enums").CampaignStatus;
        name: string;
        type: import("../../../generated/prisma/enums").CampaignType;
        messageContent: string;
        scheduledAt: Date | null;
        totalContacts: number;
        estimatedCost: import("@prisma/client-runtime-utils").Decimal;
        senderId: string;
        groupId: string | null;
    }>;
    removeMany(ids: string[]): Promise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    deductSmsCredits(tenantId: string, smsCountNeeded: number): Promise<{
        success: boolean;
        totalCostDeducted: number;
    }>;
}
