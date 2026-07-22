"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLegalDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_legal_dto_1 = require("./create-legal.dto");
class UpdateLegalDto extends (0, swagger_1.PartialType)(create_legal_dto_1.CreateLegalDto) {
}
exports.UpdateLegalDto = UpdateLegalDto;
//# sourceMappingURL=update-legal.dto.js.map