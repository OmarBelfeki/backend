import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CampaignModel = runtime.Types.Result.DefaultSelection<Prisma.$CampaignPayload>;
export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null;
    _avg: CampaignAvgAggregateOutputType | null;
    _sum: CampaignSumAggregateOutputType | null;
    _min: CampaignMinAggregateOutputType | null;
    _max: CampaignMaxAggregateOutputType | null;
};
export type CampaignAvgAggregateOutputType = {
    totalContacts: number | null;
    estimatedCost: runtime.Decimal | null;
};
export type CampaignSumAggregateOutputType = {
    totalContacts: number | null;
    estimatedCost: runtime.Decimal | null;
};
export type CampaignMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: $Enums.CampaignType | null;
    messageContent: string | null;
    scheduledAt: Date | null;
    status: $Enums.CampaignStatus | null;
    totalContacts: number | null;
    estimatedCost: runtime.Decimal | null;
    createdAt: Date | null;
    isActive: boolean | null;
    tenantId: string | null;
    senderId: string | null;
    groupId: string | null;
};
export type CampaignMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: $Enums.CampaignType | null;
    messageContent: string | null;
    scheduledAt: Date | null;
    status: $Enums.CampaignStatus | null;
    totalContacts: number | null;
    estimatedCost: runtime.Decimal | null;
    createdAt: Date | null;
    isActive: boolean | null;
    tenantId: string | null;
    senderId: string | null;
    groupId: string | null;
};
export type CampaignCountAggregateOutputType = {
    id: number;
    name: number;
    type: number;
    messageContent: number;
    scheduledAt: number;
    status: number;
    totalContacts: number;
    estimatedCost: number;
    createdAt: number;
    isActive: number;
    tenantId: number;
    senderId: number;
    groupId: number;
    _all: number;
};
export type CampaignAvgAggregateInputType = {
    totalContacts?: true;
    estimatedCost?: true;
};
export type CampaignSumAggregateInputType = {
    totalContacts?: true;
    estimatedCost?: true;
};
export type CampaignMinAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    messageContent?: true;
    scheduledAt?: true;
    status?: true;
    totalContacts?: true;
    estimatedCost?: true;
    createdAt?: true;
    isActive?: true;
    tenantId?: true;
    senderId?: true;
    groupId?: true;
};
export type CampaignMaxAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    messageContent?: true;
    scheduledAt?: true;
    status?: true;
    totalContacts?: true;
    estimatedCost?: true;
    createdAt?: true;
    isActive?: true;
    tenantId?: true;
    senderId?: true;
    groupId?: true;
};
export type CampaignCountAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    messageContent?: true;
    scheduledAt?: true;
    status?: true;
    totalContacts?: true;
    estimatedCost?: true;
    createdAt?: true;
    isActive?: true;
    tenantId?: true;
    senderId?: true;
    groupId?: true;
    _all?: true;
};
export type CampaignAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampaignWhereInput;
    orderBy?: Prisma.CampaignOrderByWithRelationInput | Prisma.CampaignOrderByWithRelationInput[];
    cursor?: Prisma.CampaignWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CampaignCountAggregateInputType;
    _avg?: CampaignAvgAggregateInputType;
    _sum?: CampaignSumAggregateInputType;
    _min?: CampaignMinAggregateInputType;
    _max?: CampaignMaxAggregateInputType;
};
export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
    [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCampaign[P]> : Prisma.GetScalarType<T[P], AggregateCampaign[P]>;
};
export type CampaignGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampaignWhereInput;
    orderBy?: Prisma.CampaignOrderByWithAggregationInput | Prisma.CampaignOrderByWithAggregationInput[];
    by: Prisma.CampaignScalarFieldEnum[] | Prisma.CampaignScalarFieldEnum;
    having?: Prisma.CampaignScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CampaignCountAggregateInputType | true;
    _avg?: CampaignAvgAggregateInputType;
    _sum?: CampaignSumAggregateInputType;
    _min?: CampaignMinAggregateInputType;
    _max?: CampaignMaxAggregateInputType;
};
export type CampaignGroupByOutputType = {
    id: string;
    name: string;
    type: $Enums.CampaignType;
    messageContent: string;
    scheduledAt: Date | null;
    status: $Enums.CampaignStatus;
    totalContacts: number;
    estimatedCost: runtime.Decimal;
    createdAt: Date;
    isActive: boolean | null;
    tenantId: string;
    senderId: string;
    groupId: string | null;
    _count: CampaignCountAggregateOutputType | null;
    _avg: CampaignAvgAggregateOutputType | null;
    _sum: CampaignSumAggregateOutputType | null;
    _min: CampaignMinAggregateOutputType | null;
    _max: CampaignMaxAggregateOutputType | null;
};
type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CampaignGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CampaignGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CampaignGroupByOutputType[P]>;
}>>;
export type CampaignWhereInput = {
    AND?: Prisma.CampaignWhereInput | Prisma.CampaignWhereInput[];
    OR?: Prisma.CampaignWhereInput[];
    NOT?: Prisma.CampaignWhereInput | Prisma.CampaignWhereInput[];
    id?: Prisma.StringFilter<"Campaign"> | string;
    name?: Prisma.StringFilter<"Campaign"> | string;
    type?: Prisma.EnumCampaignTypeFilter<"Campaign"> | $Enums.CampaignType;
    messageContent?: Prisma.StringFilter<"Campaign"> | string;
    scheduledAt?: Prisma.DateTimeNullableFilter<"Campaign"> | Date | string | null;
    status?: Prisma.EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus;
    totalContacts?: Prisma.IntFilter<"Campaign"> | number;
    estimatedCost?: Prisma.DecimalFilter<"Campaign"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"Campaign"> | Date | string;
    isActive?: Prisma.BoolNullableFilter<"Campaign"> | boolean | null;
    tenantId?: Prisma.StringFilter<"Campaign"> | string;
    senderId?: Prisma.StringFilter<"Campaign"> | string;
    groupId?: Prisma.StringNullableFilter<"Campaign"> | string | null;
    group?: Prisma.XOR<Prisma.GroupNullableScalarRelationFilter, Prisma.GroupWhereInput> | null;
    sender?: Prisma.XOR<Prisma.SenderIDScalarRelationFilter, Prisma.SenderIDWhereInput>;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    messages?: Prisma.MessageListRelationFilter;
};
export type CampaignOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    messageContent?: Prisma.SortOrder;
    scheduledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    totalContacts?: Prisma.SortOrder;
    estimatedCost?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    isActive?: Prisma.SortOrderInput | Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    groupId?: Prisma.SortOrderInput | Prisma.SortOrder;
    group?: Prisma.GroupOrderByWithRelationInput;
    sender?: Prisma.SenderIDOrderByWithRelationInput;
    tenant?: Prisma.TenantOrderByWithRelationInput;
    messages?: Prisma.MessageOrderByRelationAggregateInput;
};
export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CampaignWhereInput | Prisma.CampaignWhereInput[];
    OR?: Prisma.CampaignWhereInput[];
    NOT?: Prisma.CampaignWhereInput | Prisma.CampaignWhereInput[];
    name?: Prisma.StringFilter<"Campaign"> | string;
    type?: Prisma.EnumCampaignTypeFilter<"Campaign"> | $Enums.CampaignType;
    messageContent?: Prisma.StringFilter<"Campaign"> | string;
    scheduledAt?: Prisma.DateTimeNullableFilter<"Campaign"> | Date | string | null;
    status?: Prisma.EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus;
    totalContacts?: Prisma.IntFilter<"Campaign"> | number;
    estimatedCost?: Prisma.DecimalFilter<"Campaign"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"Campaign"> | Date | string;
    isActive?: Prisma.BoolNullableFilter<"Campaign"> | boolean | null;
    tenantId?: Prisma.StringFilter<"Campaign"> | string;
    senderId?: Prisma.StringFilter<"Campaign"> | string;
    groupId?: Prisma.StringNullableFilter<"Campaign"> | string | null;
    group?: Prisma.XOR<Prisma.GroupNullableScalarRelationFilter, Prisma.GroupWhereInput> | null;
    sender?: Prisma.XOR<Prisma.SenderIDScalarRelationFilter, Prisma.SenderIDWhereInput>;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    messages?: Prisma.MessageListRelationFilter;
}, "id">;
export type CampaignOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    messageContent?: Prisma.SortOrder;
    scheduledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    totalContacts?: Prisma.SortOrder;
    estimatedCost?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    isActive?: Prisma.SortOrderInput | Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    groupId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.CampaignCountOrderByAggregateInput;
    _avg?: Prisma.CampaignAvgOrderByAggregateInput;
    _max?: Prisma.CampaignMaxOrderByAggregateInput;
    _min?: Prisma.CampaignMinOrderByAggregateInput;
    _sum?: Prisma.CampaignSumOrderByAggregateInput;
};
export type CampaignScalarWhereWithAggregatesInput = {
    AND?: Prisma.CampaignScalarWhereWithAggregatesInput | Prisma.CampaignScalarWhereWithAggregatesInput[];
    OR?: Prisma.CampaignScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CampaignScalarWhereWithAggregatesInput | Prisma.CampaignScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Campaign"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Campaign"> | string;
    type?: Prisma.EnumCampaignTypeWithAggregatesFilter<"Campaign"> | $Enums.CampaignType;
    messageContent?: Prisma.StringWithAggregatesFilter<"Campaign"> | string;
    scheduledAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Campaign"> | Date | string | null;
    status?: Prisma.EnumCampaignStatusWithAggregatesFilter<"Campaign"> | $Enums.CampaignStatus;
    totalContacts?: Prisma.IntWithAggregatesFilter<"Campaign"> | number;
    estimatedCost?: Prisma.DecimalWithAggregatesFilter<"Campaign"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Campaign"> | Date | string;
    isActive?: Prisma.BoolNullableWithAggregatesFilter<"Campaign"> | boolean | null;
    tenantId?: Prisma.StringWithAggregatesFilter<"Campaign"> | string;
    senderId?: Prisma.StringWithAggregatesFilter<"Campaign"> | string;
    groupId?: Prisma.StringNullableWithAggregatesFilter<"Campaign"> | string | null;
};
export type CampaignCreateInput = {
    id?: string;
    name: string;
    type: $Enums.CampaignType;
    messageContent: string;
    scheduledAt?: Date | string | null;
    status?: $Enums.CampaignStatus;
    totalContacts?: number;
    estimatedCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    isActive?: boolean | null;
    group?: Prisma.GroupCreateNestedOneWithoutCampaignsInput;
    sender: Prisma.SenderIDCreateNestedOneWithoutCampaignsInput;
    tenant: Prisma.TenantCreateNestedOneWithoutCampaignsInput;
    messages?: Prisma.MessageCreateNestedManyWithoutCampaignInput;
};
export type CampaignUncheckedCreateInput = {
    id?: string;
    name: string;
    type: $Enums.CampaignType;
    messageContent: string;
    scheduledAt?: Date | string | null;
    status?: $Enums.CampaignStatus;
    totalContacts?: number;
    estimatedCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    isActive?: boolean | null;
    tenantId: string;
    senderId: string;
    groupId?: string | null;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutCampaignInput;
};
export type CampaignUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType;
    messageContent?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus;
    totalContacts?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    group?: Prisma.GroupUpdateOneWithoutCampaignsNestedInput;
    sender?: Prisma.SenderIDUpdateOneRequiredWithoutCampaignsNestedInput;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutCampaignsNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutCampaignNestedInput;
};
export type CampaignUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType;
    messageContent?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus;
    totalContacts?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutCampaignNestedInput;
};
export type CampaignCreateManyInput = {
    id?: string;
    name: string;
    type: $Enums.CampaignType;
    messageContent: string;
    scheduledAt?: Date | string | null;
    status?: $Enums.CampaignStatus;
    totalContacts?: number;
    estimatedCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    isActive?: boolean | null;
    tenantId: string;
    senderId: string;
    groupId?: string | null;
};
export type CampaignUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType;
    messageContent?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus;
    totalContacts?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type CampaignUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType;
    messageContent?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus;
    totalContacts?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CampaignListRelationFilter = {
    every?: Prisma.CampaignWhereInput;
    some?: Prisma.CampaignWhereInput;
    none?: Prisma.CampaignWhereInput;
};
export type CampaignOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CampaignCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    messageContent?: Prisma.SortOrder;
    scheduledAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    totalContacts?: Prisma.SortOrder;
    estimatedCost?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
};
export type CampaignAvgOrderByAggregateInput = {
    totalContacts?: Prisma.SortOrder;
    estimatedCost?: Prisma.SortOrder;
};
export type CampaignMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    messageContent?: Prisma.SortOrder;
    scheduledAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    totalContacts?: Prisma.SortOrder;
    estimatedCost?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
};
export type CampaignMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    messageContent?: Prisma.SortOrder;
    scheduledAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    totalContacts?: Prisma.SortOrder;
    estimatedCost?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    senderId?: Prisma.SortOrder;
    groupId?: Prisma.SortOrder;
};
export type CampaignSumOrderByAggregateInput = {
    totalContacts?: Prisma.SortOrder;
    estimatedCost?: Prisma.SortOrder;
};
export type CampaignNullableScalarRelationFilter = {
    is?: Prisma.CampaignWhereInput | null;
    isNot?: Prisma.CampaignWhereInput | null;
};
export type CampaignCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutTenantInput, Prisma.CampaignUncheckedCreateWithoutTenantInput> | Prisma.CampaignCreateWithoutTenantInput[] | Prisma.CampaignUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutTenantInput | Prisma.CampaignCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.CampaignCreateManyTenantInputEnvelope;
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
};
export type CampaignUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutTenantInput, Prisma.CampaignUncheckedCreateWithoutTenantInput> | Prisma.CampaignCreateWithoutTenantInput[] | Prisma.CampaignUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutTenantInput | Prisma.CampaignCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.CampaignCreateManyTenantInputEnvelope;
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
};
export type CampaignUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutTenantInput, Prisma.CampaignUncheckedCreateWithoutTenantInput> | Prisma.CampaignCreateWithoutTenantInput[] | Prisma.CampaignUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutTenantInput | Prisma.CampaignCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.CampaignUpsertWithWhereUniqueWithoutTenantInput | Prisma.CampaignUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.CampaignCreateManyTenantInputEnvelope;
    set?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    disconnect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    delete?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    update?: Prisma.CampaignUpdateWithWhereUniqueWithoutTenantInput | Prisma.CampaignUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.CampaignUpdateManyWithWhereWithoutTenantInput | Prisma.CampaignUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.CampaignScalarWhereInput | Prisma.CampaignScalarWhereInput[];
};
export type CampaignUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutTenantInput, Prisma.CampaignUncheckedCreateWithoutTenantInput> | Prisma.CampaignCreateWithoutTenantInput[] | Prisma.CampaignUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutTenantInput | Prisma.CampaignCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.CampaignUpsertWithWhereUniqueWithoutTenantInput | Prisma.CampaignUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.CampaignCreateManyTenantInputEnvelope;
    set?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    disconnect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    delete?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    update?: Prisma.CampaignUpdateWithWhereUniqueWithoutTenantInput | Prisma.CampaignUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.CampaignUpdateManyWithWhereWithoutTenantInput | Prisma.CampaignUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.CampaignScalarWhereInput | Prisma.CampaignScalarWhereInput[];
};
export type CampaignCreateNestedManyWithoutSenderInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutSenderInput, Prisma.CampaignUncheckedCreateWithoutSenderInput> | Prisma.CampaignCreateWithoutSenderInput[] | Prisma.CampaignUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutSenderInput | Prisma.CampaignCreateOrConnectWithoutSenderInput[];
    createMany?: Prisma.CampaignCreateManySenderInputEnvelope;
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
};
export type CampaignUncheckedCreateNestedManyWithoutSenderInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutSenderInput, Prisma.CampaignUncheckedCreateWithoutSenderInput> | Prisma.CampaignCreateWithoutSenderInput[] | Prisma.CampaignUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutSenderInput | Prisma.CampaignCreateOrConnectWithoutSenderInput[];
    createMany?: Prisma.CampaignCreateManySenderInputEnvelope;
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
};
export type CampaignUpdateManyWithoutSenderNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutSenderInput, Prisma.CampaignUncheckedCreateWithoutSenderInput> | Prisma.CampaignCreateWithoutSenderInput[] | Prisma.CampaignUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutSenderInput | Prisma.CampaignCreateOrConnectWithoutSenderInput[];
    upsert?: Prisma.CampaignUpsertWithWhereUniqueWithoutSenderInput | Prisma.CampaignUpsertWithWhereUniqueWithoutSenderInput[];
    createMany?: Prisma.CampaignCreateManySenderInputEnvelope;
    set?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    disconnect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    delete?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    update?: Prisma.CampaignUpdateWithWhereUniqueWithoutSenderInput | Prisma.CampaignUpdateWithWhereUniqueWithoutSenderInput[];
    updateMany?: Prisma.CampaignUpdateManyWithWhereWithoutSenderInput | Prisma.CampaignUpdateManyWithWhereWithoutSenderInput[];
    deleteMany?: Prisma.CampaignScalarWhereInput | Prisma.CampaignScalarWhereInput[];
};
export type CampaignUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutSenderInput, Prisma.CampaignUncheckedCreateWithoutSenderInput> | Prisma.CampaignCreateWithoutSenderInput[] | Prisma.CampaignUncheckedCreateWithoutSenderInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutSenderInput | Prisma.CampaignCreateOrConnectWithoutSenderInput[];
    upsert?: Prisma.CampaignUpsertWithWhereUniqueWithoutSenderInput | Prisma.CampaignUpsertWithWhereUniqueWithoutSenderInput[];
    createMany?: Prisma.CampaignCreateManySenderInputEnvelope;
    set?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    disconnect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    delete?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    update?: Prisma.CampaignUpdateWithWhereUniqueWithoutSenderInput | Prisma.CampaignUpdateWithWhereUniqueWithoutSenderInput[];
    updateMany?: Prisma.CampaignUpdateManyWithWhereWithoutSenderInput | Prisma.CampaignUpdateManyWithWhereWithoutSenderInput[];
    deleteMany?: Prisma.CampaignScalarWhereInput | Prisma.CampaignScalarWhereInput[];
};
export type CampaignCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutGroupInput, Prisma.CampaignUncheckedCreateWithoutGroupInput> | Prisma.CampaignCreateWithoutGroupInput[] | Prisma.CampaignUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutGroupInput | Prisma.CampaignCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.CampaignCreateManyGroupInputEnvelope;
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
};
export type CampaignUncheckedCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutGroupInput, Prisma.CampaignUncheckedCreateWithoutGroupInput> | Prisma.CampaignCreateWithoutGroupInput[] | Prisma.CampaignUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutGroupInput | Prisma.CampaignCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.CampaignCreateManyGroupInputEnvelope;
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
};
export type CampaignUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutGroupInput, Prisma.CampaignUncheckedCreateWithoutGroupInput> | Prisma.CampaignCreateWithoutGroupInput[] | Prisma.CampaignUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutGroupInput | Prisma.CampaignCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.CampaignUpsertWithWhereUniqueWithoutGroupInput | Prisma.CampaignUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.CampaignCreateManyGroupInputEnvelope;
    set?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    disconnect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    delete?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    update?: Prisma.CampaignUpdateWithWhereUniqueWithoutGroupInput | Prisma.CampaignUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.CampaignUpdateManyWithWhereWithoutGroupInput | Prisma.CampaignUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.CampaignScalarWhereInput | Prisma.CampaignScalarWhereInput[];
};
export type CampaignUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutGroupInput, Prisma.CampaignUncheckedCreateWithoutGroupInput> | Prisma.CampaignCreateWithoutGroupInput[] | Prisma.CampaignUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutGroupInput | Prisma.CampaignCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.CampaignUpsertWithWhereUniqueWithoutGroupInput | Prisma.CampaignUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.CampaignCreateManyGroupInputEnvelope;
    set?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    disconnect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    delete?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    connect?: Prisma.CampaignWhereUniqueInput | Prisma.CampaignWhereUniqueInput[];
    update?: Prisma.CampaignUpdateWithWhereUniqueWithoutGroupInput | Prisma.CampaignUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.CampaignUpdateManyWithWhereWithoutGroupInput | Prisma.CampaignUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.CampaignScalarWhereInput | Prisma.CampaignScalarWhereInput[];
};
export type EnumCampaignTypeFieldUpdateOperationsInput = {
    set?: $Enums.CampaignType;
};
export type EnumCampaignStatusFieldUpdateOperationsInput = {
    set?: $Enums.CampaignStatus;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
};
export type CampaignCreateNestedOneWithoutMessagesInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutMessagesInput, Prisma.CampaignUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutMessagesInput;
    connect?: Prisma.CampaignWhereUniqueInput;
};
export type CampaignUpdateOneWithoutMessagesNestedInput = {
    create?: Prisma.XOR<Prisma.CampaignCreateWithoutMessagesInput, Prisma.CampaignUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.CampaignCreateOrConnectWithoutMessagesInput;
    upsert?: Prisma.CampaignUpsertWithoutMessagesInput;
    disconnect?: Prisma.CampaignWhereInput | boolean;
    delete?: Prisma.CampaignWhereInput | boolean;
    connect?: Prisma.CampaignWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CampaignUpdateToOneWithWhereWithoutMessagesInput, Prisma.CampaignUpdateWithoutMessagesInput>, Prisma.CampaignUncheckedUpdateWithoutMessagesInput>;
};
export type CampaignCreateWithoutTenantInput = {
    id?: string;
    name: string;
    type: $Enums.CampaignType;
    messageContent: string;
    scheduledAt?: Date | string | null;
    status?: $Enums.CampaignStatus;
    totalContacts?: number;
    estimatedCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    isActive?: boolean | null;
    group?: Prisma.GroupCreateNestedOneWithoutCampaignsInput;
    sender: Prisma.SenderIDCreateNestedOneWithoutCampaignsInput;
    messages?: Prisma.MessageCreateNestedManyWithoutCampaignInput;
};
export type CampaignUncheckedCreateWithoutTenantInput = {
    id?: string;
    name: string;
    type: $Enums.CampaignType;
    messageContent: string;
    scheduledAt?: Date | string | null;
    status?: $Enums.CampaignStatus;
    totalContacts?: number;
    estimatedCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    isActive?: boolean | null;
    senderId: string;
    groupId?: string | null;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutCampaignInput;
};
export type CampaignCreateOrConnectWithoutTenantInput = {
    where: Prisma.CampaignWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutTenantInput, Prisma.CampaignUncheckedCreateWithoutTenantInput>;
};
export type CampaignCreateManyTenantInputEnvelope = {
    data: Prisma.CampaignCreateManyTenantInput | Prisma.CampaignCreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type CampaignUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.CampaignWhereUniqueInput;
    update: Prisma.XOR<Prisma.CampaignUpdateWithoutTenantInput, Prisma.CampaignUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutTenantInput, Prisma.CampaignUncheckedCreateWithoutTenantInput>;
};
export type CampaignUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.CampaignWhereUniqueInput;
    data: Prisma.XOR<Prisma.CampaignUpdateWithoutTenantInput, Prisma.CampaignUncheckedUpdateWithoutTenantInput>;
};
export type CampaignUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.CampaignScalarWhereInput;
    data: Prisma.XOR<Prisma.CampaignUpdateManyMutationInput, Prisma.CampaignUncheckedUpdateManyWithoutTenantInput>;
};
export type CampaignScalarWhereInput = {
    AND?: Prisma.CampaignScalarWhereInput | Prisma.CampaignScalarWhereInput[];
    OR?: Prisma.CampaignScalarWhereInput[];
    NOT?: Prisma.CampaignScalarWhereInput | Prisma.CampaignScalarWhereInput[];
    id?: Prisma.StringFilter<"Campaign"> | string;
    name?: Prisma.StringFilter<"Campaign"> | string;
    type?: Prisma.EnumCampaignTypeFilter<"Campaign"> | $Enums.CampaignType;
    messageContent?: Prisma.StringFilter<"Campaign"> | string;
    scheduledAt?: Prisma.DateTimeNullableFilter<"Campaign"> | Date | string | null;
    status?: Prisma.EnumCampaignStatusFilter<"Campaign"> | $Enums.CampaignStatus;
    totalContacts?: Prisma.IntFilter<"Campaign"> | number;
    estimatedCost?: Prisma.DecimalFilter<"Campaign"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"Campaign"> | Date | string;
    isActive?: Prisma.BoolNullableFilter<"Campaign"> | boolean | null;
    tenantId?: Prisma.StringFilter<"Campaign"> | string;
    senderId?: Prisma.StringFilter<"Campaign"> | string;
    groupId?: Prisma.StringNullableFilter<"Campaign"> | string | null;
};
export type CampaignCreateWithoutSenderInput = {
    id?: string;
    name: string;
    type: $Enums.CampaignType;
    messageContent: string;
    scheduledAt?: Date | string | null;
    status?: $Enums.CampaignStatus;
    totalContacts?: number;
    estimatedCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    isActive?: boolean | null;
    group?: Prisma.GroupCreateNestedOneWithoutCampaignsInput;
    tenant: Prisma.TenantCreateNestedOneWithoutCampaignsInput;
    messages?: Prisma.MessageCreateNestedManyWithoutCampaignInput;
};
export type CampaignUncheckedCreateWithoutSenderInput = {
    id?: string;
    name: string;
    type: $Enums.CampaignType;
    messageContent: string;
    scheduledAt?: Date | string | null;
    status?: $Enums.CampaignStatus;
    totalContacts?: number;
    estimatedCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    isActive?: boolean | null;
    tenantId: string;
    groupId?: string | null;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutCampaignInput;
};
export type CampaignCreateOrConnectWithoutSenderInput = {
    where: Prisma.CampaignWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutSenderInput, Prisma.CampaignUncheckedCreateWithoutSenderInput>;
};
export type CampaignCreateManySenderInputEnvelope = {
    data: Prisma.CampaignCreateManySenderInput | Prisma.CampaignCreateManySenderInput[];
    skipDuplicates?: boolean;
};
export type CampaignUpsertWithWhereUniqueWithoutSenderInput = {
    where: Prisma.CampaignWhereUniqueInput;
    update: Prisma.XOR<Prisma.CampaignUpdateWithoutSenderInput, Prisma.CampaignUncheckedUpdateWithoutSenderInput>;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutSenderInput, Prisma.CampaignUncheckedCreateWithoutSenderInput>;
};
export type CampaignUpdateWithWhereUniqueWithoutSenderInput = {
    where: Prisma.CampaignWhereUniqueInput;
    data: Prisma.XOR<Prisma.CampaignUpdateWithoutSenderInput, Prisma.CampaignUncheckedUpdateWithoutSenderInput>;
};
export type CampaignUpdateManyWithWhereWithoutSenderInput = {
    where: Prisma.CampaignScalarWhereInput;
    data: Prisma.XOR<Prisma.CampaignUpdateManyMutationInput, Prisma.CampaignUncheckedUpdateManyWithoutSenderInput>;
};
export type CampaignCreateWithoutGroupInput = {
    id?: string;
    name: string;
    type: $Enums.CampaignType;
    messageContent: string;
    scheduledAt?: Date | string | null;
    status?: $Enums.CampaignStatus;
    totalContacts?: number;
    estimatedCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    isActive?: boolean | null;
    sender: Prisma.SenderIDCreateNestedOneWithoutCampaignsInput;
    tenant: Prisma.TenantCreateNestedOneWithoutCampaignsInput;
    messages?: Prisma.MessageCreateNestedManyWithoutCampaignInput;
};
export type CampaignUncheckedCreateWithoutGroupInput = {
    id?: string;
    name: string;
    type: $Enums.CampaignType;
    messageContent: string;
    scheduledAt?: Date | string | null;
    status?: $Enums.CampaignStatus;
    totalContacts?: number;
    estimatedCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    isActive?: boolean | null;
    tenantId: string;
    senderId: string;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutCampaignInput;
};
export type CampaignCreateOrConnectWithoutGroupInput = {
    where: Prisma.CampaignWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutGroupInput, Prisma.CampaignUncheckedCreateWithoutGroupInput>;
};
export type CampaignCreateManyGroupInputEnvelope = {
    data: Prisma.CampaignCreateManyGroupInput | Prisma.CampaignCreateManyGroupInput[];
    skipDuplicates?: boolean;
};
export type CampaignUpsertWithWhereUniqueWithoutGroupInput = {
    where: Prisma.CampaignWhereUniqueInput;
    update: Prisma.XOR<Prisma.CampaignUpdateWithoutGroupInput, Prisma.CampaignUncheckedUpdateWithoutGroupInput>;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutGroupInput, Prisma.CampaignUncheckedCreateWithoutGroupInput>;
};
export type CampaignUpdateWithWhereUniqueWithoutGroupInput = {
    where: Prisma.CampaignWhereUniqueInput;
    data: Prisma.XOR<Prisma.CampaignUpdateWithoutGroupInput, Prisma.CampaignUncheckedUpdateWithoutGroupInput>;
};
export type CampaignUpdateManyWithWhereWithoutGroupInput = {
    where: Prisma.CampaignScalarWhereInput;
    data: Prisma.XOR<Prisma.CampaignUpdateManyMutationInput, Prisma.CampaignUncheckedUpdateManyWithoutGroupInput>;
};
export type CampaignCreateWithoutMessagesInput = {
    id?: string;
    name: string;
    type: $Enums.CampaignType;
    messageContent: string;
    scheduledAt?: Date | string | null;
    status?: $Enums.CampaignStatus;
    totalContacts?: number;
    estimatedCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    isActive?: boolean | null;
    group?: Prisma.GroupCreateNestedOneWithoutCampaignsInput;
    sender: Prisma.SenderIDCreateNestedOneWithoutCampaignsInput;
    tenant: Prisma.TenantCreateNestedOneWithoutCampaignsInput;
};
export type CampaignUncheckedCreateWithoutMessagesInput = {
    id?: string;
    name: string;
    type: $Enums.CampaignType;
    messageContent: string;
    scheduledAt?: Date | string | null;
    status?: $Enums.CampaignStatus;
    totalContacts?: number;
    estimatedCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    isActive?: boolean | null;
    tenantId: string;
    senderId: string;
    groupId?: string | null;
};
export type CampaignCreateOrConnectWithoutMessagesInput = {
    where: Prisma.CampaignWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutMessagesInput, Prisma.CampaignUncheckedCreateWithoutMessagesInput>;
};
export type CampaignUpsertWithoutMessagesInput = {
    update: Prisma.XOR<Prisma.CampaignUpdateWithoutMessagesInput, Prisma.CampaignUncheckedUpdateWithoutMessagesInput>;
    create: Prisma.XOR<Prisma.CampaignCreateWithoutMessagesInput, Prisma.CampaignUncheckedCreateWithoutMessagesInput>;
    where?: Prisma.CampaignWhereInput;
};
export type CampaignUpdateToOneWithWhereWithoutMessagesInput = {
    where?: Prisma.CampaignWhereInput;
    data: Prisma.XOR<Prisma.CampaignUpdateWithoutMessagesInput, Prisma.CampaignUncheckedUpdateWithoutMessagesInput>;
};
export type CampaignUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType;
    messageContent?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus;
    totalContacts?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    group?: Prisma.GroupUpdateOneWithoutCampaignsNestedInput;
    sender?: Prisma.SenderIDUpdateOneRequiredWithoutCampaignsNestedInput;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutCampaignsNestedInput;
};
export type CampaignUncheckedUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType;
    messageContent?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus;
    totalContacts?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CampaignCreateManyTenantInput = {
    id?: string;
    name: string;
    type: $Enums.CampaignType;
    messageContent: string;
    scheduledAt?: Date | string | null;
    status?: $Enums.CampaignStatus;
    totalContacts?: number;
    estimatedCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    isActive?: boolean | null;
    senderId: string;
    groupId?: string | null;
};
export type CampaignUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType;
    messageContent?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus;
    totalContacts?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    group?: Prisma.GroupUpdateOneWithoutCampaignsNestedInput;
    sender?: Prisma.SenderIDUpdateOneRequiredWithoutCampaignsNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutCampaignNestedInput;
};
export type CampaignUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType;
    messageContent?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus;
    totalContacts?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutCampaignNestedInput;
};
export type CampaignUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType;
    messageContent?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus;
    totalContacts?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CampaignCreateManySenderInput = {
    id?: string;
    name: string;
    type: $Enums.CampaignType;
    messageContent: string;
    scheduledAt?: Date | string | null;
    status?: $Enums.CampaignStatus;
    totalContacts?: number;
    estimatedCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    isActive?: boolean | null;
    tenantId: string;
    groupId?: string | null;
};
export type CampaignUpdateWithoutSenderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType;
    messageContent?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus;
    totalContacts?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    group?: Prisma.GroupUpdateOneWithoutCampaignsNestedInput;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutCampaignsNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutCampaignNestedInput;
};
export type CampaignUncheckedUpdateWithoutSenderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType;
    messageContent?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus;
    totalContacts?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutCampaignNestedInput;
};
export type CampaignUncheckedUpdateManyWithoutSenderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType;
    messageContent?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus;
    totalContacts?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    groupId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CampaignCreateManyGroupInput = {
    id?: string;
    name: string;
    type: $Enums.CampaignType;
    messageContent: string;
    scheduledAt?: Date | string | null;
    status?: $Enums.CampaignStatus;
    totalContacts?: number;
    estimatedCost: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    isActive?: boolean | null;
    tenantId: string;
    senderId: string;
};
export type CampaignUpdateWithoutGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType;
    messageContent?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus;
    totalContacts?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    sender?: Prisma.SenderIDUpdateOneRequiredWithoutCampaignsNestedInput;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutCampaignsNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutCampaignNestedInput;
};
export type CampaignUncheckedUpdateWithoutGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType;
    messageContent?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus;
    totalContacts?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutCampaignNestedInput;
};
export type CampaignUncheckedUpdateManyWithoutGroupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCampaignTypeFieldUpdateOperationsInput | $Enums.CampaignType;
    messageContent?: Prisma.StringFieldUpdateOperationsInput | string;
    scheduledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumCampaignStatusFieldUpdateOperationsInput | $Enums.CampaignStatus;
    totalContacts?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedCost?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    senderId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CampaignCountOutputType = {
    messages: number;
};
export type CampaignCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    messages?: boolean | CampaignCountOutputTypeCountMessagesArgs;
};
export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignCountOutputTypeSelect<ExtArgs> | null;
};
export type CampaignCountOutputTypeCountMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
};
export type CampaignSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    type?: boolean;
    messageContent?: boolean;
    scheduledAt?: boolean;
    status?: boolean;
    totalContacts?: boolean;
    estimatedCost?: boolean;
    createdAt?: boolean;
    isActive?: boolean;
    tenantId?: boolean;
    senderId?: boolean;
    groupId?: boolean;
    group?: boolean | Prisma.Campaign$groupArgs<ExtArgs>;
    sender?: boolean | Prisma.SenderIDDefaultArgs<ExtArgs>;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    messages?: boolean | Prisma.Campaign$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.CampaignCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["campaign"]>;
export type CampaignSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    type?: boolean;
    messageContent?: boolean;
    scheduledAt?: boolean;
    status?: boolean;
    totalContacts?: boolean;
    estimatedCost?: boolean;
    createdAt?: boolean;
    isActive?: boolean;
    tenantId?: boolean;
    senderId?: boolean;
    groupId?: boolean;
    group?: boolean | Prisma.Campaign$groupArgs<ExtArgs>;
    sender?: boolean | Prisma.SenderIDDefaultArgs<ExtArgs>;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["campaign"]>;
export type CampaignSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    type?: boolean;
    messageContent?: boolean;
    scheduledAt?: boolean;
    status?: boolean;
    totalContacts?: boolean;
    estimatedCost?: boolean;
    createdAt?: boolean;
    isActive?: boolean;
    tenantId?: boolean;
    senderId?: boolean;
    groupId?: boolean;
    group?: boolean | Prisma.Campaign$groupArgs<ExtArgs>;
    sender?: boolean | Prisma.SenderIDDefaultArgs<ExtArgs>;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["campaign"]>;
export type CampaignSelectScalar = {
    id?: boolean;
    name?: boolean;
    type?: boolean;
    messageContent?: boolean;
    scheduledAt?: boolean;
    status?: boolean;
    totalContacts?: boolean;
    estimatedCost?: boolean;
    createdAt?: boolean;
    isActive?: boolean;
    tenantId?: boolean;
    senderId?: boolean;
    groupId?: boolean;
};
export type CampaignOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "type" | "messageContent" | "scheduledAt" | "status" | "totalContacts" | "estimatedCost" | "createdAt" | "isActive" | "tenantId" | "senderId" | "groupId", ExtArgs["result"]["campaign"]>;
export type CampaignInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.Campaign$groupArgs<ExtArgs>;
    sender?: boolean | Prisma.SenderIDDefaultArgs<ExtArgs>;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    messages?: boolean | Prisma.Campaign$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.CampaignCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CampaignIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.Campaign$groupArgs<ExtArgs>;
    sender?: boolean | Prisma.SenderIDDefaultArgs<ExtArgs>;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.Campaign$groupArgs<ExtArgs>;
    sender?: boolean | Prisma.SenderIDDefaultArgs<ExtArgs>;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type $CampaignPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Campaign";
    objects: {
        group: Prisma.$GroupPayload<ExtArgs> | null;
        sender: Prisma.$SenderIDPayload<ExtArgs>;
        tenant: Prisma.$TenantPayload<ExtArgs>;
        messages: Prisma.$MessagePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        type: $Enums.CampaignType;
        messageContent: string;
        scheduledAt: Date | null;
        status: $Enums.CampaignStatus;
        totalContacts: number;
        estimatedCost: runtime.Decimal;
        createdAt: Date;
        isActive: boolean | null;
        tenantId: string;
        senderId: string;
        groupId: string | null;
    }, ExtArgs["result"]["campaign"]>;
    composites: {};
};
export type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CampaignPayload, S>;
export type CampaignCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CampaignCountAggregateInputType | true;
};
export interface CampaignDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Campaign'];
        meta: {
            name: 'Campaign';
        };
    };
    findUnique<T extends CampaignFindUniqueArgs>(args: Prisma.SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CampaignFindFirstArgs>(args?: Prisma.SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CampaignFindManyArgs>(args?: Prisma.SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CampaignCreateArgs>(args: Prisma.SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CampaignCreateManyArgs>(args?: Prisma.SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CampaignDeleteArgs>(args: Prisma.SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CampaignUpdateArgs>(args: Prisma.SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CampaignDeleteManyArgs>(args?: Prisma.SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CampaignUpdateManyArgs>(args: Prisma.SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CampaignUpsertArgs>(args: Prisma.SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma.Prisma__CampaignClient<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CampaignCountArgs>(args?: Prisma.Subset<T, CampaignCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CampaignCountAggregateOutputType> : number>;
    aggregate<T extends CampaignAggregateArgs>(args: Prisma.Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>;
    groupBy<T extends CampaignGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CampaignGroupByArgs['orderBy'];
    } : {
        orderBy?: CampaignGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CampaignFieldRefs;
}
export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    group<T extends Prisma.Campaign$groupArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Campaign$groupArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    sender<T extends Prisma.SenderIDDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SenderIDDefaultArgs<ExtArgs>>): Prisma.Prisma__SenderIDClient<runtime.Types.Result.GetResult<Prisma.$SenderIDPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tenant<T extends Prisma.TenantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenantDefaultArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    messages<T extends Prisma.Campaign$messagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Campaign$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CampaignFieldRefs {
    readonly id: Prisma.FieldRef<"Campaign", 'String'>;
    readonly name: Prisma.FieldRef<"Campaign", 'String'>;
    readonly type: Prisma.FieldRef<"Campaign", 'CampaignType'>;
    readonly messageContent: Prisma.FieldRef<"Campaign", 'String'>;
    readonly scheduledAt: Prisma.FieldRef<"Campaign", 'DateTime'>;
    readonly status: Prisma.FieldRef<"Campaign", 'CampaignStatus'>;
    readonly totalContacts: Prisma.FieldRef<"Campaign", 'Int'>;
    readonly estimatedCost: Prisma.FieldRef<"Campaign", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"Campaign", 'DateTime'>;
    readonly isActive: Prisma.FieldRef<"Campaign", 'Boolean'>;
    readonly tenantId: Prisma.FieldRef<"Campaign", 'String'>;
    readonly senderId: Prisma.FieldRef<"Campaign", 'String'>;
    readonly groupId: Prisma.FieldRef<"Campaign", 'String'>;
}
export type CampaignFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where: Prisma.CampaignWhereUniqueInput;
};
export type CampaignFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where: Prisma.CampaignWhereUniqueInput;
};
export type CampaignFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where?: Prisma.CampaignWhereInput;
    orderBy?: Prisma.CampaignOrderByWithRelationInput | Prisma.CampaignOrderByWithRelationInput[];
    cursor?: Prisma.CampaignWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CampaignScalarFieldEnum | Prisma.CampaignScalarFieldEnum[];
};
export type CampaignFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where?: Prisma.CampaignWhereInput;
    orderBy?: Prisma.CampaignOrderByWithRelationInput | Prisma.CampaignOrderByWithRelationInput[];
    cursor?: Prisma.CampaignWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CampaignScalarFieldEnum | Prisma.CampaignScalarFieldEnum[];
};
export type CampaignFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where?: Prisma.CampaignWhereInput;
    orderBy?: Prisma.CampaignOrderByWithRelationInput | Prisma.CampaignOrderByWithRelationInput[];
    cursor?: Prisma.CampaignWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CampaignScalarFieldEnum | Prisma.CampaignScalarFieldEnum[];
};
export type CampaignCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CampaignCreateInput, Prisma.CampaignUncheckedCreateInput>;
};
export type CampaignCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CampaignCreateManyInput | Prisma.CampaignCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CampaignCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    data: Prisma.CampaignCreateManyInput | Prisma.CampaignCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CampaignIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CampaignUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CampaignUpdateInput, Prisma.CampaignUncheckedUpdateInput>;
    where: Prisma.CampaignWhereUniqueInput;
};
export type CampaignUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CampaignUpdateManyMutationInput, Prisma.CampaignUncheckedUpdateManyInput>;
    where?: Prisma.CampaignWhereInput;
    limit?: number;
};
export type CampaignUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CampaignUpdateManyMutationInput, Prisma.CampaignUncheckedUpdateManyInput>;
    where?: Prisma.CampaignWhereInput;
    limit?: number;
    include?: Prisma.CampaignIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CampaignUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where: Prisma.CampaignWhereUniqueInput;
    create: Prisma.XOR<Prisma.CampaignCreateInput, Prisma.CampaignUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CampaignUpdateInput, Prisma.CampaignUncheckedUpdateInput>;
};
export type CampaignDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
    where: Prisma.CampaignWhereUniqueInput;
};
export type CampaignDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampaignWhereInput;
    limit?: number;
};
export type Campaign$groupArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    where?: Prisma.GroupWhereInput;
};
export type Campaign$messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CampaignDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CampaignSelect<ExtArgs> | null;
    omit?: Prisma.CampaignOmit<ExtArgs> | null;
    include?: Prisma.CampaignInclude<ExtArgs> | null;
};
export {};
