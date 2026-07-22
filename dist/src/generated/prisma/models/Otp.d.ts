import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OtpModel = runtime.Types.Result.DefaultSelection<Prisma.$OtpPayload>;
export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null;
    _min: OtpMinAggregateOutputType | null;
    _max: OtpMaxAggregateOutputType | null;
};
export type OtpMinAggregateOutputType = {
    userId: string | null;
    email: string | null;
    phone: string | null;
    otp: string | null;
};
export type OtpMaxAggregateOutputType = {
    userId: string | null;
    email: string | null;
    phone: string | null;
    otp: string | null;
};
export type OtpCountAggregateOutputType = {
    userId: number;
    email: number;
    phone: number;
    otp: number;
    _all: number;
};
export type OtpMinAggregateInputType = {
    userId?: true;
    email?: true;
    phone?: true;
    otp?: true;
};
export type OtpMaxAggregateInputType = {
    userId?: true;
    email?: true;
    phone?: true;
    otp?: true;
};
export type OtpCountAggregateInputType = {
    userId?: true;
    email?: true;
    phone?: true;
    otp?: true;
    _all?: true;
};
export type OtpAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OtpWhereInput;
    orderBy?: Prisma.OtpOrderByWithRelationInput | Prisma.OtpOrderByWithRelationInput[];
    cursor?: Prisma.OtpWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OtpCountAggregateInputType;
    _min?: OtpMinAggregateInputType;
    _max?: OtpMaxAggregateInputType;
};
export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
    [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOtp[P]> : Prisma.GetScalarType<T[P], AggregateOtp[P]>;
};
export type OtpGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OtpWhereInput;
    orderBy?: Prisma.OtpOrderByWithAggregationInput | Prisma.OtpOrderByWithAggregationInput[];
    by: Prisma.OtpScalarFieldEnum[] | Prisma.OtpScalarFieldEnum;
    having?: Prisma.OtpScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OtpCountAggregateInputType | true;
    _min?: OtpMinAggregateInputType;
    _max?: OtpMaxAggregateInputType;
};
export type OtpGroupByOutputType = {
    userId: string;
    email: string | null;
    phone: string | null;
    otp: string | null;
    _count: OtpCountAggregateOutputType | null;
    _min: OtpMinAggregateOutputType | null;
    _max: OtpMaxAggregateOutputType | null;
};
type GetOtpGroupByPayload<T extends OtpGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OtpGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OtpGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OtpGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OtpGroupByOutputType[P]>;
}>>;
export type OtpWhereInput = {
    AND?: Prisma.OtpWhereInput | Prisma.OtpWhereInput[];
    OR?: Prisma.OtpWhereInput[];
    NOT?: Prisma.OtpWhereInput | Prisma.OtpWhereInput[];
    userId?: Prisma.StringFilter<"Otp"> | string;
    email?: Prisma.StringNullableFilter<"Otp"> | string | null;
    phone?: Prisma.StringNullableFilter<"Otp"> | string | null;
    otp?: Prisma.StringNullableFilter<"Otp"> | string | null;
};
export type OtpOrderByWithRelationInput = {
    userId?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    otp?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type OtpWhereUniqueInput = Prisma.AtLeast<{
    userId?: string;
    AND?: Prisma.OtpWhereInput | Prisma.OtpWhereInput[];
    OR?: Prisma.OtpWhereInput[];
    NOT?: Prisma.OtpWhereInput | Prisma.OtpWhereInput[];
    email?: Prisma.StringNullableFilter<"Otp"> | string | null;
    phone?: Prisma.StringNullableFilter<"Otp"> | string | null;
    otp?: Prisma.StringNullableFilter<"Otp"> | string | null;
}, "userId">;
export type OtpOrderByWithAggregationInput = {
    userId?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    otp?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.OtpCountOrderByAggregateInput;
    _max?: Prisma.OtpMaxOrderByAggregateInput;
    _min?: Prisma.OtpMinOrderByAggregateInput;
};
export type OtpScalarWhereWithAggregatesInput = {
    AND?: Prisma.OtpScalarWhereWithAggregatesInput | Prisma.OtpScalarWhereWithAggregatesInput[];
    OR?: Prisma.OtpScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OtpScalarWhereWithAggregatesInput | Prisma.OtpScalarWhereWithAggregatesInput[];
    userId?: Prisma.StringWithAggregatesFilter<"Otp"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"Otp"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"Otp"> | string | null;
    otp?: Prisma.StringNullableWithAggregatesFilter<"Otp"> | string | null;
};
export type OtpCreateInput = {
    userId: string;
    email?: string | null;
    phone?: string | null;
    otp?: string | null;
};
export type OtpUncheckedCreateInput = {
    userId: string;
    email?: string | null;
    phone?: string | null;
    otp?: string | null;
};
export type OtpUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    otp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OtpUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    otp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OtpCreateManyInput = {
    userId: string;
    email?: string | null;
    phone?: string | null;
    otp?: string | null;
};
export type OtpUpdateManyMutationInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    otp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OtpUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    otp?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OtpCountOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    otp?: Prisma.SortOrder;
};
export type OtpMaxOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    otp?: Prisma.SortOrder;
};
export type OtpMinOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    otp?: Prisma.SortOrder;
};
export type OtpSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    email?: boolean;
    phone?: boolean;
    otp?: boolean;
}, ExtArgs["result"]["otp"]>;
export type OtpSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    email?: boolean;
    phone?: boolean;
    otp?: boolean;
}, ExtArgs["result"]["otp"]>;
export type OtpSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    email?: boolean;
    phone?: boolean;
    otp?: boolean;
}, ExtArgs["result"]["otp"]>;
export type OtpSelectScalar = {
    userId?: boolean;
    email?: boolean;
    phone?: boolean;
    otp?: boolean;
};
export type OtpOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"userId" | "email" | "phone" | "otp", ExtArgs["result"]["otp"]>;
export type $OtpPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Otp";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        userId: string;
        email: string | null;
        phone: string | null;
        otp: string | null;
    }, ExtArgs["result"]["otp"]>;
    composites: {};
};
export type OtpGetPayload<S extends boolean | null | undefined | OtpDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OtpPayload, S>;
export type OtpCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OtpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OtpCountAggregateInputType | true;
};
export interface OtpDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Otp'];
        meta: {
            name: 'Otp';
        };
    };
    findUnique<T extends OtpFindUniqueArgs>(args: Prisma.SelectSubset<T, OtpFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OtpClient<runtime.Types.Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OtpFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OtpFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OtpClient<runtime.Types.Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OtpFindFirstArgs>(args?: Prisma.SelectSubset<T, OtpFindFirstArgs<ExtArgs>>): Prisma.Prisma__OtpClient<runtime.Types.Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OtpFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OtpFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OtpClient<runtime.Types.Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OtpFindManyArgs>(args?: Prisma.SelectSubset<T, OtpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OtpCreateArgs>(args: Prisma.SelectSubset<T, OtpCreateArgs<ExtArgs>>): Prisma.Prisma__OtpClient<runtime.Types.Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OtpCreateManyArgs>(args?: Prisma.SelectSubset<T, OtpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OtpCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OtpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OtpDeleteArgs>(args: Prisma.SelectSubset<T, OtpDeleteArgs<ExtArgs>>): Prisma.Prisma__OtpClient<runtime.Types.Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OtpUpdateArgs>(args: Prisma.SelectSubset<T, OtpUpdateArgs<ExtArgs>>): Prisma.Prisma__OtpClient<runtime.Types.Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OtpDeleteManyArgs>(args?: Prisma.SelectSubset<T, OtpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OtpUpdateManyArgs>(args: Prisma.SelectSubset<T, OtpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OtpUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OtpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OtpUpsertArgs>(args: Prisma.SelectSubset<T, OtpUpsertArgs<ExtArgs>>): Prisma.Prisma__OtpClient<runtime.Types.Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OtpCountArgs>(args?: Prisma.Subset<T, OtpCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OtpCountAggregateOutputType> : number>;
    aggregate<T extends OtpAggregateArgs>(args: Prisma.Subset<T, OtpAggregateArgs>): Prisma.PrismaPromise<GetOtpAggregateType<T>>;
    groupBy<T extends OtpGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OtpGroupByArgs['orderBy'];
    } : {
        orderBy?: OtpGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OtpFieldRefs;
}
export interface Prisma__OtpClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OtpFieldRefs {
    readonly userId: Prisma.FieldRef<"Otp", 'String'>;
    readonly email: Prisma.FieldRef<"Otp", 'String'>;
    readonly phone: Prisma.FieldRef<"Otp", 'String'>;
    readonly otp: Prisma.FieldRef<"Otp", 'String'>;
}
export type OtpFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpSelect<ExtArgs> | null;
    omit?: Prisma.OtpOmit<ExtArgs> | null;
    where: Prisma.OtpWhereUniqueInput;
};
export type OtpFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpSelect<ExtArgs> | null;
    omit?: Prisma.OtpOmit<ExtArgs> | null;
    where: Prisma.OtpWhereUniqueInput;
};
export type OtpFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpSelect<ExtArgs> | null;
    omit?: Prisma.OtpOmit<ExtArgs> | null;
    where?: Prisma.OtpWhereInput;
    orderBy?: Prisma.OtpOrderByWithRelationInput | Prisma.OtpOrderByWithRelationInput[];
    cursor?: Prisma.OtpWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OtpScalarFieldEnum | Prisma.OtpScalarFieldEnum[];
};
export type OtpFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpSelect<ExtArgs> | null;
    omit?: Prisma.OtpOmit<ExtArgs> | null;
    where?: Prisma.OtpWhereInput;
    orderBy?: Prisma.OtpOrderByWithRelationInput | Prisma.OtpOrderByWithRelationInput[];
    cursor?: Prisma.OtpWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OtpScalarFieldEnum | Prisma.OtpScalarFieldEnum[];
};
export type OtpFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpSelect<ExtArgs> | null;
    omit?: Prisma.OtpOmit<ExtArgs> | null;
    where?: Prisma.OtpWhereInput;
    orderBy?: Prisma.OtpOrderByWithRelationInput | Prisma.OtpOrderByWithRelationInput[];
    cursor?: Prisma.OtpWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OtpScalarFieldEnum | Prisma.OtpScalarFieldEnum[];
};
export type OtpCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpSelect<ExtArgs> | null;
    omit?: Prisma.OtpOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OtpCreateInput, Prisma.OtpUncheckedCreateInput>;
};
export type OtpCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OtpCreateManyInput | Prisma.OtpCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OtpCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OtpOmit<ExtArgs> | null;
    data: Prisma.OtpCreateManyInput | Prisma.OtpCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OtpUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpSelect<ExtArgs> | null;
    omit?: Prisma.OtpOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OtpUpdateInput, Prisma.OtpUncheckedUpdateInput>;
    where: Prisma.OtpWhereUniqueInput;
};
export type OtpUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OtpUpdateManyMutationInput, Prisma.OtpUncheckedUpdateManyInput>;
    where?: Prisma.OtpWhereInput;
    limit?: number;
};
export type OtpUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OtpOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OtpUpdateManyMutationInput, Prisma.OtpUncheckedUpdateManyInput>;
    where?: Prisma.OtpWhereInput;
    limit?: number;
};
export type OtpUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpSelect<ExtArgs> | null;
    omit?: Prisma.OtpOmit<ExtArgs> | null;
    where: Prisma.OtpWhereUniqueInput;
    create: Prisma.XOR<Prisma.OtpCreateInput, Prisma.OtpUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OtpUpdateInput, Prisma.OtpUncheckedUpdateInput>;
};
export type OtpDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpSelect<ExtArgs> | null;
    omit?: Prisma.OtpOmit<ExtArgs> | null;
    where: Prisma.OtpWhereUniqueInput;
};
export type OtpDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OtpWhereInput;
    limit?: number;
};
export type OtpDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OtpSelect<ExtArgs> | null;
    omit?: Prisma.OtpOmit<ExtArgs> | null;
};
export {};
