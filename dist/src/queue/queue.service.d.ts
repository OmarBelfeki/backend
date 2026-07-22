import { Queue } from 'bullmq';
import { MailerService } from '../mailer/mailer.service';
export declare class QueueService {
    private smsQueue;
    private readonly mailerService;
    constructor(smsQueue: Queue, mailerService: MailerService);
    addBulkSms(jobs: any[]): Promise<void>;
}
