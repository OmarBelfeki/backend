"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.JsonNullValueInput = exports.NullableJsonNullValueInput = exports.SortOrder = exports.RatePerSMSScalarFieldEnum = exports.TestProviderScalarFieldEnum = exports.SmtpScalarFieldEnum = exports.AnalyticsScalarFieldEnum = exports.SessionScalarFieldEnum = exports.LegalPagesScalarFieldEnum = exports.SettingProfileScalarFieldEnum = exports.AuditLogScalarFieldEnum = exports.TemplateScalarFieldEnum = exports.OtpScalarFieldEnum = exports.ModuleScalarFieldEnum = exports.NotificationScalarFieldEnum = exports.AIScalarFieldEnum = exports.TransactionScalarFieldEnum = exports.MessageScalarFieldEnum = exports.CampaignScalarFieldEnum = exports.GroupScalarFieldEnum = exports.FileScalarFieldEnum = exports.ContactScalarFieldEnum = exports.SenderIDScalarFieldEnum = exports.UserScalarFieldEnum = exports.TenantScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.4.0",
    engine: "ab56fe763f921d033a6c195e7ddeb3e255bdbb57"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Tenant: 'Tenant',
    User: 'User',
    SenderID: 'SenderID',
    Contact: 'Contact',
    File: 'File',
    Group: 'Group',
    Campaign: 'Campaign',
    Message: 'Message',
    Transaction: 'Transaction',
    AI: 'AI',
    Notification: 'Notification',
    Module: 'Module',
    Otp: 'Otp',
    Template: 'Template',
    AuditLog: 'AuditLog',
    SettingProfile: 'SettingProfile',
    LegalPages: 'LegalPages',
    Session: 'Session',
    Analytics: 'Analytics',
    smtp: 'smtp',
    TestProvider: 'TestProvider',
    RatePerSMS: 'RatePerSMS'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.TenantScalarFieldEnum = {
    id: 'id',
    companyName: 'companyName',
    email: 'email',
    timezone: 'timezone',
    providerApiKey: 'providerApiKey',
    virtualBalance: 'virtualBalance',
    taxId: 'taxId',
    businessSector: 'businessSector',
    phone: 'phone',
    city: 'city',
    postalCode: 'postalCode',
    address: 'address',
    createdAt: 'createdAt'
};
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    isActive: 'isActive',
    isVerified: 'isVerified',
    phone: 'phone',
    lang: 'lang',
    tenantId: 'tenantId',
    hashedRefreshToken: 'hashedRefreshToken',
    lastActiveAt: 'lastActiveAt',
    createdAt: 'createdAt'
};
exports.SenderIDScalarFieldEnum = {
    id: 'id',
    label: 'label',
    status: 'status',
    requestedAt: 'requestedAt',
    tenantId: 'tenantId'
};
exports.ContactScalarFieldEnum = {
    id: 'id',
    phone: 'phone',
    firstName: 'firstName',
    lastName: 'lastName',
    customFields: 'customFields',
    error: 'error',
    status: 'status',
    createdAt: 'createdAt',
    tenantId: 'tenantId'
};
exports.FileScalarFieldEnum = {
    id: 'id',
    filename: 'filename',
    path: 'path',
    mimetype: 'mimetype',
    createdAt: 'createdAt',
    contactId: 'contactId'
};
exports.GroupScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    tenantId: 'tenantId',
    nbContact: 'nbContact',
    createdAt: 'createdAt'
};
exports.CampaignScalarFieldEnum = {
    id: 'id',
    name: 'name',
    type: 'type',
    messageContent: 'messageContent',
    scheduledAt: 'scheduledAt',
    status: 'status',
    totalContacts: 'totalContacts',
    estimatedCost: 'estimatedCost',
    createdAt: 'createdAt',
    isActive: 'isActive',
    tenantId: 'tenantId',
    senderId: 'senderId',
    groupId: 'groupId'
};
exports.MessageScalarFieldEnum = {
    id: 'id',
    phone: 'phone',
    messageBody: 'messageBody',
    providerMsgId: 'providerMsgId',
    error: 'error',
    status: 'status',
    costInCredits: 'costInCredits',
    sentAt: 'sentAt',
    deliveredAt: 'deliveredAt',
    campaignId: 'campaignId',
    type: 'type',
    tenantId: 'tenantId',
    senderId: 'senderId'
};
exports.TransactionScalarFieldEnum = {
    id: 'id',
    amount: 'amount',
    currency: 'currency',
    konnectRef: 'konnectRef',
    nbSMS: 'nbSMS',
    remainingSMS: 'remainingSMS',
    rateSMS: 'rateSMS',
    status: 'status',
    invoiceUrl: 'invoiceUrl',
    createdAt: 'createdAt',
    endAt: 'endAt',
    tenantId: 'tenantId'
};
exports.AIScalarFieldEnum = {
    id: 'id',
    linkSMS: 'linkSMS',
    linkAnti: 'linkAnti',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tenantId: 'tenantId'
};
exports.NotificationScalarFieldEnum = {
    id: 'id',
    title: 'title',
    message: 'message',
    dateTime: 'dateTime',
    type: 'type',
    data: 'data',
    tenantId: 'tenantId',
    createdAt: 'createdAt',
    unread: 'unread',
    sender: 'sender',
    status: 'status',
    to: 'to'
};
exports.ModuleScalarFieldEnum = {
    id: 'id',
    name: 'name',
    logo: 'logo',
    actived: 'actived',
    price: 'price',
    desc: 'desc',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.OtpScalarFieldEnum = {
    userId: 'userId',
    email: 'email',
    phone: 'phone',
    otp: 'otp'
};
exports.TemplateScalarFieldEnum = {
    id: 'id',
    name: 'name',
    template: 'template',
    createdAt: 'createdAt',
    tenantId: 'tenantId'
};
exports.AuditLogScalarFieldEnum = {
    id: 'id',
    tenantId: 'tenantId',
    userId: 'userId',
    action: 'action',
    resource: 'resource',
    resourceId: 'resourceId',
    requestData: 'requestData',
    responseData: 'responseData',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
};
exports.SettingProfileScalarFieldEnum = {
    userId: 'userId',
    username: 'username',
    avatar: 'avatar',
    bio: 'bio',
    urls: 'urls'
};
exports.LegalPagesScalarFieldEnum = {
    id: 'id',
    termsOfService: 'termsOfService',
    privacyPolicy: 'privacyPolicy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SessionScalarFieldEnum = {
    id: 'id',
    visitorId: 'visitorId',
    device: 'device',
    browser: 'browser',
    os: 'os',
    ip: 'ip',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AnalyticsScalarFieldEnum = {
    id: 'id',
    sessionId: 'sessionId',
    page: 'page',
    referrer: 'referrer',
    createdAt: 'createdAt'
};
exports.SmtpScalarFieldEnum = {
    id: 'id',
    host: 'host',
    port: 'port',
    encryption: 'encryption',
    authMethod: 'authMethod',
    username: 'username',
    password: 'password',
    senderName: 'senderName',
    senderEmail: 'senderEmail',
    createAt: 'createAt',
    updateAt: 'updateAt'
};
exports.TestProviderScalarFieldEnum = {
    id: 'id',
    sender: 'sender',
    type: 'type',
    msg: 'msg',
    apiKey: 'apiKey',
    mobileTest: 'mobileTest',
    createAt: 'createAt',
    updateAt: 'updateAt'
};
exports.RatePerSMSScalarFieldEnum = {
    id: 'id',
    ranges: 'ranges',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map