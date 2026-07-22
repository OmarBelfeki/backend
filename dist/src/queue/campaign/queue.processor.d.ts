import { WorkerHost } from '@nestjs/bullmq';
import { Job, Queue } from 'bullmq';
import { PrismaService } from '../../prisma/prisma.service';
import { MailerService } from '../../mailer/mailer.service';
export declare class QueueProcessor extends WorkerHost {
    private prisma;
    private readonly mailerService;
    private readonly dlrQueue;
    constructor(prisma: PrismaService, mailerService: MailerService, dlrQueue: Queue);
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
    fakeSmsProvider(phone: string, message: string): Promise<{
        status: string;
        id: string;
    }>;
    simulateDelivery(messageId: string): Promise<void>;
    onFailed(job: Job): Promise<void>;
    onCompleted(job: Job): Promise<void>;
}
