import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from '../../../prisma/prisma.service';
import { MailerService } from '../../../mailer/mailer.service';
import { PaymentsService } from '../payments/payments.service';
export declare class TransactionService {
    private readonly prismaService;
    private readonly mailerService;
    private readonly payments;
    constructor(prismaService: PrismaService, mailerService: MailerService, payments: PaymentsService);
    create(user: any, createTransactionDto: CreateTransactionDto): Promise<{
        transaction: {
            id: string;
            createdAt: Date;
            tenantId: string;
            status: import("../../../generated/prisma/enums").TransactionStatus;
            amount: import("@prisma/client-runtime-utils").Decimal;
            currency: string;
            konnectRef: string | null;
            nbSMS: number | null;
            remainingSMS: number | null;
            rateSMS: import("@prisma/client-runtime-utils").Decimal | null;
            invoiceUrl: string | null;
            endAt: Date | null;
        };
        paymentUrl: any;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        status: import("../../../generated/prisma/enums").TransactionStatus;
        amount: import("@prisma/client-runtime-utils").Decimal;
        currency: string;
        konnectRef: string | null;
        nbSMS: number | null;
        remainingSMS: number | null;
        rateSMS: import("@prisma/client-runtime-utils").Decimal | null;
        invoiceUrl: string | null;
        endAt: Date | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        status: import("../../../generated/prisma/enums").TransactionStatus;
        amount: import("@prisma/client-runtime-utils").Decimal;
        currency: string;
        konnectRef: string | null;
        nbSMS: number | null;
        remainingSMS: number | null;
        rateSMS: import("@prisma/client-runtime-utils").Decimal | null;
        invoiceUrl: string | null;
        endAt: Date | null;
    }>;
    update(user: any, id: string, updateTransactionDto: UpdateTransactionDto): Promise<{
        transaction: {
            id: string;
            createdAt: Date;
            tenantId: string;
            status: import("../../../generated/prisma/enums").TransactionStatus;
            amount: import("@prisma/client-runtime-utils").Decimal;
            currency: string;
            konnectRef: string | null;
            nbSMS: number | null;
            remainingSMS: number | null;
            rateSMS: import("@prisma/client-runtime-utils").Decimal | null;
            invoiceUrl: string | null;
            endAt: Date | null;
        };
        paymentUrl: any;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        tenantId: string;
        status: import("../../../generated/prisma/enums").TransactionStatus;
        amount: import("@prisma/client-runtime-utils").Decimal;
        currency: string;
        konnectRef: string | null;
        nbSMS: number | null;
        remainingSMS: number | null;
        rateSMS: import("@prisma/client-runtime-utils").Decimal | null;
        invoiceUrl: string | null;
        endAt: Date | null;
    }>;
    removeMany(ids: string[]): Promise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    removeTransactionCompany(tenantId: string): Promise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    removeTransactionCompanies(tenantIds: string[]): Promise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    breakdown(tenantId: string): Promise<{
        createdAt: Date;
        remainingSMS: number | null;
        rateSMS: import("@prisma/client-runtime-utils").Decimal | null;
    }[]>;
    rate(dto: any): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        ranges: import("@prisma/client/runtime/client").JsonValue;
    }>;
    getRate(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        ranges: import("@prisma/client/runtime/client").JsonValue;
    } | null>;
}
