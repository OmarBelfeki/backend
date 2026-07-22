"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const bcrypt = __importStar(require("bcrypt"));
const role_enum_1 = require("../role/role.enum");
const mailer_service_1 = require("../../../mailer/mailer.service");
let UserService = class UserService {
    prisma;
    mailerService;
    constructor(prisma, mailerService) {
        this.prisma = prisma;
        this.mailerService = mailerService;
    }
    async createAdmin(createUserDto) {
        const user = await this.prisma.user.findFirst({
            where: {
                tenantId: createUserDto.tenantId,
                role: role_enum_1.Role.ADMIN_CLIENT,
            },
        });
        if (user)
            throw new common_1.ConflictException('Company Has a admin client');
        if (createUserDto.role !== role_enum_1.Role.SUPER_ADMIN && !createUserDto.tenantId)
            throw new common_1.BadRequestException('Add company id');
        const existingEmail = await this.prisma.user.findUnique({
            where: { email: createUserDto.email },
        });
        if (existingEmail)
            throw new common_1.ConflictException('Email already exists');
        if (createUserDto.phone) {
            const existingPhone = await this.prisma.user.findUnique({
                where: { phone: createUserDto.phone },
            });
            if (existingPhone)
                throw new common_1.ConflictException('Phone already exists');
        }
        const tenant = await this.prisma.tenant.findUnique({ where: { id: createUserDto.tenantId } });
        const userInsert = await this.prisma.user.create({
            data: {
                ...createUserDto,
                passwordHash: await bcrypt.hash(createUserDto.passwordHash, 10),
            },
        });
        await this.prisma.notification.create({
            data: {
                title: 'Bienvenue sur SMSing.tn ! 🚀',
                message: 'Merci de vous être inscrit. Veuillez compléter votre profil d’entreprise pour commencer à envoyer vos campagnes.',
                to: userInsert.id,
                sender: 'Système',
                status: 'RECEIVED'
            }
        });
        await this.mailerService.sendNotification('new-registration', {
            subject: "Alerte administrateur : Nouvelle inscription de l'entreprise",
            company_name: tenant?.companyName,
            admin_email: userInsert.email,
            created_at: new Date().toLocaleDateString('fr-FR'),
            verification_status: "Pending Review",
            review_link: `${process.env.FRONTEND}/tenants`
        });
        return userInsert;
    }
    async create(tenantId, createUserDto) {
        const exist = await this.prisma.user.findFirst({
            where: {
                email: createUserDto.email,
            },
        });
        if (exist)
            throw new common_1.ConflictException('Email already exists.');
        if (createUserDto.phone) {
            const existingPhone = await this.prisma.user.findFirst({
                where: {
                    phone: createUserDto.phone,
                },
            });
            if (existingPhone)
                throw new common_1.ConflictException('Phone already exists.');
        }
        return this.prisma.user.create({
            data: {
                ...createUserDto,
                passwordHash: await bcrypt.hash(createUserDto.passwordHash, 10),
                isVerified: true,
                tenantId: tenantId,
            },
        });
    }
    async findAll(user) {
        if (user.role === role_enum_1.Role.SUPER_ADMIN) {
            const res = await this.prisma.user.findMany({
                orderBy: { createdAt: 'desc' },
            });
            return res.filter((r) => r.id !== user.sub);
        }
        const res = await this.prisma.user.findMany({
            where: { tenantId: user.tenantId },
            orderBy: { createdAt: 'desc' },
        });
        return res.filter((r) => r.id !== user.sub);
    }
    async findOne(id) {
        const exist = await this.prisma.user.findFirst({
            where: { id },
        });
        if (!exist)
            throw new common_1.NotFoundException(`User not found`);
        return exist;
    }
    async update(tenantId, id, updateUserDto) {
        await this.findOne(id);
        if (updateUserDto.email) {
            const existingEmailUser = await this.prisma.user.findFirst({
                where: {
                    email: updateUserDto.email,
                    NOT: { id },
                },
            });
            if (existingEmailUser) {
                throw new common_1.ConflictException('Email already exists.');
            }
        }
        if (updateUserDto.phone) {
            const existingPhoneUser = await this.prisma.user.findFirst({
                where: {
                    phone: updateUserDto.phone,
                    NOT: { id },
                },
            });
            if (existingPhoneUser) {
                throw new common_1.ConflictException('Phone already exists.');
            }
        }
        if (updateUserDto.passwordHash) {
            updateUserDto.passwordHash = await bcrypt.hash(updateUserDto.passwordHash, 10);
        }
        return this.prisma.user.update({
            where: { id },
            data: {
                ...updateUserDto,
            },
        });
    }
    async remove(tenantId, id) {
        await this.findOne(id);
        return this.prisma.user.delete({
            where: { id },
        });
    }
    async removeMany(tenantId, ids) {
        if (!ids || ids.length === 0) {
            throw new Error('No IDs provided');
        }
        return this.prisma.user.deleteMany({
            where: { tenantId, id: { in: ids } },
        });
    }
    async getAdmin(email) {
        const user = await this.prisma.user.findFirst({ where: { email }, select: { phone: true } });
        if (!user)
            throw new common_1.NotFoundException(`User not found`);
        return user;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mailer_service_1.MailerService])
], UserService);
//# sourceMappingURL=user.service.js.map