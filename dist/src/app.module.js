"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const config_1 = require("@nestjs/config");
const user_module_1 = require("./api/v1/users/user.module");
const auth_module_1 = require("./api/v1/auth/auth.module");
const core_1 = require("@nestjs/core");
const tenant_module_1 = require("./api/v1/tenant/tenant.module");
const sender_module_1 = require("./api/v1/sender/sender.module");
const contact_module_1 = require("./api/v1/contact/contact.module");
const group_module_1 = require("./api/v1/group/group.module");
const campaign_module_1 = require("./api/v1/campaign/campaign.module");
const message_module_1 = require("./api/v1/message/message.module");
const transaction_module_1 = require("./api/v1/transaction/transaction.module");
const ai_module_1 = require("./api/v1/ai/ai.module");
const queue_module_1 = require("./queue/queue.module");
const bullmq_1 = require("@nestjs/bullmq");
const notification_module_1 = require("./api/v1/notification/notification.module");
const template_module_1 = require("./api/v1/template/template.module");
const audit_module_1 = require("./audit/audit.module");
const settings_module_1 = require("./api/v1/settings/settings.module");
const dashboard_module_1 = require("./api/v1/dashboard/dashboard.module");
const legal_module_1 = require("./api/v1/legal/legal.module");
const mailer_module_1 = require("./mailer/mailer.module");
const configs_module_1 = require("./api/v1/configs/configs.module");
const module_module_1 = require("./api/v1/module/module.module");
const schedule_1 = require("@nestjs/schedule");
const payments_module_1 = require("./api/v1/payments/payments.module");
const throttler_1 = require("@nestjs/throttler");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            tenant_module_1.TenantModule,
            sender_module_1.SenderModule,
            contact_module_1.ContactModule,
            group_module_1.GroupModule,
            campaign_module_1.CampaignModule,
            message_module_1.MessageModule,
            transaction_module_1.TransactionModule,
            ai_module_1.AiModule,
            bullmq_1.BullModule.forRoot({
                connection: {
                    url: process.env.REDIS_HOST,
                },
            }),
            queue_module_1.QueueModule,
            notification_module_1.NotificationModule,
            template_module_1.TemplateModule,
            audit_module_1.AuditModule,
            settings_module_1.SettingsModule,
            dashboard_module_1.DashboardModule,
            legal_module_1.LegalModule,
            mailer_module_1.MailerModule,
            configs_module_1.ConfigsModule,
            module_module_1.ModuleModule,
            schedule_1.ScheduleModule.forRoot(),
            payments_module_1.PaymentsModule,
            throttler_1.ThrottlerModule.forRoot({
                throttlers: [
                    {
                        ttl: 60,
                        limit: 100,
                    },
                ],
                errorMessage: 'Too many requests, slow down!',
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map