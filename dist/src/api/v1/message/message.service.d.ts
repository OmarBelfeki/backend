import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { PrismaService } from '../../../prisma/prisma.service';
import { MessageType } from '../../../generated/prisma/enums';
import { CreateMessageFDto } from './dto/create-message-f.dto';
import { Queue } from 'bullmq';
export declare class MessageService {
    private readonly prismaService;
    private readonly importQueue;
    private readonly dlrQueue;
    private readonly ResendQueue;
    constructor(prismaService: PrismaService, importQueue: Queue, dlrQueue: Queue, ResendQueue: Queue);
    afterSmsSent(message: any): Promise<void>;
    create(createMessageDto: CreateMessageDto): Promise<{
        id: string;
        phone: string;
        tenantId: string | null;
        status: import("../../../generated/prisma/enums").DlrStatus | null;
        error: boolean;
        type: MessageType | null;
        senderId: string | null;
        messageBody: string;
        providerMsgId: string | null;
        costInCredits: import("@prisma/client-runtime-utils").Decimal | null;
        sentAt: Date | null;
        deliveredAt: Date | null;
        campaignId: string | null;
    }>;
    createSMS(tenantId: string, createMessageDto: CreateMessageDto): Promise<{
        message: string;
    }>;
    createSpreadsheet(tenantId: string, file: Express.Multer.File, createMessageDto: CreateMessageFDto): Promise<{
        message: string;
        jobId: string | undefined;
    }>;
    findByCampaign(campaignId: string): Promise<{
        id: string;
        phone: string;
        tenantId: string | null;
        status: import("../../../generated/prisma/enums").DlrStatus | null;
        error: boolean;
        type: MessageType | null;
        senderId: string | null;
        messageBody: string;
        providerMsgId: string | null;
        costInCredits: import("@prisma/client-runtime-utils").Decimal | null;
        sentAt: Date | null;
        deliveredAt: Date | null;
        campaignId: string | null;
    }[]>;
    findAll(): Promise<{
        id: string;
        phone: string;
        tenantId: string | null;
        status: import("../../../generated/prisma/enums").DlrStatus | null;
        error: boolean;
        type: MessageType | null;
        senderId: string | null;
        messageBody: string;
        providerMsgId: string | null;
        costInCredits: import("@prisma/client-runtime-utils").Decimal | null;
        sentAt: Date | null;
        deliveredAt: Date | null;
        campaignId: string | null;
    }[]>;
    findByType(tenantId: string, type: MessageType): Promise<{
        id: string;
        phone: string;
        tenantId: string | null;
        status: import("../../../generated/prisma/enums").DlrStatus | null;
        error: boolean;
        type: MessageType | null;
        senderId: string | null;
        messageBody: string;
        providerMsgId: string | null;
        costInCredits: import("@prisma/client-runtime-utils").Decimal | null;
        sentAt: Date | null;
        deliveredAt: Date | null;
        campaignId: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        phone: string;
        tenantId: string | null;
        status: import("../../../generated/prisma/enums").DlrStatus | null;
        error: boolean;
        type: MessageType | null;
        senderId: string | null;
        messageBody: string;
        providerMsgId: string | null;
        costInCredits: import("@prisma/client-runtime-utils").Decimal | null;
        sentAt: Date | null;
        deliveredAt: Date | null;
        campaignId: string | null;
    }>;
    update(id: string, updateMessageDto: UpdateMessageDto): Promise<{
        id: string;
        phone: string;
        tenantId: string | null;
        status: import("../../../generated/prisma/enums").DlrStatus | null;
        error: boolean;
        type: MessageType | null;
        senderId: string | null;
        messageBody: string;
        providerMsgId: string | null;
        costInCredits: import("@prisma/client-runtime-utils").Decimal | null;
        sentAt: Date | null;
        deliveredAt: Date | null;
        campaignId: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        phone: string;
        tenantId: string | null;
        status: import("../../../generated/prisma/enums").DlrStatus | null;
        error: boolean;
        type: MessageType | null;
        senderId: string | null;
        messageBody: string;
        providerMsgId: string | null;
        costInCredits: import("@prisma/client-runtime-utils").Decimal | null;
        sentAt: Date | null;
        deliveredAt: Date | null;
        campaignId: string | null;
    }>;
    removeMany(ids: string[]): Promise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    resendSMS(tenantId: string, ids: string[]): Promise<{
        message: string;
    }>;
    deductSmsCredits(tenantId: string, smsCountNeeded: number): Promise<{
        success: boolean;
        totalCostDeducted: number;
    }>;
    sendMessage(messageId: string): Promise<{
        success: boolean;
        code: any;
        message: any;
        providerMessage: any;
        providerMessageId: any;
    } | {
        success: boolean;
        message: any;
        code?: undefined;
        providerMessage?: undefined;
        providerMessageId?: undefined;
    }>;
}
export declare function createSampleMessages(prismaService: any, tenantId: string, senderId: string): Promise<void>;
