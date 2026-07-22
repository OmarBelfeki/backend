declare enum ContactStatus {
    ACTIVE = "ACTIVE",
    BLACKLISTED = "BLACKLISTED"
}
export declare class CreateContactDto {
    phone: string;
    firstName: string;
    lastName: string;
    customFields: string;
    status: ContactStatus;
    tenantId: string;
    groupId: string;
    error: boolean;
}
export {};
