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
exports.GroupController = void 0;
const common_1 = require("@nestjs/common");
const group_service_1 = require("./group.service");
const create_group_dto_1 = require("./dto/create-group.dto");
const role_guard_1 = require("../role/role.guard");
const auth_guard_1 = require("../auth/auth.guard");
const role_decorator_1 = require("../role/role.decorator");
const role_enum_1 = require("../role/role.enum");
const audit_decorator_1 = require("../../../audit/audit.decorator");
const update_group_dto_1 = require("./dto/update-group.dto");
let GroupController = class GroupController {
    groupService;
    constructor(groupService) {
        this.groupService = groupService;
    }
    async create(req, createGroupDto) {
        return this.groupService.create(req.user.tenantId, createGroupDto);
    }
    async findAll(req) {
        return this.groupService.findAll(req.user.tenantId);
    }
    async findOne(req, id) {
        return this.groupService.findOne(req.user.tenantId, id);
    }
    async update(req, id, updateGroupDto) {
        return this.groupService.update(req.user.tenantId, id, updateGroupDto);
    }
    async remove(req, id) {
        return this.groupService.remove(req.user.tenantId, id);
    }
    async addContact(req, id, idContact) {
        return this.groupService.addContact(req.user.tenantId, id, idContact);
    }
    async removeContact(req, id, idContact) {
        return this.groupService.removeContact(req.user.tenantId, id, idContact);
    }
    removeMany(req, ids) {
        return this.groupService.removeMany(req.user.tenantId, ids);
    }
    removeManyContacts(req, id, contactIds) {
        return this.groupService.removeManyContacts(req.user.tenantId, id, contactIds);
    }
};
exports.GroupController = GroupController;
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT),
    (0, audit_decorator_1.AuditLog)('CREATE_GROUP'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_group_dto_1.CreateGroupDto]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "create", null);
__decorate([
    (0, audit_decorator_1.AuditLog)('SELECT_ALL_GROUPS'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "findAll", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT),
    (0, audit_decorator_1.AuditLog)('SELECT_GROUP'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "findOne", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT),
    (0, audit_decorator_1.AuditLog)('UPDATE_GROUP'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_group_dto_1.UpdateGroupDto]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "update", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT),
    (0, audit_decorator_1.AuditLog)('REMOVE_GROUP'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "remove", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT),
    (0, audit_decorator_1.AuditLog)('ADD_CONTACT_TO_GROUP'),
    (0, common_1.Post)(':id/contacts/:idContact'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Param)('idContact')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "addContact", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT),
    (0, audit_decorator_1.AuditLog)('REMOVE_CONTACT_FROM_GROUP'),
    (0, common_1.Delete)(':id/contacts/:idContact'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Param)('idContact')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "removeContact", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT),
    (0, audit_decorator_1.AuditLog)('DELETE_MULTI_GROUP'),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)('ids')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "removeMany", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT),
    (0, audit_decorator_1.AuditLog)('REMOVE_MULTI_CONTACT_GROUP'),
    (0, common_1.Delete)(':id/contacts'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)('contactIds')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Array]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "removeManyContacts", null);
exports.GroupController = GroupController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Controller)('groups'),
    __metadata("design:paramtypes", [group_service_1.GroupService])
], GroupController);
//# sourceMappingURL=group.controller.js.map