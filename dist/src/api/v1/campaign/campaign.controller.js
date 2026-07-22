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
exports.CampaignController = void 0;
const common_1 = require("@nestjs/common");
const campaign_service_1 = require("./campaign.service");
const create_campaign_dto_1 = require("./dto/create-campaign.dto");
const update_campaign_dto_1 = require("./dto/update-campaign.dto");
const role_guard_1 = require("../role/role.guard");
const auth_guard_1 = require("../auth/auth.guard");
const role_decorator_1 = require("../role/role.decorator");
const role_enum_1 = require("../role/role.enum");
const audit_decorator_1 = require("../../../audit/audit.decorator");
const update_campaign_schedule_dto_1 = require("./dto/update-campaign-schedule.dto");
let CampaignController = class CampaignController {
    campaignService;
    constructor(campaignService) {
        this.campaignService = campaignService;
    }
    async create(req, createCampaignDto) {
        return this.campaignService.create(req.user.tenantId, createCampaignDto);
    }
    async findAll(req) {
        return this.campaignService.findAll(req.user.tenantId);
    }
    async findOne(req, id) {
        return this.campaignService.findOne(req.user.tenantId, id);
    }
    async update(req, id, updateCampaignDto) {
        return this.campaignService.update(req.user.tenantId, id, updateCampaignDto);
    }
    async remove(req, id) {
        return this.campaignService.remove(req.user.tenantId, id);
    }
    async send(req, id) {
        return this.campaignService.send(req.user.tenantId, id);
    }
    async updateSchedule(req, id, body) {
        return this.campaignService.updateSchedule(req.user.tenantId, id, body);
    }
    removeMany(ids) {
        return this.campaignService.removeMany(ids);
    }
};
exports.CampaignController = CampaignController;
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT, role_enum_1.Role.OPERATOR),
    (0, audit_decorator_1.AuditLog)('CREATE_CAMPAIGN'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_campaign_dto_1.CreateCampaignDto]),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "create", null);
__decorate([
    (0, audit_decorator_1.AuditLog)('SELECT_ALL_CAMPAIGN'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "findAll", null);
__decorate([
    (0, audit_decorator_1.AuditLog)('SELECT_CAMPAIGN'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "findOne", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT, role_enum_1.Role.OPERATOR),
    (0, audit_decorator_1.AuditLog)('UPDATE_CAMPAIGN'),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_campaign_dto_1.UpdateCampaignDto]),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "update", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT, role_enum_1.Role.OPERATOR),
    (0, audit_decorator_1.AuditLog)('DELETE_CAMPAIGN'),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "remove", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT, role_enum_1.Role.OPERATOR),
    (0, audit_decorator_1.AuditLog)('SEND_CAMPAIGN'),
    (0, common_1.Post)(':id/send'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "send", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT, role_enum_1.Role.OPERATOR),
    (0, audit_decorator_1.AuditLog)('UPDATE_CAMPAIGN_TO_SCHEDULED'),
    (0, common_1.Patch)(':id/schedule'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_campaign_schedule_dto_1.UpdateCampaignScheduleDto]),
    __metadata("design:returntype", Promise)
], CampaignController.prototype, "updateSchedule", null);
__decorate([
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN_CLIENT, role_enum_1.Role.OPERATOR),
    (0, audit_decorator_1.AuditLog)('DELETE_MULTI_CAMPAIGNS'),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)('ids')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], CampaignController.prototype, "removeMany", null);
exports.CampaignController = CampaignController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Controller)('campaigns'),
    __metadata("design:paramtypes", [campaign_service_1.CampaignService])
], CampaignController);
//# sourceMappingURL=campaign.controller.js.map