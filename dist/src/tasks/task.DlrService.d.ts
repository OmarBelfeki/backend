import { PrismaService } from '../prisma/prisma.service';
export declare class DlrService {
    private prisma;
    constructor(prisma: PrismaService);
    checkSingleMessage(msg: any): Promise<void>;
    private mapStatus;
}
