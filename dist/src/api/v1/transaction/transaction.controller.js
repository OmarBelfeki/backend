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
exports.TransactionController = void 0;
const common_1 = require("@nestjs/common");
const transaction_service_1 = require("./transaction.service");
const create_transaction_dto_1 = require("./dto/create-transaction.dto");
const update_transaction_dto_1 = require("./dto/update-transaction.dto");
const auth_guard_1 = require("../auth/auth.guard");
const audit_decorator_1 = require("../../../audit/audit.decorator");
let TransactionController = class TransactionController {
    transactionService;
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    async create(req, createTransactionDto) {
        return this.transactionService.create(req.user, createTransactionDto);
    }
    async breakdown(req) {
        return this.transactionService.breakdown(req.user.tenantId);
    }
    async findAll() {
        return this.transactionService.findAll();
    }
    async findOne(id) {
        return this.transactionService.findOne(id);
    }
    async update(req, id, updateTransactionDto) {
        return this.transactionService.update(req.user, id, updateTransactionDto);
    }
    async remove(id) {
        return this.transactionService.remove(id);
    }
    async removeMany(ids) {
        return this.transactionService.removeMany(ids);
    }
    async removeTransactionCompany(tenantId) {
        return this.transactionService.removeTransactionCompany(tenantId);
    }
    async removeTransactionCompanies(tenantIds) {
        return this.transactionService.removeTransactionCompanies(tenantIds);
    }
    async rate(dto) {
        return this.transactionService.rate(dto);
    }
    async getRate() {
        return this.transactionService.getRate();
    }
};
exports.TransactionController = TransactionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_transaction_dto_1.CreateTransactionDto]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('breakdown'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "breakdown", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_transaction_dto_1.UpdateTransactionDto]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "remove", null);
__decorate([
    (0, audit_decorator_1.AuditLog)('DELETE_MULTI_TRANSACTION'),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)('ids')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "removeMany", null);
__decorate([
    (0, audit_decorator_1.AuditLog)('DELETE_TRANSACTIONS_TENANT'),
    (0, common_1.Delete)('tenants/:tenantId'),
    __param(0, (0, common_1.Param)('tenantId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "removeTransactionCompany", null);
__decorate([
    (0, audit_decorator_1.AuditLog)('DELETE_TRANSACTIONS_TENANT'),
    (0, common_1.Delete)('tenants'),
    __param(0, (0, common_1.Body)('tenantIds')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "removeTransactionCompanies", null);
__decorate([
    (0, common_1.Post)('/rate/sms'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "rate", null);
__decorate([
    (0, common_1.Get)('/rate/sms'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getRate", null);
exports.TransactionController = TransactionController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Controller)('transactions'),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService])
], TransactionController);
//# sourceMappingURL=transaction.controller.js.map