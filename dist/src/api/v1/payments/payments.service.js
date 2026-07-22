"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const pdfkit_1 = __importDefault(require("pdfkit"));
let PaymentsService = class PaymentsService {
    async createPayment(dto) {
        try {
            const payload = {
                receiverWalletId: '6a11bd372fd977d0331ee477',
                amount: dto.amount,
                type: 'immediate',
                acceptedPaymentMethods: [
                    'bank_card',
                    'e-DINAR',
                ],
                lifespan: 10,
                checkoutForm: true,
                addPaymentFeesToAmount: true,
                orderId: `ORDER_${Date.now()}`,
                firstName: dto.firstName,
                lastName: dto.lastName,
                email: dto.email,
                phoneNumber: dto.phoneNumber,
            };
            const response = await fetch(`${process.env.KONNECT_API_URL}/payments/init-payment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.KONNECT_API_KEY,
                },
                body: JSON.stringify(payload),
            });
            const data = await response.json();
            if (!response.ok) {
                console.error(data);
                throw new common_1.InternalServerErrorException('Konnect payment failed');
            }
            return data;
        }
        catch (error) {
            console.error(error);
            throw new common_1.InternalServerErrorException('Payment initialization failed');
        }
    }
    async generateInvoice(payment, res) {
        const doc = new pdfkit_1.default();
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=invoice-${payment.orderId}.pdf`);
        doc.pipe(res);
        doc.fontSize(20).text('Invoice', {
            align: 'center',
        });
        doc.moveDown();
        doc.text(`Order ID: ${payment.orderId}`);
        doc.text(`Payment ID: ${payment.id}`);
        doc.text(`Amount: ${payment.amount} ${payment.token}`);
        doc.text(`Status: ${payment.status}`);
        doc.text(`Customer: ${payment.paymentDetails.name}`);
        doc.text(`Email: ${payment.paymentDetails.email}`);
        doc.end();
    }
    async verifyPayment(paymentRef) {
        const response = await fetch(`${process.env.KONNECT_API_URL}/payments/${paymentRef}`);
        return response.json();
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)()
], PaymentsService);
//# sourceMappingURL=payments.service.js.map