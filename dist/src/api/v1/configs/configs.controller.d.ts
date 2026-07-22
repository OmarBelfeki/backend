import { ConfigsService } from './configs.service';
import { ProviderDto } from './dto/provider-dto';
export declare class ConfigsController {
    private readonly configsService;
    constructor(configsService: ConfigsService);
    smpt(dto: any): Promise<{
        id: string;
        username: string | null;
        host: string | null;
        port: number | null;
        encryption: import("../../../generated/prisma/enums").EncryptionType | null;
        authMethod: import("../../../generated/prisma/enums").AuthMethod | null;
        password: string | null;
        senderName: string | null;
        senderEmail: string | null;
        createAt: Date;
        updateAt: Date;
    }>;
    getSmpt(): Promise<{
        id: string;
        username: string | null;
        host: string | null;
        port: number | null;
        encryption: import("../../../generated/prisma/enums").EncryptionType | null;
        authMethod: import("../../../generated/prisma/enums").AuthMethod | null;
        password: string | null;
        senderName: string | null;
        senderEmail: string | null;
        createAt: Date;
        updateAt: Date;
    } | null>;
    smptTest(dto: any): Promise<{
        success: boolean;
        message: string;
        data: {
            messageId: string;
            response: string;
            accepted: (string | import("nodemailer/lib/mailer").Address)[];
            rejected: (string | import("nodemailer/lib/mailer").Address)[];
        };
        error?: undefined;
    } | {
        success: boolean;
        message: any;
        error: {
            code: any;
            command: any;
            response: any;
        };
        data?: undefined;
    }>;
    getProvider(type: any): Promise<{
        id: string;
        type: import("../../../generated/prisma/enums").TestProviderType;
        sender: string | null;
        createAt: Date;
        updateAt: Date;
        msg: string | null;
        apiKey: string | null;
        mobileTest: string | null;
    } | null>;
    provider(dto: ProviderDto): Promise<{
        id: string;
        type: import("../../../generated/prisma/enums").TestProviderType;
        sender: string | null;
        createAt: Date;
        updateAt: Date;
        msg: string | null;
        apiKey: string | null;
        mobileTest: string | null;
    }>;
    providerTest(dto: any): Promise<{
        success: boolean;
        code: any;
        message: any;
        providerMessage: any;
        messageId: any;
    } | {
        success: boolean;
        message: any;
        code?: undefined;
        providerMessage?: undefined;
        messageId?: undefined;
    }>;
}
