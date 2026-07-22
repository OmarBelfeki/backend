"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailerController = void 0;
const common_1 = require("@nestjs/common");
const mailer_service_1 = require("./mailer.service");
const sender_request_1 = require("./templates/administration-templates/sender-request");
const sales_alert_1 = require("./templates/administration-templates/sales-alert");
const provider_api_1 = require("./templates/administration-templates/provider-api");
const campaign_launch_1 = require("./templates/administration-templates/campaign-launch");
const account_credited_1 = require("./templates/user-financial-templates/account-credited");
const critical_balance_warning_1 = require("./templates/user-financial-templates/critical-balance-warning");
const invoice_generated_1 = require("./templates/user-financial-templates/invoice-generated");
const payment_failed_1 = require("./templates/user-financial-templates/payment-failed");
const campaign_launched_1 = require("./templates/campaign-status-template/campaign-launched");
const campaign_blocked_1 = require("./templates/campaign-status-template/campaign-blocked");
const campaign_finished_1 = require("./templates/campaign-status-template/campaign-finished");
const sender_id_status_1 = require("./templates/campaign-status-template/sender-id-status");
const anti_fraud_alert_1 = require("./templates/security-digest_templates/anti-fraud-alert");
const daily_digest_1 = require("./templates/security-digest_templates/daily-digest");
const user_security_alert_1 = require("./templates/security-digest_templates/user-security-alert");
const weekly_digest_1 = require("./templates/security-digest_templates/weekly-digest");
let MailerController = class MailerController {
    mailerService;
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async sendEmail(body) {
        const templateMap = {
            'sender-request': sender_request_1.senderRequest,
            'sales-alert': sales_alert_1.salesAlert,
            'provider-api': provider_api_1.providerApi,
            'campaign-launch': campaign_launch_1.campaignLaunch,
            'account-credited': account_credited_1.accountCredited,
            'balance-warning': critical_balance_warning_1.criticalBalanceWarning,
            'invoice-generated': invoice_generated_1.invoiceGenerated,
            'payment-failed': payment_failed_1.paymentFailed,
            'campaign-launched': campaign_launched_1.campaignLaunched,
            'campaign-blocked': campaign_blocked_1.campaignBlocked,
            'campaign-finished': campaign_finished_1.campaignFinished,
            'sender-status': sender_id_status_1.senderIdStatus,
            'anti-fraud': anti_fraud_alert_1.antiFraudAlert,
            'daily-digest': daily_digest_1.dailyDigest,
            'security-alert': user_security_alert_1.userSecurityAlert,
            'weekly-digest': weekly_digest_1.weeklyDigest,
        };
        const selectedTemplate = templateMap[body.templateKey];
        if (!selectedTemplate) {
            throw new common_1.BadRequestException(`Invalid or missing templateKey. Valid keys are: ${Object.keys(templateMap).join(', ')}`);
        }
        const dto = {
            from: { name: 'SMSIng.tn', address: 'omarbelfeki1@gmail.com' },
            recipients: [{ name: 'Omar Belfeki', address: 'omarbelfeki1@gmail.com' }],
            subject: body.subject || 'SMSing.tn Notification Test',
            html: selectedTemplate,
            placeholderReplacement: body,
        };
        return this.mailerService.sendEmail(dto);
    }
};
exports.MailerController = MailerController;
__decorate([
    (0, common_1.Post)('send-email'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MailerController.prototype, "sendEmail", null);
exports.MailerController = MailerController = __decorate([
    (0, common_1.Controller)('mailer'),
    __metadata("design:paramtypes", [mailer_service_1.MailerService])
], MailerController);
//# sourceMappingURL=mailer.controller.js.map