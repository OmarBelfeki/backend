declare enum DlrStatus {
    DELIVRD = "DELIVRD",
    UNDELIV = "UNDELIV",
    EXPIRED = "EXPIRED",
    REJECTED = "REJECTED",
    UNKNOWN = "UNKNOWN"
}
declare enum MessageType {
    GROUP = "GROUP",
    SPREADSHEET = "SPREADSHEET",
    SMS = "SMS"
}
export declare class CreateMessageDto {
    phone: string;
    messageBody: string;
    providerMsgId: string;
    status: DlrStatus;
    type: MessageType;
    costInCredits: number;
    sentAt: Date;
    deliveredAt: Date;
    campaignId: string;
    tenantId: string;
}
export {};
