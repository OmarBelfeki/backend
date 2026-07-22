"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const xml2js_1 = require("xml2js");
const nodemailer = __importStar(require("nodemailer"));
let ConfigsService = class ConfigsService {
    prismaService;
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getSmpt() {
        return this.prismaService.smtp.findUnique({
            where: { id: 'smtp-config' }
        });
    }
    async smpt(dto) {
        const id = 'smtp-config';
        return this.prismaService.smtp.upsert({
            where: { id },
            update: { ...dto },
            create: { id, ...dto },
        });
    }
    async smptTest(dto) {
        console.log(dto);
        const authMethos = dto.authMethod === 'LOGINPASSWORD'
            ?
                'LOGIN'
            :
                dto.authMethod === 'OAUTH2'
                    ?
                        'XOAUTH2'
                    :
                        'PLAIN';
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                host: dto.host || process.env.MAIL_HOST,
                port: dto.port || process.env.MAIL_PORT,
                secure: dto.type !== 'STARTTLS',
                authMethod: authMethos,
                auth: {
                    user: dto.username || process.env.MAIL_USER,
                    pass: dto.password || process.env.MAIL_PASSWORD,
                },
            });
            const options = {
                from: {
                    name: dto.senderName || process.env.APP_NAME,
                    address: dto.senderEmail ||
                        process.env.DEFAULT_MAIL_FROM,
                },
                to: [
                    {
                        name: dto.senderName ||
                            process.env.APP_NAME,
                        address: dto.senderEmail ||
                            process.env.DEFAULT_MAIL_FROM,
                    },
                ],
                subject: 'Testing Email',
                html: '<p>Test Email</p>',
            };
            const info = await transporter.sendMail(options);
            return {
                success: true,
                message: 'Email sent successfully',
                data: {
                    messageId: info.messageId,
                    response: info.response,
                    accepted: info.accepted,
                    rejected: info.rejected,
                },
            };
        }
        catch (e) {
            console.log('email error', e);
            return {
                success: false,
                message: e.message || 'SMTP connection failed',
                error: {
                    code: e.code || null,
                    command: e.command || null,
                    response: e.response || null,
                },
            };
        }
    }
    async getProvider(type) {
        return this.prismaService.testProvider.findFirst({
            where: { type: type }
        });
    }
    async provider(dto) {
        return this.prismaService.testProvider.upsert({
            where: { type: dto.type },
            update: { ...dto },
            create: { ...dto },
        });
    }
    async providerTest(dto) {
        const myMobile = dto.mobileTest;
        const mySms = dto.msg;
        const mySender = dto.sender;
        const key = dto.apiKey;
        const tunisianPhoneRegex = /^(216)?[2459]\d{7}$/;
        if (!tunisianPhoneRegex.test(myMobile)) {
            throw new common_1.BadRequestException('Invalid Tunisian mobile number');
        }
        if (!mySms || mySms.length > 160) {
            throw new common_1.BadRequestException('SMS message must be between 1 and 160 characters');
        }
        if (!mySender ||
            mySender.length < 3 ||
            mySender.length > 11) {
            throw new common_1.BadRequestException('Sender must be between 3 and 11 characters');
        }
        if (!key) {
            throw new common_1.BadRequestException('API key is required');
        }
        const normalizedMobile = myMobile.startsWith('216')
            ? myMobile
            : `216${myMobile}`;
        const smsErrors = {
            '200': 'Data OK',
            '400': 'Absence de la clé',
            '401': 'Clé non autorisée',
            '402': 'Crédit insuffisant',
            '420': 'Quota journalier dépassé',
            '430': 'Contenu manquant',
            '431': 'Destination manquante',
            '440': 'Contenu trop long',
            '441': 'Destination non autorisée',
            '442': 'Sender non autorisée',
        };
        const url = `http://bulk.smsing.tn/Api/Api.aspx?fct=sms&key=${key}&mobile=${normalizedMobile}&sms=${mySms}&sender=${mySender}`;
        try {
            const res = await fetch(url);
            const xml = await res.text();
            const parsed = await (0, xml2js_1.parseStringPromise)(xml);
            const status = parsed.response.status[0];
            const statusCode = status.status_code[0];
            const statusMsg = status.status_msg[0];
            const messageId = status.message_id?.[0] || null;
            if (statusCode === '200') {
                await this.prismaService.message.create({
                    data: {
                        phone: normalizedMobile,
                        messageBody: dto.msg,
                        costInCredits: 0.49,
                        type: 'TEST',
                        providerMsgId: messageId,
                        status: 'UNDELIV'
                    }
                });
            }
            return {
                success: statusCode === '200',
                code: statusCode,
                message: smsErrors[statusCode] || statusMsg,
                providerMessage: statusMsg,
                messageId,
            };
        }
        catch (err) {
            return {
                success: false,
                message: err.message,
            };
        }
    }
};
exports.ConfigsService = ConfigsService;
exports.ConfigsService = ConfigsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ConfigsService);
//# sourceMappingURL=configs.service.js.map