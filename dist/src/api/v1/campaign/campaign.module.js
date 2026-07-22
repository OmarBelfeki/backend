"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignModule = void 0;
const common_1 = require("@nestjs/common");
const campaign_service_1 = require("./campaign.service");
const campaign_controller_1 = require("./campaign.controller");
const prisma_service_1 = require("../../../prisma/prisma.service");
const message_service_1 = require("../message/message.service");
const queue_module_1 = require("../../../queue/queue.module");
const mailer_service_1 = require("../../../mailer/mailer.service");
const task_campaign_1 = require("../../../tasks/task.campaign");
const task_DlrService_1 = require("../../../tasks/task.DlrService");
let CampaignModule = class CampaignModule {
};
exports.CampaignModule = CampaignModule;
exports.CampaignModule = CampaignModule = __decorate([
    (0, common_1.Module)({
        imports: [queue_module_1.QueueModule],
        controllers: [campaign_controller_1.CampaignController],
        providers: [campaign_service_1.CampaignService, prisma_service_1.PrismaService, message_service_1.MessageService, mailer_service_1.MailerService, task_campaign_1.CampaignTask, task_DlrService_1.DlrService],
    })
], CampaignModule);
//# sourceMappingURL=campaign.module.js.map