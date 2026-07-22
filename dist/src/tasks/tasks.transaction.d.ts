import { PrismaService } from '../prisma/prisma.service';
export declare class TasksTransaction {
    private readonly prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    handleExpiredSms(): Promise<void>;
}
