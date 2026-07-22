import { Response } from 'express';
import { CreatePaymentDto } from './dto/create-payment.dto';
export declare class PaymentsService {
    createPayment(dto: CreatePaymentDto): Promise<any>;
    generateInvoice(payment: any, res: Response): Promise<void>;
    verifyPayment(paymentRef: string): Promise<any>;
}
