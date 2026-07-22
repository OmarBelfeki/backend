import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RatePerSMSModel = runtime.Types.Result.DefaultSelection<Prisma.$RatePerSMSPayload>;
export type AggregateRatePerSMS = {
    _count: RatePerSMSCountAggregateOutputType | null;
    _avg: RatePerSMSAvgAggregateOutputType | null;
    _sum: RatePerSMSSumAggregateOutputType | null;
    _min: RatePerSMSMinAggregateOutputType | null;
    _max: RatePerSMSMaxAggregateOutputType | null;
};
export type RatePerSMSAvgAggregateOutputType = {
    id: number | null;
};
export type RatePerSMSSumAggregateOutputType = {
    id: number | null;
};
export type RatePerSMSMinAggregateOutputType = {
    id: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RatePerSMSMaxAggregateOutputType = {
    id: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RatePerSMSCountAggregateOutputType = {
    id: number;
    ranges: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RatePerSMSAvgAggregateInputType = {
    id?: true;
};
export type RatePerSMSSumAggregateInputType = {
    id?: true;
};
export type RatePerSMSMinAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RatePerSMSMaxAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RatePerSMSCountAggregateInputType = {
    id?: true;
    ranges?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RatePerSMSAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RatePerSMSWhereInput;
    orderBy?: Prisma.RatePerSMSOrderByWithRelationInput | Prisma.RatePerSMSOrderByWithRelationInput[];
    cursor?: Prisma.RatePerSMSWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RatePerSMSCountAggregateInputType;
    _avg?: RatePerSMSAvgAggregateInputType;
    _sum?: RatePerSMSSumAggregateInputType;
    _min?: RatePerSMSMinAggregateInputType;
    _max?: RatePerSMSMaxAggregateInputType;
};
export type GetRatePerSMSAggregateType<T extends RatePerSMSAggregateArgs> = {
    [P in keyof T & keyof AggregateRatePerSMS]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRatePerSMS[P]> : Prisma.GetScalarType<T[P], AggregateRatePerSMS[P]>;
};
export type RatePerSMSGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RatePerSMSWhereInput;
    orderBy?: Prisma.RatePerSMSOrderByWithAggregationInput | Prisma.RatePerSMSOrderByWithAggregationInput[];
    by: Prisma.RatePerSMSScalarFieldEnum[] | Prisma.RatePerSMSScalarFieldEnum;
    having?: Prisma.RatePerSMSScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RatePerSMSCountAggregateInputType | true;
    _avg?: RatePerSMSAvgAggregateInputType;
    _sum?: RatePerSMSSumAggregateInputType;
    _min?: RatePerSMSMinAggregateInputType;
    _max?: RatePerSMSMaxAggregateInputType;
};
export type RatePerSMSGroupByOutputType = {
    id: number;
    ranges: runtime.JsonValue;
    createdAt: Date;
    updatedAt: Date;
    _count: RatePerSMSCountAggregateOutputType | null;
    _avg: RatePerSMSAvgAggregateOutputType | null;
    _sum: RatePerSMSSumAggregateOutputType | null;
    _min: RatePerSMSMinAggregateOutputType | null;
    _max: RatePerSMSMaxAggregateOutputType | null;
};
type GetRatePerSMSGroupByPayload<T extends RatePerSMSGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RatePerSMSGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RatePerSMSGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RatePerSMSGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RatePerSMSGroupByOutputType[P]>;
}>>;
export type RatePerSMSWhereInput = {
    AND?: Prisma.RatePerSMSWhereInput | Prisma.RatePerSMSWhereInput[];
    OR?: Prisma.RatePerSMSWhereInput[];
    NOT?: Prisma.RatePerSMSWhereInput | Prisma.RatePerSMSWhereInput[];
    id?: Prisma.IntFilter<"RatePerSMS"> | number;
    ranges?: Prisma.JsonFilter<"RatePerSMS">;
    createdAt?: Prisma.DateTimeFilter<"RatePerSMS"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RatePerSMS"> | Date | string;
};
export type RatePerSMSOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ranges?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RatePerSMSWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.RatePerSMSWhereInput | Prisma.RatePerSMSWhereInput[];
    OR?: Prisma.RatePerSMSWhereInput[];
    NOT?: Prisma.RatePerSMSWhereInput | Prisma.RatePerSMSWhereInput[];
    ranges?: Prisma.JsonFilter<"RatePerSMS">;
    createdAt?: Prisma.DateTimeFilter<"RatePerSMS"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RatePerSMS"> | Date | string;
}, "id">;
export type RatePerSMSOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ranges?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RatePerSMSCountOrderByAggregateInput;
    _avg?: Prisma.RatePerSMSAvgOrderByAggregateInput;
    _max?: Prisma.RatePerSMSMaxOrderByAggregateInput;
    _min?: Prisma.RatePerSMSMinOrderByAggregateInput;
    _sum?: Prisma.RatePerSMSSumOrderByAggregateInput;
};
export type RatePerSMSScalarWhereWithAggregatesInput = {
    AND?: Prisma.RatePerSMSScalarWhereWithAggregatesInput | Prisma.RatePerSMSScalarWhereWithAggregatesInput[];
    OR?: Prisma.RatePerSMSScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RatePerSMSScalarWhereWithAggregatesInput | Prisma.RatePerSMSScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"RatePerSMS"> | number;
    ranges?: Prisma.JsonWithAggregatesFilter<"RatePerSMS">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RatePerSMS"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"RatePerSMS"> | Date | string;
};
export type RatePerSMSCreateInput = {
    id: number;
    ranges: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RatePerSMSUncheckedCreateInput = {
    id: number;
    ranges: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RatePerSMSUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ranges?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RatePerSMSUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ranges?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RatePerSMSCreateManyInput = {
    id: number;
    ranges: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RatePerSMSUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ranges?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RatePerSMSUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ranges?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RatePerSMSCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ranges?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RatePerSMSAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type RatePerSMSMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RatePerSMSMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RatePerSMSSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type RatePerSMSSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ranges?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["ratePerSMS"]>;
export type RatePerSMSSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ranges?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["ratePerSMS"]>;
export type RatePerSMSSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ranges?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["ratePerSMS"]>;
export type RatePerSMSSelectScalar = {
    id?: boolean;
    ranges?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RatePerSMSOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ranges" | "createdAt" | "updatedAt", ExtArgs["result"]["ratePerSMS"]>;
export type $RatePerSMSPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RatePerSMS";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        ranges: runtime.JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["ratePerSMS"]>;
    composites: {};
};
export type RatePerSMSGetPayload<S extends boolean | null | undefined | RatePerSMSDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RatePerSMSPayload, S>;
export type RatePerSMSCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RatePerSMSFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RatePerSMSCountAggregateInputType | true;
};
export interface RatePerSMSDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RatePerSMS'];
        meta: {
            name: 'RatePerSMS';
        };
    };
    findUnique<T extends RatePerSMSFindUniqueArgs>(args: Prisma.SelectSubset<T, RatePerSMSFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RatePerSMSClient<runtime.Types.Result.GetResult<Prisma.$RatePerSMSPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RatePerSMSFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RatePerSMSFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RatePerSMSClient<runtime.Types.Result.GetResult<Prisma.$RatePerSMSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RatePerSMSFindFirstArgs>(args?: Prisma.SelectSubset<T, RatePerSMSFindFirstArgs<ExtArgs>>): Prisma.Prisma__RatePerSMSClient<runtime.Types.Result.GetResult<Prisma.$RatePerSMSPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RatePerSMSFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RatePerSMSFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RatePerSMSClient<runtime.Types.Result.GetResult<Prisma.$RatePerSMSPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RatePerSMSFindManyArgs>(args?: Prisma.SelectSubset<T, RatePerSMSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RatePerSMSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RatePerSMSCreateArgs>(args: Prisma.SelectSubset<T, RatePerSMSCreateArgs<ExtArgs>>): Prisma.Prisma__RatePerSMSClient<runtime.Types.Result.GetResult<Prisma.$RatePerSMSPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RatePerSMSCreateManyArgs>(args?: Prisma.SelectSubset<T, RatePerSMSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RatePerSMSCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RatePerSMSCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RatePerSMSPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RatePerSMSDeleteArgs>(args: Prisma.SelectSubset<T, RatePerSMSDeleteArgs<ExtArgs>>): Prisma.Prisma__RatePerSMSClient<runtime.Types.Result.GetResult<Prisma.$RatePerSMSPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RatePerSMSUpdateArgs>(args: Prisma.SelectSubset<T, RatePerSMSUpdateArgs<ExtArgs>>): Prisma.Prisma__RatePerSMSClient<runtime.Types.Result.GetResult<Prisma.$RatePerSMSPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RatePerSMSDeleteManyArgs>(args?: Prisma.SelectSubset<T, RatePerSMSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RatePerSMSUpdateManyArgs>(args: Prisma.SelectSubset<T, RatePerSMSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RatePerSMSUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RatePerSMSUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RatePerSMSPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RatePerSMSUpsertArgs>(args: Prisma.SelectSubset<T, RatePerSMSUpsertArgs<ExtArgs>>): Prisma.Prisma__RatePerSMSClient<runtime.Types.Result.GetResult<Prisma.$RatePerSMSPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RatePerSMSCountArgs>(args?: Prisma.Subset<T, RatePerSMSCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RatePerSMSCountAggregateOutputType> : number>;
    aggregate<T extends RatePerSMSAggregateArgs>(args: Prisma.Subset<T, RatePerSMSAggregateArgs>): Prisma.PrismaPromise<GetRatePerSMSAggregateType<T>>;
    groupBy<T extends RatePerSMSGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RatePerSMSGroupByArgs['orderBy'];
    } : {
        orderBy?: RatePerSMSGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RatePerSMSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatePerSMSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RatePerSMSFieldRefs;
}
export interface Prisma__RatePerSMSClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RatePerSMSFieldRefs {
    readonly id: Prisma.FieldRef<"RatePerSMS", 'Int'>;
    readonly ranges: Prisma.FieldRef<"RatePerSMS", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"RatePerSMS", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"RatePerSMS", 'DateTime'>;
}
export type RatePerSMSFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatePerSMSSelect<ExtArgs> | null;
    omit?: Prisma.RatePerSMSOmit<ExtArgs> | null;
    where: Prisma.RatePerSMSWhereUniqueInput;
};
export type RatePerSMSFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatePerSMSSelect<ExtArgs> | null;
    omit?: Prisma.RatePerSMSOmit<ExtArgs> | null;
    where: Prisma.RatePerSMSWhereUniqueInput;
};
export type RatePerSMSFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatePerSMSSelect<ExtArgs> | null;
    omit?: Prisma.RatePerSMSOmit<ExtArgs> | null;
    where?: Prisma.RatePerSMSWhereInput;
    orderBy?: Prisma.RatePerSMSOrderByWithRelationInput | Prisma.RatePerSMSOrderByWithRelationInput[];
    cursor?: Prisma.RatePerSMSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RatePerSMSScalarFieldEnum | Prisma.RatePerSMSScalarFieldEnum[];
};
export type RatePerSMSFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatePerSMSSelect<ExtArgs> | null;
    omit?: Prisma.RatePerSMSOmit<ExtArgs> | null;
    where?: Prisma.RatePerSMSWhereInput;
    orderBy?: Prisma.RatePerSMSOrderByWithRelationInput | Prisma.RatePerSMSOrderByWithRelationInput[];
    cursor?: Prisma.RatePerSMSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RatePerSMSScalarFieldEnum | Prisma.RatePerSMSScalarFieldEnum[];
};
export type RatePerSMSFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatePerSMSSelect<ExtArgs> | null;
    omit?: Prisma.RatePerSMSOmit<ExtArgs> | null;
    where?: Prisma.RatePerSMSWhereInput;
    orderBy?: Prisma.RatePerSMSOrderByWithRelationInput | Prisma.RatePerSMSOrderByWithRelationInput[];
    cursor?: Prisma.RatePerSMSWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RatePerSMSScalarFieldEnum | Prisma.RatePerSMSScalarFieldEnum[];
};
export type RatePerSMSCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatePerSMSSelect<ExtArgs> | null;
    omit?: Prisma.RatePerSMSOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RatePerSMSCreateInput, Prisma.RatePerSMSUncheckedCreateInput>;
};
export type RatePerSMSCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RatePerSMSCreateManyInput | Prisma.RatePerSMSCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RatePerSMSCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatePerSMSSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RatePerSMSOmit<ExtArgs> | null;
    data: Prisma.RatePerSMSCreateManyInput | Prisma.RatePerSMSCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RatePerSMSUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatePerSMSSelect<ExtArgs> | null;
    omit?: Prisma.RatePerSMSOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RatePerSMSUpdateInput, Prisma.RatePerSMSUncheckedUpdateInput>;
    where: Prisma.RatePerSMSWhereUniqueInput;
};
export type RatePerSMSUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RatePerSMSUpdateManyMutationInput, Prisma.RatePerSMSUncheckedUpdateManyInput>;
    where?: Prisma.RatePerSMSWhereInput;
    limit?: number;
};
export type RatePerSMSUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatePerSMSSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RatePerSMSOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RatePerSMSUpdateManyMutationInput, Prisma.RatePerSMSUncheckedUpdateManyInput>;
    where?: Prisma.RatePerSMSWhereInput;
    limit?: number;
};
export type RatePerSMSUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatePerSMSSelect<ExtArgs> | null;
    omit?: Prisma.RatePerSMSOmit<ExtArgs> | null;
    where: Prisma.RatePerSMSWhereUniqueInput;
    create: Prisma.XOR<Prisma.RatePerSMSCreateInput, Prisma.RatePerSMSUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RatePerSMSUpdateInput, Prisma.RatePerSMSUncheckedUpdateInput>;
};
export type RatePerSMSDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatePerSMSSelect<ExtArgs> | null;
    omit?: Prisma.RatePerSMSOmit<ExtArgs> | null;
    where: Prisma.RatePerSMSWhereUniqueInput;
};
export type RatePerSMSDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RatePerSMSWhereInput;
    limit?: number;
};
export type RatePerSMSDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RatePerSMSSelect<ExtArgs> | null;
    omit?: Prisma.RatePerSMSOmit<ExtArgs> | null;
};
export {};
