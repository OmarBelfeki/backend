declare enum NotificationType {
    SUCCESS = "SUCCESS",
    WARNING = "WARNING",
    INFO = "INFO",
    WRONG = "WRONG"
}
declare enum NotificationStatus {
    SENT = "SENT",
    RECEIVED = "RECEIVED"
}
export declare class CreateNotificationDto {
    title: string;
    message: string;
    dateTime: Date;
    type: NotificationType;
    status: NotificationStatus;
    sender: string;
    to: string;
    tenantId: string;
}
export {};
