export declare enum SenderStatus {
    PENDING = "PENDING",
    VALIDATED = "VALIDATED",
    BLOCKED = "BLOCKED"
}
export declare class CreateSenderDto {
    label: string;
    status: SenderStatus;
    requestedAt: Date;
    tenantId: string;
}
