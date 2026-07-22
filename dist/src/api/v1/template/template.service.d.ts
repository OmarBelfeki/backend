import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { PrismaService } from '../../../prisma/prisma.service';
export declare class TemplateService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(tenantId: string, createTemplateDto: CreateTemplateDto): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string | null;
        name: string;
        template: string;
    }>;
    findAll(tenantId: string): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string | null;
        name: string;
        template: string;
    }[]>;
    findOne(tenantId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string | null;
        name: string;
        template: string;
    }>;
    update(tenantId: string, id: string, updateTemplateDto: UpdateTemplateDto): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string | null;
        name: string;
        template: string;
    }>;
    remove(tenantId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string | null;
        name: string;
        template: string;
    }>;
    removeMany(tenantId: string, ids: string[]): Promise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
}
