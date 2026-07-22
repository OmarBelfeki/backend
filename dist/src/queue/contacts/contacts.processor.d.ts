import { WorkerHost } from '@nestjs/bullmq';
import { PrismaService } from '../../prisma/prisma.service';
import { Job } from 'bullmq';
export declare class ContactsProcessor extends WorkerHost {
    private prismaService;
    constructor(prismaService: PrismaService);
    process(job: Job): Promise<{
        message: string;
        stats: {
            added: number;
            errors: number;
            duplicated: number;
        };
    }>;
}
