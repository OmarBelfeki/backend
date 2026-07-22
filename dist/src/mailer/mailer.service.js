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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailerService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer = __importStar(require("nodemailer"));
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
const new_registration_1 = require("./templates/administration-templates/new-registration");
const prisma_service_1 = require("../prisma/prisma.service");
const otp_template_1 = require("./templates/otp/otp-template");
let MailerService = class MailerService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    templateMap = {
        'sender-request': sender_request_1.senderRequest,
        'new-registration': new_registration_1.newRegistration,
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
        'otp': otp_template_1.otpTemplate
    };
    async mailTransport() {
        const smtp = await this.prismaService.smtp.findUnique({
            where: { id: 'smtp-config' }
        });
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: false,
            auth: {
                user: smtp?.username || process.env.MAIL_USER,
                pass: smtp?.password || process.env.MAIL_PASSWORD,
            },
        });
        return transporter;
    }
    template(html, data) {
        return html.replace(/%(\w*)%/g, function (m, key) {
            return data.hasOwnProperty(key) ? data[key] : '';
        });
    }
    async sendNotification(templateKey, data, customRecipients) {
        const selectedTemplate = this.templateMap[templateKey];
        if (!selectedTemplate) {
            throw new common_1.BadRequestException(`Invalid or missing templateKey. Valid keys are: ${Object.keys(this.templateMap).join(', ')}`);
        }
        const dto = {
            from: { name: 'SMSIng.tn', address: 'omarbelfeki1@gmail.com' },
            recipients: customRecipients || [{ name: 'Omar Belfeki', address: 'omarbelfeki1@gmail.com' }],
            subject: data.subject || 'SMSing.tn Notification Test',
            html: selectedTemplate,
            placeholderReplacement: data,
        };
        return this.sendEmail(dto);
    }
    async sendEmail(dto) {
        const { from, recipients, subject } = dto;
        const html = dto.placeholderReplacement
            ? this.template(dto.html, dto.placeholderReplacement)
            : dto.html;
        const transport = await this.mailTransport();
        const options = {
            from: from ?? {
                name: process.env.APP_NAME,
                address: process.env.DEFAULT_MAIL_FROM,
            },
            to: recipients,
            subject,
            html,
        };
        try {
            const result = await transport.sendMail(options);
            return result;
        }
        catch (e) {
            console.log('email error', e);
        }
    }
};
exports.MailerService = MailerService;
exports.MailerService = MailerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MailerService);
//# sourceMappingURL=mailer.service.js.map