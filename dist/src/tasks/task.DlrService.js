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
exports.DlrService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const xml2js_1 = require("xml2js");
let DlrService = class DlrService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async checkSingleMessage(msg) {
        try {
            if (!msg.tenantId) {
                console.warn(`Skipping message ${msg.id} - missing tenantId`);
                return;
            }
            const tenant = await this.prisma.tenant.findFirst({ where: { id: msg.tenantId } });
            const url = `http://bulk.smsing.tn/Api/Api.aspx?fct=dlr&key=${tenant?.providerApiKey}&msg_id=${msg.providerMsgId}`;
            const res = await fetch(url);
            const xml = await res.text();
            const parsed = await (0, xml2js_1.parseStringPromise)(xml);
            const message = parsed?.Acknowledgement?.message?.[0];
            console.log(message);
            if (!message)
                return;
            const status = message.acknowledgement?.[0];
            const mappedStatus = this.mapStatus(status);
            await this.prisma.message.update({
                where: { id: msg.id },
                data: {
                    status: mappedStatus,
                    deliveredAt: mappedStatus === 'DELIVRD' ? new Date() : msg.deliveredAt,
                },
            });
        }
        catch (err) {
            console.error(`DLR error for message ${msg.id}:`, err.message);
        }
    }
    mapStatus(status) {
        switch (status) {
            case 'DELIVRD':
                return 'DELIVRD';
            case 'UNDELIV':
                return 'UNDELIV';
            case 'EXPIRED':
                return 'EXPIRED';
            case 'REJECTED':
                return 'REJECTED';
            case 'SKIPPED':
                return 'UNDELIV';
            default:
                return 'UNKNOWN';
        }
    }
};
exports.DlrService = DlrService;
exports.DlrService = DlrService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DlrService);
//# sourceMappingURL=task.DlrService.js.map