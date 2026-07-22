import { CampaignService } from '../api/v1/campaign/campaign.service';
import { PrismaService } from '../prisma/prisma.service';
export declare class CampaignTask {
    private readonly prisma;
    private readonly campaignService;
    constructor(prisma: PrismaService, campaignService: CampaignService);
    handleCampaigns(): Promise<void>;
    private getTime;
    private getDate;
}
