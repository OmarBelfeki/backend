"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLog = void 0;
const common_1 = require("@nestjs/common");
const audit_constants_1 = require("./audit.constants");
const AuditLog = (action) => (0, common_1.SetMetadata)(audit_constants_1.AUDIT_LOG_KEY, action);
exports.AuditLog = AuditLog;
//# sourceMappingURL=audit.decorator.js.map