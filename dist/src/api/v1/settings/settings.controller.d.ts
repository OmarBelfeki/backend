import { SettingsService } from './settings.service';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
export declare class SettingsController {
    private readonly settingsService;
    constructor(settingsService: SettingsService);
    create(req: any, createSettingDto: CreateSettingDto): Promise<{
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
    update(req: any, updateSettingDto: UpdateSettingDto): Promise<{
        userId: string;
        username: string;
        avatar: string;
        bio: string;
        urls: string[];
    }>;
    remove(req: any): Promise<{
        userId: string;
        username: string;
        avatar: string;
        bio: string;
        urls: string[];
    }>;
}
