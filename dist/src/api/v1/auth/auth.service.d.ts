import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../../prisma/prisma.service';
import { OtpUserDto } from '../users/dto/otp-user.dto';
import { MailerService } from '../../../mailer/mailer.service';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    private readonly mailerService;
    constructor(prisma: PrismaService, jwtService: JwtService, mailerService: MailerService);
    login(email: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            sub: any;
            email: any;
            role: any;
            tenantId: any;
        };
    }>;
    refresh(userId: string, refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            sub: any;
            email: any;
            role: any;
            tenantId: any;
        };
    }>;
    logout(userId: string): Promise<{
        message: string;
    }>;
    changePassword(userId: string, currentPassword: string, newPassword: string): Promise<{
        message: string;
    }>;
    private generateToken;
    updateRefreshToken(userId: string, refreshToken: string): Promise<void>;
    otp(otpUserDto: OtpUserDto): Promise<{
        success: boolean;
        code: any;
        message: any;
        providerMessage: any;
        messageId: any;
    } | {
        success: boolean;
        message: any;
        code?: undefined;
        providerMessage?: undefined;
        messageId?: undefined;
    } | undefined>;
    getOtp(key: string): Promise<{
        email: string | null;
        phone: string | null;
        userId: string;
        otp: string | null;
    } | null>;
    resetPassword(email: string, password: string): Promise<{
        message: string;
    }>;
    verified(phone: string): Promise<{
        message: string;
    }>;
    superAdmin(): Promise<void>;
}
