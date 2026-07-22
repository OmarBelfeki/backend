"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageType = exports.NotificationStatus = exports.NotificationType = exports.ActionType = exports.TransactionStatus = exports.DlrStatus = exports.CampaignStatus = exports.CampaignType = exports.ContactStatus = exports.SenderStatus = exports.Role = exports.EncryptionType = exports.AuthMethod = exports.TestProviderType = void 0;
exports.TestProviderType = {
    OTP: 'OTP',
    RESETPASSWORD: 'RESETPASSWORD'
};
exports.AuthMethod = {
    LOGINPASSWORD: 'LOGINPASSWORD',
    OAUTH2: 'OAUTH2',
    APIKEY: 'APIKEY'
};
exports.EncryptionType = {
    NONE: 'NONE',
    STARTTLS: 'STARTTLS',
    SSLTLS: 'SSLTLS'
};
exports.Role = {
    SUPER_ADMIN: 'SUPER_ADMIN',
    ADMIN_CLIENT: 'ADMIN_CLIENT',
    OPERATOR: 'OPERATOR'
};
exports.SenderStatus = {
    PENDING: 'PENDING',
    VALIDATED: 'VALIDATED',
    BLOCKED: 'BLOCKED'
};
exports.ContactStatus = {
    ACTIVE: 'ACTIVE',
    BLACKLISTED: 'BLACKLISTED'
};
exports.CampaignType = {
    IMMEDIATE: 'IMMEDIATE',
    SCHEDULED: 'SCHEDULED'
};
exports.CampaignStatus = {
    DRAFT: 'DRAFT',
    QUEUED: 'QUEUED',
    SENT: 'SENT',
    COMPLETED: 'COMPLETED',
    FAILED: 'FAILED'
};
exports.DlrStatus = {
    DELIVRD: 'DELIVRD',
    UNDELIV: 'UNDELIV',
    EXPIRED: 'EXPIRED',
    REJECTED: 'REJECTED',
    UNKNOWN: 'UNKNOWN'
};
exports.TransactionStatus = {
    PENDING: 'PENDING',
    COMPLETED: 'COMPLETED',
    FAILED: 'FAILED'
};
exports.ActionType = {
    GENERATE: 'GENERATE',
    IMPROVE: 'IMPROVE',
    SHORTEN: 'SHORTEN',
    TRANSLATE: 'TRANSLATE',
    VARIATIONS: 'VARIATIONS'
};
exports.NotificationType = {
    SUCCESS: 'SUCCESS',
    WARNING: 'WARNING',
    INFO: 'INFO',
    WRONG: 'WRONG'
};
exports.NotificationStatus = {
    SENT: 'SENT',
    RECEIVED: 'RECEIVED'
};
exports.MessageType = {
    GROUP: 'GROUP',
    SPREADSHEET: 'SPREADSHEET',
    SMS: 'SMS',
    OTP: 'OTP',
    OTHER: 'OTHER',
    TEST: 'TEST'
};
//# sourceMappingURL=enums.js.map