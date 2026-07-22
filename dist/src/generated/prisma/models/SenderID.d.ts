import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SenderIDModel = runtime.Types.Result.DefaultSelection<Prisma.$SenderIDPayload>;
export type AggregateSenderID = {
    _count: SenderIDCountAggregateOutputType | null;
    _min: SenderIDMinAggregateOutputType | null;
    _max: SenderIDMaxAggregateOutputType | null;
};
export type SenderIDMinAggregateOutputType = {
    id: string | null;
    label: string | null;
    status: $Enums.SenderStatus | null;
    requestedAt: Date | null;
    tenantId: string | null;
};
export type SenderIDMaxAggregateOutputType = {
    id: string | null;
    label: string | null;
    status: $Enums.SenderStatus | null;
    requestedAt: Date | null;
    tenantId: string | null;
};
export type SenderIDCountAggregateOutputType = {
    id: number;
    label: number;
    status: number;
    requestedAt: number;
    tenantId: number;
    _all: number;
};
export type SenderIDMinAggregateInputType = {
    id?: true;
    label?: true;
    status?: true;
    requestedAt?: true;
    tenantId?: true;
};
export type SenderIDMaxAggregateInputType = {
    id?: true;
    label?: true;
    status?: true;
    requestedAt?: true;
    tenantId?: true;
};
export type SenderIDCountAggregateInputType = {
    id?: true;
    label?: true;
    status?: true;
    requestedAt?: true;
    tenantId?: true;
    _all?: true;
};
export type SenderIDAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SenderIDWhereInput;
    orderBy?: Prisma.SenderIDOrderByWithRelationInput | Prisma.SenderIDOrderByWithRelationInput[];
    cursor?: Prisma.SenderIDWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SenderIDCountAggregateInputType;
    _min?: SenderIDMinAggregateInputType;
    _max?: SenderIDMaxAggregateInputType;
};
export type GetSenderIDAggregateType<T extends SenderIDAggregateArgs> = {
    [P in keyof T & keyof AggregateSenderID]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSenderID[P]> : Prisma.GetScalarType<T[P], AggregateSenderID[P]>;
};
export type SenderIDGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SenderIDWhereInput;
    orderBy?: Prisma.SenderIDOrderByWithAggregationInput | Prisma.SenderIDOrderByWithAggregationInput[];
    by: Prisma.SenderIDScalarFieldEnum[] | Prisma.SenderIDScalarFieldEnum;
    having?: Prisma.SenderIDScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SenderIDCountAggregateInputType | true;
    _min?: SenderIDMinAggregateInputType;
    _max?: SenderIDMaxAggregateInputType;
};
export type SenderIDGroupByOutputType = {
    id: string;
    label: string;
    status: $Enums.SenderStatus;
    requestedAt: Date;
    tenantId: string;
    _count: SenderIDCountAggregateOutputType | null;
    _min: SenderIDMinAggregateOutputType | null;
    _max: SenderIDMaxAggregateOutputType | null;
};
type GetSenderIDGroupByPayload<T extends SenderIDGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SenderIDGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SenderIDGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SenderIDGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SenderIDGroupByOutputType[P]>;
}>>;
export type SenderIDWhereInput = {
    AND?: Prisma.SenderIDWhereInput | Prisma.SenderIDWhereInput[];
    OR?: Prisma.SenderIDWhereInput[];
    NOT?: Prisma.SenderIDWhereInput | Prisma.SenderIDWhereInput[];
    id?: Prisma.StringFilter<"SenderID"> | string;
    label?: Prisma.StringFilter<"SenderID"> | string;
    status?: Prisma.EnumSenderStatusFilter<"SenderID"> | $Enums.SenderStatus;
    requestedAt?: Prisma.DateTimeFilter<"SenderID"> | Date | string;
    tenantId?: Prisma.StringFilter<"SenderID"> | string;
    campaigns?: Prisma.CampaignListRelationFilter;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    messages?: Prisma.MessageListRelationFilter;
};
export type SenderIDOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    campaigns?: Prisma.CampaignOrderByRelationAggregateInput;
    tenant?: Prisma.TenantOrderByWithRelationInput;
    messages?: Prisma.MessageOrderByRelationAggregateInput;
};
export type SenderIDWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SenderIDWhereInput | Prisma.SenderIDWhereInput[];
    OR?: Prisma.SenderIDWhereInput[];
    NOT?: Prisma.SenderIDWhereInput | Prisma.SenderIDWhereInput[];
    label?: Prisma.StringFilter<"SenderID"> | string;
    status?: Prisma.EnumSenderStatusFilter<"SenderID"> | $Enums.SenderStatus;
    requestedAt?: Prisma.DateTimeFilter<"SenderID"> | Date | string;
    tenantId?: Prisma.StringFilter<"SenderID"> | string;
    campaigns?: Prisma.CampaignListRelationFilter;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    messages?: Prisma.MessageListRelationFilter;
}, "id">;
export type SenderIDOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    _count?: Prisma.SenderIDCountOrderByAggregateInput;
    _max?: Prisma.SenderIDMaxOrderByAggregateInput;
    _min?: Prisma.SenderIDMinOrderByAggregateInput;
};
export type SenderIDScalarWhereWithAggregatesInput = {
    AND?: Prisma.SenderIDScalarWhereWithAggregatesInput | Prisma.SenderIDScalarWhereWithAggregatesInput[];
    OR?: Prisma.SenderIDScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SenderIDScalarWhereWithAggregatesInput | Prisma.SenderIDScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SenderID"> | string;
    label?: Prisma.StringWithAggregatesFilter<"SenderID"> | string;
    status?: Prisma.EnumSenderStatusWithAggregatesFilter<"SenderID"> | $Enums.SenderStatus;
    requestedAt?: Prisma.DateTimeWithAggregatesFilter<"SenderID"> | Date | string;
    tenantId?: Prisma.StringWithAggregatesFilter<"SenderID"> | string;
};
export type SenderIDCreateInput = {
    id?: string;
    label: string;
    status?: $Enums.SenderStatus;
    requestedAt?: Date | string;
    campaigns?: Prisma.CampaignCreateNestedManyWithoutSenderInput;
    tenant: Prisma.TenantCreateNestedOneWithoutSenderIdsInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
};
export type SenderIDUncheckedCreateInput = {
    id?: string;
    label: string;
    status?: $Enums.SenderStatus;
    requestedAt?: Date | string;
    tenantId: string;
    campaigns?: Prisma.CampaignUncheckedCreateNestedManyWithoutSenderInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
};
export type SenderIDUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSenderStatusFieldUpdateOperationsInput | $Enums.SenderStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    campaigns?: Prisma.CampaignUpdateManyWithoutSenderNestedInput;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutSenderIdsNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
};
export type SenderIDUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSenderStatusFieldUpdateOperationsInput | $Enums.SenderStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    campaigns?: Prisma.CampaignUncheckedUpdateManyWithoutSenderNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
};
export type SenderIDCreateManyInput = {
    id?: string;
    label: string;
    status?: $Enums.SenderStatus;
    requestedAt?: Date | string;
    tenantId: string;
};
export type SenderIDUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSenderStatusFieldUpdateOperationsInput | $Enums.SenderStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SenderIDUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSenderStatusFieldUpdateOperationsInput | $Enums.SenderStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SenderIDListRelationFilter = {
    every?: Prisma.SenderIDWhereInput;
    some?: Prisma.SenderIDWhereInput;
    none?: Prisma.SenderIDWhereInput;
};
export type SenderIDOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SenderIDCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
};
export type SenderIDMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
};
export type SenderIDMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
};
export type SenderIDScalarRelationFilter = {
    is?: Prisma.SenderIDWhereInput;
    isNot?: Prisma.SenderIDWhereInput;
};
export type SenderIDNullableScalarRelationFilter = {
    is?: Prisma.SenderIDWhereInput | null;
    isNot?: Prisma.SenderIDWhereInput | null;
};
export type SenderIDCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.SenderIDCreateWithoutTenantInput, Prisma.SenderIDUncheckedCreateWithoutTenantInput> | Prisma.SenderIDCreateWithoutTenantInput[] | Prisma.SenderIDUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.SenderIDCreateOrConnectWithoutTenantInput | Prisma.SenderIDCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.SenderIDCreateManyTenantInputEnvelope;
    connect?: Prisma.SenderIDWhereUniqueInput | Prisma.SenderIDWhereUniqueInput[];
};
export type SenderIDUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.SenderIDCreateWithoutTenantInput, Prisma.SenderIDUncheckedCreateWithoutTenantInput> | Prisma.SenderIDCreateWithoutTenantInput[] | Prisma.SenderIDUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.SenderIDCreateOrConnectWithoutTenantInput | Prisma.SenderIDCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.SenderIDCreateManyTenantInputEnvelope;
    connect?: Prisma.SenderIDWhereUniqueInput | Prisma.SenderIDWhereUniqueInput[];
};
export type SenderIDUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.SenderIDCreateWithoutTenantInput, Prisma.SenderIDUncheckedCreateWithoutTenantInput> | Prisma.SenderIDCreateWithoutTenantInput[] | Prisma.SenderIDUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.SenderIDCreateOrConnectWithoutTenantInput | Prisma.SenderIDCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.SenderIDUpsertWithWhereUniqueWithoutTenantInput | Prisma.SenderIDUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.SenderIDCreateManyTenantInputEnvelope;
    set?: Prisma.SenderIDWhereUniqueInput | Prisma.SenderIDWhereUniqueInput[];
    disconnect?: Prisma.SenderIDWhereUniqueInput | Prisma.SenderIDWhereUniqueInput[];
    delete?: Prisma.SenderIDWhereUniqueInput | Prisma.SenderIDWhereUniqueInput[];
    connect?: Prisma.SenderIDWhereUniqueInput | Prisma.SenderIDWhereUniqueInput[];
    update?: Prisma.SenderIDUpdateWithWhereUniqueWithoutTenantInput | Prisma.SenderIDUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.SenderIDUpdateManyWithWhereWithoutTenantInput | Prisma.SenderIDUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.SenderIDScalarWhereInput | Prisma.SenderIDScalarWhereInput[];
};
export type SenderIDUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.SenderIDCreateWithoutTenantInput, Prisma.SenderIDUncheckedCreateWithoutTenantInput> | Prisma.SenderIDCreateWithoutTenantInput[] | Prisma.SenderIDUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.SenderIDCreateOrConnectWithoutTenantInput | Prisma.SenderIDCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.SenderIDUpsertWithWhereUniqueWithoutTenantInput | Prisma.SenderIDUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.SenderIDCreateManyTenantInputEnvelope;
    set?: Prisma.SenderIDWhereUniqueInput | Prisma.SenderIDWhereUniqueInput[];
    disconnect?: Prisma.SenderIDWhereUniqueInput | Prisma.SenderIDWhereUniqueInput[];
    delete?: Prisma.SenderIDWhereUniqueInput | Prisma.SenderIDWhereUniqueInput[];
    connect?: Prisma.SenderIDWhereUniqueInput | Prisma.SenderIDWhereUniqueInput[];
    update?: Prisma.SenderIDUpdateWithWhereUniqueWithoutTenantInput | Prisma.SenderIDUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.SenderIDUpdateManyWithWhereWithoutTenantInput | Prisma.SenderIDUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.SenderIDScalarWhereInput | Prisma.SenderIDScalarWhereInput[];
};
export type EnumSenderStatusFieldUpdateOperationsInput = {
    set?: $Enums.SenderStatus;
};
export type SenderIDCreateNestedOneWithoutCampaignsInput = {
    create?: Prisma.XOR<Prisma.SenderIDCreateWithoutCampaignsInput, Prisma.SenderIDUncheckedCreateWithoutCampaignsInput>;
    connectOrCreate?: Prisma.SenderIDCreateOrConnectWithoutCampaignsInput;
    connect?: Prisma.SenderIDWhereUniqueInput;
};
export type SenderIDUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: Prisma.XOR<Prisma.SenderIDCreateWithoutCampaignsInput, Prisma.SenderIDUncheckedCreateWithoutCampaignsInput>;
    connectOrCreate?: Prisma.SenderIDCreateOrConnectWithoutCampaignsInput;
    upsert?: Prisma.SenderIDUpsertWithoutCampaignsInput;
    connect?: Prisma.SenderIDWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SenderIDUpdateToOneWithWhereWithoutCampaignsInput, Prisma.SenderIDUpdateWithoutCampaignsInput>, Prisma.SenderIDUncheckedUpdateWithoutCampaignsInput>;
};
export type SenderIDCreateNestedOneWithoutMessagesInput = {
    create?: Prisma.XOR<Prisma.SenderIDCreateWithoutMessagesInput, Prisma.SenderIDUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.SenderIDCreateOrConnectWithoutMessagesInput;
    connect?: Prisma.SenderIDWhereUniqueInput;
};
export type SenderIDUpdateOneWithoutMessagesNestedInput = {
    create?: Prisma.XOR<Prisma.SenderIDCreateWithoutMessagesInput, Prisma.SenderIDUncheckedCreateWithoutMessagesInput>;
    connectOrCreate?: Prisma.SenderIDCreateOrConnectWithoutMessagesInput;
    upsert?: Prisma.SenderIDUpsertWithoutMessagesInput;
    disconnect?: Prisma.SenderIDWhereInput | boolean;
    delete?: Prisma.SenderIDWhereInput | boolean;
    connect?: Prisma.SenderIDWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SenderIDUpdateToOneWithWhereWithoutMessagesInput, Prisma.SenderIDUpdateWithoutMessagesInput>, Prisma.SenderIDUncheckedUpdateWithoutMessagesInput>;
};
export type SenderIDCreateWithoutTenantInput = {
    id?: string;
    label: string;
    status?: $Enums.SenderStatus;
    requestedAt?: Date | string;
    campaigns?: Prisma.CampaignCreateNestedManyWithoutSenderInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
};
export type SenderIDUncheckedCreateWithoutTenantInput = {
    id?: string;
    label: string;
    status?: $Enums.SenderStatus;
    requestedAt?: Date | string;
    campaigns?: Prisma.CampaignUncheckedCreateNestedManyWithoutSenderInput;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
};
export type SenderIDCreateOrConnectWithoutTenantInput = {
    where: Prisma.SenderIDWhereUniqueInput;
    create: Prisma.XOR<Prisma.SenderIDCreateWithoutTenantInput, Prisma.SenderIDUncheckedCreateWithoutTenantInput>;
};
export type SenderIDCreateManyTenantInputEnvelope = {
    data: Prisma.SenderIDCreateManyTenantInput | Prisma.SenderIDCreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type SenderIDUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.SenderIDWhereUniqueInput;
    update: Prisma.XOR<Prisma.SenderIDUpdateWithoutTenantInput, Prisma.SenderIDUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.SenderIDCreateWithoutTenantInput, Prisma.SenderIDUncheckedCreateWithoutTenantInput>;
};
export type SenderIDUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.SenderIDWhereUniqueInput;
    data: Prisma.XOR<Prisma.SenderIDUpdateWithoutTenantInput, Prisma.SenderIDUncheckedUpdateWithoutTenantInput>;
};
export type SenderIDUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.SenderIDScalarWhereInput;
    data: Prisma.XOR<Prisma.SenderIDUpdateManyMutationInput, Prisma.SenderIDUncheckedUpdateManyWithoutTenantInput>;
};
export type SenderIDScalarWhereInput = {
    AND?: Prisma.SenderIDScalarWhereInput | Prisma.SenderIDScalarWhereInput[];
    OR?: Prisma.SenderIDScalarWhereInput[];
    NOT?: Prisma.SenderIDScalarWhereInput | Prisma.SenderIDScalarWhereInput[];
    id?: Prisma.StringFilter<"SenderID"> | string;
    label?: Prisma.StringFilter<"SenderID"> | string;
    status?: Prisma.EnumSenderStatusFilter<"SenderID"> | $Enums.SenderStatus;
    requestedAt?: Prisma.DateTimeFilter<"SenderID"> | Date | string;
    tenantId?: Prisma.StringFilter<"SenderID"> | string;
};
export type SenderIDCreateWithoutCampaignsInput = {
    id?: string;
    label: string;
    status?: $Enums.SenderStatus;
    requestedAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutSenderIdsInput;
    messages?: Prisma.MessageCreateNestedManyWithoutSenderInput;
};
export type SenderIDUncheckedCreateWithoutCampaignsInput = {
    id?: string;
    label: string;
    status?: $Enums.SenderStatus;
    requestedAt?: Date | string;
    tenantId: string;
    messages?: Prisma.MessageUncheckedCreateNestedManyWithoutSenderInput;
};
export type SenderIDCreateOrConnectWithoutCampaignsInput = {
    where: Prisma.SenderIDWhereUniqueInput;
    create: Prisma.XOR<Prisma.SenderIDCreateWithoutCampaignsInput, Prisma.SenderIDUncheckedCreateWithoutCampaignsInput>;
};
export type SenderIDUpsertWithoutCampaignsInput = {
    update: Prisma.XOR<Prisma.SenderIDUpdateWithoutCampaignsInput, Prisma.SenderIDUncheckedUpdateWithoutCampaignsInput>;
    create: Prisma.XOR<Prisma.SenderIDCreateWithoutCampaignsInput, Prisma.SenderIDUncheckedCreateWithoutCampaignsInput>;
    where?: Prisma.SenderIDWhereInput;
};
export type SenderIDUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: Prisma.SenderIDWhereInput;
    data: Prisma.XOR<Prisma.SenderIDUpdateWithoutCampaignsInput, Prisma.SenderIDUncheckedUpdateWithoutCampaignsInput>;
};
export type SenderIDUpdateWithoutCampaignsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSenderStatusFieldUpdateOperationsInput | $Enums.SenderStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutSenderIdsNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
};
export type SenderIDUncheckedUpdateWithoutCampaignsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSenderStatusFieldUpdateOperationsInput | $Enums.SenderStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
};
export type SenderIDCreateWithoutMessagesInput = {
    id?: string;
    label: string;
    status?: $Enums.SenderStatus;
    requestedAt?: Date | string;
    campaigns?: Prisma.CampaignCreateNestedManyWithoutSenderInput;
    tenant: Prisma.TenantCreateNestedOneWithoutSenderIdsInput;
};
export type SenderIDUncheckedCreateWithoutMessagesInput = {
    id?: string;
    label: string;
    status?: $Enums.SenderStatus;
    requestedAt?: Date | string;
    tenantId: string;
    campaigns?: Prisma.CampaignUncheckedCreateNestedManyWithoutSenderInput;
};
export type SenderIDCreateOrConnectWithoutMessagesInput = {
    where: Prisma.SenderIDWhereUniqueInput;
    create: Prisma.XOR<Prisma.SenderIDCreateWithoutMessagesInput, Prisma.SenderIDUncheckedCreateWithoutMessagesInput>;
};
export type SenderIDUpsertWithoutMessagesInput = {
    update: Prisma.XOR<Prisma.SenderIDUpdateWithoutMessagesInput, Prisma.SenderIDUncheckedUpdateWithoutMessagesInput>;
    create: Prisma.XOR<Prisma.SenderIDCreateWithoutMessagesInput, Prisma.SenderIDUncheckedCreateWithoutMessagesInput>;
    where?: Prisma.SenderIDWhereInput;
};
export type SenderIDUpdateToOneWithWhereWithoutMessagesInput = {
    where?: Prisma.SenderIDWhereInput;
    data: Prisma.XOR<Prisma.SenderIDUpdateWithoutMessagesInput, Prisma.SenderIDUncheckedUpdateWithoutMessagesInput>;
};
export type SenderIDUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSenderStatusFieldUpdateOperationsInput | $Enums.SenderStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    campaigns?: Prisma.CampaignUpdateManyWithoutSenderNestedInput;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutSenderIdsNestedInput;
};
export type SenderIDUncheckedUpdateWithoutMessagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSenderStatusFieldUpdateOperationsInput | $Enums.SenderStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    campaigns?: Prisma.CampaignUncheckedUpdateManyWithoutSenderNestedInput;
};
export type SenderIDCreateManyTenantInput = {
    id?: string;
    label: string;
    status?: $Enums.SenderStatus;
    requestedAt?: Date | string;
};
export type SenderIDUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSenderStatusFieldUpdateOperationsInput | $Enums.SenderStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    campaigns?: Prisma.CampaignUpdateManyWithoutSenderNestedInput;
    messages?: Prisma.MessageUpdateManyWithoutSenderNestedInput;
};
export type SenderIDUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSenderStatusFieldUpdateOperationsInput | $Enums.SenderStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    campaigns?: Prisma.CampaignUncheckedUpdateManyWithoutSenderNestedInput;
    messages?: Prisma.MessageUncheckedUpdateManyWithoutSenderNestedInput;
};
export type SenderIDUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumSenderStatusFieldUpdateOperationsInput | $Enums.SenderStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SenderIDCountOutputType = {
    campaigns: number;
    messages: number;
};
export type SenderIDCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    campaigns?: boolean | SenderIDCountOutputTypeCountCampaignsArgs;
    messages?: boolean | SenderIDCountOutputTypeCountMessagesArgs;
};
export type SenderIDCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SenderIDCountOutputTypeSelect<ExtArgs> | null;
};
export type SenderIDCountOutputTypeCountCampaignsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampaignWhereInput;
};
export type SenderIDCountOutputTypeCountMessagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MessageWhereInput;
};
export type SenderIDSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    label?: boolean;
    status?: boolean;
    requestedAt?: boolean;
    tenantId?: boolean;
    campaigns?: boolean | Prisma.SenderID$campaignsArgs<ExtArgs>;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    messages?: boolean | Prisma.SenderID$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.SenderIDCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["senderID"]>;
export type SenderIDSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    label?: boolean;
    status?: boolean;
    requestedAt?: boolean;
    tenantId?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["senderID"]>;
export type SenderIDSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    label?: boolean;
    status?: boolean;
    requestedAt?: boolean;
    tenantId?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["senderID"]>;
export type SenderIDSelectScalar = {
    id?: boolean;
    label?: boolean;
    status?: boolean;
    requestedAt?: boolean;
    tenantId?: boolean;
};
export type SenderIDOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "label" | "status" | "requestedAt" | "tenantId", ExtArgs["result"]["senderID"]>;
export type SenderIDInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    campaigns?: boolean | Prisma.SenderID$campaignsArgs<ExtArgs>;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    messages?: boolean | Prisma.SenderID$messagesArgs<ExtArgs>;
    _count?: boolean | Prisma.SenderIDCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SenderIDIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type SenderIDIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type $SenderIDPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SenderID";
    objects: {
        campaigns: Prisma.$CampaignPayload<ExtArgs>[];
        tenant: Prisma.$TenantPayload<ExtArgs>;
        messages: Prisma.$MessagePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        label: string;
        status: $Enums.SenderStatus;
        requestedAt: Date;
        tenantId: string;
    }, ExtArgs["result"]["senderID"]>;
    composites: {};
};
export type SenderIDGetPayload<S extends boolean | null | undefined | SenderIDDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SenderIDPayload, S>;
export type SenderIDCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SenderIDFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SenderIDCountAggregateInputType | true;
};
export interface SenderIDDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SenderID'];
        meta: {
            name: 'SenderID';
        };
    };
    findUnique<T extends SenderIDFindUniqueArgs>(args: Prisma.SelectSubset<T, SenderIDFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SenderIDClient<runtime.Types.Result.GetResult<Prisma.$SenderIDPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SenderIDFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SenderIDFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SenderIDClient<runtime.Types.Result.GetResult<Prisma.$SenderIDPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SenderIDFindFirstArgs>(args?: Prisma.SelectSubset<T, SenderIDFindFirstArgs<ExtArgs>>): Prisma.Prisma__SenderIDClient<runtime.Types.Result.GetResult<Prisma.$SenderIDPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SenderIDFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SenderIDFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SenderIDClient<runtime.Types.Result.GetResult<Prisma.$SenderIDPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SenderIDFindManyArgs>(args?: Prisma.SelectSubset<T, SenderIDFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SenderIDPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SenderIDCreateArgs>(args: Prisma.SelectSubset<T, SenderIDCreateArgs<ExtArgs>>): Prisma.Prisma__SenderIDClient<runtime.Types.Result.GetResult<Prisma.$SenderIDPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SenderIDCreateManyArgs>(args?: Prisma.SelectSubset<T, SenderIDCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SenderIDCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SenderIDCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SenderIDPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SenderIDDeleteArgs>(args: Prisma.SelectSubset<T, SenderIDDeleteArgs<ExtArgs>>): Prisma.Prisma__SenderIDClient<runtime.Types.Result.GetResult<Prisma.$SenderIDPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SenderIDUpdateArgs>(args: Prisma.SelectSubset<T, SenderIDUpdateArgs<ExtArgs>>): Prisma.Prisma__SenderIDClient<runtime.Types.Result.GetResult<Prisma.$SenderIDPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SenderIDDeleteManyArgs>(args?: Prisma.SelectSubset<T, SenderIDDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SenderIDUpdateManyArgs>(args: Prisma.SelectSubset<T, SenderIDUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SenderIDUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SenderIDUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SenderIDPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SenderIDUpsertArgs>(args: Prisma.SelectSubset<T, SenderIDUpsertArgs<ExtArgs>>): Prisma.Prisma__SenderIDClient<runtime.Types.Result.GetResult<Prisma.$SenderIDPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SenderIDCountArgs>(args?: Prisma.Subset<T, SenderIDCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SenderIDCountAggregateOutputType> : number>;
    aggregate<T extends SenderIDAggregateArgs>(args: Prisma.Subset<T, SenderIDAggregateArgs>): Prisma.PrismaPromise<GetSenderIDAggregateType<T>>;
    groupBy<T extends SenderIDGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SenderIDGroupByArgs['orderBy'];
    } : {
        orderBy?: SenderIDGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SenderIDGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSenderIDGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SenderIDFieldRefs;
}
export interface Prisma__SenderIDClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    campaigns<T extends Prisma.SenderID$campaignsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SenderID$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tenant<T extends Prisma.TenantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenantDefaultArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    messages<T extends Prisma.SenderID$messagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SenderID$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SenderIDFieldRefs {
    readonly id: Prisma.FieldRef<"SenderID", 'String'>;
    readonly label: Prisma.FieldRef<"SenderID", 'String'>;
    readonly status: Prisma.FieldRef<"SenderID", 'SenderStatus'>;
    readonly requestedAt: Prisma.FieldRef<"SenderID", 'DateTime'>;
    readonly tenantId: Prisma.FieldRef<"SenderID", 'String'>;
}
export type SenderIDFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SenderIDSelect<ExtArgs> | null;
    omit?: Prisma.SenderIDOmit<ExtArgs> | null;
    include?: Prisma.SenderIDInclude<ExtArgs> | null;
    where: Prisma.SenderIDWhereUniqueInput;
};
export type SenderIDFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SenderIDSelect<ExtArgs> | null;
    omit?: Prisma.SenderIDOmit<ExtArgs> | null;
    include?: Prisma.SenderIDInclude<ExtArgs> | null;
    where: Prisma.SenderIDWhereUniqueInput;
};
export type SenderIDFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SenderIDSelect<ExtArgs> | null;
    omit?: Prisma.SenderIDOmit<ExtArgs> | null;
    include?: Prisma.SenderIDInclude<ExtArgs> | null;
    where?: Prisma.SenderIDWhereInput;
    orderBy?: Prisma.SenderIDOrderByWithRelationInput | Prisma.SenderIDOrderByWithRelationInput[];
    cursor?: Prisma.SenderIDWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SenderIDScalarFieldEnum | Prisma.SenderIDScalarFieldEnum[];
};
export type SenderIDFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SenderIDSelect<ExtArgs> | null;
    omit?: Prisma.SenderIDOmit<ExtArgs> | null;
    include?: Prisma.SenderIDInclude<ExtArgs> | null;
    where?: Prisma.SenderIDWhereInput;
    orderBy?: Prisma.SenderIDOrderByWithRelationInput | Prisma.SenderIDOrderByWithRelationInput[];
    cursor?: Prisma.SenderIDWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SenderIDScalarFieldEnum | Prisma.SenderIDScalarFieldEnum[];
};
export type SenderIDFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SenderIDSelect<ExtArgs> | null;
    omit?: Prisma.SenderIDOmit<ExtArgs> | null;
    include?: Prisma.SenderIDInclude<ExtArgs> | null;
    where?: Prisma.SenderIDWhereInput;
    orderBy?: Prisma.SenderIDOrderByWithRelationInput | Prisma.SenderIDOrderByWithRelationInput[];
    cursor?: Prisma.SenderIDWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SenderIDScalarFieldEnum | Prisma.SenderIDScalarFieldEnum[];
};
export type SenderIDCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SenderIDSelect<ExtArgs> | null;
    omit?: Prisma.SenderIDOmit<ExtArgs> | null;
    include?: Prisma.SenderIDInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SenderIDCreateInput, Prisma.SenderIDUncheckedCreateInput>;
};
export type SenderIDCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SenderIDCreateManyInput | Prisma.SenderIDCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SenderIDCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SenderIDSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SenderIDOmit<ExtArgs> | null;
    data: Prisma.SenderIDCreateManyInput | Prisma.SenderIDCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SenderIDIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SenderIDUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SenderIDSelect<ExtArgs> | null;
    omit?: Prisma.SenderIDOmit<ExtArgs> | null;
    include?: Prisma.SenderIDInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SenderIDUpdateInput, Prisma.SenderIDUncheckedUpdateInput>;
    where: Prisma.SenderIDWhereUniqueInput;
};
export type SenderIDUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SenderIDUpdateManyMutationInput, Prisma.SenderIDUncheckedUpdateManyInput>;
    where?: Prisma.SenderIDWhereInput;
    limit?: number;
};
export type SenderIDUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SenderIDSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SenderIDOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SenderIDUpdateManyMutationInput, Prisma.SenderIDUncheckedUpdateManyInput>;
    where?: Prisma.SenderIDWhereInput;
    limit?: number;
    include?: Prisma.SenderIDIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SenderIDUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SenderIDSelect<ExtArgs> | null;
    omit?: Prisma.SenderIDOmit<ExtArgs> | null;
    include?: Prisma.SenderIDInclude<ExtArgs> | null;
    where: Prisma.SenderIDWhereUniqueInput;
    create: Prisma.XOR<Prisma.SenderIDCreateInput, Prisma.SenderIDUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SenderIDUpdateInput, Prisma.SenderIDUncheckedUpdateInput>;
};
export type SenderIDDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SenderIDSelect<ExtArgs> | null;
    omit?: Prisma.SenderIDOmit<ExtArgs> | null;
    include?: Prisma.SenderIDInclude<ExtArgs> | null;
    where: Prisma.SenderIDWhereUniqueInput;
};
export type SenderIDDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SenderIDWhereInput;
    limit?: number;
};
export type SenderID$campaignsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SenderID$messagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SenderIDDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SenderIDSelect<ExtArgs> | null;
    omit?: Prisma.SenderIDOmit<ExtArgs> | null;
    include?: Prisma.SenderIDInclude<ExtArgs> | null;
};
export {};
