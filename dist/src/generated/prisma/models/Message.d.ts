import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MessageModel = runtime.Types.Result.DefaultSelection<Prisma.$MessagePayload>;
export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null;
    _avg: MessageAvgAggregateOutputType | null;
    _sum: MessageSumAggregateOutputType | null;
    _min: MessageMinAggregateOutputType | null;
    _max: MessageMaxAggregateOutputType | null;
};
export type MessageAvgAggregateOutputType = {
    costInCredits: runtime.Decimal | null;
};
export type MessageSumAggregateOutputType = {
    costInCredits: runtime.Decimal | null;
};
export type MessageMinAggregateOutputType = {
    id: string | null;
    phone: string | null;
    messageBody: string | null;
    providerMsgId: string | null;
    error: boolean | null;
    status: $Enums.DlrStatus | null;
    costInCredits: runtime.Decimal | null;
    sentAt: Date | null;
    deliveredAt: Date | null;
    campaignId: string | null;
    type: $Enums.MessageType | null;
    tenantId: string | null;
    senderId: string | null;
};
export type MessageMaxAggregateOutputType = {
    id: string | null;
    phone: string | null;
    messageBody: string | null;
    providerMsgId: string | null;
    error: boolean | null;
    status: $Enums.DlrStatus | null;
    costInCredits: runtime.Decimal | null;
    sentAt: Date | null;
    deliveredAt: Date | null;
    campaignId: string | null;
    type: $Enums.MessageType | null;
    tenantId: string | null;
    senderId: string | null;
};
export type MessageCountAggregateOutputType = {
    id: number;
    phone: number;
    messageBody: number;
    providerMsgId: number;
    error: number;
    status: number;
    costInCredits: number;
    sentAt: number;
    deliveredAt: number;
    campaignId: number;
    type: number;
    tenantId: number;
    senderId: number;
    _all: number;
};
export type MessageAvgAggregateInputType = {
    costInCredits?: true;
};
export type MessageSumAggregateInputType = {
    costInCredits?: true;
};
export type MessageMinAggregateInputType = {
    id?: true;
    phone?: true;
    messageBody?: true;
    providerMsgId?: true;
    error?: true;
    status?: true;
    costInCredits?: true;
    sentAt?: true;
    deliveredAt?: true;
    campaignId?: true;
    type?: true;
    tenantId?: true;
    senderId?: true;
};
export type MessageMaxAggregateInputType = {
    id?: true;
    phone?: true;
    messageBody?: true;
    providerMsgId?: true;
    error?: true;
    status?: true;
    costInCredits?: true;
    sentAt?: true;
    deliveredAt?: true;
    campaignId?: true;
    type?: true;
    tenantId?: true;
    senderId?: true;
};
export type MessageCountAggregateInputType = {
    id?: true;
    phone?: true;
    messageBody?: true;
    providerMsgId?: true;
    error?: true;
    status?: true;
    costInCredits?: true;
    sentAt?: true;
    deliveredAt?: true;
    campaignId?: true;
    type?: true;
    tenantId?: true;
    senderId?: true;
    _all?: true;
};
export type MessageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[];
    cursor?: Prisma.MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MessageCountAggregateInputType;
    _avg?: MessageAvgAggregateInputType;
    _sum?: MessageSumAggregateInputType;
    _min?: MessageMinAggregateInputType;
    _max?: MessageMaxAggregateInputType;
};
export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
    [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMessage[P]> : Prisma.GetScalarType<T[P], AggregateMessage[P]>;
};
export type MessageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithAggregationInput | Prisma.MessageOrderByWithAggregationInput[];
    by: Prisma.MessageScalarFieldEnum[] | Prisma.MessageScalarFieldEnum;
    having?: Prisma.MessageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MessageCountAggregateInputType | true;
    _avg?: MessageAvgAggregateInputType;
    _sum?: MessageSumAggregateInputType;
    _min?: MessageMinAggregateInputType;
    _max?: MessageMaxAggregateInputType;
};
export type MessageGroupByOutputType = {
    id: string;
    phone: string;
    messageBody: string;
    providerMsgId: string | null;
    error: boolean;
    status: $Enums.DlrStatus | null;
    costInCredits: runtime.Decimal | null;
    sentAt: Date | null;
    deliveredAt: Date | null;
    campaignId: string | null;
    type: $Enums.MessageType | null;
    tenantId: string | null;
    senderId: string | null;
    _count: MessageCountAggregateOutputType | null;
    _avg: MessageAvgAggregateOutputType | null;
    _sum: MessageSumAggregateOutputType | null;
    _min: MessageMinAggregateOutputType | null;
    _max: MessageMaxAggregateOutputType | null;
};
type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MessageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MessageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MessageGroupByOutputType[P]>;
}>>;
export type MessageWhereInput = {
    AND?: Prisma.MessageWhereInput | Prisma.MessageWhereInput[];
    OR?: Prisma.MessageWhereInput[];
    NOT?: Prisma.MessageWhereInput | Prisma.MessageWhereInput[];
    id?: Prisma.StringFilter<"Message"> | string;
    phone?: Prisma.StringFilter<"Message"> | string;
    messageBody?: Prisma.StringFilter<"Message"> | string;
    providerMsgId?: Prisma.StringNullableFilter<"Message"> | string | null;
    error?: Prisma.BoolFilter<"Message"> | boolean;
    status?: Prisma.EnumDlrStatusNullableFilter<"Message"> | $Enums.DlrStatus | null;
    costInCredits?: Prisma.DecimalNullableFilter<"Message"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Prisma.DateTimeNullableFilter<"Message"> | Date | string | null;
    deliveredAt?: Prisma.DateTimeNullableFilter<"Message"> | Date | string | null;
    campaignId?: Prisma.StringNullableFilter<"Message"> | string | null;
    type?: Prisma.EnumMessageTypeNullableFilter<"Message"> | $Enums.MessageType | null;
    tenantId?: Prisma.StringNullableFilter<"Message"> | string | null;
    senderId?: Prisma.StringNullableFilter<"Message"> | string | null;
    sender?: Prisma.XOR<Prisma.SenderIDNullableScalarRelationFilter, Prisma.SenderIDWhereInput> | null;
    campaign?: Prisma.XOR<Prisma.CampaignNullableScalarRelationFilter, Prisma.CampaignWhereInput> | null;
    tenant?: Prisma.XOR<Prisma.TenantNullableScalarRelationFilter, Prisma.TenantWhereInput> | null;
};
export type MessageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    messageBody?: Prisma.SortOrder;
    providerMsgId?: Prisma.SortOrderInput | Prisma.SortOrder;
    error?: Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    costInCredits?: Prisma.SortOrderInput | Prisma.SortOrder;
    sentAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    campaignId?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrderInput | Prisma.SortOrder;
    tenantId?: Prisma.SortOrderInput | Prisma.SortOrder;
    senderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    sender?: Prisma.SenderIDOrderByWithRelationInput;
    campaign?: Prisma.CampaignOrderByWithRelationInput;
    tenant?: Prisma.TenantOrderByWithRelationInput;
};
export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MessageWhereInput | Prisma.MessageWhereInput[];
    OR?: Prisma.MessageWhereInput[];
    NOT?: Prisma.MessageWhereInput | Prisma.MessageWhereInput[];
    phone?: Prisma.StringFilter<"Message"> | string;
    messageBody?: Prisma.StringFilter<"Message"> | string;
    providerMsgId?: Prisma.StringNullableFilter<"Message"> | string | null;
    error?: Prisma.BoolFilter<"Message"> | boolean;
    status?: Prisma.EnumDlrStatusNullableFilter<"Message"> | $Enums.DlrStatus | null;
    costInCredits?: Prisma.DecimalNullableFilter<"Message"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Prisma.DateTimeNullableFilter<"Message"> | Date | string | null;
    deliveredAt?: Prisma.DateTimeNullableFilter<"Message"> | Date | string | null;
    campaignId?: Prisma.StringNullableFilter<"Message"> | string | null;
    type?: Prisma.EnumMessageTypeNullableFilter<"Message"> | $Enums.MessageType | null;
    tenantId?: Prisma.StringNullableFilter<"Message"> | string | null;
    senderId?: Prisma.StringNullableFilter<"Message"> | string | null;
    sender?: Prisma.XOR<Prisma.SenderIDNullableScalarRelationFilter, Prisma.SenderIDWhereInput> | null;
    campaign?: Prisma.XOR<Prisma.CampaignNullableScalarRelationFilter, Prisma.CampaignWhereInput> | null;
    tenant?: Prisma.XOR<Prisma.TenantNullableScalarRelationFilter, Prisma.TenantWhereInput> | null;
}, "id">;
export type MessageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    messageBody?: Prisma.SortOrder;
    providerMsgId?: Prisma.SortOrderInput | Prisma.SortOrder;
    error?: Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    costInCredits?: Prisma.SortOrderInput | Prisma.SortOrder;
    sentAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    campaignId?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrderInput | Prisma.SortOrder;
    tenantId?: Prisma.SortOrderInput | Prisma.SortOrder;
    senderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.MessageCountOrderByAggregateInput;
    _avg?: Prisma.MessageAvgOrderByAggregateInput;
    _max?: Prisma.MessageMaxOrderByAggregateInput;
    _min?: Prisma.MessageMinOrderByAggregateInput;
    _sum?: Prisma.MessageSumOrderByAggregateInput;
};
export type MessageScalarWhereWithAggregatesInput = {
    AND?: Prisma.MessageScalarWhereWithAggregatesInput | Prisma.MessageScalarWhereWithAggregatesInput[];
    OR?: Prisma.MessageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MessageScalarWhereWithAggregatesInput | Prisma.MessageScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Message"> | string;
    phone?: Prisma.StringWithAggregatesFilter<"Message"> | string;
    messageBody?: Prisma.StringWithAggregatesFilter<"Message"> | string;
    providerMsgId?: Prisma.StringNullableWithAggregatesFilter<"Message"> | string | null;
    error?: Prisma.BoolWithAggregatesFilter<"Message"> | boolean;
    status?: Prisma.EnumDlrStatusNullableWithAggregatesFilter<"Message"> | $Enums.DlrStatus | null;
    costInCredits?: Prisma.DecimalNullableWithAggregatesFilter<"Message"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Message"> | Date | string | null;
    deliveredAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Message"> | Date | string | null;
    campaignId?: Prisma.StringNullableWithAggregatesFilter<"Message"> | string | null;
    type?: Prisma.EnumMessageTypeNullableWithAggregatesFilter<"Message"> | $Enums.MessageType | null;
    tenantId?: Prisma.StringNullableWithAggregatesFilter<"Message"> | string | null;
    senderId?: Prisma.StringNullableWithAggregatesFilter<"Message"> | string | null;
};
export type MessageCreateInput = {
    id?: string;
    phone: string;
    messageBody: string;
    providerMsgId?: string | null;
    error?: boolean;
    status?: $Enums.DlrStatus | null;
    costInCredits?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    type?: $Enums.MessageType | null;
    sender?: Prisma.SenderIDCreateNestedOneWithoutMessagesInput;
    campaign?: Prisma.CampaignCreateNestedOneWithoutMessagesInput;
    tenant?: Prisma.TenantCreateNestedOneWithoutMessagesInput;
};
export type MessageUncheckedCreateInput = {
    id?: string;
    phone: string;
    messageBody: string;
    providerMsgId?: string | null;
    error?: boolean;
    status?: $Enums.DlrStatus | null;
    costInCredits?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    campaignId?: string | null;
    type?: $Enums.MessageType | null;
    tenantId?: string | null;
    senderId?: string | null;
};
export type MessageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    messageBody?: Prisma.StringFieldUpdateOperationsInput | string;
    providerMsgId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumDlrStatusFieldUpdateOperationsInput | $Enums.DlrStatus | null;
    costInCredits?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null;
    sender?: Prisma.SenderIDUpdateOneWithoutMessagesNestedInput;
    campaign?: Prisma.CampaignUpdateOneWithoutMessagesNestedInput;
    tenant?: Prisma.TenantUpdateOneWithoutMessagesNestedInput;
};
export type MessageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    messageBody?: Prisma.StringFieldUpdateOperationsInput | string;
    providerMsgId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumDlrStatusFieldUpdateOperationsInput | $Enums.DlrStatus | null;
    costInCredits?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    campaignId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MessageCreateManyInput = {
    id?: string;
    phone: string;
    messageBody: string;
    providerMsgId?: string | null;
    error?: boolean;
    status?: $Enums.DlrStatus | null;
    costInCredits?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    campaignId?: string | null;
    type?: $Enums.MessageType | null;
    tenantId?: string | null;
    senderId?: string | null;
};
export type MessageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    messageBody?: Prisma.StringFieldUpdateOperationsInput | string;
    providerMsgId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumDlrStatusFieldUpdateOperationsInput | $Enums.DlrStatus | null;
    costInCredits?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null;
};
export type MessageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    messageBody?: Prisma.StringFieldUpdateOperationsInput | string;
    providerMsgId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumDlrStatusFieldUpdateOperationsInput | $Enums.DlrStatus | null;
    costInCredits?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    campaignId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MessageListRelationFilter = {
    every?: Prisma.MessageWhereInput;
    some?: Prisma.MessageWhereInput;
    none?: Prisma.MessageWhereInput;
};
export type MessageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MessageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    messageBody?: Prisma.SortOrder;
    providerMsgId?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    costInCredits?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrder;
    campaignId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
};
export type MessageAvgOrderByAggregateInput = {
    costInCredits?: Prisma.SortOrder;
};
export type MessageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    messageBody?: Prisma.SortOrder;
    providerMsgId?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    costInCredits?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrder;
    campaignId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
};
export type MessageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    messageBody?: Prisma.SortOrder;
    providerMsgId?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    costInCredits?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    deliveredAt?: Prisma.SortOrder;
    campaignId?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
};
export type MessageSumOrderByAggregateInput = {
    costInCredits?: Prisma.SortOrder;
};
export type MessageCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutTenantInput, Prisma.MessageUncheckedCreateWithoutTenantInput> | Prisma.MessageCreateWithoutTenantInput[] | Prisma.MessageUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutTenantInput | Prisma.MessageCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.MessageCreateManyTenantInputEnvelope;
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
};
export type MessageUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutTenantInput, Prisma.MessageUncheckedCreateWithoutTenantInput> | Prisma.MessageCreateWithoutTenantInput[] | Prisma.MessageUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutTenantInput | Prisma.MessageCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.MessageCreateManyTenantInputEnvelope;
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
};
export type MessageUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutTenantInput, Prisma.MessageUncheckedCreateWithoutTenantInput> | Prisma.MessageCreateWithoutTenantInput[] | Prisma.MessageUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutTenantInput | Prisma.MessageCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.MessageUpsertWithWhereUniqueWithoutTenantInput | Prisma.MessageUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.MessageCreateManyTenantInputEnvelope;
    set?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    disconnect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    delete?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    update?: Prisma.MessageUpdateWithWhereUniqueWithoutTenantInput | Prisma.MessageUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.MessageUpdateManyWithWhereWithoutTenantInput | Prisma.MessageUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[];
};
export type MessageUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutTenantInput, Prisma.MessageUncheckedCreateWithoutTenantInput> | Prisma.MessageCreateWithoutTenantInput[] | Prisma.MessageUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutTenantInput | Prisma.MessageCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.MessageUpsertWithWhereUniqueWithoutTenantInput | Prisma.MessageUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.MessageCreateManyTenantInputEnvelope;
    set?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    disconnect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    delete?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    update?: Prisma.MessageUpdateWithWhereUniqueWithoutTenantInput | Prisma.MessageUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.MessageUpdateManyWithWhereWithoutTenantInput | Prisma.MessageUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[];
};
export type MessageCreateNestedManyWithoutSenderInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutSenderInput, Prisma.MessageUncheckedCreateWithoutSenderInput> | Prisma.MessageCreateWithoutSenderInput[] | Prisma.MessageUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutSenderInput | Prisma.MessageCreateOrConnectWithoutSenderInput[];
    createMany?: Prisma.MessageCreateManySenderInputEnvelope;
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
};
export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutSenderInput, Prisma.MessageUncheckedCreateWithoutSenderInput> | Prisma.MessageCreateWithoutSenderInput[] | Prisma.MessageUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutSenderInput | Prisma.MessageCreateOrConnectWithoutSenderInput[];
    createMany?: Prisma.MessageCreateManySenderInputEnvelope;
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
};
export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutSenderInput, Prisma.MessageUncheckedCreateWithoutSenderInput> | Prisma.MessageCreateWithoutSenderInput[] | Prisma.MessageUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutSenderInput | Prisma.MessageCreateOrConnectWithoutSenderInput[];
    upsert?: Prisma.MessageUpsertWithWhereUniqueWithoutSenderInput | Prisma.MessageUpsertWithWhereUniqueWithoutSenderInput[];
    createMany?: Prisma.MessageCreateManySenderInputEnvelope;
    set?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    disconnect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    delete?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    update?: Prisma.MessageUpdateWithWhereUniqueWithoutSenderInput | Prisma.MessageUpdateWithWhereUniqueWithoutSenderInput[];
    updateMany?: Prisma.MessageUpdateManyWithWhereWithoutSenderInput | Prisma.MessageUpdateManyWithWhereWithoutSenderInput[];
    deleteMany?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[];
};
export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutSenderInput, Prisma.MessageUncheckedCreateWithoutSenderInput> | Prisma.MessageCreateWithoutSenderInput[] | Prisma.MessageUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutSenderInput | Prisma.MessageCreateOrConnectWithoutSenderInput[];
    upsert?: Prisma.MessageUpsertWithWhereUniqueWithoutSenderInput | Prisma.MessageUpsertWithWhereUniqueWithoutSenderInput[];
    createMany?: Prisma.MessageCreateManySenderInputEnvelope;
    set?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    disconnect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    delete?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    update?: Prisma.MessageUpdateWithWhereUniqueWithoutSenderInput | Prisma.MessageUpdateWithWhereUniqueWithoutSenderInput[];
    updateMany?: Prisma.MessageUpdateManyWithWhereWithoutSenderInput | Prisma.MessageUpdateManyWithWhereWithoutSenderInput[];
    deleteMany?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[];
};
export type MessageCreateNestedManyWithoutCampaignInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutCampaignInput, Prisma.MessageUncheckedCreateWithoutCampaignInput> | Prisma.MessageCreateWithoutCampaignInput[] | Prisma.MessageUncheckedCreateWithoutCampaignInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutCampaignInput | Prisma.MessageCreateOrConnectWithoutCampaignInput[];
    createMany?: Prisma.MessageCreateManyCampaignInputEnvelope;
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
};
export type MessageUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutCampaignInput, Prisma.MessageUncheckedCreateWithoutCampaignInput> | Prisma.MessageCreateWithoutCampaignInput[] | Prisma.MessageUncheckedCreateWithoutCampaignInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutCampaignInput | Prisma.MessageCreateOrConnectWithoutCampaignInput[];
    createMany?: Prisma.MessageCreateManyCampaignInputEnvelope;
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
};
export type MessageUpdateManyWithoutCampaignNestedInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutCampaignInput, Prisma.MessageUncheckedCreateWithoutCampaignInput> | Prisma.MessageCreateWithoutCampaignInput[] | Prisma.MessageUncheckedCreateWithoutCampaignInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutCampaignInput | Prisma.MessageCreateOrConnectWithoutCampaignInput[];
    upsert?: Prisma.MessageUpsertWithWhereUniqueWithoutCampaignInput | Prisma.MessageUpsertWithWhereUniqueWithoutCampaignInput[];
    createMany?: Prisma.MessageCreateManyCampaignInputEnvelope;
    set?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    disconnect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    delete?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    update?: Prisma.MessageUpdateWithWhereUniqueWithoutCampaignInput | Prisma.MessageUpdateWithWhereUniqueWithoutCampaignInput[];
    updateMany?: Prisma.MessageUpdateManyWithWhereWithoutCampaignInput | Prisma.MessageUpdateManyWithWhereWithoutCampaignInput[];
    deleteMany?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[];
};
export type MessageUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: Prisma.XOR<Prisma.MessageCreateWithoutCampaignInput, Prisma.MessageUncheckedCreateWithoutCampaignInput> | Prisma.MessageCreateWithoutCampaignInput[] | Prisma.MessageUncheckedCreateWithoutCampaignInput[];
    connectOrCreate?: Prisma.MessageCreateOrConnectWithoutCampaignInput | Prisma.MessageCreateOrConnectWithoutCampaignInput[];
    upsert?: Prisma.MessageUpsertWithWhereUniqueWithoutCampaignInput | Prisma.MessageUpsertWithWhereUniqueWithoutCampaignInput[];
    createMany?: Prisma.MessageCreateManyCampaignInputEnvelope;
    set?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    disconnect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    delete?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    connect?: Prisma.MessageWhereUniqueInput | Prisma.MessageWhereUniqueInput[];
    update?: Prisma.MessageUpdateWithWhereUniqueWithoutCampaignInput | Prisma.MessageUpdateWithWhereUniqueWithoutCampaignInput[];
    updateMany?: Prisma.MessageUpdateManyWithWhereWithoutCampaignInput | Prisma.MessageUpdateManyWithWhereWithoutCampaignInput[];
    deleteMany?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[];
};
export type NullableEnumDlrStatusFieldUpdateOperationsInput = {
    set?: $Enums.DlrStatus | null;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NullableEnumMessageTypeFieldUpdateOperationsInput = {
    set?: $Enums.MessageType | null;
};
export type MessageCreateWithoutTenantInput = {
    id?: string;
    phone: string;
    messageBody: string;
    providerMsgId?: string | null;
    error?: boolean;
    status?: $Enums.DlrStatus | null;
    costInCredits?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    type?: $Enums.MessageType | null;
    sender?: Prisma.SenderIDCreateNestedOneWithoutMessagesInput;
    campaign?: Prisma.CampaignCreateNestedOneWithoutMessagesInput;
};
export type MessageUncheckedCreateWithoutTenantInput = {
    id?: string;
    phone: string;
    messageBody: string;
    providerMsgId?: string | null;
    error?: boolean;
    status?: $Enums.DlrStatus | null;
    costInCredits?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    campaignId?: string | null;
    type?: $Enums.MessageType | null;
    senderId?: string | null;
};
export type MessageCreateOrConnectWithoutTenantInput = {
    where: Prisma.MessageWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessageCreateWithoutTenantInput, Prisma.MessageUncheckedCreateWithoutTenantInput>;
};
export type MessageCreateManyTenantInputEnvelope = {
    data: Prisma.MessageCreateManyTenantInput | Prisma.MessageCreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type MessageUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.MessageWhereUniqueInput;
    update: Prisma.XOR<Prisma.MessageUpdateWithoutTenantInput, Prisma.MessageUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.MessageCreateWithoutTenantInput, Prisma.MessageUncheckedCreateWithoutTenantInput>;
};
export type MessageUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.MessageWhereUniqueInput;
    data: Prisma.XOR<Prisma.MessageUpdateWithoutTenantInput, Prisma.MessageUncheckedUpdateWithoutTenantInput>;
};
export type MessageUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.MessageScalarWhereInput;
    data: Prisma.XOR<Prisma.MessageUpdateManyMutationInput, Prisma.MessageUncheckedUpdateManyWithoutTenantInput>;
};
export type MessageScalarWhereInput = {
    AND?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[];
    OR?: Prisma.MessageScalarWhereInput[];
    NOT?: Prisma.MessageScalarWhereInput | Prisma.MessageScalarWhereInput[];
    id?: Prisma.StringFilter<"Message"> | string;
    phone?: Prisma.StringFilter<"Message"> | string;
    messageBody?: Prisma.StringFilter<"Message"> | string;
    providerMsgId?: Prisma.StringNullableFilter<"Message"> | string | null;
    error?: Prisma.BoolFilter<"Message"> | boolean;
    status?: Prisma.EnumDlrStatusNullableFilter<"Message"> | $Enums.DlrStatus | null;
    costInCredits?: Prisma.DecimalNullableFilter<"Message"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Prisma.DateTimeNullableFilter<"Message"> | Date | string | null;
    deliveredAt?: Prisma.DateTimeNullableFilter<"Message"> | Date | string | null;
    campaignId?: Prisma.StringNullableFilter<"Message"> | string | null;
    type?: Prisma.EnumMessageTypeNullableFilter<"Message"> | $Enums.MessageType | null;
    tenantId?: Prisma.StringNullableFilter<"Message"> | string | null;
    senderId?: Prisma.StringNullableFilter<"Message"> | string | null;
};
export type MessageCreateWithoutSenderInput = {
    id?: string;
    phone: string;
    messageBody: string;
    providerMsgId?: string | null;
    error?: boolean;
    status?: $Enums.DlrStatus | null;
    costInCredits?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    type?: $Enums.MessageType | null;
    campaign?: Prisma.CampaignCreateNestedOneWithoutMessagesInput;
    tenant?: Prisma.TenantCreateNestedOneWithoutMessagesInput;
};
export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string;
    phone: string;
    messageBody: string;
    providerMsgId?: string | null;
    error?: boolean;
    status?: $Enums.DlrStatus | null;
    costInCredits?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    campaignId?: string | null;
    type?: $Enums.MessageType | null;
    tenantId?: string | null;
};
export type MessageCreateOrConnectWithoutSenderInput = {
    where: Prisma.MessageWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessageCreateWithoutSenderInput, Prisma.MessageUncheckedCreateWithoutSenderInput>;
};
export type MessageCreateManySenderInputEnvelope = {
    data: Prisma.MessageCreateManySenderInput | Prisma.MessageCreateManySenderInput[];
    skipDuplicates?: boolean;
};
export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: Prisma.MessageWhereUniqueInput;
    update: Prisma.XOR<Prisma.MessageUpdateWithoutSenderInput, Prisma.MessageUncheckedUpdateWithoutSenderInput>;
    create: Prisma.XOR<Prisma.MessageCreateWithoutSenderInput, Prisma.MessageUncheckedCreateWithoutSenderInput>;
};
export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: Prisma.MessageWhereUniqueInput;
    data: Prisma.XOR<Prisma.MessageUpdateWithoutSenderInput, Prisma.MessageUncheckedUpdateWithoutSenderInput>;
};
export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: Prisma.MessageScalarWhereInput;
    data: Prisma.XOR<Prisma.MessageUpdateManyMutationInput, Prisma.MessageUncheckedUpdateManyWithoutSenderInput>;
};
export type MessageCreateWithoutCampaignInput = {
    id?: string;
    phone: string;
    messageBody: string;
    providerMsgId?: string | null;
    error?: boolean;
    status?: $Enums.DlrStatus | null;
    costInCredits?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    type?: $Enums.MessageType | null;
    sender?: Prisma.SenderIDCreateNestedOneWithoutMessagesInput;
    tenant?: Prisma.TenantCreateNestedOneWithoutMessagesInput;
};
export type MessageUncheckedCreateWithoutCampaignInput = {
    id?: string;
    phone: string;
    messageBody: string;
    providerMsgId?: string | null;
    error?: boolean;
    status?: $Enums.DlrStatus | null;
    costInCredits?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    type?: $Enums.MessageType | null;
    tenantId?: string | null;
    senderId?: string | null;
};
export type MessageCreateOrConnectWithoutCampaignInput = {
    where: Prisma.MessageWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessageCreateWithoutCampaignInput, Prisma.MessageUncheckedCreateWithoutCampaignInput>;
};
export type MessageCreateManyCampaignInputEnvelope = {
    data: Prisma.MessageCreateManyCampaignInput | Prisma.MessageCreateManyCampaignInput[];
    skipDuplicates?: boolean;
};
export type MessageUpsertWithWhereUniqueWithoutCampaignInput = {
    where: Prisma.MessageWhereUniqueInput;
    update: Prisma.XOR<Prisma.MessageUpdateWithoutCampaignInput, Prisma.MessageUncheckedUpdateWithoutCampaignInput>;
    create: Prisma.XOR<Prisma.MessageCreateWithoutCampaignInput, Prisma.MessageUncheckedCreateWithoutCampaignInput>;
};
export type MessageUpdateWithWhereUniqueWithoutCampaignInput = {
    where: Prisma.MessageWhereUniqueInput;
    data: Prisma.XOR<Prisma.MessageUpdateWithoutCampaignInput, Prisma.MessageUncheckedUpdateWithoutCampaignInput>;
};
export type MessageUpdateManyWithWhereWithoutCampaignInput = {
    where: Prisma.MessageScalarWhereInput;
    data: Prisma.XOR<Prisma.MessageUpdateManyMutationInput, Prisma.MessageUncheckedUpdateManyWithoutCampaignInput>;
};
export type MessageCreateManyTenantInput = {
    id?: string;
    phone: string;
    messageBody: string;
    providerMsgId?: string | null;
    error?: boolean;
    status?: $Enums.DlrStatus | null;
    costInCredits?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    campaignId?: string | null;
    type?: $Enums.MessageType | null;
    senderId?: string | null;
};
export type MessageUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    messageBody?: Prisma.StringFieldUpdateOperationsInput | string;
    providerMsgId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumDlrStatusFieldUpdateOperationsInput | $Enums.DlrStatus | null;
    costInCredits?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null;
    sender?: Prisma.SenderIDUpdateOneWithoutMessagesNestedInput;
    campaign?: Prisma.CampaignUpdateOneWithoutMessagesNestedInput;
};
export type MessageUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    messageBody?: Prisma.StringFieldUpdateOperationsInput | string;
    providerMsgId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumDlrStatusFieldUpdateOperationsInput | $Enums.DlrStatus | null;
    costInCredits?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    campaignId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null;
    senderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MessageUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    messageBody?: Prisma.StringFieldUpdateOperationsInput | string;
    providerMsgId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumDlrStatusFieldUpdateOperationsInput | $Enums.DlrStatus | null;
    costInCredits?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    campaignId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null;
    senderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MessageCreateManySenderInput = {
    id?: string;
    phone: string;
    messageBody: string;
    providerMsgId?: string | null;
    error?: boolean;
    status?: $Enums.DlrStatus | null;
    costInCredits?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    campaignId?: string | null;
    type?: $Enums.MessageType | null;
    tenantId?: string | null;
};
export type MessageUpdateWithoutSenderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    messageBody?: Prisma.StringFieldUpdateOperationsInput | string;
    providerMsgId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumDlrStatusFieldUpdateOperationsInput | $Enums.DlrStatus | null;
    costInCredits?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null;
    campaign?: Prisma.CampaignUpdateOneWithoutMessagesNestedInput;
    tenant?: Prisma.TenantUpdateOneWithoutMessagesNestedInput;
};
export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    messageBody?: Prisma.StringFieldUpdateOperationsInput | string;
    providerMsgId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumDlrStatusFieldUpdateOperationsInput | $Enums.DlrStatus | null;
    costInCredits?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    campaignId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    messageBody?: Prisma.StringFieldUpdateOperationsInput | string;
    providerMsgId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumDlrStatusFieldUpdateOperationsInput | $Enums.DlrStatus | null;
    costInCredits?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    campaignId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MessageCreateManyCampaignInput = {
    id?: string;
    phone: string;
    messageBody: string;
    providerMsgId?: string | null;
    error?: boolean;
    status?: $Enums.DlrStatus | null;
    costInCredits?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Date | string | null;
    deliveredAt?: Date | string | null;
    type?: $Enums.MessageType | null;
    tenantId?: string | null;
    senderId?: string | null;
};
export type MessageUpdateWithoutCampaignInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    messageBody?: Prisma.StringFieldUpdateOperationsInput | string;
    providerMsgId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumDlrStatusFieldUpdateOperationsInput | $Enums.DlrStatus | null;
    costInCredits?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null;
    sender?: Prisma.SenderIDUpdateOneWithoutMessagesNestedInput;
    tenant?: Prisma.TenantUpdateOneWithoutMessagesNestedInput;
};
export type MessageUncheckedUpdateWithoutCampaignInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    messageBody?: Prisma.StringFieldUpdateOperationsInput | string;
    providerMsgId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumDlrStatusFieldUpdateOperationsInput | $Enums.DlrStatus | null;
    costInCredits?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MessageUncheckedUpdateManyWithoutCampaignInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    messageBody?: Prisma.StringFieldUpdateOperationsInput | string;
    providerMsgId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumDlrStatusFieldUpdateOperationsInput | $Enums.DlrStatus | null;
    costInCredits?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    deliveredAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    type?: Prisma.NullableEnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType | null;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MessageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phone?: boolean;
    messageBody?: boolean;
    providerMsgId?: boolean;
    error?: boolean;
    status?: boolean;
    costInCredits?: boolean;
    sentAt?: boolean;
    deliveredAt?: boolean;
    campaignId?: boolean;
    type?: boolean;
    tenantId?: boolean;
    senderId?: boolean;
    sender?: boolean | Prisma.Message$senderArgs<ExtArgs>;
    campaign?: boolean | Prisma.Message$campaignArgs<ExtArgs>;
    tenant?: boolean | Prisma.Message$tenantArgs<ExtArgs>;
}, ExtArgs["result"]["message"]>;
export type MessageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phone?: boolean;
    messageBody?: boolean;
    providerMsgId?: boolean;
    error?: boolean;
    status?: boolean;
    costInCredits?: boolean;
    sentAt?: boolean;
    deliveredAt?: boolean;
    campaignId?: boolean;
    type?: boolean;
    tenantId?: boolean;
    senderId?: boolean;
    sender?: boolean | Prisma.Message$senderArgs<ExtArgs>;
    campaign?: boolean | Prisma.Message$campaignArgs<ExtArgs>;
    tenant?: boolean | Prisma.Message$tenantArgs<ExtArgs>;
}, ExtArgs["result"]["message"]>;
export type MessageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phone?: boolean;
    messageBody?: boolean;
    providerMsgId?: boolean;
    error?: boolean;
    status?: boolean;
    costInCredits?: boolean;
    sentAt?: boolean;
    deliveredAt?: boolean;
    campaignId?: boolean;
    type?: boolean;
    tenantId?: boolean;
    senderId?: boolean;
    sender?: boolean | Prisma.Message$senderArgs<ExtArgs>;
    campaign?: boolean | Prisma.Message$campaignArgs<ExtArgs>;
    tenant?: boolean | Prisma.Message$tenantArgs<ExtArgs>;
}, ExtArgs["result"]["message"]>;
export type MessageSelectScalar = {
    id?: boolean;
    phone?: boolean;
    messageBody?: boolean;
    providerMsgId?: boolean;
    error?: boolean;
    status?: boolean;
    costInCredits?: boolean;
    sentAt?: boolean;
    deliveredAt?: boolean;
    campaignId?: boolean;
    type?: boolean;
    tenantId?: boolean;
    senderId?: boolean;
};
export type MessageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "phone" | "messageBody" | "providerMsgId" | "error" | "status" | "costInCredits" | "sentAt" | "deliveredAt" | "campaignId" | "type" | "tenantId" | "senderId", ExtArgs["result"]["message"]>;
export type MessageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sender?: boolean | Prisma.Message$senderArgs<ExtArgs>;
    campaign?: boolean | Prisma.Message$campaignArgs<ExtArgs>;
    tenant?: boolean | Prisma.Message$tenantArgs<ExtArgs>;
};
export type MessageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sender?: boolean | Prisma.Message$senderArgs<ExtArgs>;
    campaign?: boolean | Prisma.Message$campaignArgs<ExtArgs>;
    tenant?: boolean | Prisma.Message$tenantArgs<ExtArgs>;
};
export type MessageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sender?: boolean | Prisma.Message$senderArgs<ExtArgs>;
    campaign?: boolean | Prisma.Message$campaignArgs<ExtArgs>;
    tenant?: boolean | Prisma.Message$tenantArgs<ExtArgs>;
};
export type $MessagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Message";
    objects: {
        sender: Prisma.$SenderIDPayload<ExtArgs> | null;
        campaign: Prisma.$CampaignPayload<ExtArgs> | null;
        tenant: Prisma.$TenantPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        phone: string;
        messageBody: string;
        providerMsgId: string | null;
        error: boolean;
        status: $Enums.DlrStatus | null;
        costInCredits: runtime.Decimal | null;
        sentAt: Date | null;
        deliveredAt: Date | null;
        campaignId: string | null;
        type: $Enums.MessageType | null;
        tenantId: string | null;
        senderId: string | null;
    }, ExtArgs["result"]["message"]>;
    composites: {};
};
export type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MessagePayload, S>;
export type MessageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MessageCountAggregateInputType | true;
};
export interface MessageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Message'];
        meta: {
            name: 'Message';
        };
    };
    findUnique<T extends MessageFindUniqueArgs>(args: Prisma.SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MessageFindFirstArgs>(args?: Prisma.SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MessageFindManyArgs>(args?: Prisma.SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MessageCreateArgs>(args: Prisma.SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MessageCreateManyArgs>(args?: Prisma.SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MessageDeleteArgs>(args: Prisma.SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MessageUpdateArgs>(args: Prisma.SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MessageDeleteManyArgs>(args?: Prisma.SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MessageUpdateManyArgs>(args: Prisma.SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MessageUpsertArgs>(args: Prisma.SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma.Prisma__MessageClient<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MessageCountArgs>(args?: Prisma.Subset<T, MessageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MessageCountAggregateOutputType> : number>;
    aggregate<T extends MessageAggregateArgs>(args: Prisma.Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>;
    groupBy<T extends MessageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MessageGroupByArgs['orderBy'];
    } : {
        orderBy?: MessageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MessageFieldRefs;
}
export interface Prisma__MessageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sender<T extends Prisma.Message$senderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Message$senderArgs<ExtArgs>>): Prisma.Prisma__SenderIDClient<runtime.Types.Result.GetResult<Prisma.$SenderIDPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    campaign<T extends Prisma.Message$campaignArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Message$campaignArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    tenant<T extends Prisma.Message$tenantArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Message$tenantArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MessageFieldRefs {
    readonly id: Prisma.FieldRef<"Message", 'String'>;
    readonly phone: Prisma.FieldRef<"Message", 'String'>;
    readonly messageBody: Prisma.FieldRef<"Message", 'String'>;
    readonly providerMsgId: Prisma.FieldRef<"Message", 'String'>;
    readonly error: Prisma.FieldRef<"Message", 'Boolean'>;
    readonly status: Prisma.FieldRef<"Message", 'DlrStatus'>;
    readonly costInCredits: Prisma.FieldRef<"Message", 'Decimal'>;
    readonly sentAt: Prisma.FieldRef<"Message", 'DateTime'>;
    readonly deliveredAt: Prisma.FieldRef<"Message", 'DateTime'>;
    readonly campaignId: Prisma.FieldRef<"Message", 'String'>;
    readonly type: Prisma.FieldRef<"Message", 'MessageType'>;
    readonly tenantId: Prisma.FieldRef<"Message", 'String'>;
    readonly senderId: Prisma.FieldRef<"Message", 'String'>;
}
export type MessageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where: Prisma.MessageWhereUniqueInput;
};
export type MessageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where: Prisma.MessageWhereUniqueInput;
};
export type MessageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[];
    cursor?: Prisma.MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageScalarFieldEnum | Prisma.MessageScalarFieldEnum[];
};
export type MessageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[];
    cursor?: Prisma.MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageScalarFieldEnum | Prisma.MessageScalarFieldEnum[];
};
export type MessageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where?: Prisma.MessageWhereInput;
    orderBy?: Prisma.MessageOrderByWithRelationInput | Prisma.MessageOrderByWithRelationInput[];
    cursor?: Prisma.MessageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MessageScalarFieldEnum | Prisma.MessageScalarFieldEnum[];
};
export type MessageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MessageCreateInput, Prisma.MessageUncheckedCreateInput>;
};
export type MessageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MessageCreateManyInput | Prisma.MessageCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MessageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    data: Prisma.MessageCreateManyInput | Prisma.MessageCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MessageIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MessageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MessageUpdateInput, Prisma.MessageUncheckedUpdateInput>;
    where: Prisma.MessageWhereUniqueInput;
};
export type MessageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MessageUpdateManyMutationInput, Prisma.MessageUncheckedUpdateManyInput>;
    where?: Prisma.MessageWhereInput;
    limit?: number;
};
export type MessageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MessageUpdateManyMutationInput, Prisma.MessageUncheckedUpdateManyInput>;
    where?: Prisma.MessageWhereInput;
    limit?: number;
    include?: Prisma.MessageIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MessageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where: Prisma.MessageWhereUniqueInput;
    create: Prisma.XOR<Prisma.MessageCreateInput, Prisma.MessageUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MessageUpdateInput, Prisma.MessageUncheckedUpdateInput>;
};
export type MessageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
    where: Prisma.MessageWhereUniqueInput;
};
export type MessageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
    limit?: number;
};
export type Message$senderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SenderIDSelect<ExtArgs> | null;
    omit?: Prisma.SenderIDOmit<ExtArgs> | null;
    include?: Prisma.SenderIDInclude<ExtArgs> | null;
    where?: Prisma.SenderIDWhereInput;
};
export type Message$campaignArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where?: Prisma.CampaignWhereInput;
};
export type Message$tenantArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelect<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    include?: Prisma.TenantInclude<ExtArgs> | null;
    where?: Prisma.TenantWhereInput;
};
export type MessageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MessageSelect<ExtArgs> | null;
    omit?: Prisma.MessageOmit<ExtArgs> | null;
    include?: Prisma.MessageInclude<ExtArgs> | null;
};
export {};
