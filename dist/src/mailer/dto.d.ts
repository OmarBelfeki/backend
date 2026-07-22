export interface RecipientDTO {
    name: string;
    email: string;
}
export declare abstract class BaseNotificationDTO {
    tenantId: string;
    correlationId: string;
    recipients: RecipientDTO[];
    timestamp: Date;
    templateLanguage: 'FR';
}
export declare class NewRegistrationDTO extends BaseNotificationDTO {
    company_name: string;
    admin_email: string;
    created_at: string;
    verification_status: string;
    review_link: string;
}
export declare class SenderIdRequestDTO extends BaseNotificationDTO {
    tenant_name: string;
    requested_label: string;
    user_name: string;
    approval_link: string;
}
export declare class AdminPackPurchaseDTO extends BaseNotificationDTO {
    tenant_name: string;
    pack_name: string;
    amount: string;
    payment_ref: string;
    new_balance: string;
}
export declare class ProviderIncidentDTO extends BaseNotificationDTO {
    api_endpoint: string;
    masked_error_code: string;
    impacted_volume: string;
    recommended_action: string;
}
export declare class LargeCampaignAlertDTO extends BaseNotificationDTO {
    tenant_name: string;
    campaign_name: string;
    volume_estimate: number;
    sender_name: string;
    anti_fraud_status: string;
}
export declare class AccountCreditedDTO extends BaseNotificationDTO {
    amount_credited: string;
    new_balance: string;
    transaction_ref: string;
    invoice_url: string;
}
export declare class PaymentFailedDTO extends BaseNotificationDTO {
    amount: string;
    pack_name: string;
    failure_reason: string;
    retry_url: string;
}
export declare class InvoiceGeneratedDTO extends BaseNotificationDTO {
    invoice_number: string;
    amount: string;
    date: string;
    invoice_url: string;
}
export declare class LowBalanceWarningDTO extends BaseNotificationDTO {
    balance: string;
    threshold_limit: string;
    recharge_url: string;
}
export declare class SenderIdStatusUpdateDTO extends BaseNotificationDTO {
    sender_name: string;
    status: 'Approved' | 'Rejected';
    update_date: string;
    usage_instructions: string;
    rejection_reason?: string;
}
export declare class CampaignLaunchedDTO extends BaseNotificationDTO {
    campaign_name: string;
    sender_name: string;
    volume: number;
    estimated_cost: string;
    scheduled_time: string;
}
export declare class CampaignFinishedDTO extends BaseNotificationDTO {
    campaign_name: string;
    total_sent: number;
    total_delivered: number;
    total_failed: number;
    final_cost: string;
    report_url: string;
}
export declare class CampaignBlockedDTO extends BaseNotificationDTO {
    block_reason: string;
    campaign_name: string;
    corrective_action: string;
    recharge_url: string;
}
export declare class AntiFraudAlertDTO extends BaseNotificationDTO {
    campaign_name: string;
    fraud_reason: string;
    risk_level: string;
    moderation_link: string;
}
export declare class SecurityAlertDTO extends BaseNotificationDTO {
    event_type: string;
    created_at: string;
    approx_location: string;
    security_settings_url: string;
}
export declare class DailyDigestDTO extends BaseNotificationDTO {
    date: string;
    campaigns_finished_list: string;
    total_volume_sent: number;
    total_spend: string;
    avg_delivery_rate: string;
}
export declare class WeeklyDigestDTO extends BaseNotificationDTO {
    weekly_credit_consumption: string;
    dlr_trend_percentage: string;
    recharge_recommendation: string;
}
