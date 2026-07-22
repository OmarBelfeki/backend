export interface AuditLogPayload {
    tenantId: string;
    userId?: string;
    action: string;
    resource: string;
    resourceId?: string;
    requestData?: any;
    responseData?: any;
    ipAddress?: string;
    userAgent?: string;
}
