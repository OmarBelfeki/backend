import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SettingProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$SettingProfilePayload>;
export type AggregateSettingProfile = {
    _count: SettingProfileCountAggregateOutputType | null;
    _min: SettingProfileMinAggregateOutputType | null;
    _max: SettingProfileMaxAggregateOutputType | null;
};
export type SettingProfileMinAggregateOutputType = {
    userId: string | null;
    username: string | null;
    avatar: string | null;
    bio: string | null;
};
export type SettingProfileMaxAggregateOutputType = {
    userId: string | null;
    username: string | null;
    avatar: string | null;
    bio: string | null;
};
export type SettingProfileCountAggregateOutputType = {
    userId: number;
    username: number;
    avatar: number;
    bio: number;
    urls: number;
    _all: number;
};
export type SettingProfileMinAggregateInputType = {
    userId?: true;
    username?: true;
    avatar?: true;
    bio?: true;
};
export type SettingProfileMaxAggregateInputType = {
    userId?: true;
    username?: true;
    avatar?: true;
    bio?: true;
};
export type SettingProfileCountAggregateInputType = {
    userId?: true;
    username?: true;
    avatar?: true;
    bio?: true;
    urls?: true;
    _all?: true;
};
export type SettingProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SettingProfileWhereInput;
    orderBy?: Prisma.SettingProfileOrderByWithRelationInput | Prisma.SettingProfileOrderByWithRelationInput[];
    cursor?: Prisma.SettingProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SettingProfileCountAggregateInputType;
    _min?: SettingProfileMinAggregateInputType;
    _max?: SettingProfileMaxAggregateInputType;
};
export type GetSettingProfileAggregateType<T extends SettingProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateSettingProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSettingProfile[P]> : Prisma.GetScalarType<T[P], AggregateSettingProfile[P]>;
};
export type SettingProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SettingProfileWhereInput;
    orderBy?: Prisma.SettingProfileOrderByWithAggregationInput | Prisma.SettingProfileOrderByWithAggregationInput[];
    by: Prisma.SettingProfileScalarFieldEnum[] | Prisma.SettingProfileScalarFieldEnum;
    having?: Prisma.SettingProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SettingProfileCountAggregateInputType | true;
    _min?: SettingProfileMinAggregateInputType;
    _max?: SettingProfileMaxAggregateInputType;
};
export type SettingProfileGroupByOutputType = {
    userId: string;
    username: string;
    avatar: string;
    bio: string;
    urls: string[];
    _count: SettingProfileCountAggregateOutputType | null;
    _min: SettingProfileMinAggregateOutputType | null;
    _max: SettingProfileMaxAggregateOutputType | null;
};
type GetSettingProfileGroupByPayload<T extends SettingProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SettingProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SettingProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SettingProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SettingProfileGroupByOutputType[P]>;
}>>;
export type SettingProfileWhereInput = {
    AND?: Prisma.SettingProfileWhereInput | Prisma.SettingProfileWhereInput[];
    OR?: Prisma.SettingProfileWhereInput[];
    NOT?: Prisma.SettingProfileWhereInput | Prisma.SettingProfileWhereInput[];
    userId?: Prisma.StringFilter<"SettingProfile"> | string;
    username?: Prisma.StringFilter<"SettingProfile"> | string;
    avatar?: Prisma.StringFilter<"SettingProfile"> | string;
    bio?: Prisma.StringFilter<"SettingProfile"> | string;
    urls?: Prisma.StringNullableListFilter<"SettingProfile">;
};
export type SettingProfileOrderByWithRelationInput = {
    userId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    avatar?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    urls?: Prisma.SortOrder;
};
export type SettingProfileWhereUniqueInput = Prisma.AtLeast<{
    userId?: string;
    AND?: Prisma.SettingProfileWhereInput | Prisma.SettingProfileWhereInput[];
    OR?: Prisma.SettingProfileWhereInput[];
    NOT?: Prisma.SettingProfileWhereInput | Prisma.SettingProfileWhereInput[];
    username?: Prisma.StringFilter<"SettingProfile"> | string;
    avatar?: Prisma.StringFilter<"SettingProfile"> | string;
    bio?: Prisma.StringFilter<"SettingProfile"> | string;
    urls?: Prisma.StringNullableListFilter<"SettingProfile">;
}, "userId">;
export type SettingProfileOrderByWithAggregationInput = {
    userId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    avatar?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    urls?: Prisma.SortOrder;
    _count?: Prisma.SettingProfileCountOrderByAggregateInput;
    _max?: Prisma.SettingProfileMaxOrderByAggregateInput;
    _min?: Prisma.SettingProfileMinOrderByAggregateInput;
};
export type SettingProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.SettingProfileScalarWhereWithAggregatesInput | Prisma.SettingProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.SettingProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SettingProfileScalarWhereWithAggregatesInput | Prisma.SettingProfileScalarWhereWithAggregatesInput[];
    userId?: Prisma.StringWithAggregatesFilter<"SettingProfile"> | string;
    username?: Prisma.StringWithAggregatesFilter<"SettingProfile"> | string;
    avatar?: Prisma.StringWithAggregatesFilter<"SettingProfile"> | string;
    bio?: Prisma.StringWithAggregatesFilter<"SettingProfile"> | string;
    urls?: Prisma.StringNullableListFilter<"SettingProfile">;
};
export type SettingProfileCreateInput = {
    userId: string;
    username: string;
    avatar: string;
    bio: string;
    urls?: Prisma.SettingProfileCreateurlsInput | string[];
};
export type SettingProfileUncheckedCreateInput = {
    userId: string;
    username: string;
    avatar: string;
    bio: string;
    urls?: Prisma.SettingProfileCreateurlsInput | string[];
};
export type SettingProfileUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    urls?: Prisma.SettingProfileUpdateurlsInput | string[];
};
export type SettingProfileUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    urls?: Prisma.SettingProfileUpdateurlsInput | string[];
};
export type SettingProfileCreateManyInput = {
    userId: string;
    username: string;
    avatar: string;
    bio: string;
    urls?: Prisma.SettingProfileCreateurlsInput | string[];
};
export type SettingProfileUpdateManyMutationInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    urls?: Prisma.SettingProfileUpdateurlsInput | string[];
};
export type SettingProfileUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    urls?: Prisma.SettingProfileUpdateurlsInput | string[];
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type SettingProfileCountOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    avatar?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    urls?: Prisma.SortOrder;
};
export type SettingProfileMaxOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    avatar?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
};
export type SettingProfileMinOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    avatar?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
};
export type SettingProfileCreateurlsInput = {
    set: string[];
};
export type SettingProfileUpdateurlsInput = {
    set?: string[];
    push?: string | string[];
};
export type SettingProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    username?: boolean;
    avatar?: boolean;
    bio?: boolean;
    urls?: boolean;
}, ExtArgs["result"]["settingProfile"]>;
export type SettingProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    username?: boolean;
    avatar?: boolean;
    bio?: boolean;
    urls?: boolean;
}, ExtArgs["result"]["settingProfile"]>;
export type SettingProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    username?: boolean;
    avatar?: boolean;
    bio?: boolean;
    urls?: boolean;
}, ExtArgs["result"]["settingProfile"]>;
export type SettingProfileSelectScalar = {
    userId?: boolean;
    username?: boolean;
    avatar?: boolean;
    bio?: boolean;
    urls?: boolean;
};
export type SettingProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"userId" | "username" | "avatar" | "bio" | "urls", ExtArgs["result"]["settingProfile"]>;
export type $SettingProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SettingProfile";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        userId: string;
        username: string;
        avatar: string;
        bio: string;
        urls: string[];
    }, ExtArgs["result"]["settingProfile"]>;
    composites: {};
};
export type SettingProfileGetPayload<S extends boolean | null | undefined | SettingProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SettingProfilePayload, S>;
export type SettingProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SettingProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SettingProfileCountAggregateInputType | true;
};
export interface SettingProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SettingProfile'];
        meta: {
            name: 'SettingProfile';
        };
    };
    findUnique<T extends SettingProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, SettingProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SettingProfileClient<runtime.Types.Result.GetResult<Prisma.$SettingProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SettingProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SettingProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SettingProfileClient<runtime.Types.Result.GetResult<Prisma.$SettingProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SettingProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, SettingProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__SettingProfileClient<runtime.Types.Result.GetResult<Prisma.$SettingProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SettingProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SettingProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SettingProfileClient<runtime.Types.Result.GetResult<Prisma.$SettingProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SettingProfileFindManyArgs>(args?: Prisma.SelectSubset<T, SettingProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SettingProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SettingProfileCreateArgs>(args: Prisma.SelectSubset<T, SettingProfileCreateArgs<ExtArgs>>): Prisma.Prisma__SettingProfileClient<runtime.Types.Result.GetResult<Prisma.$SettingProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SettingProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, SettingProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SettingProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SettingProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SettingProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SettingProfileDeleteArgs>(args: Prisma.SelectSubset<T, SettingProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__SettingProfileClient<runtime.Types.Result.GetResult<Prisma.$SettingProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SettingProfileUpdateArgs>(args: Prisma.SelectSubset<T, SettingProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__SettingProfileClient<runtime.Types.Result.GetResult<Prisma.$SettingProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SettingProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, SettingProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SettingProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, SettingProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SettingProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SettingProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SettingProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SettingProfileUpsertArgs>(args: Prisma.SelectSubset<T, SettingProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__SettingProfileClient<runtime.Types.Result.GetResult<Prisma.$SettingProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SettingProfileCountArgs>(args?: Prisma.Subset<T, SettingProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SettingProfileCountAggregateOutputType> : number>;
    aggregate<T extends SettingProfileAggregateArgs>(args: Prisma.Subset<T, SettingProfileAggregateArgs>): Prisma.PrismaPromise<GetSettingProfileAggregateType<T>>;
    groupBy<T extends SettingProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SettingProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: SettingProfileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SettingProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SettingProfileFieldRefs;
}
export interface Prisma__SettingProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SettingProfileFieldRefs {
    readonly userId: Prisma.FieldRef<"SettingProfile", 'String'>;
    readonly username: Prisma.FieldRef<"SettingProfile", 'String'>;
    readonly avatar: Prisma.FieldRef<"SettingProfile", 'String'>;
    readonly bio: Prisma.FieldRef<"SettingProfile", 'String'>;
    readonly urls: Prisma.FieldRef<"SettingProfile", 'String[]'>;
}
export type SettingProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettingProfileSelect<ExtArgs> | null;
    omit?: Prisma.SettingProfileOmit<ExtArgs> | null;
    where: Prisma.SettingProfileWhereUniqueInput;
};
export type SettingProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettingProfileSelect<ExtArgs> | null;
    omit?: Prisma.SettingProfileOmit<ExtArgs> | null;
    where: Prisma.SettingProfileWhereUniqueInput;
};
export type SettingProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettingProfileSelect<ExtArgs> | null;
    omit?: Prisma.SettingProfileOmit<ExtArgs> | null;
    where?: Prisma.SettingProfileWhereInput;
    orderBy?: Prisma.SettingProfileOrderByWithRelationInput | Prisma.SettingProfileOrderByWithRelationInput[];
    cursor?: Prisma.SettingProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SettingProfileScalarFieldEnum | Prisma.SettingProfileScalarFieldEnum[];
};
export type SettingProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettingProfileSelect<ExtArgs> | null;
    omit?: Prisma.SettingProfileOmit<ExtArgs> | null;
    where?: Prisma.SettingProfileWhereInput;
    orderBy?: Prisma.SettingProfileOrderByWithRelationInput | Prisma.SettingProfileOrderByWithRelationInput[];
    cursor?: Prisma.SettingProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SettingProfileScalarFieldEnum | Prisma.SettingProfileScalarFieldEnum[];
};
export type SettingProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettingProfileSelect<ExtArgs> | null;
    omit?: Prisma.SettingProfileOmit<ExtArgs> | null;
    where?: Prisma.SettingProfileWhereInput;
    orderBy?: Prisma.SettingProfileOrderByWithRelationInput | Prisma.SettingProfileOrderByWithRelationInput[];
    cursor?: Prisma.SettingProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SettingProfileScalarFieldEnum | Prisma.SettingProfileScalarFieldEnum[];
};
export type SettingProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettingProfileSelect<ExtArgs> | null;
    omit?: Prisma.SettingProfileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SettingProfileCreateInput, Prisma.SettingProfileUncheckedCreateInput>;
};
export type SettingProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SettingProfileCreateManyInput | Prisma.SettingProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SettingProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettingProfileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SettingProfileOmit<ExtArgs> | null;
    data: Prisma.SettingProfileCreateManyInput | Prisma.SettingProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SettingProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettingProfileSelect<ExtArgs> | null;
    omit?: Prisma.SettingProfileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SettingProfileUpdateInput, Prisma.SettingProfileUncheckedUpdateInput>;
    where: Prisma.SettingProfileWhereUniqueInput;
};
export type SettingProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SettingProfileUpdateManyMutationInput, Prisma.SettingProfileUncheckedUpdateManyInput>;
    where?: Prisma.SettingProfileWhereInput;
    limit?: number;
};
export type SettingProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettingProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SettingProfileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SettingProfileUpdateManyMutationInput, Prisma.SettingProfileUncheckedUpdateManyInput>;
    where?: Prisma.SettingProfileWhereInput;
    limit?: number;
};
export type SettingProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettingProfileSelect<ExtArgs> | null;
    omit?: Prisma.SettingProfileOmit<ExtArgs> | null;
    where: Prisma.SettingProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.SettingProfileCreateInput, Prisma.SettingProfileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SettingProfileUpdateInput, Prisma.SettingProfileUncheckedUpdateInput>;
};
export type SettingProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettingProfileSelect<ExtArgs> | null;
    omit?: Prisma.SettingProfileOmit<ExtArgs> | null;
    where: Prisma.SettingProfileWhereUniqueInput;
};
export type SettingProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SettingProfileWhereInput;
    limit?: number;
};
export type SettingProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SettingProfileSelect<ExtArgs> | null;
    omit?: Prisma.SettingProfileOmit<ExtArgs> | null;
};
export {};
