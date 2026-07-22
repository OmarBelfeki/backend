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
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizePhone = normalizePhone;
exports.parseCSV = parseCSV;
exports.parseExcel = parseExcel;
exports.importContacts = importContacts;
exports.calculateCost = calculateCost;
const sync_1 = require("csv-parse/sync");
const XLSX = __importStar(require("xlsx"));
function normalizePhone(phone) {
    if (phone === undefined || phone === null)
        return null;
    phone = String(phone);
    phone = phone.replace(/\s+/g, '');
    phone = phone.replace(/^\+/, '');
    if (!phone.startsWith('216')) {
        phone = '216' + phone;
    }
    return phone;
}
function parseCSV(buffer) {
    const content = buffer.toString('utf8').replace(/^\uFEFF/, '');
    return (0, sync_1.parse)(content, {
        columns: true,
        skip_empty_lines: true,
    });
}
function parseExcel(buffer) {
    const workbook = XLSX.read(buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(worksheet);
}
function importContacts(file) {
    const ext = file.originalname.split('.').pop();
    if (ext === 'csv') {
        return parseCSV(file.buffer);
    }
    if (ext === 'xlsx' || ext === 'xls') {
        return parseExcel(file.buffer);
    }
    throw new Error('Unsupported file type');
}
async function calculateCost(messageContent) {
    const gsm7Chars = /^[A-Za-z0-9 @£$¥èéùìòÇØø\rÅåΔ_ΦΓΛΩΠΨΣΘΞÆæßÉ !"#¤%&'()*+,\-.\/:;<=>?¡ÄÖÑÜ§¿äöñüà]*$/;
    const gsm = gsm7Chars.test(messageContent);
    let nbSms = 0;
    if (gsm) {
        nbSms = Math.ceil(messageContent.length / 160);
    }
    else {
        nbSms = Math.ceil(messageContent.length / 57);
    }
    return nbSms;
}
//# sourceMappingURL=utils.js.map