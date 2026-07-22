import { WorkerHost } from '@nestjs/bullmq';
import { PrismaService } from '../../prisma/prisma.service';
import { Job, Queue } from 'bullmq';
export declare class ResendProcessor extends WorkerHost {
    private prismaService;
    private readonly dlrQueue;
    constructor(prismaService: PrismaService, dlrQueue: Queue);
    afterSmsSent(message: any): Promise<void>;
    process(job: Job): Promise<void>;
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
