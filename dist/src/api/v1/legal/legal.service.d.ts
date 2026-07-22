import { CreateLegalDto } from './dto/create-legal.dto';
import { PrismaService } from '../../../prisma/prisma.service';
export declare class LegalService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
