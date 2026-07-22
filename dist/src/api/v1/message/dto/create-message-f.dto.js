"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMessageFDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_message_dto_1 = require("./create-message.dto");
class CreateMessageFDto extends (0, swagger_1.PartialType)(create_message_dto_1.CreateMessageDto) {
    file;
}
exports.CreateMessageFDto = CreateMessageFDto;
//# sourceMappingURL=create-message-f.dto.js.map