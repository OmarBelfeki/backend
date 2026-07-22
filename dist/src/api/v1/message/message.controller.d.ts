import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { MessageType } from '../../../generated/prisma/enums';
import { CreateMessageFDto } from './dto/create-message-f.dto';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
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
    createSMS(req: any, createMessageDto: CreateMessageDto): Promise<{
        message: string;
    }>;
    createSpreadsheet(req: any, file: Express.Multer.File, createMessageDto: CreateMessageFDto): Promise<{
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
    findByType(req: any, type: MessageType): Promise<{
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
    resendSMS(req: any, ids: string[]): Promise<{
        message: string;
    }>;
}
