import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TransactionModel = runtime.Types.Result.DefaultSelection<Prisma.$TransactionPayload>;
export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null;
    _avg: TransactionAvgAggregateOutputType | null;
    _sum: TransactionSumAggregateOutputType | null;
    _min: TransactionMinAggregateOutputType | null;
    _max: TransactionMaxAggregateOutputType | null;
};
export type TransactionAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
    nbSMS: number | null;
    remainingSMS: number | null;
    rateSMS: runtime.Decimal | null;
};
export type TransactionSumAggregateOutputType = {
    amount: runtime.Decimal | null;
    nbSMS: number | null;
    remainingSMS: number | null;
    rateSMS: runtime.Decimal | null;
};
export type TransactionMinAggregateOutputType = {
    id: string | null;
    amount: runtime.Decimal | null;
    currency: string | null;
    konnectRef: string | null;
    nbSMS: number | null;
    remainingSMS: number | null;
    rateSMS: runtime.Decimal | null;
    status: $Enums.TransactionStatus | null;
    invoiceUrl: string | null;
    createdAt: Date | null;
    endAt: Date | null;
    tenantId: string | null;
};
export type TransactionMaxAggregateOutputType = {
    id: string | null;
    amount: runtime.Decimal | null;
    currency: string | null;
    konnectRef: string | null;
    nbSMS: number | null;
    remainingSMS: number | null;
    rateSMS: runtime.Decimal | null;
    status: $Enums.TransactionStatus | null;
    invoiceUrl: string | null;
    createdAt: Date | null;
    endAt: Date | null;
    tenantId: string | null;
};
export type TransactionCountAggregateOutputType = {
    id: number;
    amount: number;
    currency: number;
    konnectRef: number;
    nbSMS: number;
    remainingSMS: number;
    rateSMS: number;
    status: number;
    invoiceUrl: number;
    createdAt: number;
    endAt: number;
    tenantId: number;
    _all: number;
};
export type TransactionAvgAggregateInputType = {
    amount?: true;
    nbSMS?: true;
    remainingSMS?: true;
    rateSMS?: true;
};
export type TransactionSumAggregateInputType = {
    amount?: true;
    nbSMS?: true;
    remainingSMS?: true;
    rateSMS?: true;
};
export type TransactionMinAggregateInputType = {
    id?: true;
    amount?: true;
    currency?: true;
    konnectRef?: true;
    nbSMS?: true;
    remainingSMS?: true;
    rateSMS?: true;
    status?: true;
    invoiceUrl?: true;
    createdAt?: true;
    endAt?: true;
    tenantId?: true;
};
export type TransactionMaxAggregateInputType = {
    id?: true;
    amount?: true;
    currency?: true;
    konnectRef?: true;
    nbSMS?: true;
    remainingSMS?: true;
    rateSMS?: true;
    status?: true;
    invoiceUrl?: true;
    createdAt?: true;
    endAt?: true;
    tenantId?: true;
};
export type TransactionCountAggregateInputType = {
    id?: true;
    amount?: true;
    currency?: true;
    konnectRef?: true;
    nbSMS?: true;
    remainingSMS?: true;
    rateSMS?: true;
    status?: true;
    invoiceUrl?: true;
    createdAt?: true;
    endAt?: true;
    tenantId?: true;
    _all?: true;
};
export type TransactionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    cursor?: Prisma.TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TransactionCountAggregateInputType;
    _avg?: TransactionAvgAggregateInputType;
    _sum?: TransactionSumAggregateInputType;
    _min?: TransactionMinAggregateInputType;
    _max?: TransactionMaxAggregateInputType;
};
export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
    [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTransaction[P]> : Prisma.GetScalarType<T[P], AggregateTransaction[P]>;
};
export type TransactionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithAggregationInput | Prisma.TransactionOrderByWithAggregationInput[];
    by: Prisma.TransactionScalarFieldEnum[] | Prisma.TransactionScalarFieldEnum;
    having?: Prisma.TransactionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransactionCountAggregateInputType | true;
    _avg?: TransactionAvgAggregateInputType;
    _sum?: TransactionSumAggregateInputType;
    _min?: TransactionMinAggregateInputType;
    _max?: TransactionMaxAggregateInputType;
};
export type TransactionGroupByOutputType = {
    id: string;
    amount: runtime.Decimal;
    currency: string;
    konnectRef: string | null;
    nbSMS: number | null;
    remainingSMS: number | null;
    rateSMS: runtime.Decimal | null;
    status: $Enums.TransactionStatus;
    invoiceUrl: string | null;
    createdAt: Date;
    endAt: Date | null;
    tenantId: string;
    _count: TransactionCountAggregateOutputType | null;
    _avg: TransactionAvgAggregateOutputType | null;
    _sum: TransactionSumAggregateOutputType | null;
    _min: TransactionMinAggregateOutputType | null;
    _max: TransactionMaxAggregateOutputType | null;
};
type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TransactionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TransactionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TransactionGroupByOutputType[P]>;
}>>;
export type TransactionWhereInput = {
    AND?: Prisma.TransactionWhereInput | Prisma.TransactionWhereInput[];
    OR?: Prisma.TransactionWhereInput[];
    NOT?: Prisma.TransactionWhereInput | Prisma.TransactionWhereInput[];
    id?: Prisma.StringFilter<"Transaction"> | string;
    amount?: Prisma.DecimalFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Transaction"> | string;
    konnectRef?: Prisma.StringNullableFilter<"Transaction"> | string | null;
    nbSMS?: Prisma.IntNullableFilter<"Transaction"> | number | null;
    remainingSMS?: Prisma.IntNullableFilter<"Transaction"> | number | null;
    rateSMS?: Prisma.DecimalNullableFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus;
    invoiceUrl?: Prisma.StringNullableFilter<"Transaction"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    endAt?: Prisma.DateTimeNullableFilter<"Transaction"> | Date | string | null;
    tenantId?: Prisma.StringFilter<"Transaction"> | string;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
};
export type TransactionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    konnectRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbSMS?: Prisma.SortOrderInput | Prisma.SortOrder;
    remainingSMS?: Prisma.SortOrderInput | Prisma.SortOrder;
    rateSMS?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    invoiceUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    endAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    tenant?: Prisma.TenantOrderByWithRelationInput;
};
export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TransactionWhereInput | Prisma.TransactionWhereInput[];
    OR?: Prisma.TransactionWhereInput[];
    NOT?: Prisma.TransactionWhereInput | Prisma.TransactionWhereInput[];
    amount?: Prisma.DecimalFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Transaction"> | string;
    konnectRef?: Prisma.StringNullableFilter<"Transaction"> | string | null;
    nbSMS?: Prisma.IntNullableFilter<"Transaction"> | number | null;
    remainingSMS?: Prisma.IntNullableFilter<"Transaction"> | number | null;
    rateSMS?: Prisma.DecimalNullableFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus;
    invoiceUrl?: Prisma.StringNullableFilter<"Transaction"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    endAt?: Prisma.DateTimeNullableFilter<"Transaction"> | Date | string | null;
    tenantId?: Prisma.StringFilter<"Transaction"> | string;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
}, "id">;
export type TransactionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    konnectRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    nbSMS?: Prisma.SortOrderInput | Prisma.SortOrder;
    remainingSMS?: Prisma.SortOrderInput | Prisma.SortOrder;
    rateSMS?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    invoiceUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    endAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    _count?: Prisma.TransactionCountOrderByAggregateInput;
    _avg?: Prisma.TransactionAvgOrderByAggregateInput;
    _max?: Prisma.TransactionMaxOrderByAggregateInput;
    _min?: Prisma.TransactionMinOrderByAggregateInput;
    _sum?: Prisma.TransactionSumOrderByAggregateInput;
};
export type TransactionScalarWhereWithAggregatesInput = {
    AND?: Prisma.TransactionScalarWhereWithAggregatesInput | Prisma.TransactionScalarWhereWithAggregatesInput[];
    OR?: Prisma.TransactionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TransactionScalarWhereWithAggregatesInput | Prisma.TransactionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Transaction"> | string;
    amount?: Prisma.DecimalWithAggregatesFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringWithAggregatesFilter<"Transaction"> | string;
    konnectRef?: Prisma.StringNullableWithAggregatesFilter<"Transaction"> | string | null;
    nbSMS?: Prisma.IntNullableWithAggregatesFilter<"Transaction"> | number | null;
    remainingSMS?: Prisma.IntNullableWithAggregatesFilter<"Transaction"> | number | null;
    rateSMS?: Prisma.DecimalNullableWithAggregatesFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus;
    invoiceUrl?: Prisma.StringNullableWithAggregatesFilter<"Transaction"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Transaction"> | Date | string;
    endAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Transaction"> | Date | string | null;
    tenantId?: Prisma.StringWithAggregatesFilter<"Transaction"> | string;
};
export type TransactionCreateInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    konnectRef?: string | null;
    nbSMS?: number | null;
    remainingSMS?: number | null;
    rateSMS?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.TransactionStatus;
    invoiceUrl?: string | null;
    createdAt?: Date | string;
    endAt?: Date | string | null;
    tenant: Prisma.TenantCreateNestedOneWithoutTransactionsInput;
};
export type TransactionUncheckedCreateInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    konnectRef?: string | null;
    nbSMS?: number | null;
    remainingSMS?: number | null;
    rateSMS?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.TransactionStatus;
    invoiceUrl?: string | null;
    createdAt?: Date | string;
    endAt?: Date | string | null;
    tenantId: string;
};
export type TransactionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    konnectRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbSMS?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    remainingSMS?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rateSMS?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    invoiceUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutTransactionsNestedInput;
};
export type TransactionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    konnectRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbSMS?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    remainingSMS?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rateSMS?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    invoiceUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TransactionCreateManyInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    konnectRef?: string | null;
    nbSMS?: number | null;
    remainingSMS?: number | null;
    rateSMS?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.TransactionStatus;
    invoiceUrl?: string | null;
    createdAt?: Date | string;
    endAt?: Date | string | null;
    tenantId: string;
};
export type TransactionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    konnectRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbSMS?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    remainingSMS?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rateSMS?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    invoiceUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TransactionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    konnectRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbSMS?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    remainingSMS?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rateSMS?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    invoiceUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TransactionListRelationFilter = {
    every?: Prisma.TransactionWhereInput;
    some?: Prisma.TransactionWhereInput;
    none?: Prisma.TransactionWhereInput;
};
export type TransactionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TransactionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    konnectRef?: Prisma.SortOrder;
    nbSMS?: Prisma.SortOrder;
    remainingSMS?: Prisma.SortOrder;
    rateSMS?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    invoiceUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    endAt?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
};
export type TransactionAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
    nbSMS?: Prisma.SortOrder;
    remainingSMS?: Prisma.SortOrder;
    rateSMS?: Prisma.SortOrder;
};
export type TransactionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    konnectRef?: Prisma.SortOrder;
    nbSMS?: Prisma.SortOrder;
    remainingSMS?: Prisma.SortOrder;
    rateSMS?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    invoiceUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    endAt?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
};
export type TransactionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    konnectRef?: Prisma.SortOrder;
    nbSMS?: Prisma.SortOrder;
    remainingSMS?: Prisma.SortOrder;
    rateSMS?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    invoiceUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    endAt?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
};
export type TransactionSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
    nbSMS?: Prisma.SortOrder;
    remainingSMS?: Prisma.SortOrder;
    rateSMS?: Prisma.SortOrder;
};
export type TransactionCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutTenantInput, Prisma.TransactionUncheckedCreateWithoutTenantInput> | Prisma.TransactionCreateWithoutTenantInput[] | Prisma.TransactionUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutTenantInput | Prisma.TransactionCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.TransactionCreateManyTenantInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutTenantInput, Prisma.TransactionUncheckedCreateWithoutTenantInput> | Prisma.TransactionCreateWithoutTenantInput[] | Prisma.TransactionUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutTenantInput | Prisma.TransactionCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.TransactionCreateManyTenantInputEnvelope;
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
};
export type TransactionUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutTenantInput, Prisma.TransactionUncheckedCreateWithoutTenantInput> | Prisma.TransactionCreateWithoutTenantInput[] | Prisma.TransactionUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutTenantInput | Prisma.TransactionCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutTenantInput | Prisma.TransactionUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.TransactionCreateManyTenantInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutTenantInput | Prisma.TransactionUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutTenantInput | Prisma.TransactionUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type TransactionUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.TransactionCreateWithoutTenantInput, Prisma.TransactionUncheckedCreateWithoutTenantInput> | Prisma.TransactionCreateWithoutTenantInput[] | Prisma.TransactionUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.TransactionCreateOrConnectWithoutTenantInput | Prisma.TransactionCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.TransactionUpsertWithWhereUniqueWithoutTenantInput | Prisma.TransactionUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.TransactionCreateManyTenantInputEnvelope;
    set?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    disconnect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    delete?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    connect?: Prisma.TransactionWhereUniqueInput | Prisma.TransactionWhereUniqueInput[];
    update?: Prisma.TransactionUpdateWithWhereUniqueWithoutTenantInput | Prisma.TransactionUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.TransactionUpdateManyWithWhereWithoutTenantInput | Prisma.TransactionUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
};
export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus;
};
export type TransactionCreateWithoutTenantInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    konnectRef?: string | null;
    nbSMS?: number | null;
    remainingSMS?: number | null;
    rateSMS?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.TransactionStatus;
    invoiceUrl?: string | null;
    createdAt?: Date | string;
    endAt?: Date | string | null;
};
export type TransactionUncheckedCreateWithoutTenantInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    konnectRef?: string | null;
    nbSMS?: number | null;
    remainingSMS?: number | null;
    rateSMS?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.TransactionStatus;
    invoiceUrl?: string | null;
    createdAt?: Date | string;
    endAt?: Date | string | null;
};
export type TransactionCreateOrConnectWithoutTenantInput = {
    where: Prisma.TransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutTenantInput, Prisma.TransactionUncheckedCreateWithoutTenantInput>;
};
export type TransactionCreateManyTenantInputEnvelope = {
    data: Prisma.TransactionCreateManyTenantInput | Prisma.TransactionCreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type TransactionUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.TransactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.TransactionUpdateWithoutTenantInput, Prisma.TransactionUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.TransactionCreateWithoutTenantInput, Prisma.TransactionUncheckedCreateWithoutTenantInput>;
};
export type TransactionUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.TransactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.TransactionUpdateWithoutTenantInput, Prisma.TransactionUncheckedUpdateWithoutTenantInput>;
};
export type TransactionUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.TransactionScalarWhereInput;
    data: Prisma.XOR<Prisma.TransactionUpdateManyMutationInput, Prisma.TransactionUncheckedUpdateManyWithoutTenantInput>;
};
export type TransactionScalarWhereInput = {
    AND?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
    OR?: Prisma.TransactionScalarWhereInput[];
    NOT?: Prisma.TransactionScalarWhereInput | Prisma.TransactionScalarWhereInput[];
    id?: Prisma.StringFilter<"Transaction"> | string;
    amount?: Prisma.DecimalFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Transaction"> | string;
    konnectRef?: Prisma.StringNullableFilter<"Transaction"> | string | null;
    nbSMS?: Prisma.IntNullableFilter<"Transaction"> | number | null;
    remainingSMS?: Prisma.IntNullableFilter<"Transaction"> | number | null;
    rateSMS?: Prisma.DecimalNullableFilter<"Transaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus;
    invoiceUrl?: Prisma.StringNullableFilter<"Transaction"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Transaction"> | Date | string;
    endAt?: Prisma.DateTimeNullableFilter<"Transaction"> | Date | string | null;
    tenantId?: Prisma.StringFilter<"Transaction"> | string;
};
export type TransactionCreateManyTenantInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency: string;
    konnectRef?: string | null;
    nbSMS?: number | null;
    remainingSMS?: number | null;
    rateSMS?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: $Enums.TransactionStatus;
    invoiceUrl?: string | null;
    createdAt?: Date | string;
    endAt?: Date | string | null;
};
export type TransactionUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    konnectRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbSMS?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    remainingSMS?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rateSMS?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    invoiceUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TransactionUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    konnectRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbSMS?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    remainingSMS?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rateSMS?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    invoiceUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TransactionUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    konnectRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbSMS?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    remainingSMS?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rateSMS?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus;
    invoiceUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TransactionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    amount?: boolean;
    currency?: boolean;
    konnectRef?: boolean;
    nbSMS?: boolean;
    remainingSMS?: boolean;
    rateSMS?: boolean;
    status?: boolean;
    invoiceUrl?: boolean;
    createdAt?: boolean;
    endAt?: boolean;
    tenantId?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transaction"]>;
export type TransactionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    amount?: boolean;
    currency?: boolean;
    konnectRef?: boolean;
    nbSMS?: boolean;
    remainingSMS?: boolean;
    rateSMS?: boolean;
    status?: boolean;
    invoiceUrl?: boolean;
    createdAt?: boolean;
    endAt?: boolean;
    tenantId?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transaction"]>;
export type TransactionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    amount?: boolean;
    currency?: boolean;
    konnectRef?: boolean;
    nbSMS?: boolean;
    remainingSMS?: boolean;
    rateSMS?: boolean;
    status?: boolean;
    invoiceUrl?: boolean;
    createdAt?: boolean;
    endAt?: boolean;
    tenantId?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transaction"]>;
export type TransactionSelectScalar = {
    id?: boolean;
    amount?: boolean;
    currency?: boolean;
    konnectRef?: boolean;
    nbSMS?: boolean;
    remainingSMS?: boolean;
    rateSMS?: boolean;
    status?: boolean;
    invoiceUrl?: boolean;
    createdAt?: boolean;
    endAt?: boolean;
    tenantId?: boolean;
};
export type TransactionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "amount" | "currency" | "konnectRef" | "nbSMS" | "remainingSMS" | "rateSMS" | "status" | "invoiceUrl" | "createdAt" | "endAt" | "tenantId", ExtArgs["result"]["transaction"]>;
export type TransactionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type TransactionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type $TransactionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Transaction";
    objects: {
        tenant: Prisma.$TenantPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        amount: runtime.Decimal;
        currency: string;
        konnectRef: string | null;
        nbSMS: number | null;
        remainingSMS: number | null;
        rateSMS: runtime.Decimal | null;
        status: $Enums.TransactionStatus;
        invoiceUrl: string | null;
        createdAt: Date;
        endAt: Date | null;
        tenantId: string;
    }, ExtArgs["result"]["transaction"]>;
    composites: {};
};
export type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TransactionPayload, S>;
export type TransactionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TransactionCountAggregateInputType | true;
};
export interface TransactionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Transaction'];
        meta: {
            name: 'Transaction';
        };
    };
    findUnique<T extends TransactionFindUniqueArgs>(args: Prisma.SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TransactionFindFirstArgs>(args?: Prisma.SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TransactionFindManyArgs>(args?: Prisma.SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TransactionCreateArgs>(args: Prisma.SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TransactionCreateManyArgs>(args?: Prisma.SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TransactionDeleteArgs>(args: Prisma.SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TransactionUpdateArgs>(args: Prisma.SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TransactionDeleteManyArgs>(args?: Prisma.SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TransactionUpdateManyArgs>(args: Prisma.SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TransactionUpsertArgs>(args: Prisma.SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma.Prisma__TransactionClient<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TransactionCountArgs>(args?: Prisma.Subset<T, TransactionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TransactionCountAggregateOutputType> : number>;
    aggregate<T extends TransactionAggregateArgs>(args: Prisma.Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>;
    groupBy<T extends TransactionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TransactionGroupByArgs['orderBy'];
    } : {
        orderBy?: TransactionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TransactionFieldRefs;
}
export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tenant<T extends Prisma.TenantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenantDefaultArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TransactionFieldRefs {
    readonly id: Prisma.FieldRef<"Transaction", 'String'>;
    readonly amount: Prisma.FieldRef<"Transaction", 'Decimal'>;
    readonly currency: Prisma.FieldRef<"Transaction", 'String'>;
    readonly konnectRef: Prisma.FieldRef<"Transaction", 'String'>;
    readonly nbSMS: Prisma.FieldRef<"Transaction", 'Int'>;
    readonly remainingSMS: Prisma.FieldRef<"Transaction", 'Int'>;
    readonly rateSMS: Prisma.FieldRef<"Transaction", 'Decimal'>;
    readonly status: Prisma.FieldRef<"Transaction", 'TransactionStatus'>;
    readonly invoiceUrl: Prisma.FieldRef<"Transaction", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Transaction", 'DateTime'>;
    readonly endAt: Prisma.FieldRef<"Transaction", 'DateTime'>;
    readonly tenantId: Prisma.FieldRef<"Transaction", 'String'>;
}
export type TransactionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where: Prisma.TransactionWhereUniqueInput;
};
export type TransactionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where: Prisma.TransactionWhereUniqueInput;
};
export type TransactionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    cursor?: Prisma.TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
export type TransactionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    cursor?: Prisma.TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
export type TransactionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    cursor?: Prisma.TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
export type TransactionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransactionCreateInput, Prisma.TransactionUncheckedCreateInput>;
};
export type TransactionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TransactionCreateManyInput | Prisma.TransactionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TransactionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    data: Prisma.TransactionCreateManyInput | Prisma.TransactionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TransactionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TransactionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransactionUpdateInput, Prisma.TransactionUncheckedUpdateInput>;
    where: Prisma.TransactionWhereUniqueInput;
};
export type TransactionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TransactionUpdateManyMutationInput, Prisma.TransactionUncheckedUpdateManyInput>;
    where?: Prisma.TransactionWhereInput;
    limit?: number;
};
export type TransactionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TransactionUpdateManyMutationInput, Prisma.TransactionUncheckedUpdateManyInput>;
    where?: Prisma.TransactionWhereInput;
    limit?: number;
    include?: Prisma.TransactionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TransactionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where: Prisma.TransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.TransactionCreateInput, Prisma.TransactionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TransactionUpdateInput, Prisma.TransactionUncheckedUpdateInput>;
};
export type TransactionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where: Prisma.TransactionWhereUniqueInput;
};
export type TransactionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionWhereInput;
    limit?: number;
};
export type TransactionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
};
export {};
