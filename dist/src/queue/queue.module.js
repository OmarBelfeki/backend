"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueModule = void 0;
const common_1 = require("@nestjs/common");
const bullmq_1 = require("@nestjs/bullmq");
const queue_service_1 = require("./queue.service");
const queue_processor_1 = require("./campaign/queue.processor");
const prisma_service_1 = require("../prisma/prisma.service");
const contacts_processor_1 = require("./contacts/contacts.processor");
const spreadsheet_processor_1 = require("./spreadsheet/spreadsheet.processor");
const mailer_service_1 = require("../mailer/mailer.service");
const dlr_processor_1 = require("./dlr/dlr.processor");
const task_DlrService_1 = require("../tasks/task.DlrService");
const resend_processor_1 = require("./resend/resend.processor");
let QueueModule = class QueueModule {
};
exports.QueueModule = QueueModule;
exports.QueueModule = QueueModule = __decorate([
    (0, common_1.Module)({
        imports: [
            bullmq_1.BullModule.registerQueue({ name: 'sms-queue' }, { name: 'import-contacts' }, { name: 'import-spreadsheet' }, { name: 'dlr-queue' }, { name: 'resend-queue' }),
        ],
        providers: [
            queue_service_1.QueueService,
            queue_processor_1.QueueProcessor,
            prisma_service_1.PrismaService,
            contacts_processor_1.ContactsProcessor,
            spreadsheet_processor_1.SpreadsheetProcessor,
            mailer_service_1.MailerService,
            dlr_processor_1.DlrProcessor,
            task_DlrService_1.DlrService,
            resend_processor_1.ResendProcessor
        ],
        exports: [queue_service_1.QueueService, bullmq_1.BullModule],
    })
], QueueModule);
//# sourceMappingURL=queue.module.js.map