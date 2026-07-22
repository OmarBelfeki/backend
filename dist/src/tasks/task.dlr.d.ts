import { PrismaService } from '../prisma/prisma.service';
import { DlrService } from './task.DlrService';
export declare class DlrTask {
    private prisma;
    private dlrService;
    constructor(prisma: PrismaService, dlrService: DlrService);
    handleDlr(): Promise<void>;
}
