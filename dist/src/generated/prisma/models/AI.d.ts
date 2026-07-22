import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AIModel = runtime.Types.Result.DefaultSelection<Prisma.$AIPayload>;
export type AggregateAI = {
    _count: AICountAggregateOutputType | null;
    _min: AIMinAggregateOutputType | null;
    _max: AIMaxAggregateOutputType | null;
};
export type AIMinAggregateOutputType = {
    id: string | null;
    linkSMS: string | null;
    linkAnti: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    tenantId: string | null;
};
export type AIMaxAggregateOutputType = {
    id: string | null;
    linkSMS: string | null;
    linkAnti: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    tenantId: string | null;
};
export type AICountAggregateOutputType = {
    id: number;
    linkSMS: number;
    linkAnti: number;
    createdAt: number;
    updatedAt: number;
    tenantId: number;
    _all: number;
};
export type AIMinAggregateInputType = {
    id?: true;
    linkSMS?: true;
    linkAnti?: true;
    createdAt?: true;
    updatedAt?: true;
    tenantId?: true;
};
export type AIMaxAggregateInputType = {
    id?: true;
    linkSMS?: true;
    linkAnti?: true;
    createdAt?: true;
    updatedAt?: true;
    tenantId?: true;
};
export type AICountAggregateInputType = {
    id?: true;
    linkSMS?: true;
    linkAnti?: true;
    createdAt?: true;
    updatedAt?: true;
    tenantId?: true;
    _all?: true;
};
export type AIAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AIWhereInput;
    orderBy?: Prisma.AIOrderByWithRelationInput | Prisma.AIOrderByWithRelationInput[];
    cursor?: Prisma.AIWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AICountAggregateInputType;
    _min?: AIMinAggregateInputType;
    _max?: AIMaxAggregateInputType;
};
export type GetAIAggregateType<T extends AIAggregateArgs> = {
    [P in keyof T & keyof AggregateAI]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAI[P]> : Prisma.GetScalarType<T[P], AggregateAI[P]>;
};
export type AIGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AIWhereInput;
    orderBy?: Prisma.AIOrderByWithAggregationInput | Prisma.AIOrderByWithAggregationInput[];
    by: Prisma.AIScalarFieldEnum[] | Prisma.AIScalarFieldEnum;
    having?: Prisma.AIScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AICountAggregateInputType | true;
    _min?: AIMinAggregateInputType;
    _max?: AIMaxAggregateInputType;
};
export type AIGroupByOutputType = {
    id: string;
    linkSMS: string | null;
    linkAnti: string | null;
    createdAt: Date;
    updatedAt: Date;
    tenantId: string | null;
    _count: AICountAggregateOutputType | null;
    _min: AIMinAggregateOutputType | null;
    _max: AIMaxAggregateOutputType | null;
};
type GetAIGroupByPayload<T extends AIGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AIGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AIGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AIGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AIGroupByOutputType[P]>;
}>>;
export type AIWhereInput = {
    AND?: Prisma.AIWhereInput | Prisma.AIWhereInput[];
    OR?: Prisma.AIWhereInput[];
    NOT?: Prisma.AIWhereInput | Prisma.AIWhereInput[];
    id?: Prisma.StringFilter<"AI"> | string;
    linkSMS?: Prisma.StringNullableFilter<"AI"> | string | null;
    linkAnti?: Prisma.StringNullableFilter<"AI"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AI"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AI"> | Date | string;
    tenantId?: Prisma.StringNullableFilter<"AI"> | string | null;
    tenant?: Prisma.XOR<Prisma.TenantNullableScalarRelationFilter, Prisma.TenantWhereInput> | null;
};
export type AIOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    linkSMS?: Prisma.SortOrderInput | Prisma.SortOrder;
    linkAnti?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrderInput | Prisma.SortOrder;
    tenant?: Prisma.TenantOrderByWithRelationInput;
};
export type AIWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AIWhereInput | Prisma.AIWhereInput[];
    OR?: Prisma.AIWhereInput[];
    NOT?: Prisma.AIWhereInput | Prisma.AIWhereInput[];
    linkSMS?: Prisma.StringNullableFilter<"AI"> | string | null;
    linkAnti?: Prisma.StringNullableFilter<"AI"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AI"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AI"> | Date | string;
    tenantId?: Prisma.StringNullableFilter<"AI"> | string | null;
    tenant?: Prisma.XOR<Prisma.TenantNullableScalarRelationFilter, Prisma.TenantWhereInput> | null;
}, "id">;
export type AIOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    linkSMS?: Prisma.SortOrderInput | Prisma.SortOrder;
    linkAnti?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.AICountOrderByAggregateInput;
    _max?: Prisma.AIMaxOrderByAggregateInput;
    _min?: Prisma.AIMinOrderByAggregateInput;
};
export type AIScalarWhereWithAggregatesInput = {
    AND?: Prisma.AIScalarWhereWithAggregatesInput | Prisma.AIScalarWhereWithAggregatesInput[];
    OR?: Prisma.AIScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AIScalarWhereWithAggregatesInput | Prisma.AIScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AI"> | string;
    linkSMS?: Prisma.StringNullableWithAggregatesFilter<"AI"> | string | null;
    linkAnti?: Prisma.StringNullableWithAggregatesFilter<"AI"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AI"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AI"> | Date | string;
    tenantId?: Prisma.StringNullableWithAggregatesFilter<"AI"> | string | null;
};
export type AICreateInput = {
    id: string;
    linkSMS?: string | null;
    linkAnti?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tenant?: Prisma.TenantCreateNestedOneWithoutAiInput;
};
export type AIUncheckedCreateInput = {
    id: string;
    linkSMS?: string | null;
    linkAnti?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tenantId?: string | null;
};
export type AIUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    linkSMS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkAnti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.TenantUpdateOneWithoutAiNestedInput;
};
export type AIUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    linkSMS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkAnti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AICreateManyInput = {
    id: string;
    linkSMS?: string | null;
    linkAnti?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tenantId?: string | null;
};
export type AIUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    linkSMS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkAnti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AIUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    linkSMS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkAnti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenantId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AIListRelationFilter = {
    every?: Prisma.AIWhereInput;
    some?: Prisma.AIWhereInput;
    none?: Prisma.AIWhereInput;
};
export type AIOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AICountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    linkSMS?: Prisma.SortOrder;
    linkAnti?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
};
export type AIMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    linkSMS?: Prisma.SortOrder;
    linkAnti?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
};
export type AIMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    linkSMS?: Prisma.SortOrder;
    linkAnti?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
};
export type AICreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.AICreateWithoutTenantInput, Prisma.AIUncheckedCreateWithoutTenantInput> | Prisma.AICreateWithoutTenantInput[] | Prisma.AIUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.AICreateOrConnectWithoutTenantInput | Prisma.AICreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.AICreateManyTenantInputEnvelope;
    connect?: Prisma.AIWhereUniqueInput | Prisma.AIWhereUniqueInput[];
};
export type AIUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.AICreateWithoutTenantInput, Prisma.AIUncheckedCreateWithoutTenantInput> | Prisma.AICreateWithoutTenantInput[] | Prisma.AIUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.AICreateOrConnectWithoutTenantInput | Prisma.AICreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.AICreateManyTenantInputEnvelope;
    connect?: Prisma.AIWhereUniqueInput | Prisma.AIWhereUniqueInput[];
};
export type AIUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.AICreateWithoutTenantInput, Prisma.AIUncheckedCreateWithoutTenantInput> | Prisma.AICreateWithoutTenantInput[] | Prisma.AIUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.AICreateOrConnectWithoutTenantInput | Prisma.AICreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.AIUpsertWithWhereUniqueWithoutTenantInput | Prisma.AIUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.AICreateManyTenantInputEnvelope;
    set?: Prisma.AIWhereUniqueInput | Prisma.AIWhereUniqueInput[];
    disconnect?: Prisma.AIWhereUniqueInput | Prisma.AIWhereUniqueInput[];
    delete?: Prisma.AIWhereUniqueInput | Prisma.AIWhereUniqueInput[];
    connect?: Prisma.AIWhereUniqueInput | Prisma.AIWhereUniqueInput[];
    update?: Prisma.AIUpdateWithWhereUniqueWithoutTenantInput | Prisma.AIUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.AIUpdateManyWithWhereWithoutTenantInput | Prisma.AIUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.AIScalarWhereInput | Prisma.AIScalarWhereInput[];
};
export type AIUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.AICreateWithoutTenantInput, Prisma.AIUncheckedCreateWithoutTenantInput> | Prisma.AICreateWithoutTenantInput[] | Prisma.AIUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.AICreateOrConnectWithoutTenantInput | Prisma.AICreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.AIUpsertWithWhereUniqueWithoutTenantInput | Prisma.AIUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.AICreateManyTenantInputEnvelope;
    set?: Prisma.AIWhereUniqueInput | Prisma.AIWhereUniqueInput[];
    disconnect?: Prisma.AIWhereUniqueInput | Prisma.AIWhereUniqueInput[];
    delete?: Prisma.AIWhereUniqueInput | Prisma.AIWhereUniqueInput[];
    connect?: Prisma.AIWhereUniqueInput | Prisma.AIWhereUniqueInput[];
    update?: Prisma.AIUpdateWithWhereUniqueWithoutTenantInput | Prisma.AIUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.AIUpdateManyWithWhereWithoutTenantInput | Prisma.AIUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.AIScalarWhereInput | Prisma.AIScalarWhereInput[];
};
export type AICreateWithoutTenantInput = {
    id: string;
    linkSMS?: string | null;
    linkAnti?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AIUncheckedCreateWithoutTenantInput = {
    id: string;
    linkSMS?: string | null;
    linkAnti?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AICreateOrConnectWithoutTenantInput = {
    where: Prisma.AIWhereUniqueInput;
    create: Prisma.XOR<Prisma.AICreateWithoutTenantInput, Prisma.AIUncheckedCreateWithoutTenantInput>;
};
export type AICreateManyTenantInputEnvelope = {
    data: Prisma.AICreateManyTenantInput | Prisma.AICreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type AIUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.AIWhereUniqueInput;
    update: Prisma.XOR<Prisma.AIUpdateWithoutTenantInput, Prisma.AIUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.AICreateWithoutTenantInput, Prisma.AIUncheckedCreateWithoutTenantInput>;
};
export type AIUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.AIWhereUniqueInput;
    data: Prisma.XOR<Prisma.AIUpdateWithoutTenantInput, Prisma.AIUncheckedUpdateWithoutTenantInput>;
};
export type AIUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.AIScalarWhereInput;
    data: Prisma.XOR<Prisma.AIUpdateManyMutationInput, Prisma.AIUncheckedUpdateManyWithoutTenantInput>;
};
export type AIScalarWhereInput = {
    AND?: Prisma.AIScalarWhereInput | Prisma.AIScalarWhereInput[];
    OR?: Prisma.AIScalarWhereInput[];
    NOT?: Prisma.AIScalarWhereInput | Prisma.AIScalarWhereInput[];
    id?: Prisma.StringFilter<"AI"> | string;
    linkSMS?: Prisma.StringNullableFilter<"AI"> | string | null;
    linkAnti?: Prisma.StringNullableFilter<"AI"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AI"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AI"> | Date | string;
    tenantId?: Prisma.StringNullableFilter<"AI"> | string | null;
};
export type AICreateManyTenantInput = {
    id: string;
    linkSMS?: string | null;
    linkAnti?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AIUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    linkSMS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkAnti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AIUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    linkSMS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkAnti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AIUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    linkSMS?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkAnti?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AISelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    linkSMS?: boolean;
    linkAnti?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tenantId?: boolean;
    tenant?: boolean | Prisma.AI$tenantArgs<ExtArgs>;
}, ExtArgs["result"]["aI"]>;
export type AISelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    linkSMS?: boolean;
    linkAnti?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tenantId?: boolean;
    tenant?: boolean | Prisma.AI$tenantArgs<ExtArgs>;
}, ExtArgs["result"]["aI"]>;
export type AISelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    linkSMS?: boolean;
    linkAnti?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tenantId?: boolean;
    tenant?: boolean | Prisma.AI$tenantArgs<ExtArgs>;
}, ExtArgs["result"]["aI"]>;
export type AISelectScalar = {
    id?: boolean;
    linkSMS?: boolean;
    linkAnti?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tenantId?: boolean;
};
export type AIOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "linkSMS" | "linkAnti" | "createdAt" | "updatedAt" | "tenantId", ExtArgs["result"]["aI"]>;
export type AIInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.AI$tenantArgs<ExtArgs>;
};
export type AIIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.AI$tenantArgs<ExtArgs>;
};
export type AIIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.AI$tenantArgs<ExtArgs>;
};
export type $AIPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AI";
    objects: {
        tenant: Prisma.$TenantPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        linkSMS: string | null;
        linkAnti: string | null;
        createdAt: Date;
        updatedAt: Date;
        tenantId: string | null;
    }, ExtArgs["result"]["aI"]>;
    composites: {};
};
export type AIGetPayload<S extends boolean | null | undefined | AIDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AIPayload, S>;
export type AICountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AIFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AICountAggregateInputType | true;
};
export interface AIDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AI'];
        meta: {
            name: 'AI';
        };
    };
    findUnique<T extends AIFindUniqueArgs>(args: Prisma.SelectSubset<T, AIFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AIClient<runtime.Types.Result.GetResult<Prisma.$AIPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AIFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AIFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AIClient<runtime.Types.Result.GetResult<Prisma.$AIPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AIFindFirstArgs>(args?: Prisma.SelectSubset<T, AIFindFirstArgs<ExtArgs>>): Prisma.Prisma__AIClient<runtime.Types.Result.GetResult<Prisma.$AIPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AIFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AIFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AIClient<runtime.Types.Result.GetResult<Prisma.$AIPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AIFindManyArgs>(args?: Prisma.SelectSubset<T, AIFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AIPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AICreateArgs>(args: Prisma.SelectSubset<T, AICreateArgs<ExtArgs>>): Prisma.Prisma__AIClient<runtime.Types.Result.GetResult<Prisma.$AIPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AICreateManyArgs>(args?: Prisma.SelectSubset<T, AICreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AICreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AICreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AIPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AIDeleteArgs>(args: Prisma.SelectSubset<T, AIDeleteArgs<ExtArgs>>): Prisma.Prisma__AIClient<runtime.Types.Result.GetResult<Prisma.$AIPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AIUpdateArgs>(args: Prisma.SelectSubset<T, AIUpdateArgs<ExtArgs>>): Prisma.Prisma__AIClient<runtime.Types.Result.GetResult<Prisma.$AIPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AIDeleteManyArgs>(args?: Prisma.SelectSubset<T, AIDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AIUpdateManyArgs>(args: Prisma.SelectSubset<T, AIUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AIUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AIUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AIPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AIUpsertArgs>(args: Prisma.SelectSubset<T, AIUpsertArgs<ExtArgs>>): Prisma.Prisma__AIClient<runtime.Types.Result.GetResult<Prisma.$AIPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AICountArgs>(args?: Prisma.Subset<T, AICountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AICountAggregateOutputType> : number>;
    aggregate<T extends AIAggregateArgs>(args: Prisma.Subset<T, AIAggregateArgs>): Prisma.PrismaPromise<GetAIAggregateType<T>>;
    groupBy<T extends AIGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AIGroupByArgs['orderBy'];
    } : {
        orderBy?: AIGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AIGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AIFieldRefs;
}
export interface Prisma__AIClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tenant<T extends Prisma.AI$tenantArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AI$tenantArgs<ExtArgs>>): Prisma.Prisma__TenantClient<runtime.Types.Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AIFieldRefs {
    readonly id: Prisma.FieldRef<"AI", 'String'>;
    readonly linkSMS: Prisma.FieldRef<"AI", 'String'>;
    readonly linkAnti: Prisma.FieldRef<"AI", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AI", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"AI", 'DateTime'>;
    readonly tenantId: Prisma.FieldRef<"AI", 'String'>;
}
export type AIFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AISelect<ExtArgs> | null;
    omit?: Prisma.AIOmit<ExtArgs> | null;
    include?: Prisma.AIInclude<ExtArgs> | null;
    where: Prisma.AIWhereUniqueInput;
};
export type AIFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AISelect<ExtArgs> | null;
    omit?: Prisma.AIOmit<ExtArgs> | null;
    include?: Prisma.AIInclude<ExtArgs> | null;
    where: Prisma.AIWhereUniqueInput;
};
export type AIFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AISelect<ExtArgs> | null;
    omit?: Prisma.AIOmit<ExtArgs> | null;
    include?: Prisma.AIInclude<ExtArgs> | null;
    where?: Prisma.AIWhereInput;
    orderBy?: Prisma.AIOrderByWithRelationInput | Prisma.AIOrderByWithRelationInput[];
    cursor?: Prisma.AIWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AIScalarFieldEnum | Prisma.AIScalarFieldEnum[];
};
export type AIFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AISelect<ExtArgs> | null;
    omit?: Prisma.AIOmit<ExtArgs> | null;
    include?: Prisma.AIInclude<ExtArgs> | null;
    where?: Prisma.AIWhereInput;
    orderBy?: Prisma.AIOrderByWithRelationInput | Prisma.AIOrderByWithRelationInput[];
    cursor?: Prisma.AIWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AIScalarFieldEnum | Prisma.AIScalarFieldEnum[];
};
export type AIFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AISelect<ExtArgs> | null;
    omit?: Prisma.AIOmit<ExtArgs> | null;
    include?: Prisma.AIInclude<ExtArgs> | null;
    where?: Prisma.AIWhereInput;
    orderBy?: Prisma.AIOrderByWithRelationInput | Prisma.AIOrderByWithRelationInput[];
    cursor?: Prisma.AIWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AIScalarFieldEnum | Prisma.AIScalarFieldEnum[];
};
export type AICreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AISelect<ExtArgs> | null;
    omit?: Prisma.AIOmit<ExtArgs> | null;
    include?: Prisma.AIInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AICreateInput, Prisma.AIUncheckedCreateInput>;
};
export type AICreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AICreateManyInput | Prisma.AICreateManyInput[];
    skipDuplicates?: boolean;
};
export type AICreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AISelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AIOmit<ExtArgs> | null;
    data: Prisma.AICreateManyInput | Prisma.AICreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AIIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AIUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AISelect<ExtArgs> | null;
    omit?: Prisma.AIOmit<ExtArgs> | null;
    include?: Prisma.AIInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AIUpdateInput, Prisma.AIUncheckedUpdateInput>;
    where: Prisma.AIWhereUniqueInput;
};
export type AIUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AIUpdateManyMutationInput, Prisma.AIUncheckedUpdateManyInput>;
    where?: Prisma.AIWhereInput;
    limit?: number;
};
export type AIUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AISelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AIOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AIUpdateManyMutationInput, Prisma.AIUncheckedUpdateManyInput>;
    where?: Prisma.AIWhereInput;
    limit?: number;
    include?: Prisma.AIIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AIUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AISelect<ExtArgs> | null;
    omit?: Prisma.AIOmit<ExtArgs> | null;
    include?: Prisma.AIInclude<ExtArgs> | null;
    where: Prisma.AIWhereUniqueInput;
    create: Prisma.XOR<Prisma.AICreateInput, Prisma.AIUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AIUpdateInput, Prisma.AIUncheckedUpdateInput>;
};
export type AIDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AISelect<ExtArgs> | null;
    omit?: Prisma.AIOmit<ExtArgs> | null;
    include?: Prisma.AIInclude<ExtArgs> | null;
    where: Prisma.AIWhereUniqueInput;
};
export type AIDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AIWhereInput;
    limit?: number;
};
export type AI$tenantArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TenantSelect<ExtArgs> | null;
    omit?: Prisma.TenantOmit<ExtArgs> | null;
    include?: Prisma.TenantInclude<ExtArgs> | null;
    where?: Prisma.TenantWhereInput;
};
export type AIDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AISelect<ExtArgs> | null;
    omit?: Prisma.AIOmit<ExtArgs> | null;
    include?: Prisma.AIInclude<ExtArgs> | null;
};
export {};
