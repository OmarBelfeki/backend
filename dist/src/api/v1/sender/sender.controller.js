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
exports.SenderController = void 0;
const common_1 = require("@nestjs/common");
const sender_service_1 = require("./sender.service");
const create_sender_dto_1 = require("./dto/create-sender.dto");
const auth_guard_1 = require("../auth/auth.guard");
const role_guard_1 = require("../role/role.guard");
const role_decorator_1 = require("../role/role.decorator");
const role_enum_1 = require("../role/role.enum");
const audit_decorator_1 = require("../../../audit/audit.decorator");
const update_sender_dto_1 = require("./dto/update-sender.dto");
let SenderController = class SenderController {
    senderService;
    constructor(senderService) {
        this.senderService = senderService;
    }
    async create(req, createSenderDto) {
        return this.senderService.create(req.user.tenantId, createSenderDto);
    }
    async findAll(req) {
        return this.senderService.findAll(req.user);
    }
    async findOne(id) {
        return this.senderService.findOne(id);
    }
    async update(req, id, data) {
        return this.senderService.update(req.user.tenantId, id, data);
    }
    async approve(id) {
        return this.senderService.approve(id);
    }
    async block(id) {
        return this.senderService.block(id);
    }
    async remove(req, id) {
        return this.senderService.remove(req.user.tenantId, id);
    }
    removeMany(ids) {
        return this.senderService.removeMany(ids);
    }
};
exports.SenderController = SenderController;
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT, role_enum_1.Role.SUPER_ADMIN),
    (0, audit_decorator_1.AuditLog)('CREATE_SENDER'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_sender_dto_1.CreateSenderDto]),
    __metadata("design:returntype", Promise)
], SenderController.prototype, "create", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT, role_enum_1.Role.SUPER_ADMIN),
    (0, audit_decorator_1.AuditLog)('SELECT_ALL_SENDER'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SenderController.prototype, "findAll", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT, role_enum_1.Role.SUPER_ADMIN),
    (0, audit_decorator_1.AuditLog)('SELECT_SENDER'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SenderController.prototype, "findOne", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT),
    (0, audit_decorator_1.AuditLog)('UPDATE_SENDER'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_sender_dto_1.UpdateSenderDto]),
    __metadata("design:returntype", Promise)
], SenderController.prototype, "update", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.SUPER_ADMIN),
    (0, audit_decorator_1.AuditLog)('APPROVE_SENDER'),
    (0, common_1.Patch)(':id/approve'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SenderController.prototype, "approve", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.SUPER_ADMIN),
    (0, audit_decorator_1.AuditLog)('BLOCK_SENDER'),
    (0, common_1.Patch)(':id/block'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SenderController.prototype, "block", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT),
    (0, audit_decorator_1.AuditLog)('DELETE_SENDER'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], SenderController.prototype, "remove", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT),
    (0, audit_decorator_1.AuditLog)('DELETE_MULTI_SENDER'),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)('ids')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], SenderController.prototype, "removeMany", null);
exports.SenderController = SenderController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Controller)('sender-ids'),
    __metadata("design:paramtypes", [sender_service_1.SenderService])
], SenderController);
//# sourceMappingURL=sender.controller.js.map