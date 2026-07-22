import * as nodemailer from 'nodemailer';
import { SendEmailDto } from './mailer.interface';
import { PrismaService } from '../prisma/prisma.service';
export declare class MailerService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    private readonly templateMap;
    mailTransport(): Promise<nodemailer.Transporter<import("nodemailer/lib/smtp-pool").SentMessageInfo, import("nodemailer/lib/smtp-pool").Options>>;
    template(html: string, data: Record<string, string>): string;
    sendNotification(templateKey: string, data: any, customRecipients?: any[]): Promise<import("nodemailer/lib/smtp-pool").SentMessageInfo | undefined>;
    sendEmail(dto: SendEmailDto): Promise<import("nodemailer/lib/smtp-pool").SentMessageInfo | undefined>;
}
