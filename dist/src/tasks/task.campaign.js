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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignTask = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const campaign_service_1 = require("../api/v1/campaign/campaign.service");
const prisma_service_1 = require("../prisma/prisma.service");
let CampaignTask = class CampaignTask {
    prisma;
    campaignService;
    constructor(prisma, campaignService) {
        this.prisma = prisma;
        this.campaignService = campaignService;
    }
    async handleCampaigns() {
        const now = new Date();
        const currentTime = this.getTime(now);
        const campaigns = await this.prisma.campaign.findMany({
            where: { isActive: true, type: 'SCHEDULED' }
        });
        for (const campaign of campaigns) {
            if (now > new Date(campaign.scheduledAt)) {
                await this.prisma.campaign.update({
                    where: { id: campaign.id },
                    data: {
                        isActive: false,
                    }
                });
                continue;
            }
            const campaignTime = this.getTime(campaign.scheduledAt);
            if (campaignTime !== currentTime)
                continue;
            await this.campaignService.send(campaign.tenantId, campaign.id);
        }
    }
    getTime(date) {
        return new Date(date).toTimeString().slice(0, 5);
    }
    getDate(date) {
        return new Date(date).toISOString().split('T')[0];
    }
};
exports.CampaignTask = CampaignTask;
__decorate([
    (0, schedule_1.Cron)('* * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CampaignTask.prototype, "handleCampaigns", null);
exports.CampaignTask = CampaignTask = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        campaign_service_1.CampaignService])
], CampaignTask);
//# sourceMappingURL=task.campaign.js.map