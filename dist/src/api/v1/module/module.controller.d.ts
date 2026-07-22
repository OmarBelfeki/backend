import { ModuleService } from './module.service';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
export declare class ModuleController {
    private readonly moduleService;
    constructor(moduleService: ModuleService);
    create(createModuleDto: CreateModuleDto): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        logo: string | null;
        actived: boolean;
        price: number;
        desc: string;
    }>;
    findAll(): Promise<({
        tenants: {
            id: string;
            companyName: string;
            email: string;
            timezone: string | null;
            providerApiKey: string | null;
            virtualBalance: import("@prisma/client-runtime-utils").Decimal;
            taxId: string | null;
            businessSector: string;
            phone: string | null;
            city: string | null;
            postalCode: string | null;
            address: string | null;
            createdAt: Date;
        }[];
    } & {
        id: string;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        logo: string | null;
        actived: boolean;
        price: number;
        desc: string;
    })[]>;
    findOne(id: string): Promise<{
        tenants: {
            id: string;
            companyName: string;
            email: string;
            timezone: string | null;
            providerApiKey: string | null;
            virtualBalance: import("@prisma/client-runtime-utils").Decimal;
            taxId: string | null;
            businessSector: string;
            phone: string | null;
            city: string | null;
            postalCode: string | null;
            address: string | null;
            createdAt: Date;
        }[];
    } & {
        id: string;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        logo: string | null;
        actived: boolean;
        price: number;
        desc: string;
    }>;
    update(id: string, updateModuleDto: UpdateModuleDto): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        logo: string | null;
        actived: boolean;
        price: number;
        desc: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        logo: string | null;
        actived: boolean;
        price: number;
        desc: string;
    }>;
    bye(dto: {
        id: string;
        tenantId: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        logo: string | null;
        actived: boolean;
        price: number;
        desc: string;
    }>;
}
