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
exports.LegalController = void 0;
const common_1 = require("@nestjs/common");
const legal_service_1 = require("./legal.service");
const create_legal_dto_1 = require("./dto/create-legal.dto");
const role_decorator_1 = require("../role/role.decorator");
const role_enum_1 = require("../role/role.enum");
let LegalController = class LegalController {
    legalService;
    constructor(legalService) {
        this.legalService = legalService;
    }
    async upsertLegal(createLegalDto) {
        return this.legalService.upsertLegal(createLegalDto);
    }
    async findOne() {
        return this.legalService.findOne();
    }
};
exports.LegalController = LegalController;
__decorate([
    (0, common_1.Post)(),
    (0, role_decorator_1.Roles)(role_enum_1.Role.SUPER_ADMIN),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_legal_dto_1.CreateLegalDto]),
    __metadata("design:returntype", Promise)
], LegalController.prototype, "upsertLegal", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LegalController.prototype, "findOne", null);
exports.LegalController = LegalController = __decorate([
    (0, common_1.Controller)('legal'),
    __metadata("design:paramtypes", [legal_service_1.LegalService])
], LegalController);
//# sourceMappingURL=legal.controller.js.map