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
exports.AiController = void 0;
const common_1 = require("@nestjs/common");
const ai_service_1 = require("./ai.service");
const prompt_ai_dto_1 = require("./dto/prompt-ai.dto");
const auth_guard_1 = require("../auth/auth.guard");
let AiController = class AiController {
    aiService;
    constructor(aiService) {
        this.aiService = aiService;
    }
    async assistant(req, body) {
        return this.aiService.assistant(req.user.tenantId, body);
    }
    async link(createAiDto) {
        return this.aiService.upsertAI(createAiDto);
    }
    async findOne() {
        return this.aiService.findOne();
    }
    async improve(improveAiDto) {
    }
    async shorten(shortenAiDto) {
    }
    async translate(translateAiDto) {
    }
    async variations(variationsAiDto) {
    }
    async usage(id) {
        return this.aiService.usage(id);
    }
    async remove(id) {
        return this.aiService.remove(id);
    }
};
exports.AiController = AiController;
__decorate([
    (0, common_1.Post)('messages/assistant'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "assistant", null);
__decorate([
    (0, common_1.Post)('link'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "link", null);
__decorate([
    (0, common_1.Get)('link'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('messages/improve'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [prompt_ai_dto_1.PromptAiDto]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "improve", null);
__decorate([
    (0, common_1.Post)('messages/shorten'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [prompt_ai_dto_1.PromptAiDto]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "shorten", null);
__decorate([
    (0, common_1.Post)('messages/translate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [prompt_ai_dto_1.PromptAiDto]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "translate", null);
__decorate([
    (0, common_1.Post)('messages/variations'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [prompt_ai_dto_1.PromptAiDto]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "variations", null);
__decorate([
    (0, common_1.Get)('usage/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "usage", null);
__decorate([
    (0, common_1.Delete)('remove/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AiController.prototype, "remove", null);
exports.AiController = AiController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('ai'),
    __metadata("design:paramtypes", [ai_service_1.AiService])
], AiController);
//# sourceMappingURL=ai.controller.js.map