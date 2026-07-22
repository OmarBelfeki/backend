import { AiService } from './ai.service';
import { PromptAiDto } from './dto/prompt-ai.dto';
export declare class AiController {
    private readonly aiService;
    constructor(aiService: AiService);
    assistant(req: any, body: any): Promise<any>;
    link(createAiDto: {
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
    improve(improveAiDto: PromptAiDto): Promise<void>;
    shorten(shortenAiDto: PromptAiDto): Promise<void>;
    translate(translateAiDto: PromptAiDto): Promise<void>;
    variations(variationsAiDto: PromptAiDto): Promise<void>;
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
