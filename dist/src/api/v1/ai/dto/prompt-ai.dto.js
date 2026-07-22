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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptAiDto = exports.ActionType = void 0;
const class_validator_1 = require("class-validator");
var ActionType;
(function (ActionType) {
    ActionType["GENERATE"] = "GENERATE";
    ActionType["IMPROVE"] = "IMPROVE";
    ActionType["SHORTEN"] = "SHORTEN";
    ActionType["TRANSLATE"] = "TRANSLATE";
    ActionType["VARIATIONS"] = "VARIATIONS";
})(ActionType || (exports.ActionType = ActionType = {}));
class PromptAiDto {
    action;
    prompt;
    targetLanguage;
    count;
    tone;
    outputFormat;
    tenantId;
}
exports.PromptAiDto = PromptAiDto;
__decorate([
    (0, class_validator_1.IsEnum)(ActionType),
    __metadata("design:type", String)
], PromptAiDto.prototype, "action", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PromptAiDto.prototype, "prompt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PromptAiDto.prototype, "targetLanguage", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], PromptAiDto.prototype, "count", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PromptAiDto.prototype, "tone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], PromptAiDto.prototype, "outputFormat", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], PromptAiDto.prototype, "tenantId", void 0);
//# sourceMappingURL=prompt-ai.dto.js.map