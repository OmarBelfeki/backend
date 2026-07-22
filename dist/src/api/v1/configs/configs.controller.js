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
exports.ConfigsController = void 0;
const common_1 = require("@nestjs/common");
const configs_service_1 = require("./configs.service");
const provider_dto_1 = require("./dto/provider-dto");
let ConfigsController = class ConfigsController {
    configsService;
    constructor(configsService) {
        this.configsService = configsService;
    }
    async smpt(dto) {
        return this.configsService.smpt(dto);
    }
    async getSmpt() {
        return this.configsService.getSmpt();
    }
    async smptTest(dto) {
        return this.configsService.smptTest(dto);
    }
    async getProvider(type) {
        return this.configsService.getProvider(type);
    }
    async provider(dto) {
        return this.configsService.provider(dto);
    }
    async providerTest(dto) {
        return this.configsService.providerTest(dto);
    }
};
exports.ConfigsController = ConfigsController;
__decorate([
    (0, common_1.Post)('smpt'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConfigsController.prototype, "smpt", null);
__decorate([
    (0, common_1.Get)('smpt'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConfigsController.prototype, "getSmpt", null);
__decorate([
    (0, common_1.Post)('smpt/test'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConfigsController.prototype, "smptTest", null);
__decorate([
    (0, common_1.Get)('provider/:type'),
    __param(0, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConfigsController.prototype, "getProvider", null);
__decorate([
    (0, common_1.Post)('provider'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [provider_dto_1.ProviderDto]),
    __metadata("design:returntype", Promise)
], ConfigsController.prototype, "provider", null);
__decorate([
    (0, common_1.Post)('provider/test'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConfigsController.prototype, "providerTest", null);
exports.ConfigsController = ConfigsController = __decorate([
    (0, common_1.Controller)('configs'),
    __metadata("design:paramtypes", [configs_service_1.ConfigsService])
], ConfigsController);
//# sourceMappingURL=configs.controller.js.map