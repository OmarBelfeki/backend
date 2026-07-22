import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { PrismaService } from '../../../prisma/prisma.service';
export declare class NotificationService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(user: any, createNotificationDto: CreateNotificationDto): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string | null;
        status: import("../../../generated/prisma/enums").NotificationStatus;
        type: import("../../../generated/prisma/enums").NotificationType | null;
        title: string;
        message: string;
        dateTime: Date;
        data: import("@prisma/client/runtime/client").JsonValue | null;
        unread: string | null;
        sender: string | null;
        to: string | null;
    } | {
        message: string;
    }>;
    findAll(user: any): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string | null;
        status: import("../../../generated/prisma/enums").NotificationStatus;
        type: import("../../../generated/prisma/enums").NotificationType | null;
        title: string;
        message: string;
        dateTime: Date;
        data: import("@prisma/client/runtime/client").JsonValue | null;
        unread: string | null;
        sender: string | null;
        to: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string | null;
        status: import("../../../generated/prisma/enums").NotificationStatus;
        type: import("../../../generated/prisma/enums").NotificationType | null;
        title: string;
        message: string;
        dateTime: Date;
        data: import("@prisma/client/runtime/client").JsonValue | null;
        unread: string | null;
        sender: string | null;
        to: string | null;
    }>;
    update(id: string, updateNotificationDto: UpdateNotificationDto): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string | null;
        status: import("../../../generated/prisma/enums").NotificationStatus;
        type: import("../../../generated/prisma/enums").NotificationType | null;
        title: string;
        message: string;
        dateTime: Date;
        data: import("@prisma/client/runtime/client").JsonValue | null;
        unread: string | null;
        sender: string | null;
        to: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string | null;
        status: import("../../../generated/prisma/enums").NotificationStatus;
        type: import("../../../generated/prisma/enums").NotificationType | null;
        title: string;
        message: string;
        dateTime: Date;
        data: import("@prisma/client/runtime/client").JsonValue | null;
        unread: string | null;
        sender: string | null;
        to: string | null;
    }>;
    removeMany(ids: string[]): Promise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    removeNotificationsCompany(tenantId: string): Promise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    removeNotificationsCompanies(tenantIds: string[]): Promise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
}
