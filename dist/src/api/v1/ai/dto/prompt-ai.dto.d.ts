export declare enum ActionType {
    GENERATE = "GENERATE",
    IMPROVE = "IMPROVE",
    SHORTEN = "SHORTEN",
    TRANSLATE = "TRANSLATE",
    VARIATIONS = "VARIATIONS"
}
export declare class PromptAiDto {
    action: ActionType;
    prompt: string;
    targetLanguage?: string;
    count?: number;
    tone?: string;
    outputFormat?: any;
    tenantId: string;
}
