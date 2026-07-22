import { Role } from '../../role/role.enum';
export declare class CreateUserDto {
    email: string;
    passwordHash: string;
    phone: string;
    role: Role;
    tenantId: string;
}
