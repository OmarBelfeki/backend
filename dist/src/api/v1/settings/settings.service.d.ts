import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { PrismaService } from '../../../prisma/prisma.service';
export declare class SettingsService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(userId: string, createSettingDto: CreateSettingDto): Promise<{
        userId: string;
        username: string;
        avatar: string;
        bio: string;
        urls: string[];
    }>;
    findAll(): Promise<{
        userId: string;
        username: string;
        avatar: string;
        bio: string;
        urls: string[];
    }[]>;
    findOne(id: string): Promise<{
        userId: string;
        username: string;
        avatar: string;
        bio: string;
        urls: string[];
    } | null>;
    update(userId: string, updateSettingDto: UpdateSettingDto): Promise<{
        userId: string;
        username: string;
        avatar: string;
        bio: string;
        urls: string[];
    }>;
    remove(userId: string): Promise<{
        userId: string;
        username: string;
        avatar: string;
        bio: string;
        urls: string[];
    }>;
}
