import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AnalyticsModel = runtime.Types.Result.DefaultSelection<Prisma.$AnalyticsPayload>;
export type AggregateAnalytics = {
    _count: AnalyticsCountAggregateOutputType | null;
    _min: AnalyticsMinAggregateOutputType | null;
    _max: AnalyticsMaxAggregateOutputType | null;
};
export type AnalyticsMinAggregateOutputType = {
    id: string | null;
    sessionId: string | null;
    page: string | null;
    referrer: string | null;
    createdAt: Date | null;
};
export type AnalyticsMaxAggregateOutputType = {
    id: string | null;
    sessionId: string | null;
    page: string | null;
    referrer: string | null;
    createdAt: Date | null;
};
export type AnalyticsCountAggregateOutputType = {
    id: number;
    sessionId: number;
    page: number;
    referrer: number;
    createdAt: number;
    _all: number;
};
export type AnalyticsMinAggregateInputType = {
    id?: true;
    sessionId?: true;
    page?: true;
    referrer?: true;
    createdAt?: true;
};
export type AnalyticsMaxAggregateInputType = {
    id?: true;
    sessionId?: true;
    page?: true;
    referrer?: true;
    createdAt?: true;
};
export type AnalyticsCountAggregateInputType = {
    id?: true;
    sessionId?: true;
    page?: true;
    referrer?: true;
    createdAt?: true;
    _all?: true;
};
export type AnalyticsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnalyticsWhereInput;
    orderBy?: Prisma.AnalyticsOrderByWithRelationInput | Prisma.AnalyticsOrderByWithRelationInput[];
    cursor?: Prisma.AnalyticsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AnalyticsCountAggregateInputType;
    _min?: AnalyticsMinAggregateInputType;
    _max?: AnalyticsMaxAggregateInputType;
};
export type GetAnalyticsAggregateType<T extends AnalyticsAggregateArgs> = {
    [P in keyof T & keyof AggregateAnalytics]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAnalytics[P]> : Prisma.GetScalarType<T[P], AggregateAnalytics[P]>;
};
export type AnalyticsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnalyticsWhereInput;
    orderBy?: Prisma.AnalyticsOrderByWithAggregationInput | Prisma.AnalyticsOrderByWithAggregationInput[];
    by: Prisma.AnalyticsScalarFieldEnum[] | Prisma.AnalyticsScalarFieldEnum;
    having?: Prisma.AnalyticsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnalyticsCountAggregateInputType | true;
    _min?: AnalyticsMinAggregateInputType;
    _max?: AnalyticsMaxAggregateInputType;
};
export type AnalyticsGroupByOutputType = {
    id: string;
    sessionId: string;
    page: string;
    referrer: string | null;
    createdAt: Date;
    _count: AnalyticsCountAggregateOutputType | null;
    _min: AnalyticsMinAggregateOutputType | null;
    _max: AnalyticsMaxAggregateOutputType | null;
};
type GetAnalyticsGroupByPayload<T extends AnalyticsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AnalyticsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AnalyticsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AnalyticsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AnalyticsGroupByOutputType[P]>;
}>>;
export type AnalyticsWhereInput = {
    AND?: Prisma.AnalyticsWhereInput | Prisma.AnalyticsWhereInput[];
    OR?: Prisma.AnalyticsWhereInput[];
    NOT?: Prisma.AnalyticsWhereInput | Prisma.AnalyticsWhereInput[];
    id?: Prisma.StringFilter<"Analytics"> | string;
    sessionId?: Prisma.StringFilter<"Analytics"> | string;
    page?: Prisma.StringFilter<"Analytics"> | string;
    referrer?: Prisma.StringNullableFilter<"Analytics"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Analytics"> | Date | string;
    session?: Prisma.XOR<Prisma.SessionScalarRelationFilter, Prisma.SessionWhereInput>;
};
export type AnalyticsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    page?: Prisma.SortOrder;
    referrer?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    session?: Prisma.SessionOrderByWithRelationInput;
};
export type AnalyticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AnalyticsWhereInput | Prisma.AnalyticsWhereInput[];
    OR?: Prisma.AnalyticsWhereInput[];
    NOT?: Prisma.AnalyticsWhereInput | Prisma.AnalyticsWhereInput[];
    sessionId?: Prisma.StringFilter<"Analytics"> | string;
    page?: Prisma.StringFilter<"Analytics"> | string;
    referrer?: Prisma.StringNullableFilter<"Analytics"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Analytics"> | Date | string;
    session?: Prisma.XOR<Prisma.SessionScalarRelationFilter, Prisma.SessionWhereInput>;
}, "id">;
export type AnalyticsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    page?: Prisma.SortOrder;
    referrer?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AnalyticsCountOrderByAggregateInput;
    _max?: Prisma.AnalyticsMaxOrderByAggregateInput;
    _min?: Prisma.AnalyticsMinOrderByAggregateInput;
};
export type AnalyticsScalarWhereWithAggregatesInput = {
    AND?: Prisma.AnalyticsScalarWhereWithAggregatesInput | Prisma.AnalyticsScalarWhereWithAggregatesInput[];
    OR?: Prisma.AnalyticsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AnalyticsScalarWhereWithAggregatesInput | Prisma.AnalyticsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Analytics"> | string;
    sessionId?: Prisma.StringWithAggregatesFilter<"Analytics"> | string;
    page?: Prisma.StringWithAggregatesFilter<"Analytics"> | string;
    referrer?: Prisma.StringNullableWithAggregatesFilter<"Analytics"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Analytics"> | Date | string;
};
export type AnalyticsCreateInput = {
    id?: string;
    page: string;
    referrer?: string | null;
    createdAt?: Date | string;
    session: Prisma.SessionCreateNestedOneWithoutAnalyticsInput;
};
export type AnalyticsUncheckedCreateInput = {
    id?: string;
    sessionId: string;
    page: string;
    referrer?: string | null;
    createdAt?: Date | string;
};
export type AnalyticsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    page?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    session?: Prisma.SessionUpdateOneRequiredWithoutAnalyticsNestedInput;
};
export type AnalyticsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    page?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalyticsCreateManyInput = {
    id?: string;
    sessionId: string;
    page: string;
    referrer?: string | null;
    createdAt?: Date | string;
};
export type AnalyticsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    page?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalyticsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sessionId?: Prisma.StringFieldUpdateOperationsInput | string;
    page?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalyticsListRelationFilter = {
    every?: Prisma.AnalyticsWhereInput;
    some?: Prisma.AnalyticsWhereInput;
    none?: Prisma.AnalyticsWhereInput;
};
export type AnalyticsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AnalyticsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    page?: Prisma.SortOrder;
    referrer?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AnalyticsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    page?: Prisma.SortOrder;
    referrer?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AnalyticsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sessionId?: Prisma.SortOrder;
    page?: Prisma.SortOrder;
    referrer?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AnalyticsCreateNestedManyWithoutSessionInput = {
    create?: Prisma.XOR<Prisma.AnalyticsCreateWithoutSessionInput, Prisma.AnalyticsUncheckedCreateWithoutSessionInput> | Prisma.AnalyticsCreateWithoutSessionInput[] | Prisma.AnalyticsUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.AnalyticsCreateOrConnectWithoutSessionInput | Prisma.AnalyticsCreateOrConnectWithoutSessionInput[];
    createMany?: Prisma.AnalyticsCreateManySessionInputEnvelope;
    connect?: Prisma.AnalyticsWhereUniqueInput | Prisma.AnalyticsWhereUniqueInput[];
};
export type AnalyticsUncheckedCreateNestedManyWithoutSessionInput = {
    create?: Prisma.XOR<Prisma.AnalyticsCreateWithoutSessionInput, Prisma.AnalyticsUncheckedCreateWithoutSessionInput> | Prisma.AnalyticsCreateWithoutSessionInput[] | Prisma.AnalyticsUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.AnalyticsCreateOrConnectWithoutSessionInput | Prisma.AnalyticsCreateOrConnectWithoutSessionInput[];
    createMany?: Prisma.AnalyticsCreateManySessionInputEnvelope;
    connect?: Prisma.AnalyticsWhereUniqueInput | Prisma.AnalyticsWhereUniqueInput[];
};
export type AnalyticsUpdateManyWithoutSessionNestedInput = {
    create?: Prisma.XOR<Prisma.AnalyticsCreateWithoutSessionInput, Prisma.AnalyticsUncheckedCreateWithoutSessionInput> | Prisma.AnalyticsCreateWithoutSessionInput[] | Prisma.AnalyticsUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.AnalyticsCreateOrConnectWithoutSessionInput | Prisma.AnalyticsCreateOrConnectWithoutSessionInput[];
    upsert?: Prisma.AnalyticsUpsertWithWhereUniqueWithoutSessionInput | Prisma.AnalyticsUpsertWithWhereUniqueWithoutSessionInput[];
    createMany?: Prisma.AnalyticsCreateManySessionInputEnvelope;
    set?: Prisma.AnalyticsWhereUniqueInput | Prisma.AnalyticsWhereUniqueInput[];
    disconnect?: Prisma.AnalyticsWhereUniqueInput | Prisma.AnalyticsWhereUniqueInput[];
    delete?: Prisma.AnalyticsWhereUniqueInput | Prisma.AnalyticsWhereUniqueInput[];
    connect?: Prisma.AnalyticsWhereUniqueInput | Prisma.AnalyticsWhereUniqueInput[];
    update?: Prisma.AnalyticsUpdateWithWhereUniqueWithoutSessionInput | Prisma.AnalyticsUpdateWithWhereUniqueWithoutSessionInput[];
    updateMany?: Prisma.AnalyticsUpdateManyWithWhereWithoutSessionInput | Prisma.AnalyticsUpdateManyWithWhereWithoutSessionInput[];
    deleteMany?: Prisma.AnalyticsScalarWhereInput | Prisma.AnalyticsScalarWhereInput[];
};
export type AnalyticsUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: Prisma.XOR<Prisma.AnalyticsCreateWithoutSessionInput, Prisma.AnalyticsUncheckedCreateWithoutSessionInput> | Prisma.AnalyticsCreateWithoutSessionInput[] | Prisma.AnalyticsUncheckedCreateWithoutSessionInput[];
    connectOrCreate?: Prisma.AnalyticsCreateOrConnectWithoutSessionInput | Prisma.AnalyticsCreateOrConnectWithoutSessionInput[];
    upsert?: Prisma.AnalyticsUpsertWithWhereUniqueWithoutSessionInput | Prisma.AnalyticsUpsertWithWhereUniqueWithoutSessionInput[];
    createMany?: Prisma.AnalyticsCreateManySessionInputEnvelope;
    set?: Prisma.AnalyticsWhereUniqueInput | Prisma.AnalyticsWhereUniqueInput[];
    disconnect?: Prisma.AnalyticsWhereUniqueInput | Prisma.AnalyticsWhereUniqueInput[];
    delete?: Prisma.AnalyticsWhereUniqueInput | Prisma.AnalyticsWhereUniqueInput[];
    connect?: Prisma.AnalyticsWhereUniqueInput | Prisma.AnalyticsWhereUniqueInput[];
    update?: Prisma.AnalyticsUpdateWithWhereUniqueWithoutSessionInput | Prisma.AnalyticsUpdateWithWhereUniqueWithoutSessionInput[];
    updateMany?: Prisma.AnalyticsUpdateManyWithWhereWithoutSessionInput | Prisma.AnalyticsUpdateManyWithWhereWithoutSessionInput[];
    deleteMany?: Prisma.AnalyticsScalarWhereInput | Prisma.AnalyticsScalarWhereInput[];
};
export type AnalyticsCreateWithoutSessionInput = {
    id?: string;
    page: string;
    referrer?: string | null;
    createdAt?: Date | string;
};
export type AnalyticsUncheckedCreateWithoutSessionInput = {
    id?: string;
    page: string;
    referrer?: string | null;
    createdAt?: Date | string;
};
export type AnalyticsCreateOrConnectWithoutSessionInput = {
    where: Prisma.AnalyticsWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnalyticsCreateWithoutSessionInput, Prisma.AnalyticsUncheckedCreateWithoutSessionInput>;
};
export type AnalyticsCreateManySessionInputEnvelope = {
    data: Prisma.AnalyticsCreateManySessionInput | Prisma.AnalyticsCreateManySessionInput[];
    skipDuplicates?: boolean;
};
export type AnalyticsUpsertWithWhereUniqueWithoutSessionInput = {
    where: Prisma.AnalyticsWhereUniqueInput;
    update: Prisma.XOR<Prisma.AnalyticsUpdateWithoutSessionInput, Prisma.AnalyticsUncheckedUpdateWithoutSessionInput>;
    create: Prisma.XOR<Prisma.AnalyticsCreateWithoutSessionInput, Prisma.AnalyticsUncheckedCreateWithoutSessionInput>;
};
export type AnalyticsUpdateWithWhereUniqueWithoutSessionInput = {
    where: Prisma.AnalyticsWhereUniqueInput;
    data: Prisma.XOR<Prisma.AnalyticsUpdateWithoutSessionInput, Prisma.AnalyticsUncheckedUpdateWithoutSessionInput>;
};
export type AnalyticsUpdateManyWithWhereWithoutSessionInput = {
    where: Prisma.AnalyticsScalarWhereInput;
    data: Prisma.XOR<Prisma.AnalyticsUpdateManyMutationInput, Prisma.AnalyticsUncheckedUpdateManyWithoutSessionInput>;
};
export type AnalyticsScalarWhereInput = {
    AND?: Prisma.AnalyticsScalarWhereInput | Prisma.AnalyticsScalarWhereInput[];
    OR?: Prisma.AnalyticsScalarWhereInput[];
    NOT?: Prisma.AnalyticsScalarWhereInput | Prisma.AnalyticsScalarWhereInput[];
    id?: Prisma.StringFilter<"Analytics"> | string;
    sessionId?: Prisma.StringFilter<"Analytics"> | string;
    page?: Prisma.StringFilter<"Analytics"> | string;
    referrer?: Prisma.StringNullableFilter<"Analytics"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Analytics"> | Date | string;
};
export type AnalyticsCreateManySessionInput = {
    id?: string;
    page: string;
    referrer?: string | null;
    createdAt?: Date | string;
};
export type AnalyticsUpdateWithoutSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    page?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalyticsUncheckedUpdateWithoutSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    page?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalyticsUncheckedUpdateManyWithoutSessionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    page?: Prisma.StringFieldUpdateOperationsInput | string;
    referrer?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnalyticsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sessionId?: boolean;
    page?: boolean;
    referrer?: boolean;
    createdAt?: boolean;
    session?: boolean | Prisma.SessionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["analytics"]>;
export type AnalyticsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sessionId?: boolean;
    page?: boolean;
    referrer?: boolean;
    createdAt?: boolean;
    session?: boolean | Prisma.SessionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["analytics"]>;
export type AnalyticsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sessionId?: boolean;
    page?: boolean;
    referrer?: boolean;
    createdAt?: boolean;
    session?: boolean | Prisma.SessionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["analytics"]>;
export type AnalyticsSelectScalar = {
    id?: boolean;
    sessionId?: boolean;
    page?: boolean;
    referrer?: boolean;
    createdAt?: boolean;
};
export type AnalyticsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sessionId" | "page" | "referrer" | "createdAt", ExtArgs["result"]["analytics"]>;
export type AnalyticsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    session?: boolean | Prisma.SessionDefaultArgs<ExtArgs>;
};
export type AnalyticsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    session?: boolean | Prisma.SessionDefaultArgs<ExtArgs>;
};
export type AnalyticsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    session?: boolean | Prisma.SessionDefaultArgs<ExtArgs>;
};
export type $AnalyticsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Analytics";
    objects: {
        session: Prisma.$SessionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        sessionId: string;
        page: string;
        referrer: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["analytics"]>;
    composites: {};
};
export type AnalyticsGetPayload<S extends boolean | null | undefined | AnalyticsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload, S>;
export type AnalyticsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AnalyticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AnalyticsCountAggregateInputType | true;
};
export interface AnalyticsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Analytics'];
        meta: {
            name: 'Analytics';
        };
    };
    findUnique<T extends AnalyticsFindUniqueArgs>(args: Prisma.SelectSubset<T, AnalyticsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AnalyticsClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AnalyticsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AnalyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnalyticsClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AnalyticsFindFirstArgs>(args?: Prisma.SelectSubset<T, AnalyticsFindFirstArgs<ExtArgs>>): Prisma.Prisma__AnalyticsClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AnalyticsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AnalyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnalyticsClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AnalyticsFindManyArgs>(args?: Prisma.SelectSubset<T, AnalyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AnalyticsCreateArgs>(args: Prisma.SelectSubset<T, AnalyticsCreateArgs<ExtArgs>>): Prisma.Prisma__AnalyticsClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AnalyticsCreateManyArgs>(args?: Prisma.SelectSubset<T, AnalyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AnalyticsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AnalyticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AnalyticsDeleteArgs>(args: Prisma.SelectSubset<T, AnalyticsDeleteArgs<ExtArgs>>): Prisma.Prisma__AnalyticsClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AnalyticsUpdateArgs>(args: Prisma.SelectSubset<T, AnalyticsUpdateArgs<ExtArgs>>): Prisma.Prisma__AnalyticsClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AnalyticsDeleteManyArgs>(args?: Prisma.SelectSubset<T, AnalyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AnalyticsUpdateManyArgs>(args: Prisma.SelectSubset<T, AnalyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AnalyticsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AnalyticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AnalyticsUpsertArgs>(args: Prisma.SelectSubset<T, AnalyticsUpsertArgs<ExtArgs>>): Prisma.Prisma__AnalyticsClient<runtime.Types.Result.GetResult<Prisma.$AnalyticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AnalyticsCountArgs>(args?: Prisma.Subset<T, AnalyticsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AnalyticsCountAggregateOutputType> : number>;
    aggregate<T extends AnalyticsAggregateArgs>(args: Prisma.Subset<T, AnalyticsAggregateArgs>): Prisma.PrismaPromise<GetAnalyticsAggregateType<T>>;
    groupBy<T extends AnalyticsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AnalyticsGroupByArgs['orderBy'];
    } : {
        orderBy?: AnalyticsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AnalyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AnalyticsFieldRefs;
}
export interface Prisma__AnalyticsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    session<T extends Prisma.SessionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SessionDefaultArgs<ExtArgs>>): Prisma.Prisma__SessionClient<runtime.Types.Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AnalyticsFieldRefs {
    readonly id: Prisma.FieldRef<"Analytics", 'String'>;
    readonly sessionId: Prisma.FieldRef<"Analytics", 'String'>;
    readonly page: Prisma.FieldRef<"Analytics", 'String'>;
    readonly referrer: Prisma.FieldRef<"Analytics", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Analytics", 'DateTime'>;
}
export type AnalyticsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsOmit<ExtArgs> | null;
    include?: Prisma.AnalyticsInclude<ExtArgs> | null;
    where: Prisma.AnalyticsWhereUniqueInput;
};
export type AnalyticsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsOmit<ExtArgs> | null;
    include?: Prisma.AnalyticsInclude<ExtArgs> | null;
    where: Prisma.AnalyticsWhereUniqueInput;
};
export type AnalyticsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsOmit<ExtArgs> | null;
    include?: Prisma.AnalyticsInclude<ExtArgs> | null;
    where?: Prisma.AnalyticsWhereInput;
    orderBy?: Prisma.AnalyticsOrderByWithRelationInput | Prisma.AnalyticsOrderByWithRelationInput[];
    cursor?: Prisma.AnalyticsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnalyticsScalarFieldEnum | Prisma.AnalyticsScalarFieldEnum[];
};
export type AnalyticsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsOmit<ExtArgs> | null;
    include?: Prisma.AnalyticsInclude<ExtArgs> | null;
    where?: Prisma.AnalyticsWhereInput;
    orderBy?: Prisma.AnalyticsOrderByWithRelationInput | Prisma.AnalyticsOrderByWithRelationInput[];
    cursor?: Prisma.AnalyticsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnalyticsScalarFieldEnum | Prisma.AnalyticsScalarFieldEnum[];
};
export type AnalyticsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsOmit<ExtArgs> | null;
    include?: Prisma.AnalyticsInclude<ExtArgs> | null;
    where?: Prisma.AnalyticsWhereInput;
    orderBy?: Prisma.AnalyticsOrderByWithRelationInput | Prisma.AnalyticsOrderByWithRelationInput[];
    cursor?: Prisma.AnalyticsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnalyticsScalarFieldEnum | Prisma.AnalyticsScalarFieldEnum[];
};
export type AnalyticsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsOmit<ExtArgs> | null;
    include?: Prisma.AnalyticsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnalyticsCreateInput, Prisma.AnalyticsUncheckedCreateInput>;
};
export type AnalyticsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AnalyticsCreateManyInput | Prisma.AnalyticsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AnalyticsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnalyticsOmit<ExtArgs> | null;
    data: Prisma.AnalyticsCreateManyInput | Prisma.AnalyticsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AnalyticsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AnalyticsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsOmit<ExtArgs> | null;
    include?: Prisma.AnalyticsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnalyticsUpdateInput, Prisma.AnalyticsUncheckedUpdateInput>;
    where: Prisma.AnalyticsWhereUniqueInput;
};
export type AnalyticsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AnalyticsUpdateManyMutationInput, Prisma.AnalyticsUncheckedUpdateManyInput>;
    where?: Prisma.AnalyticsWhereInput;
    limit?: number;
};
export type AnalyticsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnalyticsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnalyticsUpdateManyMutationInput, Prisma.AnalyticsUncheckedUpdateManyInput>;
    where?: Prisma.AnalyticsWhereInput;
    limit?: number;
    include?: Prisma.AnalyticsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AnalyticsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsOmit<ExtArgs> | null;
    include?: Prisma.AnalyticsInclude<ExtArgs> | null;
    where: Prisma.AnalyticsWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnalyticsCreateInput, Prisma.AnalyticsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AnalyticsUpdateInput, Prisma.AnalyticsUncheckedUpdateInput>;
};
export type AnalyticsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsOmit<ExtArgs> | null;
    include?: Prisma.AnalyticsInclude<ExtArgs> | null;
    where: Prisma.AnalyticsWhereUniqueInput;
};
export type AnalyticsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnalyticsWhereInput;
    limit?: number;
};
export type AnalyticsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnalyticsSelect<ExtArgs> | null;
    omit?: Prisma.AnalyticsOmit<ExtArgs> | null;
    include?: Prisma.AnalyticsInclude<ExtArgs> | null;
};
export {};
