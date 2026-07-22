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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../../../prisma/prisma.service");
const bcrypt = __importStar(require("bcrypt"));
const constant_1 = require("./constant");
const utils_1 = require("../../../utils");
const xml2js_1 = require("xml2js");
const mailer_service_1 = require("../../../mailer/mailer.service");
let AuthService = class AuthService {
    prisma;
    jwtService;
    mailerService;
    constructor(prisma, jwtService, mailerService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.mailerService = mailerService;
    }
    async login(email, password) {
        const user = await this.prisma.user.findFirst({ where: { email } });
        if (!user)
            throw new common_1.UnauthorizedException();
        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (!isMatch)
            throw new common_1.BadRequestException('Passwords do not match');
        if (!user.isVerified)
            throw new common_1.BadRequestException("User don't verified");
        const tokens = await this.generateToken(user);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        try {
            await this.prisma.otp.delete({ where: { userId: user.id } });
        }
        catch (e) { }
        return tokens;
    }
    async refresh(userId, refreshToken) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user || !user.hashedRefreshToken)
            throw new common_1.ForbiddenException('Access Denied');
        const tokenMatches = await bcrypt.compare(refreshToken, user.hashedRefreshToken);
        if (!tokenMatches)
            throw new common_1.ForbiddenException('Access Denied');
        const tokens = await this.generateToken(user);
        await this.updateRefreshToken(user.id, tokens.refreshToken);
        return tokens;
    }
    async logout(userId) {
        await this.prisma.user.update({
            where: { id: userId },
            data: {
                hashedRefreshToken: null,
                isActive: 'no',
                lastActiveAt: new Date(),
            },
        });
        return { message: 'Logged out Successfully' };
    }
    async changePassword(userId, currentPassword, newPassword) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user)
            throw new common_1.UnauthorizedException('Access Denied');
        const valid = await bcrypt.compare(currentPassword, user.passwordHash);
        if (!valid)
            throw new common_1.ForbiddenException('Wrong Password');
        const newHash = await bcrypt.hash(newPassword, 10);
        await this.prisma.user.update({
            where: { id: userId },
            data: { passwordHash: newHash },
        });
        return { message: 'Password updated successfully' };
    }
    async generateToken(user) {
        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role,
            tenantId: user.tenantId,
        };
        const accessToken = await this.jwtService.signAsync(payload, {
            secret: constant_1.secret,
            expiresIn: '7d',
        });
        const refreshToken = await this.jwtService.signAsync(payload, {
            secret: constant_1.secret,
            expiresIn: '7d',
        });
        return { accessToken, refreshToken, user: payload };
    }
    async updateRefreshToken(userId, refreshToken) {
        const hashed = await bcrypt.hash(refreshToken, 10);
        await this.prisma.user.update({
            where: { id: userId },
            data: {
                hashedRefreshToken: hashed,
                isActive: 'yes',
                lastActiveAt: new Date(),
            },
        });
    }
    async otp(otpUserDto) {
        const user = await this.prisma.user.findFirst({
            where: {
                OR: [
                    { email: otpUserDto.email },
                    { phone: otpUserDto.phone }
                ]
            }
        });
        if (!user)
            throw new common_1.BadRequestException('User not found');
        const otp = `${Math.floor(100000 + Math.random() * 900000)}`;
        if (otpUserDto.phone) {
            const phone = (0, utils_1.normalizePhone)(otpUserDto.phone);
            if (!phone)
                throw new common_1.BadRequestException('Phone is incorrect');
            const tunisianPhoneRegex = /^(216)?[2459]\d{7}$/;
            if (!tunisianPhoneRegex.test(phone)) {
                throw new common_1.BadRequestException('Invalid Tunisian mobile number');
            }
            const provider = await this.prisma.testProvider.findFirst({
                where: { type: 'OTP' }
            });
            const smsErrors = {
                '200': 'Data OK',
                '400': 'Absence de la clé',
                '401': 'Clé non autorisée',
                '402': 'Crédit insuffisant',
                '420': 'Quota journalier dépassé',
                '430': 'Contenu manquant',
                '431': 'Destination manquante',
                '440': 'Contenu trop long',
                '441': 'Destination non autorisée',
                '442': 'Sender non autorisée',
            };
            const myMobile = '21653354979';
            const mySms = `Votre code de vérification SMSing.tn est : ${otp}`;
            const mySender = process.env.providerSender;
            const key = process.env.providerAPI;
            const otpSMS = provider?.msg ? `${provider?.msg} : ${otp}` : mySms;
            const url = `http://bulk.smsing.tn/Api/Api.aspx?fct=sms&key=${provider?.apiKey || key}&mobile=${phone}&sms=${otpSMS}&sender=${provider?.sender || mySender}`;
            try {
                const res = await fetch(url);
                const xml = await res.text();
                const parsed = await (0, xml2js_1.parseStringPromise)(xml);
                const status = parsed.response.status[0];
                const statusCode = status.status_code[0];
                const statusMsg = status.status_msg[0];
                const messageId = status.message_id?.[0] || null;
                if (statusCode === '200') {
                    await this.prisma.message.create({
                        data: {
                            phone: phone,
                            messageBody: otpSMS,
                            costInCredits: 0.49,
                            type: 'OTP',
                            providerMsgId: messageId,
                            status: 'UNDELIV'
                        }
                    });
                    await this.prisma.otp.upsert({
                        where: { userId: user.id },
                        update: {
                            otp: otp,
                        },
                        create: {
                            email: otpUserDto.email,
                            phone: phone,
                            userId: user.id,
                            otp: otp,
                        },
                    });
                }
                return {
                    success: statusCode === '200',
                    code: statusCode,
                    message: smsErrors[statusCode] || statusMsg,
                    providerMessage: statusMsg,
                    messageId,
                };
            }
            catch (err) {
                return {
                    success: false,
                    message: err.message,
                };
            }
        }
        else {
            await this.mailerService.sendNotification('otp', {
                subject: 'Code de vérification SMSIng.tn',
                otp: otp,
                email: otpUserDto.email,
                societe: 'SMSIng.tn',
                date: new Date()
            });
            await this.prisma.otp.upsert({
                where: { userId: user.id },
                update: {
                    otp: otp,
                },
                create: {
                    email: otpUserDto.email,
                    userId: user.id,
                    otp: otp,
                },
            });
        }
    }
    async getOtp(key) {
        return this.prisma.otp.findFirst({
            where: { OR: [{ email: key }, { phone: key }] },
        });
    }
    async resetPassword(email, password) {
        const exist = await this.prisma.otp.findFirst({ where: { email } });
        if (!exist)
            throw new common_1.BadRequestException('User not found');
        await this.prisma.user.update({
            where: { id: exist.userId },
            data: {
                passwordHash: await bcrypt.hash(password, 10),
            },
        });
        await this.prisma.otp.delete({ where: { userId: exist.userId } });
        return { message: 'Password reset successfully' };
    }
    async verified(phone) {
        const user = await this.prisma.user.findFirst({ where: { phone: phone } });
        if (!user)
            throw new common_1.BadRequestException('User not found');
        await this.prisma.user.update({
            where: { id: user.id },
            data: { isVerified: true },
        });
        return { message: 'Verified successfully' };
    }
    async superAdmin() {
        const exist = await this.prisma.user.findFirst({
            where: {
                email: 'smsing@gmail.com',
            }
        });
        if (!exist) {
            await this.prisma.user.create({
                data: {
                    email: 'smsing@gmail.com',
                    passwordHash: await bcrypt.hash('omar1234', 10),
                    role: 'SUPER_ADMIN',
                    isVerified: true
                }
            });
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        mailer_service_1.MailerService])
], AuthService);
//# sourceMappingURL=auth.service.js.map