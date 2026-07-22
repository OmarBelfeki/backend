"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSenderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_sender_dto_1 = require("./create-sender.dto");
class UpdateSenderDto extends (0, swagger_1.PartialType)(create_sender_dto_1.CreateSenderDto) {
}
exports.UpdateSenderDto = UpdateSenderDto;
//# sourceMappingURL=update-sender.dto.js.map