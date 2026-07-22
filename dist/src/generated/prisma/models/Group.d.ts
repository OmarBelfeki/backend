import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GroupModel = runtime.Types.Result.DefaultSelection<Prisma.$GroupPayload>;
export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null;
    _avg: GroupAvgAggregateOutputType | null;
    _sum: GroupSumAggregateOutputType | null;
    _min: GroupMinAggregateOutputType | null;
    _max: GroupMaxAggregateOutputType | null;
};
export type GroupAvgAggregateOutputType = {
    nbContact: number | null;
};
export type GroupSumAggregateOutputType = {
    nbContact: number | null;
};
export type GroupMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    tenantId: string | null;
    nbContact: number | null;
    createdAt: Date | null;
};
export type GroupMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    tenantId: string | null;
    nbContact: number | null;
    createdAt: Date | null;
};
export type GroupCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    tenantId: number;
    nbContact: number;
    createdAt: number;
    _all: number;
};
export type GroupAvgAggregateInputType = {
    nbContact?: true;
};
export type GroupSumAggregateInputType = {
    nbContact?: true;
};
export type GroupMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    tenantId?: true;
    nbContact?: true;
    createdAt?: true;
};
export type GroupMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    tenantId?: true;
    nbContact?: true;
    createdAt?: true;
};
export type GroupCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    tenantId?: true;
    nbContact?: true;
    createdAt?: true;
    _all?: true;
};
export type GroupAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupWhereInput;
    orderBy?: Prisma.GroupOrderByWithRelationInput | Prisma.GroupOrderByWithRelationInput[];
    cursor?: Prisma.GroupWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GroupCountAggregateInputType;
    _avg?: GroupAvgAggregateInputType;
    _sum?: GroupSumAggregateInputType;
    _min?: GroupMinAggregateInputType;
    _max?: GroupMaxAggregateInputType;
};
export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
    [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGroup[P]> : Prisma.GetScalarType<T[P], AggregateGroup[P]>;
};
export type GroupGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupWhereInput;
    orderBy?: Prisma.GroupOrderByWithAggregationInput | Prisma.GroupOrderByWithAggregationInput[];
    by: Prisma.GroupScalarFieldEnum[] | Prisma.GroupScalarFieldEnum;
    having?: Prisma.GroupScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GroupCountAggregateInputType | true;
    _avg?: GroupAvgAggregateInputType;
    _sum?: GroupSumAggregateInputType;
    _min?: GroupMinAggregateInputType;
    _max?: GroupMaxAggregateInputType;
};
export type GroupGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    tenantId: string;
    nbContact: number | null;
    createdAt: Date;
    _count: GroupCountAggregateOutputType | null;
    _avg: GroupAvgAggregateOutputType | null;
    _sum: GroupSumAggregateOutputType | null;
    _min: GroupMinAggregateOutputType | null;
    _max: GroupMaxAggregateOutputType | null;
};
type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GroupGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GroupGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GroupGroupByOutputType[P]>;
}>>;
export type GroupWhereInput = {
    AND?: Prisma.GroupWhereInput | Prisma.GroupWhereInput[];
    OR?: Prisma.GroupWhereInput[];
    NOT?: Prisma.GroupWhereInput | Prisma.GroupWhereInput[];
    id?: Prisma.StringFilter<"Group"> | string;
    name?: Prisma.StringFilter<"Group"> | string;
    description?: Prisma.StringNullableFilter<"Group"> | string | null;
    tenantId?: Prisma.StringFilter<"Group"> | string;
    nbContact?: Prisma.IntNullableFilter<"Group"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Group"> | Date | string;
    campaigns?: Prisma.CampaignListRelationFilter;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    contacts?: Prisma.ContactListRelationFilter;
};
export type GroupOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    nbContact?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    campaigns?: Prisma.CampaignOrderByRelationAggregateInput;
    tenant?: Prisma.TenantOrderByWithRelationInput;
    contacts?: Prisma.ContactOrderByRelationAggregateInput;
};
export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tenantId_name?: Prisma.GroupTenantIdNameCompoundUniqueInput;
    AND?: Prisma.GroupWhereInput | Prisma.GroupWhereInput[];
    OR?: Prisma.GroupWhereInput[];
    NOT?: Prisma.GroupWhereInput | Prisma.GroupWhereInput[];
    name?: Prisma.StringFilter<"Group"> | string;
    description?: Prisma.StringNullableFilter<"Group"> | string | null;
    tenantId?: Prisma.StringFilter<"Group"> | string;
    nbContact?: Prisma.IntNullableFilter<"Group"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Group"> | Date | string;
    campaigns?: Prisma.CampaignListRelationFilter;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    contacts?: Prisma.ContactListRelationFilter;
}, "id" | "tenantId_name">;
export type GroupOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    nbContact?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.GroupCountOrderByAggregateInput;
    _avg?: Prisma.GroupAvgOrderByAggregateInput;
    _max?: Prisma.GroupMaxOrderByAggregateInput;
    _min?: Prisma.GroupMinOrderByAggregateInput;
    _sum?: Prisma.GroupSumOrderByAggregateInput;
};
export type GroupScalarWhereWithAggregatesInput = {
    AND?: Prisma.GroupScalarWhereWithAggregatesInput | Prisma.GroupScalarWhereWithAggregatesInput[];
    OR?: Prisma.GroupScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GroupScalarWhereWithAggregatesInput | Prisma.GroupScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Group"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Group"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Group"> | string | null;
    tenantId?: Prisma.StringWithAggregatesFilter<"Group"> | string;
    nbContact?: Prisma.IntNullableWithAggregatesFilter<"Group"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Group"> | Date | string;
};
export type GroupCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    nbContact?: number | null;
    createdAt?: Date | string;
    campaigns?: Prisma.CampaignCreateNestedManyWithoutGroupInput;
    tenant: Prisma.TenantCreateNestedOneWithoutGroupsInput;
    contacts?: Prisma.ContactCreateNestedManyWithoutGroupsInput;
};
export type GroupUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    tenantId: string;
    nbContact?: number | null;
    createdAt?: Date | string;
    campaigns?: Prisma.CampaignUncheckedCreateNestedManyWithoutGroupInput;
    contacts?: Prisma.ContactUncheckedCreateNestedManyWithoutGroupsInput;
};
export type GroupUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbContact?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    campaigns?: Prisma.CampaignUpdateManyWithoutGroupNestedInput;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutGroupsNestedInput;
    contacts?: Prisma.ContactUpdateManyWithoutGroupsNestedInput;
};
export type GroupUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    nbContact?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    campaigns?: Prisma.CampaignUncheckedUpdateManyWithoutGroupNestedInput;
    contacts?: Prisma.ContactUncheckedUpdateManyWithoutGroupsNestedInput;
};
export type GroupCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    tenantId: string;
    nbContact?: number | null;
    createdAt?: Date | string;
};
export type GroupUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbContact?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GroupUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    nbContact?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GroupListRelationFilter = {
    every?: Prisma.GroupWhereInput;
    some?: Prisma.GroupWhereInput;
    none?: Prisma.GroupWhereInput;
};
export type GroupOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GroupTenantIdNameCompoundUniqueInput = {
    tenantId: string;
    name: string;
};
export type GroupCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    nbContact?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GroupAvgOrderByAggregateInput = {
    nbContact?: Prisma.SortOrder;
};
export type GroupMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    nbContact?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GroupMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    nbContact?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type GroupSumOrderByAggregateInput = {
    nbContact?: Prisma.SortOrder;
};
export type GroupNullableScalarRelationFilter = {
    is?: Prisma.GroupWhereInput | null;
    isNot?: Prisma.GroupWhereInput | null;
};
export type GroupCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutTenantInput, Prisma.GroupUncheckedCreateWithoutTenantInput> | Prisma.GroupCreateWithoutTenantInput[] | Prisma.GroupUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutTenantInput | Prisma.GroupCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.GroupCreateManyTenantInputEnvelope;
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
};
export type GroupUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutTenantInput, Prisma.GroupUncheckedCreateWithoutTenantInput> | Prisma.GroupCreateWithoutTenantInput[] | Prisma.GroupUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutTenantInput | Prisma.GroupCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.GroupCreateManyTenantInputEnvelope;
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
};
export type GroupUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutTenantInput, Prisma.GroupUncheckedCreateWithoutTenantInput> | Prisma.GroupCreateWithoutTenantInput[] | Prisma.GroupUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutTenantInput | Prisma.GroupCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.GroupUpsertWithWhereUniqueWithoutTenantInput | Prisma.GroupUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.GroupCreateManyTenantInputEnvelope;
    set?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    disconnect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    delete?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    update?: Prisma.GroupUpdateWithWhereUniqueWithoutTenantInput | Prisma.GroupUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.GroupUpdateManyWithWhereWithoutTenantInput | Prisma.GroupUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.GroupScalarWhereInput | Prisma.GroupScalarWhereInput[];
};
export type GroupUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutTenantInput, Prisma.GroupUncheckedCreateWithoutTenantInput> | Prisma.GroupCreateWithoutTenantInput[] | Prisma.GroupUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutTenantInput | Prisma.GroupCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.GroupUpsertWithWhereUniqueWithoutTenantInput | Prisma.GroupUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.GroupCreateManyTenantInputEnvelope;
    set?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    disconnect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    delete?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    update?: Prisma.GroupUpdateWithWhereUniqueWithoutTenantInput | Prisma.GroupUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.GroupUpdateManyWithWhereWithoutTenantInput | Prisma.GroupUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.GroupScalarWhereInput | Prisma.GroupScalarWhereInput[];
};
export type GroupCreateNestedManyWithoutContactsInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutContactsInput, Prisma.GroupUncheckedCreateWithoutContactsInput> | Prisma.GroupCreateWithoutContactsInput[] | Prisma.GroupUncheckedCreateWithoutContactsInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutContactsInput | Prisma.GroupCreateOrConnectWithoutContactsInput[];
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
};
export type GroupUncheckedCreateNestedManyWithoutContactsInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutContactsInput, Prisma.GroupUncheckedCreateWithoutContactsInput> | Prisma.GroupCreateWithoutContactsInput[] | Prisma.GroupUncheckedCreateWithoutContactsInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutContactsInput | Prisma.GroupCreateOrConnectWithoutContactsInput[];
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
};
export type GroupUpdateManyWithoutContactsNestedInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutContactsInput, Prisma.GroupUncheckedCreateWithoutContactsInput> | Prisma.GroupCreateWithoutContactsInput[] | Prisma.GroupUncheckedCreateWithoutContactsInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutContactsInput | Prisma.GroupCreateOrConnectWithoutContactsInput[];
    upsert?: Prisma.GroupUpsertWithWhereUniqueWithoutContactsInput | Prisma.GroupUpsertWithWhereUniqueWithoutContactsInput[];
    set?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    disconnect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    delete?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    update?: Prisma.GroupUpdateWithWhereUniqueWithoutContactsInput | Prisma.GroupUpdateWithWhereUniqueWithoutContactsInput[];
    updateMany?: Prisma.GroupUpdateManyWithWhereWithoutContactsInput | Prisma.GroupUpdateManyWithWhereWithoutContactsInput[];
    deleteMany?: Prisma.GroupScalarWhereInput | Prisma.GroupScalarWhereInput[];
};
export type GroupUncheckedUpdateManyWithoutContactsNestedInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutContactsInput, Prisma.GroupUncheckedCreateWithoutContactsInput> | Prisma.GroupCreateWithoutContactsInput[] | Prisma.GroupUncheckedCreateWithoutContactsInput[];
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutContactsInput | Prisma.GroupCreateOrConnectWithoutContactsInput[];
    upsert?: Prisma.GroupUpsertWithWhereUniqueWithoutContactsInput | Prisma.GroupUpsertWithWhereUniqueWithoutContactsInput[];
    set?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    disconnect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    delete?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    connect?: Prisma.GroupWhereUniqueInput | Prisma.GroupWhereUniqueInput[];
    update?: Prisma.GroupUpdateWithWhereUniqueWithoutContactsInput | Prisma.GroupUpdateWithWhereUniqueWithoutContactsInput[];
    updateMany?: Prisma.GroupUpdateManyWithWhereWithoutContactsInput | Prisma.GroupUpdateManyWithWhereWithoutContactsInput[];
    deleteMany?: Prisma.GroupScalarWhereInput | Prisma.GroupScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type GroupCreateNestedOneWithoutCampaignsInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutCampaignsInput, Prisma.GroupUncheckedCreateWithoutCampaignsInput>;
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutCampaignsInput;
    connect?: Prisma.GroupWhereUniqueInput;
};
export type GroupUpdateOneWithoutCampaignsNestedInput = {
    create?: Prisma.XOR<Prisma.GroupCreateWithoutCampaignsInput, Prisma.GroupUncheckedCreateWithoutCampaignsInput>;
    connectOrCreate?: Prisma.GroupCreateOrConnectWithoutCampaignsInput;
    upsert?: Prisma.GroupUpsertWithoutCampaignsInput;
    disconnect?: Prisma.GroupWhereInput | boolean;
    delete?: Prisma.GroupWhereInput | boolean;
    connect?: Prisma.GroupWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GroupUpdateToOneWithWhereWithoutCampaignsInput, Prisma.GroupUpdateWithoutCampaignsInput>, Prisma.GroupUncheckedUpdateWithoutCampaignsInput>;
};
export type GroupCreateWithoutTenantInput = {
    id?: string;
    name: string;
    description?: string | null;
    nbContact?: number | null;
    createdAt?: Date | string;
    campaigns?: Prisma.CampaignCreateNestedManyWithoutGroupInput;
    contacts?: Prisma.ContactCreateNestedManyWithoutGroupsInput;
};
export type GroupUncheckedCreateWithoutTenantInput = {
    id?: string;
    name: string;
    description?: string | null;
    nbContact?: number | null;
    createdAt?: Date | string;
    campaigns?: Prisma.CampaignUncheckedCreateNestedManyWithoutGroupInput;
    contacts?: Prisma.ContactUncheckedCreateNestedManyWithoutGroupsInput;
};
export type GroupCreateOrConnectWithoutTenantInput = {
    where: Prisma.GroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.GroupCreateWithoutTenantInput, Prisma.GroupUncheckedCreateWithoutTenantInput>;
};
export type GroupCreateManyTenantInputEnvelope = {
    data: Prisma.GroupCreateManyTenantInput | Prisma.GroupCreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type GroupUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.GroupWhereUniqueInput;
    update: Prisma.XOR<Prisma.GroupUpdateWithoutTenantInput, Prisma.GroupUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.GroupCreateWithoutTenantInput, Prisma.GroupUncheckedCreateWithoutTenantInput>;
};
export type GroupUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.GroupWhereUniqueInput;
    data: Prisma.XOR<Prisma.GroupUpdateWithoutTenantInput, Prisma.GroupUncheckedUpdateWithoutTenantInput>;
};
export type GroupUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.GroupScalarWhereInput;
    data: Prisma.XOR<Prisma.GroupUpdateManyMutationInput, Prisma.GroupUncheckedUpdateManyWithoutTenantInput>;
};
export type GroupScalarWhereInput = {
    AND?: Prisma.GroupScalarWhereInput | Prisma.GroupScalarWhereInput[];
    OR?: Prisma.GroupScalarWhereInput[];
    NOT?: Prisma.GroupScalarWhereInput | Prisma.GroupScalarWhereInput[];
    id?: Prisma.StringFilter<"Group"> | string;
    name?: Prisma.StringFilter<"Group"> | string;
    description?: Prisma.StringNullableFilter<"Group"> | string | null;
    tenantId?: Prisma.StringFilter<"Group"> | string;
    nbContact?: Prisma.IntNullableFilter<"Group"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Group"> | Date | string;
};
export type GroupCreateWithoutContactsInput = {
    id?: string;
    name: string;
    description?: string | null;
    nbContact?: number | null;
    createdAt?: Date | string;
    campaigns?: Prisma.CampaignCreateNestedManyWithoutGroupInput;
    tenant: Prisma.TenantCreateNestedOneWithoutGroupsInput;
};
export type GroupUncheckedCreateWithoutContactsInput = {
    id?: string;
    name: string;
    description?: string | null;
    tenantId: string;
    nbContact?: number | null;
    createdAt?: Date | string;
    campaigns?: Prisma.CampaignUncheckedCreateNestedManyWithoutGroupInput;
};
export type GroupCreateOrConnectWithoutContactsInput = {
    where: Prisma.GroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.GroupCreateWithoutContactsInput, Prisma.GroupUncheckedCreateWithoutContactsInput>;
};
export type GroupUpsertWithWhereUniqueWithoutContactsInput = {
    where: Prisma.GroupWhereUniqueInput;
    update: Prisma.XOR<Prisma.GroupUpdateWithoutContactsInput, Prisma.GroupUncheckedUpdateWithoutContactsInput>;
    create: Prisma.XOR<Prisma.GroupCreateWithoutContactsInput, Prisma.GroupUncheckedCreateWithoutContactsInput>;
};
export type GroupUpdateWithWhereUniqueWithoutContactsInput = {
    where: Prisma.GroupWhereUniqueInput;
    data: Prisma.XOR<Prisma.GroupUpdateWithoutContactsInput, Prisma.GroupUncheckedUpdateWithoutContactsInput>;
};
export type GroupUpdateManyWithWhereWithoutContactsInput = {
    where: Prisma.GroupScalarWhereInput;
    data: Prisma.XOR<Prisma.GroupUpdateManyMutationInput, Prisma.GroupUncheckedUpdateManyWithoutContactsInput>;
};
export type GroupCreateWithoutCampaignsInput = {
    id?: string;
    name: string;
    description?: string | null;
    nbContact?: number | null;
    createdAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutGroupsInput;
    contacts?: Prisma.ContactCreateNestedManyWithoutGroupsInput;
};
export type GroupUncheckedCreateWithoutCampaignsInput = {
    id?: string;
    name: string;
    description?: string | null;
    tenantId: string;
    nbContact?: number | null;
    createdAt?: Date | string;
    contacts?: Prisma.ContactUncheckedCreateNestedManyWithoutGroupsInput;
};
export type GroupCreateOrConnectWithoutCampaignsInput = {
    where: Prisma.GroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.GroupCreateWithoutCampaignsInput, Prisma.GroupUncheckedCreateWithoutCampaignsInput>;
};
export type GroupUpsertWithoutCampaignsInput = {
    update: Prisma.XOR<Prisma.GroupUpdateWithoutCampaignsInput, Prisma.GroupUncheckedUpdateWithoutCampaignsInput>;
    create: Prisma.XOR<Prisma.GroupCreateWithoutCampaignsInput, Prisma.GroupUncheckedCreateWithoutCampaignsInput>;
    where?: Prisma.GroupWhereInput;
};
export type GroupUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: Prisma.GroupWhereInput;
    data: Prisma.XOR<Prisma.GroupUpdateWithoutCampaignsInput, Prisma.GroupUncheckedUpdateWithoutCampaignsInput>;
};
export type GroupUpdateWithoutCampaignsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbContact?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutGroupsNestedInput;
    contacts?: Prisma.ContactUpdateManyWithoutGroupsNestedInput;
};
export type GroupUncheckedUpdateWithoutCampaignsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    nbContact?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contacts?: Prisma.ContactUncheckedUpdateManyWithoutGroupsNestedInput;
};
export type GroupCreateManyTenantInput = {
    id?: string;
    name: string;
    description?: string | null;
    nbContact?: number | null;
    createdAt?: Date | string;
};
export type GroupUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbContact?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    campaigns?: Prisma.CampaignUpdateManyWithoutGroupNestedInput;
    contacts?: Prisma.ContactUpdateManyWithoutGroupsNestedInput;
};
export type GroupUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbContact?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    campaigns?: Prisma.CampaignUncheckedUpdateManyWithoutGroupNestedInput;
    contacts?: Prisma.ContactUncheckedUpdateManyWithoutGroupsNestedInput;
};
export type GroupUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbContact?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GroupUpdateWithoutContactsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nbContact?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    campaigns?: Prisma.CampaignUpdateManyWithoutGroupNestedInput;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutGroupsNestedInput;
};
export type GroupUncheckedUpdateWithoutContactsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    nbContact?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    campaigns?: Prisma.CampaignUncheckedUpdateManyWithoutGroupNestedInput;
};
export type GroupUncheckedUpdateManyWithoutContactsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    nbContact?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GroupCountOutputType = {
    campaigns: number;
    contacts: number;
};
export type GroupCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    campaigns?: boolean | GroupCountOutputTypeCountCampaignsArgs;
    contacts?: boolean | GroupCountOutputTypeCountContactsArgs;
};
export type GroupCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupCountOutputTypeSelect<ExtArgs> | null;
};
export type GroupCountOutputTypeCountCampaignsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CampaignWhereInput;
};
export type GroupCountOutputTypeCountContactsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactWhereInput;
};
export type GroupSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    tenantId?: boolean;
    nbContact?: boolean;
    createdAt?: boolean;
    campaigns?: boolean | Prisma.Group$campaignsArgs<ExtArgs>;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    contacts?: boolean | Prisma.Group$contactsArgs<ExtArgs>;
    _count?: boolean | Prisma.GroupCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["group"]>;
export type GroupSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    tenantId?: boolean;
    nbContact?: boolean;
    createdAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["group"]>;
export type GroupSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    tenantId?: boolean;
    nbContact?: boolean;
    createdAt?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["group"]>;
export type GroupSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    tenantId?: boolean;
    nbContact?: boolean;
    createdAt?: boolean;
};
export type GroupOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "tenantId" | "nbContact" | "createdAt", ExtArgs["result"]["group"]>;
export type GroupInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    campaigns?: boolean | Prisma.Group$campaignsArgs<ExtArgs>;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    contacts?: boolean | Prisma.Group$contactsArgs<ExtArgs>;
    _count?: boolean | Prisma.GroupCountOutputTypeDefaultArgs<ExtArgs>;
};
export type GroupIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type GroupIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type $GroupPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Group";
    objects: {
        campaigns: Prisma.$CampaignPayload<ExtArgs>[];
        tenant: Prisma.$TenantPayload<ExtArgs>;
        contacts: Prisma.$ContactPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        description: string | null;
        tenantId: string;
        nbContact: number | null;
        createdAt: Date;
    }, ExtArgs["result"]["group"]>;
    composites: {};
};
export type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GroupPayload, S>;
export type GroupCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GroupCountAggregateInputType | true;
};
export interface GroupDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Group'];
        meta: {
            name: 'Group';
        };
    };
    findUnique<T extends GroupFindUniqueArgs>(args: Prisma.SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GroupFindFirstArgs>(args?: Prisma.SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GroupFindManyArgs>(args?: Prisma.SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GroupCreateArgs>(args: Prisma.SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GroupCreateManyArgs>(args?: Prisma.SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GroupDeleteArgs>(args: Prisma.SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GroupUpdateArgs>(args: Prisma.SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GroupDeleteManyArgs>(args?: Prisma.SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GroupUpdateManyArgs>(args: Prisma.SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GroupUpsertArgs>(args: Prisma.SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma.Prisma__GroupClient<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GroupCountArgs>(args?: Prisma.Subset<T, GroupCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GroupCountAggregateOutputType> : number>;
    aggregate<T extends GroupAggregateArgs>(args: Prisma.Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>;
    groupBy<T extends GroupGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GroupGroupByArgs['orderBy'];
    } : {
        orderBy?: GroupGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GroupFieldRefs;
}
export interface Prisma__GroupClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    campaigns<T extends Prisma.Group$campaignsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Group$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tenant<T extends Prisma.TenantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenantDefaultArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    contacts<T extends Prisma.Group$contactsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Group$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GroupFieldRefs {
    readonly id: Prisma.FieldRef<"Group", 'String'>;
    readonly name: Prisma.FieldRef<"Group", 'String'>;
    readonly description: Prisma.FieldRef<"Group", 'String'>;
    readonly tenantId: Prisma.FieldRef<"Group", 'String'>;
    readonly nbContact: Prisma.FieldRef<"Group", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Group", 'DateTime'>;
}
export type GroupFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    where: Prisma.GroupWhereUniqueInput;
};
export type GroupFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    where: Prisma.GroupWhereUniqueInput;
};
export type GroupFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    where?: Prisma.GroupWhereInput;
    orderBy?: Prisma.GroupOrderByWithRelationInput | Prisma.GroupOrderByWithRelationInput[];
    cursor?: Prisma.GroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GroupScalarFieldEnum | Prisma.GroupScalarFieldEnum[];
};
export type GroupFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    where?: Prisma.GroupWhereInput;
    orderBy?: Prisma.GroupOrderByWithRelationInput | Prisma.GroupOrderByWithRelationInput[];
    cursor?: Prisma.GroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GroupScalarFieldEnum | Prisma.GroupScalarFieldEnum[];
};
export type GroupFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    where?: Prisma.GroupWhereInput;
    orderBy?: Prisma.GroupOrderByWithRelationInput | Prisma.GroupOrderByWithRelationInput[];
    cursor?: Prisma.GroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GroupScalarFieldEnum | Prisma.GroupScalarFieldEnum[];
};
export type GroupCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GroupCreateInput, Prisma.GroupUncheckedCreateInput>;
};
export type GroupCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GroupCreateManyInput | Prisma.GroupCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GroupCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    data: Prisma.GroupCreateManyInput | Prisma.GroupCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.GroupIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type GroupUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GroupUpdateInput, Prisma.GroupUncheckedUpdateInput>;
    where: Prisma.GroupWhereUniqueInput;
};
export type GroupUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GroupUpdateManyMutationInput, Prisma.GroupUncheckedUpdateManyInput>;
    where?: Prisma.GroupWhereInput;
    limit?: number;
};
export type GroupUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GroupUpdateManyMutationInput, Prisma.GroupUncheckedUpdateManyInput>;
    where?: Prisma.GroupWhereInput;
    limit?: number;
    include?: Prisma.GroupIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type GroupUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    where: Prisma.GroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.GroupCreateInput, Prisma.GroupUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GroupUpdateInput, Prisma.GroupUncheckedUpdateInput>;
};
export type GroupDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
    where: Prisma.GroupWhereUniqueInput;
};
export type GroupDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupWhereInput;
    limit?: number;
};
export type Group$campaignsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Group$contactsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where?: Prisma.ContactWhereInput;
    orderBy?: Prisma.ContactOrderByWithRelationInput | Prisma.ContactOrderByWithRelationInput[];
    cursor?: Prisma.ContactWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContactScalarFieldEnum | Prisma.ContactScalarFieldEnum[];
};
export type GroupDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GroupSelect<ExtArgs> | null;
    omit?: Prisma.GroupOmit<ExtArgs> | null;
    include?: Prisma.GroupInclude<ExtArgs> | null;
};
export {};
