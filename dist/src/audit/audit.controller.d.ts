import { AuditService } from './audit.service';
export declare class AuditController {
    private readonly auditService;
    constructor(auditService: AuditService);
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        userId: string | null;
        action: string;
        resource: string;
        resourceId: string | null;
        requestData: import("@prisma/client/runtime/client").JsonValue | null;
        responseData: import("@prisma/client/runtime/client").JsonValue | null;
        ipAddress: string | null;
        userAgent: string | null;
    }[]>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        userId: string | null;
        action: string;
        resource: string;
        resourceId: string | null;
        requestData: import("@prisma/client/runtime/client").JsonValue | null;
        responseData: import("@prisma/client/runtime/client").JsonValue | null;
        ipAddress: string | null;
        userAgent: string | null;
    }>;
    removeMany(ids: string[]): Promise<import("../generated/prisma/internal/prismaNamespace").BatchPayload>;
}
