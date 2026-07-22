import { LegalService } from './legal.service';
import { CreateLegalDto } from './dto/create-legal.dto';
export declare class LegalController {
    private readonly legalService;
    constructor(legalService: LegalService);
    upsertLegal(createLegalDto: CreateLegalDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        termsOfService: import("@prisma/client/runtime/client").JsonValue | null;
        privacyPolicy: import("@prisma/client/runtime/client").JsonValue | null;
    }>;
    findOne(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        termsOfService: import("@prisma/client/runtime/client").JsonValue | null;
        privacyPolicy: import("@prisma/client/runtime/client").JsonValue | null;
    } | null>;
}
