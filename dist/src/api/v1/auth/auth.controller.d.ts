import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { ChangePasswordDto } from './dto/change-password-auth.dto';
import { OtpUserDto } from '../users/dto/otp-user.dto';
export declare class AuthController {
    private readonly auth;
    constructor(auth: AuthService);
    login(signInDto: LoginAuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            sub: any;
            email: any;
            role: any;
            tenantId: any;
        };
    }>;
    superAdmin(): Promise<void>;
    logout(req: any): Promise<{
        message: string;
    }>;
    refresh(body: {
        userId: string;
        refreshToken: string;
    }): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            sub: any;
            email: any;
            role: any;
            tenantId: any;
        };
    }>;
    changePassword(req: any, changePasswordDto: ChangePasswordDto): Promise<{
        message: string;
    }>;
    resetPassword(email: string, data: {
        password: string;
    }): Promise<{
        message: string;
    }>;
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
    verified(phone: string): Promise<{
        message: string;
    }>;
}
