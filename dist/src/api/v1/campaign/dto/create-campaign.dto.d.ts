declare enum CampaignType {
    IMMEDIATE = "IMMEDIATE",
    SCHEDULED = "SCHEDULED"
}
declare enum CampaignStatus {
    DRAFT = "DRAFT",
    QUEUED = "QUEUED",
    SENT = "SENT",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED"
}
export declare class CreateCampaignDto {
    name: string;
    type: CampaignType;
    messageContent: string;
    scheduledAt: Date;
    status: CampaignStatus;
    totalContacts: number;
    estimatedCost: number;
    tenantId: string;
    senderId: string;
    groupId: string;
}
export {};
