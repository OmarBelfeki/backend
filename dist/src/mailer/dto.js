"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeeklyDigestDTO = exports.DailyDigestDTO = exports.SecurityAlertDTO = exports.AntiFraudAlertDTO = exports.CampaignBlockedDTO = exports.CampaignFinishedDTO = exports.CampaignLaunchedDTO = exports.SenderIdStatusUpdateDTO = exports.LowBalanceWarningDTO = exports.InvoiceGeneratedDTO = exports.PaymentFailedDTO = exports.AccountCreditedDTO = exports.LargeCampaignAlertDTO = exports.ProviderIncidentDTO = exports.AdminPackPurchaseDTO = exports.SenderIdRequestDTO = exports.NewRegistrationDTO = exports.BaseNotificationDTO = void 0;
class BaseNotificationDTO {
    tenantId;
    correlationId;
    recipients;
    timestamp = new Date();
    templateLanguage;
}
exports.BaseNotificationDTO = BaseNotificationDTO;
class NewRegistrationDTO extends BaseNotificationDTO {
    company_name;
    admin_email;
    created_at;
    verification_status;
    review_link;
}
exports.NewRegistrationDTO = NewRegistrationDTO;
class SenderIdRequestDTO extends BaseNotificationDTO {
    tenant_name;
    requested_label;
    user_name;
    approval_link;
}
exports.SenderIdRequestDTO = SenderIdRequestDTO;
class AdminPackPurchaseDTO extends BaseNotificationDTO {
    tenant_name;
    pack_name;
    amount;
    payment_ref;
    new_balance;
}
exports.AdminPackPurchaseDTO = AdminPackPurchaseDTO;
class ProviderIncidentDTO extends BaseNotificationDTO {
    api_endpoint;
    masked_error_code;
    impacted_volume;
    recommended_action;
}
exports.ProviderIncidentDTO = ProviderIncidentDTO;
class LargeCampaignAlertDTO extends BaseNotificationDTO {
    tenant_name;
    campaign_name;
    volume_estimate;
    sender_name;
    anti_fraud_status;
}
exports.LargeCampaignAlertDTO = LargeCampaignAlertDTO;
class AccountCreditedDTO extends BaseNotificationDTO {
    amount_credited;
    new_balance;
    transaction_ref;
    invoice_url;
}
exports.AccountCreditedDTO = AccountCreditedDTO;
class PaymentFailedDTO extends BaseNotificationDTO {
    amount;
    pack_name;
    failure_reason;
    retry_url;
}
exports.PaymentFailedDTO = PaymentFailedDTO;
class InvoiceGeneratedDTO extends BaseNotificationDTO {
    invoice_number;
    amount;
    date;
    invoice_url;
}
exports.InvoiceGeneratedDTO = InvoiceGeneratedDTO;
class LowBalanceWarningDTO extends BaseNotificationDTO {
    balance;
    threshold_limit;
    recharge_url;
}
exports.LowBalanceWarningDTO = LowBalanceWarningDTO;
class SenderIdStatusUpdateDTO extends BaseNotificationDTO {
    sender_name;
    status;
    update_date;
    usage_instructions;
    rejection_reason;
}
exports.SenderIdStatusUpdateDTO = SenderIdStatusUpdateDTO;
class CampaignLaunchedDTO extends BaseNotificationDTO {
    campaign_name;
    sender_name;
    volume;
    estimated_cost;
    scheduled_time;
}
exports.CampaignLaunchedDTO = CampaignLaunchedDTO;
class CampaignFinishedDTO extends BaseNotificationDTO {
    campaign_name;
    total_sent;
    total_delivered;
    total_failed;
    final_cost;
    report_url;
}
exports.CampaignFinishedDTO = CampaignFinishedDTO;
class CampaignBlockedDTO extends BaseNotificationDTO {
    block_reason;
    campaign_name;
    corrective_action;
    recharge_url;
}
exports.CampaignBlockedDTO = CampaignBlockedDTO;
class AntiFraudAlertDTO extends BaseNotificationDTO {
    campaign_name;
    fraud_reason;
    risk_level;
    moderation_link;
}
exports.AntiFraudAlertDTO = AntiFraudAlertDTO;
class SecurityAlertDTO extends BaseNotificationDTO {
    event_type;
    created_at;
    approx_location;
    security_settings_url;
}
exports.SecurityAlertDTO = SecurityAlertDTO;
class DailyDigestDTO extends BaseNotificationDTO {
    date;
    campaigns_finished_list;
    total_volume_sent;
    total_spend;
    avg_delivery_rate;
}
exports.DailyDigestDTO = DailyDigestDTO;
class WeeklyDigestDTO extends BaseNotificationDTO {
    weekly_credit_consumption;
    dlr_trend_percentage;
    recharge_recommendation;
}
exports.WeeklyDigestDTO = WeeklyDigestDTO;
//# sourceMappingURL=dto.js.map