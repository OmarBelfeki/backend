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
exports.ProviderDto = void 0;
const class_validator_1 = require("class-validator");
var SmsType;
(function (SmsType) {
    SmsType["OTP"] = "OTP";
    SmsType["RESETPASSWORD"] = "RESETPASSWORD";
})(SmsType || (SmsType = {}));
class ProviderDto {
    mobileTest;
    sender;
    msg;
    apiKey;
    type;
}
exports.ProviderDto = ProviderDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(11, 11, { message: 'Phone number must be exactly 11 digits' }),
    (0, class_validator_1.Matches)(/^216\d{8}$/, { message: 'Phone number must start with 216 and be a valid Tunisian number' }),
    __metadata("design:type", String)
], ProviderDto.prototype, "mobileTest", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProviderDto.prototype, "sender", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProviderDto.prototype, "msg", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'API key is required' }),
    __metadata("design:type", String)
], ProviderDto.prototype, "apiKey", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(SmsType, { message: 'Type must be either OTP or RESETPASSWORD' }),
    __metadata("design:type", String)
], ProviderDto.prototype, "type", void 0);
//# sourceMappingURL=provider-dto.js.map