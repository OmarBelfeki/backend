export declare const TestProviderType: {
    readonly OTP: "OTP";
    readonly RESETPASSWORD: "RESETPASSWORD";
};
export type TestProviderType = (typeof TestProviderType)[keyof typeof TestProviderType];
export declare const AuthMethod: {
    readonly LOGINPASSWORD: "LOGINPASSWORD";
    readonly OAUTH2: "OAUTH2";
    readonly APIKEY: "APIKEY";
};
export type AuthMethod = (typeof AuthMethod)[keyof typeof AuthMethod];
export declare const EncryptionType: {
    readonly NONE: "NONE";
    readonly STARTTLS: "STARTTLS";
    readonly SSLTLS: "SSLTLS";
};
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];
export declare const Role: {
    readonly SUPER_ADMIN: "SUPER_ADMIN";
    readonly ADMIN_CLIENT: "ADMIN_CLIENT";
    readonly OPERATOR: "OPERATOR";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const SenderStatus: {
    readonly PENDING: "PENDING";
    readonly VALIDATED: "VALIDATED";
    readonly BLOCKED: "BLOCKED";
};
export type SenderStatus = (typeof SenderStatus)[keyof typeof SenderStatus];
export declare const ContactStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly BLACKLISTED: "BLACKLISTED";
};
export type ContactStatus = (typeof ContactStatus)[keyof typeof ContactStatus];
export declare const CampaignType: {
    readonly IMMEDIATE: "IMMEDIATE";
    readonly SCHEDULED: "SCHEDULED";
};
export type CampaignType = (typeof CampaignType)[keyof typeof CampaignType];
export declare const CampaignStatus: {
    readonly DRAFT: "DRAFT";
    readonly QUEUED: "QUEUED";
    readonly SENT: "SENT";
    readonly COMPLETED: "COMPLETED";
    readonly FAILED: "FAILED";
};
export type CampaignStatus = (typeof CampaignStatus)[keyof typeof CampaignStatus];
export declare const DlrStatus: {
    readonly DELIVRD: "DELIVRD";
    readonly UNDELIV: "UNDELIV";
    readonly EXPIRED: "EXPIRED";
    readonly REJECTED: "REJECTED";
    readonly UNKNOWN: "UNKNOWN";
};
export type DlrStatus = (typeof DlrStatus)[keyof typeof DlrStatus];
export declare const TransactionStatus: {
    readonly PENDING: "PENDING";
    readonly COMPLETED: "COMPLETED";
    readonly FAILED: "FAILED";
};
export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus];
export declare const ActionType: {
    readonly GENERATE: "GENERATE";
    readonly IMPROVE: "IMPROVE";
    readonly SHORTEN: "SHORTEN";
    readonly TRANSLATE: "TRANSLATE";
    readonly VARIATIONS: "VARIATIONS";
};
export type ActionType = (typeof ActionType)[keyof typeof ActionType];
export declare const NotificationType: {
    readonly SUCCESS: "SUCCESS";
    readonly WARNING: "WARNING";
    readonly INFO: "INFO";
    readonly WRONG: "WRONG";
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
export declare const NotificationStatus: {
    readonly SENT: "SENT";
    readonly RECEIVED: "RECEIVED";
};
export type NotificationStatus = (typeof NotificationStatus)[keyof typeof NotificationStatus];
export declare const MessageType: {
    readonly GROUP: "GROUP";
    readonly SPREADSHEET: "SPREADSHEET";
    readonly SMS: "SMS";
    readonly OTP: "OTP";
    readonly OTHER: "OTHER";
    readonly TEST: "TEST";
};
export type MessageType = (typeof MessageType)[keyof typeof MessageType];
