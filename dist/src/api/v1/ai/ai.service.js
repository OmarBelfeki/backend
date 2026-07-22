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
exports.AiService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
let AiService = class AiService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    parsePrompt(prompt) {
        return prompt.split("|").map(p => p.trim());
    }
    buildAI(tenantId, body) {
        const parts = this.parsePrompt(body.prompt || 'generate a text | 160');
        const action = body.action;
        let parsed = {
            action,
            tenantId,
        };
        if (action === "GENERATE") {
            parsed.prompt = parts[0];
            parsed.tone = parts[1];
            parsed.count = Number(parts[2]);
            parsed.lengthAIReponse = Number(parts[3]);
        }
        if (action === "IMPROVE") {
            parsed.prompt = parts[0];
            parsed.tone = parts[1];
            parsed.lengthAIReponse = Number(parts[2]);
        }
        if (action === "SHORTEN") {
            parsed.prompt = parts[0];
            parsed.lengthAIReponse = Number(parts[1]);
        }
        if (action === "TRANSLATE") {
            parsed.prompt = parts[0];
            parsed.targetLanguage = parts[1];
        }
        if (action === "VARIATIONS") {
            parsed.prompt = parts[0];
            parsed.tone = parts[1];
            parsed.count = Number(parts[2]);
        }
        return parsed;
    }
    async assistant(tenantId, body) {
        const payload = this.buildAI(tenantId, body);
        const link = await this.findOne();
        try {
            const res = await fetch(link.linkSMS.toString(), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            if (data.code) {
                throw new common_1.BadRequestException(data.message);
            }
            return data;
        }
        catch (err) {
            throw new common_1.BadRequestException(err.message);
        }
    }
    async upsertAI(createAiDto) {
        const field = createAiDto.type === 'SMS' ? 'linkSMS' : 'linkAnti';
        const id = 'singleton-ai-page';
        return this.prismaService.aI.upsert({
            where: { id },
            update: {
                [field]: createAiDto.link,
            },
            create: {
                id,
                [field]: createAiDto.link,
            },
        });
    }
    async findOne() {
        const exist = await this.prismaService.aI.findFirst({
            where: {
                id: "singleton-ai-page"
            }
        });
        if (!exist) {
            throw new common_1.NotFoundException();
        }
        return exist;
    }
    async usage(id) {
        return `This action returns a #${id} ai`;
    }
    async remove(id) {
        const exist = await this.prismaService.campaign.findUnique({
            where: { id },
        });
        if (!exist)
            throw new common_1.NotFoundException('Campaign not found');
        return this.prismaService.aI.delete({ where: { id } });
    }
};
exports.AiService = AiService;
exports.AiService = AiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AiService);
//# sourceMappingURL=ai.service.js.map