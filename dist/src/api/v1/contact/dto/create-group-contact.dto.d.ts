import { CreateContactDto } from './create-contact.dto';
declare const CreateGroupContactDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateContactDto>>;
export declare class CreateGroupContactDto extends CreateGroupContactDto_base {
    contacts: any;
    groupId: string;
}
export {};
