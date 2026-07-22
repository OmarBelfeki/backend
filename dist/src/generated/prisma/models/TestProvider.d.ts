import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TestProviderModel = runtime.Types.Result.DefaultSelection<Prisma.$TestProviderPayload>;
export type AggregateTestProvider = {
    _count: TestProviderCountAggregateOutputType | null;
    _min: TestProviderMinAggregateOutputType | null;
    _max: TestProviderMaxAggregateOutputType | null;
};
export type TestProviderMinAggregateOutputType = {
    id: string | null;
    sender: string | null;
    type: $Enums.TestProviderType | null;
    msg: string | null;
    apiKey: string | null;
    mobileTest: string | null;
    createAt: Date | null;
    updateAt: Date | null;
};
export type TestProviderMaxAggregateOutputType = {
    id: string | null;
    sender: string | null;
    type: $Enums.TestProviderType | null;
    msg: string | null;
    apiKey: string | null;
    mobileTest: string | null;
    createAt: Date | null;
    updateAt: Date | null;
};
export type TestProviderCountAggregateOutputType = {
    id: number;
    sender: number;
    type: number;
    msg: number;
    apiKey: number;
    mobileTest: number;
    createAt: number;
    updateAt: number;
    _all: number;
};
export type TestProviderMinAggregateInputType = {
    id?: true;
    sender?: true;
    type?: true;
    msg?: true;
    apiKey?: true;
    mobileTest?: true;
    createAt?: true;
    updateAt?: true;
};
export type TestProviderMaxAggregateInputType = {
    id?: true;
    sender?: true;
    type?: true;
    msg?: true;
    apiKey?: true;
    mobileTest?: true;
    createAt?: true;
    updateAt?: true;
};
export type TestProviderCountAggregateInputType = {
    id?: true;
    sender?: true;
    type?: true;
    msg?: true;
    apiKey?: true;
    mobileTest?: true;
    createAt?: true;
    updateAt?: true;
    _all?: true;
};
export type TestProviderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestProviderWhereInput;
    orderBy?: Prisma.TestProviderOrderByWithRelationInput | Prisma.TestProviderOrderByWithRelationInput[];
    cursor?: Prisma.TestProviderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TestProviderCountAggregateInputType;
    _min?: TestProviderMinAggregateInputType;
    _max?: TestProviderMaxAggregateInputType;
};
export type GetTestProviderAggregateType<T extends TestProviderAggregateArgs> = {
    [P in keyof T & keyof AggregateTestProvider]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTestProvider[P]> : Prisma.GetScalarType<T[P], AggregateTestProvider[P]>;
};
export type TestProviderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestProviderWhereInput;
    orderBy?: Prisma.TestProviderOrderByWithAggregationInput | Prisma.TestProviderOrderByWithAggregationInput[];
    by: Prisma.TestProviderScalarFieldEnum[] | Prisma.TestProviderScalarFieldEnum;
    having?: Prisma.TestProviderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TestProviderCountAggregateInputType | true;
    _min?: TestProviderMinAggregateInputType;
    _max?: TestProviderMaxAggregateInputType;
};
export type TestProviderGroupByOutputType = {
    id: string;
    sender: string | null;
    type: $Enums.TestProviderType;
    msg: string | null;
    apiKey: string | null;
    mobileTest: string | null;
    createAt: Date;
    updateAt: Date;
    _count: TestProviderCountAggregateOutputType | null;
    _min: TestProviderMinAggregateOutputType | null;
    _max: TestProviderMaxAggregateOutputType | null;
};
type GetTestProviderGroupByPayload<T extends TestProviderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TestProviderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TestProviderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TestProviderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TestProviderGroupByOutputType[P]>;
}>>;
export type TestProviderWhereInput = {
    AND?: Prisma.TestProviderWhereInput | Prisma.TestProviderWhereInput[];
    OR?: Prisma.TestProviderWhereInput[];
    NOT?: Prisma.TestProviderWhereInput | Prisma.TestProviderWhereInput[];
    id?: Prisma.StringFilter<"TestProvider"> | string;
    sender?: Prisma.StringNullableFilter<"TestProvider"> | string | null;
    type?: Prisma.EnumTestProviderTypeFilter<"TestProvider"> | $Enums.TestProviderType;
    msg?: Prisma.StringNullableFilter<"TestProvider"> | string | null;
    apiKey?: Prisma.StringNullableFilter<"TestProvider"> | string | null;
    mobileTest?: Prisma.StringNullableFilter<"TestProvider"> | string | null;
    createAt?: Prisma.DateTimeFilter<"TestProvider"> | Date | string;
    updateAt?: Prisma.DateTimeFilter<"TestProvider"> | Date | string;
};
export type TestProviderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sender?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    msg?: Prisma.SortOrderInput | Prisma.SortOrder;
    apiKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    mobileTest?: Prisma.SortOrderInput | Prisma.SortOrder;
    createAt?: Prisma.SortOrder;
    updateAt?: Prisma.SortOrder;
};
export type TestProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    type?: $Enums.TestProviderType;
    AND?: Prisma.TestProviderWhereInput | Prisma.TestProviderWhereInput[];
    OR?: Prisma.TestProviderWhereInput[];
    NOT?: Prisma.TestProviderWhereInput | Prisma.TestProviderWhereInput[];
    sender?: Prisma.StringNullableFilter<"TestProvider"> | string | null;
    msg?: Prisma.StringNullableFilter<"TestProvider"> | string | null;
    apiKey?: Prisma.StringNullableFilter<"TestProvider"> | string | null;
    mobileTest?: Prisma.StringNullableFilter<"TestProvider"> | string | null;
    createAt?: Prisma.DateTimeFilter<"TestProvider"> | Date | string;
    updateAt?: Prisma.DateTimeFilter<"TestProvider"> | Date | string;
}, "id" | "type">;
export type TestProviderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sender?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    msg?: Prisma.SortOrderInput | Prisma.SortOrder;
    apiKey?: Prisma.SortOrderInput | Prisma.SortOrder;
    mobileTest?: Prisma.SortOrderInput | Prisma.SortOrder;
    createAt?: Prisma.SortOrder;
    updateAt?: Prisma.SortOrder;
    _count?: Prisma.TestProviderCountOrderByAggregateInput;
    _max?: Prisma.TestProviderMaxOrderByAggregateInput;
    _min?: Prisma.TestProviderMinOrderByAggregateInput;
};
export type TestProviderScalarWhereWithAggregatesInput = {
    AND?: Prisma.TestProviderScalarWhereWithAggregatesInput | Prisma.TestProviderScalarWhereWithAggregatesInput[];
    OR?: Prisma.TestProviderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TestProviderScalarWhereWithAggregatesInput | Prisma.TestProviderScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TestProvider"> | string;
    sender?: Prisma.StringNullableWithAggregatesFilter<"TestProvider"> | string | null;
    type?: Prisma.EnumTestProviderTypeWithAggregatesFilter<"TestProvider"> | $Enums.TestProviderType;
    msg?: Prisma.StringNullableWithAggregatesFilter<"TestProvider"> | string | null;
    apiKey?: Prisma.StringNullableWithAggregatesFilter<"TestProvider"> | string | null;
    mobileTest?: Prisma.StringNullableWithAggregatesFilter<"TestProvider"> | string | null;
    createAt?: Prisma.DateTimeWithAggregatesFilter<"TestProvider"> | Date | string;
    updateAt?: Prisma.DateTimeWithAggregatesFilter<"TestProvider"> | Date | string;
};
export type TestProviderCreateInput = {
    id?: string;
    sender?: string | null;
    type: $Enums.TestProviderType;
    msg?: string | null;
    apiKey?: string | null;
    mobileTest?: string | null;
    createAt?: Date | string;
    updateAt?: Date | string;
};
export type TestProviderUncheckedCreateInput = {
    id?: string;
    sender?: string | null;
    type: $Enums.TestProviderType;
    msg?: string | null;
    apiKey?: string | null;
    mobileTest?: string | null;
    createAt?: Date | string;
    updateAt?: Date | string;
};
export type TestProviderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumTestProviderTypeFieldUpdateOperationsInput | $Enums.TestProviderType;
    msg?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    apiKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobileTest?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestProviderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumTestProviderTypeFieldUpdateOperationsInput | $Enums.TestProviderType;
    msg?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    apiKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobileTest?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestProviderCreateManyInput = {
    id?: string;
    sender?: string | null;
    type: $Enums.TestProviderType;
    msg?: string | null;
    apiKey?: string | null;
    mobileTest?: string | null;
    createAt?: Date | string;
    updateAt?: Date | string;
};
export type TestProviderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumTestProviderTypeFieldUpdateOperationsInput | $Enums.TestProviderType;
    msg?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    apiKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobileTest?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestProviderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sender?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumTestProviderTypeFieldUpdateOperationsInput | $Enums.TestProviderType;
    msg?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    apiKey?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mobileTest?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestProviderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sender?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    msg?: Prisma.SortOrder;
    apiKey?: Prisma.SortOrder;
    mobileTest?: Prisma.SortOrder;
    createAt?: Prisma.SortOrder;
    updateAt?: Prisma.SortOrder;
};
export type TestProviderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sender?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    msg?: Prisma.SortOrder;
    apiKey?: Prisma.SortOrder;
    mobileTest?: Prisma.SortOrder;
    createAt?: Prisma.SortOrder;
    updateAt?: Prisma.SortOrder;
};
export type TestProviderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sender?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    msg?: Prisma.SortOrder;
    apiKey?: Prisma.SortOrder;
    mobileTest?: Prisma.SortOrder;
    createAt?: Prisma.SortOrder;
    updateAt?: Prisma.SortOrder;
};
export type EnumTestProviderTypeFieldUpdateOperationsInput = {
    set?: $Enums.TestProviderType;
};
export type TestProviderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sender?: boolean;
    type?: boolean;
    msg?: boolean;
    apiKey?: boolean;
    mobileTest?: boolean;
    createAt?: boolean;
    updateAt?: boolean;
}, ExtArgs["result"]["testProvider"]>;
export type TestProviderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sender?: boolean;
    type?: boolean;
    msg?: boolean;
    apiKey?: boolean;
    mobileTest?: boolean;
    createAt?: boolean;
    updateAt?: boolean;
}, ExtArgs["result"]["testProvider"]>;
export type TestProviderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sender?: boolean;
    type?: boolean;
    msg?: boolean;
    apiKey?: boolean;
    mobileTest?: boolean;
    createAt?: boolean;
    updateAt?: boolean;
}, ExtArgs["result"]["testProvider"]>;
export type TestProviderSelectScalar = {
    id?: boolean;
    sender?: boolean;
    type?: boolean;
    msg?: boolean;
    apiKey?: boolean;
    mobileTest?: boolean;
    createAt?: boolean;
    updateAt?: boolean;
};
export type TestProviderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sender" | "type" | "msg" | "apiKey" | "mobileTest" | "createAt" | "updateAt", ExtArgs["result"]["testProvider"]>;
export type $TestProviderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TestProvider";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        sender: string | null;
        type: $Enums.TestProviderType;
        msg: string | null;
        apiKey: string | null;
        mobileTest: string | null;
        createAt: Date;
        updateAt: Date;
    }, ExtArgs["result"]["testProvider"]>;
    composites: {};
};
export type TestProviderGetPayload<S extends boolean | null | undefined | TestProviderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TestProviderPayload, S>;
export type TestProviderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TestProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TestProviderCountAggregateInputType | true;
};
export interface TestProviderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TestProvider'];
        meta: {
            name: 'TestProvider';
        };
    };
    findUnique<T extends TestProviderFindUniqueArgs>(args: Prisma.SelectSubset<T, TestProviderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TestProviderClient<runtime.Types.Result.GetResult<Prisma.$TestProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TestProviderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TestProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TestProviderClient<runtime.Types.Result.GetResult<Prisma.$TestProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TestProviderFindFirstArgs>(args?: Prisma.SelectSubset<T, TestProviderFindFirstArgs<ExtArgs>>): Prisma.Prisma__TestProviderClient<runtime.Types.Result.GetResult<Prisma.$TestProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TestProviderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TestProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TestProviderClient<runtime.Types.Result.GetResult<Prisma.$TestProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TestProviderFindManyArgs>(args?: Prisma.SelectSubset<T, TestProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TestProviderCreateArgs>(args: Prisma.SelectSubset<T, TestProviderCreateArgs<ExtArgs>>): Prisma.Prisma__TestProviderClient<runtime.Types.Result.GetResult<Prisma.$TestProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TestProviderCreateManyArgs>(args?: Prisma.SelectSubset<T, TestProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TestProviderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TestProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TestProviderDeleteArgs>(args: Prisma.SelectSubset<T, TestProviderDeleteArgs<ExtArgs>>): Prisma.Prisma__TestProviderClient<runtime.Types.Result.GetResult<Prisma.$TestProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TestProviderUpdateArgs>(args: Prisma.SelectSubset<T, TestProviderUpdateArgs<ExtArgs>>): Prisma.Prisma__TestProviderClient<runtime.Types.Result.GetResult<Prisma.$TestProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TestProviderDeleteManyArgs>(args?: Prisma.SelectSubset<T, TestProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TestProviderUpdateManyArgs>(args: Prisma.SelectSubset<T, TestProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TestProviderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TestProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TestProviderUpsertArgs>(args: Prisma.SelectSubset<T, TestProviderUpsertArgs<ExtArgs>>): Prisma.Prisma__TestProviderClient<runtime.Types.Result.GetResult<Prisma.$TestProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TestProviderCountArgs>(args?: Prisma.Subset<T, TestProviderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TestProviderCountAggregateOutputType> : number>;
    aggregate<T extends TestProviderAggregateArgs>(args: Prisma.Subset<T, TestProviderAggregateArgs>): Prisma.PrismaPromise<GetTestProviderAggregateType<T>>;
    groupBy<T extends TestProviderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TestProviderGroupByArgs['orderBy'];
    } : {
        orderBy?: TestProviderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TestProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TestProviderFieldRefs;
}
export interface Prisma__TestProviderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TestProviderFieldRefs {
    readonly id: Prisma.FieldRef<"TestProvider", 'String'>;
    readonly sender: Prisma.FieldRef<"TestProvider", 'String'>;
    readonly type: Prisma.FieldRef<"TestProvider", 'TestProviderType'>;
    readonly msg: Prisma.FieldRef<"TestProvider", 'String'>;
    readonly apiKey: Prisma.FieldRef<"TestProvider", 'String'>;
    readonly mobileTest: Prisma.FieldRef<"TestProvider", 'String'>;
    readonly createAt: Prisma.FieldRef<"TestProvider", 'DateTime'>;
    readonly updateAt: Prisma.FieldRef<"TestProvider", 'DateTime'>;
}
export type TestProviderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestProviderSelect<ExtArgs> | null;
    omit?: Prisma.TestProviderOmit<ExtArgs> | null;
    where: Prisma.TestProviderWhereUniqueInput;
};
export type TestProviderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestProviderSelect<ExtArgs> | null;
    omit?: Prisma.TestProviderOmit<ExtArgs> | null;
    where: Prisma.TestProviderWhereUniqueInput;
};
export type TestProviderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestProviderSelect<ExtArgs> | null;
    omit?: Prisma.TestProviderOmit<ExtArgs> | null;
    where?: Prisma.TestProviderWhereInput;
    orderBy?: Prisma.TestProviderOrderByWithRelationInput | Prisma.TestProviderOrderByWithRelationInput[];
    cursor?: Prisma.TestProviderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TestProviderScalarFieldEnum | Prisma.TestProviderScalarFieldEnum[];
};
export type TestProviderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestProviderSelect<ExtArgs> | null;
    omit?: Prisma.TestProviderOmit<ExtArgs> | null;
    where?: Prisma.TestProviderWhereInput;
    orderBy?: Prisma.TestProviderOrderByWithRelationInput | Prisma.TestProviderOrderByWithRelationInput[];
    cursor?: Prisma.TestProviderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TestProviderScalarFieldEnum | Prisma.TestProviderScalarFieldEnum[];
};
export type TestProviderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestProviderSelect<ExtArgs> | null;
    omit?: Prisma.TestProviderOmit<ExtArgs> | null;
    where?: Prisma.TestProviderWhereInput;
    orderBy?: Prisma.TestProviderOrderByWithRelationInput | Prisma.TestProviderOrderByWithRelationInput[];
    cursor?: Prisma.TestProviderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TestProviderScalarFieldEnum | Prisma.TestProviderScalarFieldEnum[];
};
export type TestProviderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestProviderSelect<ExtArgs> | null;
    omit?: Prisma.TestProviderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestProviderCreateInput, Prisma.TestProviderUncheckedCreateInput>;
};
export type TestProviderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TestProviderCreateManyInput | Prisma.TestProviderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TestProviderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestProviderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TestProviderOmit<ExtArgs> | null;
    data: Prisma.TestProviderCreateManyInput | Prisma.TestProviderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TestProviderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestProviderSelect<ExtArgs> | null;
    omit?: Prisma.TestProviderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestProviderUpdateInput, Prisma.TestProviderUncheckedUpdateInput>;
    where: Prisma.TestProviderWhereUniqueInput;
};
export type TestProviderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TestProviderUpdateManyMutationInput, Prisma.TestProviderUncheckedUpdateManyInput>;
    where?: Prisma.TestProviderWhereInput;
    limit?: number;
};
export type TestProviderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestProviderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TestProviderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestProviderUpdateManyMutationInput, Prisma.TestProviderUncheckedUpdateManyInput>;
    where?: Prisma.TestProviderWhereInput;
    limit?: number;
};
export type TestProviderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestProviderSelect<ExtArgs> | null;
    omit?: Prisma.TestProviderOmit<ExtArgs> | null;
    where: Prisma.TestProviderWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestProviderCreateInput, Prisma.TestProviderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TestProviderUpdateInput, Prisma.TestProviderUncheckedUpdateInput>;
};
export type TestProviderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestProviderSelect<ExtArgs> | null;
    omit?: Prisma.TestProviderOmit<ExtArgs> | null;
    where: Prisma.TestProviderWhereUniqueInput;
};
export type TestProviderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestProviderWhereInput;
    limit?: number;
};
export type TestProviderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestProviderSelect<ExtArgs> | null;
    omit?: Prisma.TestProviderOmit<ExtArgs> | null;
};
export {};
