import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    create(req: any, createTransactionDto: CreateTransactionDto): Promise<{
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
    breakdown(req: any): Promise<{
        createdAt: Date;
        remainingSMS: number | null;
        rateSMS: import("@prisma/client-runtime-utils").Decimal | null;
    }[]>;
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
    update(req: any, id: string, updateTransactionDto: UpdateTransactionDto): Promise<{
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
