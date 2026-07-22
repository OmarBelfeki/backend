import { WorkerHost } from '@nestjs/bullmq';
import { PrismaService } from '../../prisma/prisma.service';
import { Job, Queue } from 'bullmq';
export declare class SpreadsheetProcessor extends WorkerHost {
    private prismaService;
    private dlrQueue;
    constructor(prismaService: PrismaService, dlrQueue: Queue);
    afterSmsSent(message: any): Promise<void>;
    process(job: Job): Promise<{
        message: string;
        stats: {
            sent: number;
            errors: number;
            duplicated: number;
        };
    }>;
    deductSmsCredits(tenantId: string, smsCountNeeded: number): Promise<{
        success: boolean;
        totalCostDeducted: number;
    }>;
    sendMessage(messageId: string): Promise<{
        success: boolean;
        code: any;
        message: any;
        providerMessage: any;
        providerMessageId: any;
    } | {
        success: boolean;
        message: any;
        code?: undefined;
        providerMessage?: undefined;
        providerMessageId?: undefined;
    }>;
}
