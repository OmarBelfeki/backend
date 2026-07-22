declare enum TransactionStatus {
    PENDING = "PENDING",
    COMPLETED = "COMPLETED",
    FAILED = "FAILED"
}
export declare class CreateTransactionDto {
    amount: number;
    currency: string;
    konnectRef: string;
    status: TransactionStatus;
    invoiceUrl: string;
    tenantId: string;
    endAt: Date;
}
export {};
