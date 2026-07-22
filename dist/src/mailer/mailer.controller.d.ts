import { MailerService } from './mailer.service';
export declare class MailerController {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendEmail(body: Record<string, string>): Promise<import("nodemailer/lib/smtp-pool").SentMessageInfo | undefined>;
}
