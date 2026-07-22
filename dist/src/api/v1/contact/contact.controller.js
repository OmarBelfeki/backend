"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactController = void 0;
const common_1 = require("@nestjs/common");
const contact_service_1 = require("./contact.service");
const create_contact_dto_1 = require("./dto/create-contact.dto");
const update_contact_dto_1 = require("./dto/update-contact.dto");
const auth_guard_1 = require("../auth/auth.guard");
const platform_express_1 = require("@nestjs/platform-express");
const role_guard_1 = require("../role/role.guard");
const role_decorator_1 = require("../role/role.decorator");
const role_enum_1 = require("../role/role.enum");
const audit_decorator_1 = require("../../../audit/audit.decorator");
let ContactController = class ContactController {
    contactService;
    constructor(contactService) {
        this.contactService = contactService;
    }
    async create(req, createContactDto) {
        return this.contactService.create(req.user.tenantId, createContactDto);
    }
    async findAll(req) {
        return this.contactService.findAll(req.user.tenantId);
    }
    async findOne(req, id) {
        return this.contactService.findOne(req.user.tenantId, id);
    }
    async update(req, id, updateContactDto) {
        return this.contactService.update(req.user.tenantId, id, updateContactDto);
    }
    async remove(req, id) {
        return this.contactService.remove(req.user.tenantId, id);
    }
    async blacklist(req, id) {
        return this.contactService.blacklist(req.user.tenantId, id);
    }
    async uploadFile(req, id, file) {
        return this.contactService.uploadFile(req.user.tenantId, id, file);
    }
    async importStatus(req, id) {
        return this.contactService.importStatus(req.user.tenantId, id);
    }
    removeMany(req, ids) {
        return this.contactService.removeMany(req.user.tenantId, ids);
    }
    async import(req, file, body) {
        return this.contactService.import(req.user.tenantId, file, body);
    }
    async groupContact(req, dto) {
        return this.contactService.groupContact(req.user.tenantId, dto);
    }
    async copyTo(req, dto) {
        return this.contactService.copyTo(req.user.tenantId, dto);
    }
    async moveTo(req, dto) {
        return this.contactService.moveTo(req.user.tenantId, dto);
    }
};
exports.ContactController = ContactController;
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT),
    (0, audit_decorator_1.AuditLog)('CREATE_CONTACT'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_contact_dto_1.CreateContactDto]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "create", null);
__decorate([
    (0, audit_decorator_1.AuditLog)('SELECT_ALL_CONTACT'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "findAll", null);
__decorate([
    (0, audit_decorator_1.AuditLog)('SELECT_CONTACT'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "findOne", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT),
    (0, audit_decorator_1.AuditLog)('UPDATE_CONTACT'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_contact_dto_1.UpdateContactDto]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "update", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT),
    (0, audit_decorator_1.AuditLog)('DELETE_CONTACT'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "remove", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT),
    (0, audit_decorator_1.AuditLog)('BLACKLIST_CONTACT'),
    (0, common_1.Patch)(':id/blacklist'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "blacklist", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        limits: { fileSize: 5 * 1024 * 1024 },
        fileFilter: (req, file, callback) => {
            const allowedTypes = ['text/csv', 'application/vnd.ms-excel'];
            if (!allowedTypes.includes(file.mimetype)) {
                return callback(new common_1.BadRequestException('Only CSV or XLSX files allowed'), false);
            }
            callback(null, true);
        },
    })),
    (0, audit_decorator_1.AuditLog)('IMPORT_CONTACT'),
    (0, common_1.Post)(':id/import'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "uploadFile", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT),
    (0, audit_decorator_1.AuditLog)('SELECT_IMPORT_CONTACT'),
    (0, common_1.Get)(':id/import/customFile'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "importStatus", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT),
    (0, audit_decorator_1.AuditLog)('DELETE_MULTI_CONTACT'),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)('ids')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", void 0)
], ContactController.prototype, "removeMany", null);
__decorate([
    (0, common_1.Post)('import'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        limits: { fileSize: 10 * 1024 * 1024 },
    })),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "import", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT),
    (0, audit_decorator_1.AuditLog)('CREATE_GROUP_CONTACTS'),
    (0, common_1.Post)('groupContact'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "groupContact", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT),
    (0, audit_decorator_1.AuditLog)('CREATE_COPY_GROUP_CONTACTS'),
    (0, common_1.Post)('copy'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "copyTo", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT),
    (0, audit_decorator_1.AuditLog)('CREATE_MOVE_GROUP_CONTACTS'),
    (0, common_1.Post)('move'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ContactController.prototype, "moveTo", null);
exports.ContactController = ContactController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Controller)('contacts'),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], ContactController);
//# sourceMappingURL=contact.controller.js.map