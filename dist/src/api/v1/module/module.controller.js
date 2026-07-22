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
exports.ModuleController = void 0;
const common_1 = require("@nestjs/common");
const module_service_1 = require("./module.service");
const create_module_dto_1 = require("./dto/create-module.dto");
const update_module_dto_1 = require("./dto/update-module.dto");
const auth_guard_1 = require("../auth/auth.guard");
const role_guard_1 = require("../role/role.guard");
const role_decorator_1 = require("../role/role.decorator");
const role_enum_1 = require("../role/role.enum");
let ModuleController = class ModuleController {
    moduleService;
    constructor(moduleService) {
        this.moduleService = moduleService;
    }
    async create(createModuleDto) {
        return this.moduleService.create(createModuleDto);
    }
    async findAll() {
        return this.moduleService.findAll();
    }
    async findOne(id) {
        return this.moduleService.findOne(id);
    }
    async update(id, updateModuleDto) {
        return this.moduleService.update(id, updateModuleDto);
    }
    async remove(id) {
        return this.moduleService.remove(id);
    }
    async bye(dto) {
        return this.moduleService.bye(dto);
    }
};
exports.ModuleController = ModuleController;
__decorate([
    (0, common_1.UseGuards)(role_guard_1.RolesGuard),
    (0, role_decorator_1.Roles)(role_enum_1.Role.SUPER_ADMIN),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_module_dto_1.CreateModuleDto]),
    __metadata("design:returntype", Promise)
], ModuleController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ModuleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModuleController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(role_guard_1.RolesGuard),
    (0, role_decorator_1.Roles)(role_enum_1.Role.SUPER_ADMIN),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_module_dto_1.UpdateModuleDto]),
    __metadata("design:returntype", Promise)
], ModuleController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(role_guard_1.RolesGuard),
    (0, role_decorator_1.Roles)(role_enum_1.Role.SUPER_ADMIN),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModuleController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('/bye'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ModuleController.prototype, "bye", null);
exports.ModuleController = ModuleController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('modules'),
    __metadata("design:paramtypes", [module_service_1.ModuleService])
], ModuleController);
//# sourceMappingURL=module.controller.js.map