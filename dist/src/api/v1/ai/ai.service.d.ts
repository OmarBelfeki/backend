import { PrismaService } from '../../../prisma/prisma.service';
export declare class AiService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    parsePrompt(prompt: string): string[];
    buildAI(tenantId: string, body: any): any;
    assistant(tenantId: string, body: any): Promise<any>;
    upsertAI(createAiDto: {
        type: 'SMS' | 'ANTI';
        link: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string | null;
        linkSMS: string | null;
        linkAnti: string | null;
        updatedAt: Date;
    }>;
    findOne(): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string | null;
        linkSMS: string | null;
        linkAnti: string | null;
        updatedAt: Date;
    }>;
    usage(id: string): Promise<string>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string | null;
        linkSMS: string | null;
        linkAnti: string | null;
        updatedAt: Date;
    }>;
}
