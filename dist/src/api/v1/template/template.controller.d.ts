import { TemplateService } from './template.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
export declare class TemplateController {
    private readonly templateService;
    constructor(templateService: TemplateService);
    create(req: any, createTemplateDto: CreateTemplateDto): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string | null;
        name: string;
        template: string;
    }>;
    findAll(req: any): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string | null;
        name: string;
        template: string;
    }[]>;
    findOne(req: any, id: string): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string | null;
        name: string;
        template: string;
    }>;
    update(req: any, id: string, updateTemplateDto: UpdateTemplateDto): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string | null;
        name: string;
        template: string;
    }>;
    remove(req: any, id: string): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string | null;
        name: string;
        template: string;
    }>;
    removeMany(req: any, ids: string[]): Promise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
}
