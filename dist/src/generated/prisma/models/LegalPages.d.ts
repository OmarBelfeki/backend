import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LegalPagesModel = runtime.Types.Result.DefaultSelection<Prisma.$LegalPagesPayload>;
export type AggregateLegalPages = {
    _count: LegalPagesCountAggregateOutputType | null;
    _min: LegalPagesMinAggregateOutputType | null;
    _max: LegalPagesMaxAggregateOutputType | null;
};
export type LegalPagesMinAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LegalPagesMaxAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LegalPagesCountAggregateOutputType = {
    id: number;
    termsOfService: number;
    privacyPolicy: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LegalPagesMinAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LegalPagesMaxAggregateInputType = {
    id?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LegalPagesCountAggregateInputType = {
    id?: true;
    termsOfService?: true;
    privacyPolicy?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LegalPagesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LegalPagesWhereInput;
    orderBy?: Prisma.LegalPagesOrderByWithRelationInput | Prisma.LegalPagesOrderByWithRelationInput[];
    cursor?: Prisma.LegalPagesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LegalPagesCountAggregateInputType;
    _min?: LegalPagesMinAggregateInputType;
    _max?: LegalPagesMaxAggregateInputType;
};
export type GetLegalPagesAggregateType<T extends LegalPagesAggregateArgs> = {
    [P in keyof T & keyof AggregateLegalPages]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLegalPages[P]> : Prisma.GetScalarType<T[P], AggregateLegalPages[P]>;
};
export type LegalPagesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LegalPagesWhereInput;
    orderBy?: Prisma.LegalPagesOrderByWithAggregationInput | Prisma.LegalPagesOrderByWithAggregationInput[];
    by: Prisma.LegalPagesScalarFieldEnum[] | Prisma.LegalPagesScalarFieldEnum;
    having?: Prisma.LegalPagesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LegalPagesCountAggregateInputType | true;
    _min?: LegalPagesMinAggregateInputType;
    _max?: LegalPagesMaxAggregateInputType;
};
export type LegalPagesGroupByOutputType = {
    id: string;
    termsOfService: runtime.JsonValue | null;
    privacyPolicy: runtime.JsonValue | null;
    createdAt: Date;
    updatedAt: Date;
    _count: LegalPagesCountAggregateOutputType | null;
    _min: LegalPagesMinAggregateOutputType | null;
    _max: LegalPagesMaxAggregateOutputType | null;
};
type GetLegalPagesGroupByPayload<T extends LegalPagesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LegalPagesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LegalPagesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LegalPagesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LegalPagesGroupByOutputType[P]>;
}>>;
export type LegalPagesWhereInput = {
    AND?: Prisma.LegalPagesWhereInput | Prisma.LegalPagesWhereInput[];
    OR?: Prisma.LegalPagesWhereInput[];
    NOT?: Prisma.LegalPagesWhereInput | Prisma.LegalPagesWhereInput[];
    id?: Prisma.StringFilter<"LegalPages"> | string;
    termsOfService?: Prisma.JsonNullableFilter<"LegalPages">;
    privacyPolicy?: Prisma.JsonNullableFilter<"LegalPages">;
    createdAt?: Prisma.DateTimeFilter<"LegalPages"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LegalPages"> | Date | string;
};
export type LegalPagesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    termsOfService?: Prisma.SortOrderInput | Prisma.SortOrder;
    privacyPolicy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LegalPagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LegalPagesWhereInput | Prisma.LegalPagesWhereInput[];
    OR?: Prisma.LegalPagesWhereInput[];
    NOT?: Prisma.LegalPagesWhereInput | Prisma.LegalPagesWhereInput[];
    termsOfService?: Prisma.JsonNullableFilter<"LegalPages">;
    privacyPolicy?: Prisma.JsonNullableFilter<"LegalPages">;
    createdAt?: Prisma.DateTimeFilter<"LegalPages"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LegalPages"> | Date | string;
}, "id">;
export type LegalPagesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    termsOfService?: Prisma.SortOrderInput | Prisma.SortOrder;
    privacyPolicy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LegalPagesCountOrderByAggregateInput;
    _max?: Prisma.LegalPagesMaxOrderByAggregateInput;
    _min?: Prisma.LegalPagesMinOrderByAggregateInput;
};
export type LegalPagesScalarWhereWithAggregatesInput = {
    AND?: Prisma.LegalPagesScalarWhereWithAggregatesInput | Prisma.LegalPagesScalarWhereWithAggregatesInput[];
    OR?: Prisma.LegalPagesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LegalPagesScalarWhereWithAggregatesInput | Prisma.LegalPagesScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LegalPages"> | string;
    termsOfService?: Prisma.JsonNullableWithAggregatesFilter<"LegalPages">;
    privacyPolicy?: Prisma.JsonNullableWithAggregatesFilter<"LegalPages">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LegalPages"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"LegalPages"> | Date | string;
};
export type LegalPagesCreateInput = {
    id: string;
    termsOfService?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    privacyPolicy?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LegalPagesUncheckedCreateInput = {
    id: string;
    termsOfService?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    privacyPolicy?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LegalPagesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    termsOfService?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    privacyPolicy?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LegalPagesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    termsOfService?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    privacyPolicy?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LegalPagesCreateManyInput = {
    id: string;
    termsOfService?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    privacyPolicy?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LegalPagesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    termsOfService?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    privacyPolicy?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LegalPagesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    termsOfService?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    privacyPolicy?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LegalPagesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    termsOfService?: Prisma.SortOrder;
    privacyPolicy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LegalPagesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LegalPagesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LegalPagesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    termsOfService?: boolean;
    privacyPolicy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["legalPages"]>;
export type LegalPagesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    termsOfService?: boolean;
    privacyPolicy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["legalPages"]>;
export type LegalPagesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    termsOfService?: boolean;
    privacyPolicy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["legalPages"]>;
export type LegalPagesSelectScalar = {
    id?: boolean;
    termsOfService?: boolean;
    privacyPolicy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LegalPagesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "termsOfService" | "privacyPolicy" | "createdAt" | "updatedAt", ExtArgs["result"]["legalPages"]>;
export type $LegalPagesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LegalPages";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        termsOfService: runtime.JsonValue | null;
        privacyPolicy: runtime.JsonValue | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["legalPages"]>;
    composites: {};
};
export type LegalPagesGetPayload<S extends boolean | null | undefined | LegalPagesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LegalPagesPayload, S>;
export type LegalPagesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LegalPagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LegalPagesCountAggregateInputType | true;
};
export interface LegalPagesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LegalPages'];
        meta: {
            name: 'LegalPages';
        };
    };
    findUnique<T extends LegalPagesFindUniqueArgs>(args: Prisma.SelectSubset<T, LegalPagesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LegalPagesClient<runtime.Types.Result.GetResult<Prisma.$LegalPagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LegalPagesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LegalPagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LegalPagesClient<runtime.Types.Result.GetResult<Prisma.$LegalPagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LegalPagesFindFirstArgs>(args?: Prisma.SelectSubset<T, LegalPagesFindFirstArgs<ExtArgs>>): Prisma.Prisma__LegalPagesClient<runtime.Types.Result.GetResult<Prisma.$LegalPagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LegalPagesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LegalPagesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LegalPagesClient<runtime.Types.Result.GetResult<Prisma.$LegalPagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LegalPagesFindManyArgs>(args?: Prisma.SelectSubset<T, LegalPagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LegalPagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LegalPagesCreateArgs>(args: Prisma.SelectSubset<T, LegalPagesCreateArgs<ExtArgs>>): Prisma.Prisma__LegalPagesClient<runtime.Types.Result.GetResult<Prisma.$LegalPagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LegalPagesCreateManyArgs>(args?: Prisma.SelectSubset<T, LegalPagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LegalPagesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LegalPagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LegalPagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LegalPagesDeleteArgs>(args: Prisma.SelectSubset<T, LegalPagesDeleteArgs<ExtArgs>>): Prisma.Prisma__LegalPagesClient<runtime.Types.Result.GetResult<Prisma.$LegalPagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LegalPagesUpdateArgs>(args: Prisma.SelectSubset<T, LegalPagesUpdateArgs<ExtArgs>>): Prisma.Prisma__LegalPagesClient<runtime.Types.Result.GetResult<Prisma.$LegalPagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LegalPagesDeleteManyArgs>(args?: Prisma.SelectSubset<T, LegalPagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LegalPagesUpdateManyArgs>(args: Prisma.SelectSubset<T, LegalPagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LegalPagesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LegalPagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LegalPagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LegalPagesUpsertArgs>(args: Prisma.SelectSubset<T, LegalPagesUpsertArgs<ExtArgs>>): Prisma.Prisma__LegalPagesClient<runtime.Types.Result.GetResult<Prisma.$LegalPagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LegalPagesCountArgs>(args?: Prisma.Subset<T, LegalPagesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LegalPagesCountAggregateOutputType> : number>;
    aggregate<T extends LegalPagesAggregateArgs>(args: Prisma.Subset<T, LegalPagesAggregateArgs>): Prisma.PrismaPromise<GetLegalPagesAggregateType<T>>;
    groupBy<T extends LegalPagesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LegalPagesGroupByArgs['orderBy'];
    } : {
        orderBy?: LegalPagesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LegalPagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegalPagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LegalPagesFieldRefs;
}
export interface Prisma__LegalPagesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LegalPagesFieldRefs {
    readonly id: Prisma.FieldRef<"LegalPages", 'String'>;
    readonly termsOfService: Prisma.FieldRef<"LegalPages", 'Json'>;
    readonly privacyPolicy: Prisma.FieldRef<"LegalPages", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"LegalPages", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"LegalPages", 'DateTime'>;
}
export type LegalPagesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LegalPagesSelect<ExtArgs> | null;
    omit?: Prisma.LegalPagesOmit<ExtArgs> | null;
    where: Prisma.LegalPagesWhereUniqueInput;
};
export type LegalPagesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LegalPagesSelect<ExtArgs> | null;
    omit?: Prisma.LegalPagesOmit<ExtArgs> | null;
    where: Prisma.LegalPagesWhereUniqueInput;
};
export type LegalPagesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LegalPagesSelect<ExtArgs> | null;
    omit?: Prisma.LegalPagesOmit<ExtArgs> | null;
    where?: Prisma.LegalPagesWhereInput;
    orderBy?: Prisma.LegalPagesOrderByWithRelationInput | Prisma.LegalPagesOrderByWithRelationInput[];
    cursor?: Prisma.LegalPagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LegalPagesScalarFieldEnum | Prisma.LegalPagesScalarFieldEnum[];
};
export type LegalPagesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LegalPagesSelect<ExtArgs> | null;
    omit?: Prisma.LegalPagesOmit<ExtArgs> | null;
    where?: Prisma.LegalPagesWhereInput;
    orderBy?: Prisma.LegalPagesOrderByWithRelationInput | Prisma.LegalPagesOrderByWithRelationInput[];
    cursor?: Prisma.LegalPagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LegalPagesScalarFieldEnum | Prisma.LegalPagesScalarFieldEnum[];
};
export type LegalPagesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LegalPagesSelect<ExtArgs> | null;
    omit?: Prisma.LegalPagesOmit<ExtArgs> | null;
    where?: Prisma.LegalPagesWhereInput;
    orderBy?: Prisma.LegalPagesOrderByWithRelationInput | Prisma.LegalPagesOrderByWithRelationInput[];
    cursor?: Prisma.LegalPagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LegalPagesScalarFieldEnum | Prisma.LegalPagesScalarFieldEnum[];
};
export type LegalPagesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LegalPagesSelect<ExtArgs> | null;
    omit?: Prisma.LegalPagesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LegalPagesCreateInput, Prisma.LegalPagesUncheckedCreateInput>;
};
export type LegalPagesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LegalPagesCreateManyInput | Prisma.LegalPagesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LegalPagesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LegalPagesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LegalPagesOmit<ExtArgs> | null;
    data: Prisma.LegalPagesCreateManyInput | Prisma.LegalPagesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LegalPagesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LegalPagesSelect<ExtArgs> | null;
    omit?: Prisma.LegalPagesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LegalPagesUpdateInput, Prisma.LegalPagesUncheckedUpdateInput>;
    where: Prisma.LegalPagesWhereUniqueInput;
};
export type LegalPagesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LegalPagesUpdateManyMutationInput, Prisma.LegalPagesUncheckedUpdateManyInput>;
    where?: Prisma.LegalPagesWhereInput;
    limit?: number;
};
export type LegalPagesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LegalPagesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LegalPagesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LegalPagesUpdateManyMutationInput, Prisma.LegalPagesUncheckedUpdateManyInput>;
    where?: Prisma.LegalPagesWhereInput;
    limit?: number;
};
export type LegalPagesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LegalPagesSelect<ExtArgs> | null;
    omit?: Prisma.LegalPagesOmit<ExtArgs> | null;
    where: Prisma.LegalPagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.LegalPagesCreateInput, Prisma.LegalPagesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LegalPagesUpdateInput, Prisma.LegalPagesUncheckedUpdateInput>;
};
export type LegalPagesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LegalPagesSelect<ExtArgs> | null;
    omit?: Prisma.LegalPagesOmit<ExtArgs> | null;
    where: Prisma.LegalPagesWhereUniqueInput;
};
export type LegalPagesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LegalPagesWhereInput;
    limit?: number;
};
export type LegalPagesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LegalPagesSelect<ExtArgs> | null;
    omit?: Prisma.LegalPagesOmit<ExtArgs> | null;
};
export {};
