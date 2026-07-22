import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UserService);
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
    getAdmin(email: string): Promise<{
        phone: string | null;
    }>;
    create(req: any, createUserDto: CreateUserDto): Promise<{
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
    findAll(req: any): Promise<{
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
    findOne(req: any, id: string): Promise<{
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
    update(req: any, id: string, updateUserDto: UpdateUserDto): Promise<{
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
    remove(req: any, id: string): Promise<{
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
    removeMany(req: any, ids: string[]): Promise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
}
