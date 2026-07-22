import { WorkerHost } from '@nestjs/bullmq';
import { Job, Queue } from 'bullmq';
import { PrismaService } from '../../prisma/prisma.service';
import { DlrService } from '../../tasks/task.DlrService';
export declare class DlrProcessor extends WorkerHost {
    private prisma;
    private dlrService;
    private readonly dlrQueue;
    constructor(prisma: PrismaService, dlrService: DlrService, dlrQueue: Queue);
    process(job: Job<any>): Promise<void>;
}
