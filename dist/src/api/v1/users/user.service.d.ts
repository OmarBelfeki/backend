import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../../../prisma/prisma.service';
import { MailerService } from '../../../mailer/mailer.service';
export declare class UserService {
    private readonly prisma;
    private readonly mailerService;
    constructor(prisma: PrismaService, mailerService: MailerService);
    createAdmin(createUserDto: CreateUserDto): Promise<{
        id: string;
        email: string;
        phone: string | null;
        createdAt: Date;
        passwordHash: string;
        role: import("../../../generated/prisma/enums").Role;
        isActive: string;
        isVerified: boolean;
        lang: string | null;
        tenantId: string | null;
        hashedRefreshToken: string | null;
        lastActiveAt: Date | null;
    }>;
    create(tenantId: string, createUserDto: CreateUserDto): Promise<{
        id: string;
        email: string;
        phone: string | null;
        createdAt: Date;
        passwordHash: string;
        role: import("../../../generated/prisma/enums").Role;
        isActive: string;
        isVerified: boolean;
        lang: string | null;
        tenantId: string | null;
        hashedRefreshToken: string | null;
        lastActiveAt: Date | null;
    }>;
    findAll(user: any): Promise<{
        id: string;
        email: string;
        phone: string | null;
        createdAt: Date;
        passwordHash: string;
        role: import("../../../generated/prisma/enums").Role;
        isActive: string;
        isVerified: boolean;
        lang: string | null;
        tenantId: string | null;
        hashedRefreshToken: string | null;
        lastActiveAt: Date | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        email: string;
        phone: string | null;
        createdAt: Date;
        passwordHash: string;
        role: import("../../../generated/prisma/enums").Role;
        isActive: string;
        isVerified: boolean;
        lang: string | null;
        tenantId: string | null;
        hashedRefreshToken: string | null;
        lastActiveAt: Date | null;
    }>;
    update(tenantId: string, id: string, updateUserDto: UpdateUserDto): Promise<{
        id: string;
        email: string;
        phone: string | null;
        createdAt: Date;
        passwordHash: string;
        role: import("../../../generated/prisma/enums").Role;
        isActive: string;
        isVerified: boolean;
        lang: string | null;
        tenantId: string | null;
        hashedRefreshToken: string | null;
        lastActiveAt: Date | null;
    }>;
    remove(tenantId: string, id: string): Promise<{
        id: string;
        email: string;
        phone: string | null;
        createdAt: Date;
        passwordHash: string;
        role: import("../../../generated/prisma/enums").Role;
        isActive: string;
        isVerified: boolean;
        lang: string | null;
        tenantId: string | null;
        hashedRefreshToken: string | null;
        lastActiveAt: Date | null;
    }>;
    removeMany(tenantId: string, ids: string[]): Promise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    getAdmin(email: string): Promise<{
        phone: string | null;
    }>;
}
