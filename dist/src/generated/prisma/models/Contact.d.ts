import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ContactModel = runtime.Types.Result.DefaultSelection<Prisma.$ContactPayload>;
export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null;
    _min: ContactMinAggregateOutputType | null;
    _max: ContactMaxAggregateOutputType | null;
};
export type ContactMinAggregateOutputType = {
    id: string | null;
    phone: string | null;
    firstName: string | null;
    lastName: string | null;
    customFields: string | null;
    error: boolean | null;
    status: $Enums.ContactStatus | null;
    createdAt: Date | null;
    tenantId: string | null;
};
export type ContactMaxAggregateOutputType = {
    id: string | null;
    phone: string | null;
    firstName: string | null;
    lastName: string | null;
    customFields: string | null;
    error: boolean | null;
    status: $Enums.ContactStatus | null;
    createdAt: Date | null;
    tenantId: string | null;
};
export type ContactCountAggregateOutputType = {
    id: number;
    phone: number;
    firstName: number;
    lastName: number;
    customFields: number;
    error: number;
    status: number;
    createdAt: number;
    tenantId: number;
    _all: number;
};
export type ContactMinAggregateInputType = {
    id?: true;
    phone?: true;
    firstName?: true;
    lastName?: true;
    customFields?: true;
    error?: true;
    status?: true;
    createdAt?: true;
    tenantId?: true;
};
export type ContactMaxAggregateInputType = {
    id?: true;
    phone?: true;
    firstName?: true;
    lastName?: true;
    customFields?: true;
    error?: true;
    status?: true;
    createdAt?: true;
    tenantId?: true;
};
export type ContactCountAggregateInputType = {
    id?: true;
    phone?: true;
    firstName?: true;
    lastName?: true;
    customFields?: true;
    error?: true;
    status?: true;
    createdAt?: true;
    tenantId?: true;
    _all?: true;
};
export type ContactAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactWhereInput;
    orderBy?: Prisma.ContactOrderByWithRelationInput | Prisma.ContactOrderByWithRelationInput[];
    cursor?: Prisma.ContactWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ContactCountAggregateInputType;
    _min?: ContactMinAggregateInputType;
    _max?: ContactMaxAggregateInputType;
};
export type GetContactAggregateType<T extends ContactAggregateArgs> = {
    [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContact[P]> : Prisma.GetScalarType<T[P], AggregateContact[P]>;
};
export type ContactGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactWhereInput;
    orderBy?: Prisma.ContactOrderByWithAggregationInput | Prisma.ContactOrderByWithAggregationInput[];
    by: Prisma.ContactScalarFieldEnum[] | Prisma.ContactScalarFieldEnum;
    having?: Prisma.ContactScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContactCountAggregateInputType | true;
    _min?: ContactMinAggregateInputType;
    _max?: ContactMaxAggregateInputType;
};
export type ContactGroupByOutputType = {
    id: string;
    phone: string;
    firstName: string | null;
    lastName: string | null;
    customFields: string | null;
    error: boolean;
    status: $Enums.ContactStatus | null;
    createdAt: Date;
    tenantId: string;
    _count: ContactCountAggregateOutputType | null;
    _min: ContactMinAggregateOutputType | null;
    _max: ContactMaxAggregateOutputType | null;
};
type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContactGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContactGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContactGroupByOutputType[P]>;
}>>;
export type ContactWhereInput = {
    AND?: Prisma.ContactWhereInput | Prisma.ContactWhereInput[];
    OR?: Prisma.ContactWhereInput[];
    NOT?: Prisma.ContactWhereInput | Prisma.ContactWhereInput[];
    id?: Prisma.StringFilter<"Contact"> | string;
    phone?: Prisma.StringFilter<"Contact"> | string;
    firstName?: Prisma.StringNullableFilter<"Contact"> | string | null;
    lastName?: Prisma.StringNullableFilter<"Contact"> | string | null;
    customFields?: Prisma.StringNullableFilter<"Contact"> | string | null;
    error?: Prisma.BoolFilter<"Contact"> | boolean;
    status?: Prisma.EnumContactStatusNullableFilter<"Contact"> | $Enums.ContactStatus | null;
    createdAt?: Prisma.DateTimeFilter<"Contact"> | Date | string;
    tenantId?: Prisma.StringFilter<"Contact"> | string;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    files?: Prisma.FileListRelationFilter;
    groups?: Prisma.GroupListRelationFilter;
};
export type ContactOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    firstName?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastName?: Prisma.SortOrderInput | Prisma.SortOrder;
    customFields?: Prisma.SortOrderInput | Prisma.SortOrder;
    error?: Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    tenant?: Prisma.TenantOrderByWithRelationInput;
    files?: Prisma.FileOrderByRelationAggregateInput;
    groups?: Prisma.GroupOrderByRelationAggregateInput;
};
export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tenantId_phone?: Prisma.ContactTenantIdPhoneCompoundUniqueInput;
    AND?: Prisma.ContactWhereInput | Prisma.ContactWhereInput[];
    OR?: Prisma.ContactWhereInput[];
    NOT?: Prisma.ContactWhereInput | Prisma.ContactWhereInput[];
    phone?: Prisma.StringFilter<"Contact"> | string;
    firstName?: Prisma.StringNullableFilter<"Contact"> | string | null;
    lastName?: Prisma.StringNullableFilter<"Contact"> | string | null;
    customFields?: Prisma.StringNullableFilter<"Contact"> | string | null;
    error?: Prisma.BoolFilter<"Contact"> | boolean;
    status?: Prisma.EnumContactStatusNullableFilter<"Contact"> | $Enums.ContactStatus | null;
    createdAt?: Prisma.DateTimeFilter<"Contact"> | Date | string;
    tenantId?: Prisma.StringFilter<"Contact"> | string;
    tenant?: Prisma.XOR<Prisma.TenantScalarRelationFilter, Prisma.TenantWhereInput>;
    files?: Prisma.FileListRelationFilter;
    groups?: Prisma.GroupListRelationFilter;
}, "id" | "tenantId_phone">;
export type ContactOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    firstName?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastName?: Prisma.SortOrderInput | Prisma.SortOrder;
    customFields?: Prisma.SortOrderInput | Prisma.SortOrder;
    error?: Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    _count?: Prisma.ContactCountOrderByAggregateInput;
    _max?: Prisma.ContactMaxOrderByAggregateInput;
    _min?: Prisma.ContactMinOrderByAggregateInput;
};
export type ContactScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContactScalarWhereWithAggregatesInput | Prisma.ContactScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContactScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContactScalarWhereWithAggregatesInput | Prisma.ContactScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Contact"> | string;
    phone?: Prisma.StringWithAggregatesFilter<"Contact"> | string;
    firstName?: Prisma.StringNullableWithAggregatesFilter<"Contact"> | string | null;
    lastName?: Prisma.StringNullableWithAggregatesFilter<"Contact"> | string | null;
    customFields?: Prisma.StringNullableWithAggregatesFilter<"Contact"> | string | null;
    error?: Prisma.BoolWithAggregatesFilter<"Contact"> | boolean;
    status?: Prisma.EnumContactStatusNullableWithAggregatesFilter<"Contact"> | $Enums.ContactStatus | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Contact"> | Date | string;
    tenantId?: Prisma.StringWithAggregatesFilter<"Contact"> | string;
};
export type ContactCreateInput = {
    id?: string;
    phone: string;
    firstName?: string | null;
    lastName?: string | null;
    customFields?: string | null;
    error?: boolean;
    status?: $Enums.ContactStatus | null;
    createdAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutContactsInput;
    files?: Prisma.FileCreateNestedManyWithoutContactInput;
    groups?: Prisma.GroupCreateNestedManyWithoutContactsInput;
};
export type ContactUncheckedCreateInput = {
    id?: string;
    phone: string;
    firstName?: string | null;
    lastName?: string | null;
    customFields?: string | null;
    error?: boolean;
    status?: $Enums.ContactStatus | null;
    createdAt?: Date | string;
    tenantId: string;
    files?: Prisma.FileUncheckedCreateNestedManyWithoutContactInput;
    groups?: Prisma.GroupUncheckedCreateNestedManyWithoutContactsInput;
};
export type ContactUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customFields?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumContactStatusFieldUpdateOperationsInput | $Enums.ContactStatus | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutContactsNestedInput;
    files?: Prisma.FileUpdateManyWithoutContactNestedInput;
    groups?: Prisma.GroupUpdateManyWithoutContactsNestedInput;
};
export type ContactUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customFields?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumContactStatusFieldUpdateOperationsInput | $Enums.ContactStatus | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    files?: Prisma.FileUncheckedUpdateManyWithoutContactNestedInput;
    groups?: Prisma.GroupUncheckedUpdateManyWithoutContactsNestedInput;
};
export type ContactCreateManyInput = {
    id?: string;
    phone: string;
    firstName?: string | null;
    lastName?: string | null;
    customFields?: string | null;
    error?: boolean;
    status?: $Enums.ContactStatus | null;
    createdAt?: Date | string;
    tenantId: string;
};
export type ContactUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customFields?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumContactStatusFieldUpdateOperationsInput | $Enums.ContactStatus | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContactUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customFields?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumContactStatusFieldUpdateOperationsInput | $Enums.ContactStatus | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContactListRelationFilter = {
    every?: Prisma.ContactWhereInput;
    some?: Prisma.ContactWhereInput;
    none?: Prisma.ContactWhereInput;
};
export type ContactOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ContactTenantIdPhoneCompoundUniqueInput = {
    tenantId: string;
    phone: string;
};
export type ContactCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    customFields?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
};
export type ContactMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    customFields?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
};
export type ContactMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    customFields?: Prisma.SortOrder;
    error?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
};
export type ContactNullableScalarRelationFilter = {
    is?: Prisma.ContactWhereInput | null;
    isNot?: Prisma.ContactWhereInput | null;
};
export type ContactCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.ContactCreateWithoutTenantInput, Prisma.ContactUncheckedCreateWithoutTenantInput> | Prisma.ContactCreateWithoutTenantInput[] | Prisma.ContactUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.ContactCreateOrConnectWithoutTenantInput | Prisma.ContactCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.ContactCreateManyTenantInputEnvelope;
    connect?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
};
export type ContactUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.ContactCreateWithoutTenantInput, Prisma.ContactUncheckedCreateWithoutTenantInput> | Prisma.ContactCreateWithoutTenantInput[] | Prisma.ContactUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.ContactCreateOrConnectWithoutTenantInput | Prisma.ContactCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.ContactCreateManyTenantInputEnvelope;
    connect?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
};
export type ContactUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.ContactCreateWithoutTenantInput, Prisma.ContactUncheckedCreateWithoutTenantInput> | Prisma.ContactCreateWithoutTenantInput[] | Prisma.ContactUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.ContactCreateOrConnectWithoutTenantInput | Prisma.ContactCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.ContactUpsertWithWhereUniqueWithoutTenantInput | Prisma.ContactUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.ContactCreateManyTenantInputEnvelope;
    set?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
    disconnect?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
    delete?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
    connect?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
    update?: Prisma.ContactUpdateWithWhereUniqueWithoutTenantInput | Prisma.ContactUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.ContactUpdateManyWithWhereWithoutTenantInput | Prisma.ContactUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.ContactScalarWhereInput | Prisma.ContactScalarWhereInput[];
};
export type ContactUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.ContactCreateWithoutTenantInput, Prisma.ContactUncheckedCreateWithoutTenantInput> | Prisma.ContactCreateWithoutTenantInput[] | Prisma.ContactUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.ContactCreateOrConnectWithoutTenantInput | Prisma.ContactCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.ContactUpsertWithWhereUniqueWithoutTenantInput | Prisma.ContactUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.ContactCreateManyTenantInputEnvelope;
    set?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
    disconnect?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
    delete?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
    connect?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
    update?: Prisma.ContactUpdateWithWhereUniqueWithoutTenantInput | Prisma.ContactUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.ContactUpdateManyWithWhereWithoutTenantInput | Prisma.ContactUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.ContactScalarWhereInput | Prisma.ContactScalarWhereInput[];
};
export type NullableEnumContactStatusFieldUpdateOperationsInput = {
    set?: $Enums.ContactStatus | null;
};
export type ContactCreateNestedOneWithoutFilesInput = {
    create?: Prisma.XOR<Prisma.ContactCreateWithoutFilesInput, Prisma.ContactUncheckedCreateWithoutFilesInput>;
    connectOrCreate?: Prisma.ContactCreateOrConnectWithoutFilesInput;
    connect?: Prisma.ContactWhereUniqueInput;
};
export type ContactUpdateOneWithoutFilesNestedInput = {
    create?: Prisma.XOR<Prisma.ContactCreateWithoutFilesInput, Prisma.ContactUncheckedCreateWithoutFilesInput>;
    connectOrCreate?: Prisma.ContactCreateOrConnectWithoutFilesInput;
    upsert?: Prisma.ContactUpsertWithoutFilesInput;
    disconnect?: Prisma.ContactWhereInput | boolean;
    delete?: Prisma.ContactWhereInput | boolean;
    connect?: Prisma.ContactWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ContactUpdateToOneWithWhereWithoutFilesInput, Prisma.ContactUpdateWithoutFilesInput>, Prisma.ContactUncheckedUpdateWithoutFilesInput>;
};
export type ContactCreateNestedManyWithoutGroupsInput = {
    create?: Prisma.XOR<Prisma.ContactCreateWithoutGroupsInput, Prisma.ContactUncheckedCreateWithoutGroupsInput> | Prisma.ContactCreateWithoutGroupsInput[] | Prisma.ContactUncheckedCreateWithoutGroupsInput[];
    connectOrCreate?: Prisma.ContactCreateOrConnectWithoutGroupsInput | Prisma.ContactCreateOrConnectWithoutGroupsInput[];
    connect?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
};
export type ContactUncheckedCreateNestedManyWithoutGroupsInput = {
    create?: Prisma.XOR<Prisma.ContactCreateWithoutGroupsInput, Prisma.ContactUncheckedCreateWithoutGroupsInput> | Prisma.ContactCreateWithoutGroupsInput[] | Prisma.ContactUncheckedCreateWithoutGroupsInput[];
    connectOrCreate?: Prisma.ContactCreateOrConnectWithoutGroupsInput | Prisma.ContactCreateOrConnectWithoutGroupsInput[];
    connect?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
};
export type ContactUpdateManyWithoutGroupsNestedInput = {
    create?: Prisma.XOR<Prisma.ContactCreateWithoutGroupsInput, Prisma.ContactUncheckedCreateWithoutGroupsInput> | Prisma.ContactCreateWithoutGroupsInput[] | Prisma.ContactUncheckedCreateWithoutGroupsInput[];
    connectOrCreate?: Prisma.ContactCreateOrConnectWithoutGroupsInput | Prisma.ContactCreateOrConnectWithoutGroupsInput[];
    upsert?: Prisma.ContactUpsertWithWhereUniqueWithoutGroupsInput | Prisma.ContactUpsertWithWhereUniqueWithoutGroupsInput[];
    set?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
    disconnect?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
    delete?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
    connect?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
    update?: Prisma.ContactUpdateWithWhereUniqueWithoutGroupsInput | Prisma.ContactUpdateWithWhereUniqueWithoutGroupsInput[];
    updateMany?: Prisma.ContactUpdateManyWithWhereWithoutGroupsInput | Prisma.ContactUpdateManyWithWhereWithoutGroupsInput[];
    deleteMany?: Prisma.ContactScalarWhereInput | Prisma.ContactScalarWhereInput[];
};
export type ContactUncheckedUpdateManyWithoutGroupsNestedInput = {
    create?: Prisma.XOR<Prisma.ContactCreateWithoutGroupsInput, Prisma.ContactUncheckedCreateWithoutGroupsInput> | Prisma.ContactCreateWithoutGroupsInput[] | Prisma.ContactUncheckedCreateWithoutGroupsInput[];
    connectOrCreate?: Prisma.ContactCreateOrConnectWithoutGroupsInput | Prisma.ContactCreateOrConnectWithoutGroupsInput[];
    upsert?: Prisma.ContactUpsertWithWhereUniqueWithoutGroupsInput | Prisma.ContactUpsertWithWhereUniqueWithoutGroupsInput[];
    set?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
    disconnect?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
    delete?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
    connect?: Prisma.ContactWhereUniqueInput | Prisma.ContactWhereUniqueInput[];
    update?: Prisma.ContactUpdateWithWhereUniqueWithoutGroupsInput | Prisma.ContactUpdateWithWhereUniqueWithoutGroupsInput[];
    updateMany?: Prisma.ContactUpdateManyWithWhereWithoutGroupsInput | Prisma.ContactUpdateManyWithWhereWithoutGroupsInput[];
    deleteMany?: Prisma.ContactScalarWhereInput | Prisma.ContactScalarWhereInput[];
};
export type ContactCreateWithoutTenantInput = {
    id?: string;
    phone: string;
    firstName?: string | null;
    lastName?: string | null;
    customFields?: string | null;
    error?: boolean;
    status?: $Enums.ContactStatus | null;
    createdAt?: Date | string;
    files?: Prisma.FileCreateNestedManyWithoutContactInput;
    groups?: Prisma.GroupCreateNestedManyWithoutContactsInput;
};
export type ContactUncheckedCreateWithoutTenantInput = {
    id?: string;
    phone: string;
    firstName?: string | null;
    lastName?: string | null;
    customFields?: string | null;
    error?: boolean;
    status?: $Enums.ContactStatus | null;
    createdAt?: Date | string;
    files?: Prisma.FileUncheckedCreateNestedManyWithoutContactInput;
    groups?: Prisma.GroupUncheckedCreateNestedManyWithoutContactsInput;
};
export type ContactCreateOrConnectWithoutTenantInput = {
    where: Prisma.ContactWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContactCreateWithoutTenantInput, Prisma.ContactUncheckedCreateWithoutTenantInput>;
};
export type ContactCreateManyTenantInputEnvelope = {
    data: Prisma.ContactCreateManyTenantInput | Prisma.ContactCreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type ContactUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.ContactWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContactUpdateWithoutTenantInput, Prisma.ContactUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.ContactCreateWithoutTenantInput, Prisma.ContactUncheckedCreateWithoutTenantInput>;
};
export type ContactUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.ContactWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContactUpdateWithoutTenantInput, Prisma.ContactUncheckedUpdateWithoutTenantInput>;
};
export type ContactUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.ContactScalarWhereInput;
    data: Prisma.XOR<Prisma.ContactUpdateManyMutationInput, Prisma.ContactUncheckedUpdateManyWithoutTenantInput>;
};
export type ContactScalarWhereInput = {
    AND?: Prisma.ContactScalarWhereInput | Prisma.ContactScalarWhereInput[];
    OR?: Prisma.ContactScalarWhereInput[];
    NOT?: Prisma.ContactScalarWhereInput | Prisma.ContactScalarWhereInput[];
    id?: Prisma.StringFilter<"Contact"> | string;
    phone?: Prisma.StringFilter<"Contact"> | string;
    firstName?: Prisma.StringNullableFilter<"Contact"> | string | null;
    lastName?: Prisma.StringNullableFilter<"Contact"> | string | null;
    customFields?: Prisma.StringNullableFilter<"Contact"> | string | null;
    error?: Prisma.BoolFilter<"Contact"> | boolean;
    status?: Prisma.EnumContactStatusNullableFilter<"Contact"> | $Enums.ContactStatus | null;
    createdAt?: Prisma.DateTimeFilter<"Contact"> | Date | string;
    tenantId?: Prisma.StringFilter<"Contact"> | string;
};
export type ContactCreateWithoutFilesInput = {
    id?: string;
    phone: string;
    firstName?: string | null;
    lastName?: string | null;
    customFields?: string | null;
    error?: boolean;
    status?: $Enums.ContactStatus | null;
    createdAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutContactsInput;
    groups?: Prisma.GroupCreateNestedManyWithoutContactsInput;
};
export type ContactUncheckedCreateWithoutFilesInput = {
    id?: string;
    phone: string;
    firstName?: string | null;
    lastName?: string | null;
    customFields?: string | null;
    error?: boolean;
    status?: $Enums.ContactStatus | null;
    createdAt?: Date | string;
    tenantId: string;
    groups?: Prisma.GroupUncheckedCreateNestedManyWithoutContactsInput;
};
export type ContactCreateOrConnectWithoutFilesInput = {
    where: Prisma.ContactWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContactCreateWithoutFilesInput, Prisma.ContactUncheckedCreateWithoutFilesInput>;
};
export type ContactUpsertWithoutFilesInput = {
    update: Prisma.XOR<Prisma.ContactUpdateWithoutFilesInput, Prisma.ContactUncheckedUpdateWithoutFilesInput>;
    create: Prisma.XOR<Prisma.ContactCreateWithoutFilesInput, Prisma.ContactUncheckedCreateWithoutFilesInput>;
    where?: Prisma.ContactWhereInput;
};
export type ContactUpdateToOneWithWhereWithoutFilesInput = {
    where?: Prisma.ContactWhereInput;
    data: Prisma.XOR<Prisma.ContactUpdateWithoutFilesInput, Prisma.ContactUncheckedUpdateWithoutFilesInput>;
};
export type ContactUpdateWithoutFilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customFields?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumContactStatusFieldUpdateOperationsInput | $Enums.ContactStatus | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutContactsNestedInput;
    groups?: Prisma.GroupUpdateManyWithoutContactsNestedInput;
};
export type ContactUncheckedUpdateWithoutFilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customFields?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumContactStatusFieldUpdateOperationsInput | $Enums.ContactStatus | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    groups?: Prisma.GroupUncheckedUpdateManyWithoutContactsNestedInput;
};
export type ContactCreateWithoutGroupsInput = {
    id?: string;
    phone: string;
    firstName?: string | null;
    lastName?: string | null;
    customFields?: string | null;
    error?: boolean;
    status?: $Enums.ContactStatus | null;
    createdAt?: Date | string;
    tenant: Prisma.TenantCreateNestedOneWithoutContactsInput;
    files?: Prisma.FileCreateNestedManyWithoutContactInput;
};
export type ContactUncheckedCreateWithoutGroupsInput = {
    id?: string;
    phone: string;
    firstName?: string | null;
    lastName?: string | null;
    customFields?: string | null;
    error?: boolean;
    status?: $Enums.ContactStatus | null;
    createdAt?: Date | string;
    tenantId: string;
    files?: Prisma.FileUncheckedCreateNestedManyWithoutContactInput;
};
export type ContactCreateOrConnectWithoutGroupsInput = {
    where: Prisma.ContactWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContactCreateWithoutGroupsInput, Prisma.ContactUncheckedCreateWithoutGroupsInput>;
};
export type ContactUpsertWithWhereUniqueWithoutGroupsInput = {
    where: Prisma.ContactWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContactUpdateWithoutGroupsInput, Prisma.ContactUncheckedUpdateWithoutGroupsInput>;
    create: Prisma.XOR<Prisma.ContactCreateWithoutGroupsInput, Prisma.ContactUncheckedCreateWithoutGroupsInput>;
};
export type ContactUpdateWithWhereUniqueWithoutGroupsInput = {
    where: Prisma.ContactWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContactUpdateWithoutGroupsInput, Prisma.ContactUncheckedUpdateWithoutGroupsInput>;
};
export type ContactUpdateManyWithWhereWithoutGroupsInput = {
    where: Prisma.ContactScalarWhereInput;
    data: Prisma.XOR<Prisma.ContactUpdateManyMutationInput, Prisma.ContactUncheckedUpdateManyWithoutGroupsInput>;
};
export type ContactCreateManyTenantInput = {
    id?: string;
    phone: string;
    firstName?: string | null;
    lastName?: string | null;
    customFields?: string | null;
    error?: boolean;
    status?: $Enums.ContactStatus | null;
    createdAt?: Date | string;
};
export type ContactUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customFields?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumContactStatusFieldUpdateOperationsInput | $Enums.ContactStatus | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    files?: Prisma.FileUpdateManyWithoutContactNestedInput;
    groups?: Prisma.GroupUpdateManyWithoutContactsNestedInput;
};
export type ContactUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customFields?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumContactStatusFieldUpdateOperationsInput | $Enums.ContactStatus | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    files?: Prisma.FileUncheckedUpdateManyWithoutContactNestedInput;
    groups?: Prisma.GroupUncheckedUpdateManyWithoutContactsNestedInput;
};
export type ContactUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customFields?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumContactStatusFieldUpdateOperationsInput | $Enums.ContactStatus | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContactUpdateWithoutGroupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customFields?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumContactStatusFieldUpdateOperationsInput | $Enums.ContactStatus | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneRequiredWithoutContactsNestedInput;
    files?: Prisma.FileUpdateManyWithoutContactNestedInput;
};
export type ContactUncheckedUpdateWithoutGroupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customFields?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumContactStatusFieldUpdateOperationsInput | $Enums.ContactStatus | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    files?: Prisma.FileUncheckedUpdateManyWithoutContactNestedInput;
};
export type ContactUncheckedUpdateManyWithoutGroupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    customFields?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    error?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.NullableEnumContactStatusFieldUpdateOperationsInput | $Enums.ContactStatus | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ContactCountOutputType = {
    files: number;
    groups: number;
};
export type ContactCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    files?: boolean | ContactCountOutputTypeCountFilesArgs;
    groups?: boolean | ContactCountOutputTypeCountGroupsArgs;
};
export type ContactCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactCountOutputTypeSelect<ExtArgs> | null;
};
export type ContactCountOutputTypeCountFilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FileWhereInput;
};
export type ContactCountOutputTypeCountGroupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GroupWhereInput;
};
export type ContactSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phone?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    customFields?: boolean;
    error?: boolean;
    status?: boolean;
    createdAt?: boolean;
    tenantId?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    files?: boolean | Prisma.Contact$filesArgs<ExtArgs>;
    groups?: boolean | Prisma.Contact$groupsArgs<ExtArgs>;
    _count?: boolean | Prisma.ContactCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contact"]>;
export type ContactSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phone?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    customFields?: boolean;
    error?: boolean;
    status?: boolean;
    createdAt?: boolean;
    tenantId?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contact"]>;
export type ContactSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    phone?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    customFields?: boolean;
    error?: boolean;
    status?: boolean;
    createdAt?: boolean;
    tenantId?: boolean;
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contact"]>;
export type ContactSelectScalar = {
    id?: boolean;
    phone?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    customFields?: boolean;
    error?: boolean;
    status?: boolean;
    createdAt?: boolean;
    tenantId?: boolean;
};
export type ContactOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "phone" | "firstName" | "lastName" | "customFields" | "error" | "status" | "createdAt" | "tenantId", ExtArgs["result"]["contact"]>;
export type ContactInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
    files?: boolean | Prisma.Contact$filesArgs<ExtArgs>;
    groups?: boolean | Prisma.Contact$groupsArgs<ExtArgs>;
    _count?: boolean | Prisma.ContactCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ContactIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type ContactIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.TenantDefaultArgs<ExtArgs>;
};
export type $ContactPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Contact";
    objects: {
        tenant: Prisma.$TenantPayload<ExtArgs>;
        files: Prisma.$FilePayload<ExtArgs>[];
        groups: Prisma.$GroupPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        phone: string;
        firstName: string | null;
        lastName: string | null;
        customFields: string | null;
        error: boolean;
        status: $Enums.ContactStatus | null;
        createdAt: Date;
        tenantId: string;
    }, ExtArgs["result"]["contact"]>;
    composites: {};
};
export type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContactPayload, S>;
export type ContactCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContactCountAggregateInputType | true;
};
export interface ContactDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Contact'];
        meta: {
            name: 'Contact';
        };
    };
    findUnique<T extends ContactFindUniqueArgs>(args: Prisma.SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ContactFindFirstArgs>(args?: Prisma.SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ContactFindManyArgs>(args?: Prisma.SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ContactCreateArgs>(args: Prisma.SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ContactCreateManyArgs>(args?: Prisma.SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ContactDeleteArgs>(args: Prisma.SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ContactUpdateArgs>(args: Prisma.SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ContactDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ContactUpdateManyArgs>(args: Prisma.SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ContactUpsertArgs>(args: Prisma.SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ContactCountArgs>(args?: Prisma.Subset<T, ContactCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContactCountAggregateOutputType> : number>;
    aggregate<T extends ContactAggregateArgs>(args: Prisma.Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>;
    groupBy<T extends ContactGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContactGroupByArgs['orderBy'];
    } : {
        orderBy?: ContactGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ContactFieldRefs;
}
export interface Prisma__ContactClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tenant<T extends Prisma.TenantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TenantDefaultArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    files<T extends Prisma.Contact$filesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Contact$filesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    groups<T extends Prisma.Contact$groupsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Contact$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ContactFieldRefs {
    readonly id: Prisma.FieldRef<"Contact", 'String'>;
    readonly phone: Prisma.FieldRef<"Contact", 'String'>;
    readonly firstName: Prisma.FieldRef<"Contact", 'String'>;
    readonly lastName: Prisma.FieldRef<"Contact", 'String'>;
    readonly customFields: Prisma.FieldRef<"Contact", 'String'>;
    readonly error: Prisma.FieldRef<"Contact", 'Boolean'>;
    readonly status: Prisma.FieldRef<"Contact", 'ContactStatus'>;
    readonly createdAt: Prisma.FieldRef<"Contact", 'DateTime'>;
    readonly tenantId: Prisma.FieldRef<"Contact", 'String'>;
}
export type ContactFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where: Prisma.ContactWhereUniqueInput;
};
export type ContactFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where: Prisma.ContactWhereUniqueInput;
};
export type ContactFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContactFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContactFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContactCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContactCreateInput, Prisma.ContactUncheckedCreateInput>;
};
export type ContactCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ContactCreateManyInput | Prisma.ContactCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ContactCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    data: Prisma.ContactCreateManyInput | Prisma.ContactCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ContactIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ContactUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContactUpdateInput, Prisma.ContactUncheckedUpdateInput>;
    where: Prisma.ContactWhereUniqueInput;
};
export type ContactUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ContactUpdateManyMutationInput, Prisma.ContactUncheckedUpdateManyInput>;
    where?: Prisma.ContactWhereInput;
    limit?: number;
};
export type ContactUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContactUpdateManyMutationInput, Prisma.ContactUncheckedUpdateManyInput>;
    where?: Prisma.ContactWhereInput;
    limit?: number;
    include?: Prisma.ContactIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ContactUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where: Prisma.ContactWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContactCreateInput, Prisma.ContactUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ContactUpdateInput, Prisma.ContactUncheckedUpdateInput>;
};
export type ContactDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where: Prisma.ContactWhereUniqueInput;
};
export type ContactDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContactWhereInput;
    limit?: number;
};
export type Contact$filesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelect<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    include?: Prisma.FileInclude<ExtArgs> | null;
    where?: Prisma.FileWhereInput;
    orderBy?: Prisma.FileOrderByWithRelationInput | Prisma.FileOrderByWithRelationInput[];
    cursor?: Prisma.FileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FileScalarFieldEnum | Prisma.FileScalarFieldEnum[];
};
export type Contact$groupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContactDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
};
export {};
