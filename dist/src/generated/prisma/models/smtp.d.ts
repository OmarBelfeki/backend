import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type smtpModel = runtime.Types.Result.DefaultSelection<Prisma.$smtpPayload>;
export type AggregateSmtp = {
    _count: SmtpCountAggregateOutputType | null;
    _avg: SmtpAvgAggregateOutputType | null;
    _sum: SmtpSumAggregateOutputType | null;
    _min: SmtpMinAggregateOutputType | null;
    _max: SmtpMaxAggregateOutputType | null;
};
export type SmtpAvgAggregateOutputType = {
    port: number | null;
};
export type SmtpSumAggregateOutputType = {
    port: number | null;
};
export type SmtpMinAggregateOutputType = {
    id: string | null;
    host: string | null;
    port: number | null;
    encryption: $Enums.EncryptionType | null;
    authMethod: $Enums.AuthMethod | null;
    username: string | null;
    password: string | null;
    senderName: string | null;
    senderEmail: string | null;
    createAt: Date | null;
    updateAt: Date | null;
};
export type SmtpMaxAggregateOutputType = {
    id: string | null;
    host: string | null;
    port: number | null;
    encryption: $Enums.EncryptionType | null;
    authMethod: $Enums.AuthMethod | null;
    username: string | null;
    password: string | null;
    senderName: string | null;
    senderEmail: string | null;
    createAt: Date | null;
    updateAt: Date | null;
};
export type SmtpCountAggregateOutputType = {
    id: number;
    host: number;
    port: number;
    encryption: number;
    authMethod: number;
    username: number;
    password: number;
    senderName: number;
    senderEmail: number;
    createAt: number;
    updateAt: number;
    _all: number;
};
export type SmtpAvgAggregateInputType = {
    port?: true;
};
export type SmtpSumAggregateInputType = {
    port?: true;
};
export type SmtpMinAggregateInputType = {
    id?: true;
    host?: true;
    port?: true;
    encryption?: true;
    authMethod?: true;
    username?: true;
    password?: true;
    senderName?: true;
    senderEmail?: true;
    createAt?: true;
    updateAt?: true;
};
export type SmtpMaxAggregateInputType = {
    id?: true;
    host?: true;
    port?: true;
    encryption?: true;
    authMethod?: true;
    username?: true;
    password?: true;
    senderName?: true;
    senderEmail?: true;
    createAt?: true;
    updateAt?: true;
};
export type SmtpCountAggregateInputType = {
    id?: true;
    host?: true;
    port?: true;
    encryption?: true;
    authMethod?: true;
    username?: true;
    password?: true;
    senderName?: true;
    senderEmail?: true;
    createAt?: true;
    updateAt?: true;
    _all?: true;
};
export type SmtpAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.smtpWhereInput;
    orderBy?: Prisma.smtpOrderByWithRelationInput | Prisma.smtpOrderByWithRelationInput[];
    cursor?: Prisma.smtpWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SmtpCountAggregateInputType;
    _avg?: SmtpAvgAggregateInputType;
    _sum?: SmtpSumAggregateInputType;
    _min?: SmtpMinAggregateInputType;
    _max?: SmtpMaxAggregateInputType;
};
export type GetSmtpAggregateType<T extends SmtpAggregateArgs> = {
    [P in keyof T & keyof AggregateSmtp]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSmtp[P]> : Prisma.GetScalarType<T[P], AggregateSmtp[P]>;
};
export type smtpGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.smtpWhereInput;
    orderBy?: Prisma.smtpOrderByWithAggregationInput | Prisma.smtpOrderByWithAggregationInput[];
    by: Prisma.SmtpScalarFieldEnum[] | Prisma.SmtpScalarFieldEnum;
    having?: Prisma.smtpScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SmtpCountAggregateInputType | true;
    _avg?: SmtpAvgAggregateInputType;
    _sum?: SmtpSumAggregateInputType;
    _min?: SmtpMinAggregateInputType;
    _max?: SmtpMaxAggregateInputType;
};
export type SmtpGroupByOutputType = {
    id: string;
    host: string | null;
    port: number | null;
    encryption: $Enums.EncryptionType | null;
    authMethod: $Enums.AuthMethod | null;
    username: string | null;
    password: string | null;
    senderName: string | null;
    senderEmail: string | null;
    createAt: Date;
    updateAt: Date;
    _count: SmtpCountAggregateOutputType | null;
    _avg: SmtpAvgAggregateOutputType | null;
    _sum: SmtpSumAggregateOutputType | null;
    _min: SmtpMinAggregateOutputType | null;
    _max: SmtpMaxAggregateOutputType | null;
};
type GetSmtpGroupByPayload<T extends smtpGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SmtpGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SmtpGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SmtpGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SmtpGroupByOutputType[P]>;
}>>;
export type smtpWhereInput = {
    AND?: Prisma.smtpWhereInput | Prisma.smtpWhereInput[];
    OR?: Prisma.smtpWhereInput[];
    NOT?: Prisma.smtpWhereInput | Prisma.smtpWhereInput[];
    id?: Prisma.StringFilter<"smtp"> | string;
    host?: Prisma.StringNullableFilter<"smtp"> | string | null;
    port?: Prisma.IntNullableFilter<"smtp"> | number | null;
    encryption?: Prisma.EnumEncryptionTypeNullableFilter<"smtp"> | $Enums.EncryptionType | null;
    authMethod?: Prisma.EnumAuthMethodNullableFilter<"smtp"> | $Enums.AuthMethod | null;
    username?: Prisma.StringNullableFilter<"smtp"> | string | null;
    password?: Prisma.StringNullableFilter<"smtp"> | string | null;
    senderName?: Prisma.StringNullableFilter<"smtp"> | string | null;
    senderEmail?: Prisma.StringNullableFilter<"smtp"> | string | null;
    createAt?: Prisma.DateTimeFilter<"smtp"> | Date | string;
    updateAt?: Prisma.DateTimeFilter<"smtp"> | Date | string;
};
export type smtpOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    host?: Prisma.SortOrderInput | Prisma.SortOrder;
    port?: Prisma.SortOrderInput | Prisma.SortOrder;
    encryption?: Prisma.SortOrderInput | Prisma.SortOrder;
    authMethod?: Prisma.SortOrderInput | Prisma.SortOrder;
    username?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrderInput | Prisma.SortOrder;
    senderName?: Prisma.SortOrderInput | Prisma.SortOrder;
    senderEmail?: Prisma.SortOrderInput | Prisma.SortOrder;
    createAt?: Prisma.SortOrder;
    updateAt?: Prisma.SortOrder;
};
export type smtpWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.smtpWhereInput | Prisma.smtpWhereInput[];
    OR?: Prisma.smtpWhereInput[];
    NOT?: Prisma.smtpWhereInput | Prisma.smtpWhereInput[];
    host?: Prisma.StringNullableFilter<"smtp"> | string | null;
    port?: Prisma.IntNullableFilter<"smtp"> | number | null;
    encryption?: Prisma.EnumEncryptionTypeNullableFilter<"smtp"> | $Enums.EncryptionType | null;
    authMethod?: Prisma.EnumAuthMethodNullableFilter<"smtp"> | $Enums.AuthMethod | null;
    username?: Prisma.StringNullableFilter<"smtp"> | string | null;
    password?: Prisma.StringNullableFilter<"smtp"> | string | null;
    senderName?: Prisma.StringNullableFilter<"smtp"> | string | null;
    senderEmail?: Prisma.StringNullableFilter<"smtp"> | string | null;
    createAt?: Prisma.DateTimeFilter<"smtp"> | Date | string;
    updateAt?: Prisma.DateTimeFilter<"smtp"> | Date | string;
}, "id">;
export type smtpOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    host?: Prisma.SortOrderInput | Prisma.SortOrder;
    port?: Prisma.SortOrderInput | Prisma.SortOrder;
    encryption?: Prisma.SortOrderInput | Prisma.SortOrder;
    authMethod?: Prisma.SortOrderInput | Prisma.SortOrder;
    username?: Prisma.SortOrderInput | Prisma.SortOrder;
    password?: Prisma.SortOrderInput | Prisma.SortOrder;
    senderName?: Prisma.SortOrderInput | Prisma.SortOrder;
    senderEmail?: Prisma.SortOrderInput | Prisma.SortOrder;
    createAt?: Prisma.SortOrder;
    updateAt?: Prisma.SortOrder;
    _count?: Prisma.smtpCountOrderByAggregateInput;
    _avg?: Prisma.smtpAvgOrderByAggregateInput;
    _max?: Prisma.smtpMaxOrderByAggregateInput;
    _min?: Prisma.smtpMinOrderByAggregateInput;
    _sum?: Prisma.smtpSumOrderByAggregateInput;
};
export type smtpScalarWhereWithAggregatesInput = {
    AND?: Prisma.smtpScalarWhereWithAggregatesInput | Prisma.smtpScalarWhereWithAggregatesInput[];
    OR?: Prisma.smtpScalarWhereWithAggregatesInput[];
    NOT?: Prisma.smtpScalarWhereWithAggregatesInput | Prisma.smtpScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"smtp"> | string;
    host?: Prisma.StringNullableWithAggregatesFilter<"smtp"> | string | null;
    port?: Prisma.IntNullableWithAggregatesFilter<"smtp"> | number | null;
    encryption?: Prisma.EnumEncryptionTypeNullableWithAggregatesFilter<"smtp"> | $Enums.EncryptionType | null;
    authMethod?: Prisma.EnumAuthMethodNullableWithAggregatesFilter<"smtp"> | $Enums.AuthMethod | null;
    username?: Prisma.StringNullableWithAggregatesFilter<"smtp"> | string | null;
    password?: Prisma.StringNullableWithAggregatesFilter<"smtp"> | string | null;
    senderName?: Prisma.StringNullableWithAggregatesFilter<"smtp"> | string | null;
    senderEmail?: Prisma.StringNullableWithAggregatesFilter<"smtp"> | string | null;
    createAt?: Prisma.DateTimeWithAggregatesFilter<"smtp"> | Date | string;
    updateAt?: Prisma.DateTimeWithAggregatesFilter<"smtp"> | Date | string;
};
export type smtpCreateInput = {
    id: string;
    host?: string | null;
    port?: number | null;
    encryption?: $Enums.EncryptionType | null;
    authMethod?: $Enums.AuthMethod | null;
    username?: string | null;
    password?: string | null;
    senderName?: string | null;
    senderEmail?: string | null;
    createAt?: Date | string;
    updateAt?: Date | string;
};
export type smtpUncheckedCreateInput = {
    id: string;
    host?: string | null;
    port?: number | null;
    encryption?: $Enums.EncryptionType | null;
    authMethod?: $Enums.AuthMethod | null;
    username?: string | null;
    password?: string | null;
    senderName?: string | null;
    senderEmail?: string | null;
    createAt?: Date | string;
    updateAt?: Date | string;
};
export type smtpUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    host?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    port?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    encryption?: Prisma.NullableEnumEncryptionTypeFieldUpdateOperationsInput | $Enums.EncryptionType | null;
    authMethod?: Prisma.NullableEnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senderName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senderEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type smtpUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    host?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    port?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    encryption?: Prisma.NullableEnumEncryptionTypeFieldUpdateOperationsInput | $Enums.EncryptionType | null;
    authMethod?: Prisma.NullableEnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senderName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senderEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type smtpCreateManyInput = {
    id: string;
    host?: string | null;
    port?: number | null;
    encryption?: $Enums.EncryptionType | null;
    authMethod?: $Enums.AuthMethod | null;
    username?: string | null;
    password?: string | null;
    senderName?: string | null;
    senderEmail?: string | null;
    createAt?: Date | string;
    updateAt?: Date | string;
};
export type smtpUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    host?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    port?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    encryption?: Prisma.NullableEnumEncryptionTypeFieldUpdateOperationsInput | $Enums.EncryptionType | null;
    authMethod?: Prisma.NullableEnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senderName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senderEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type smtpUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    host?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    port?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    encryption?: Prisma.NullableEnumEncryptionTypeFieldUpdateOperationsInput | $Enums.EncryptionType | null;
    authMethod?: Prisma.NullableEnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod | null;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senderName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senderEmail?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updateAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type smtpCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    host?: Prisma.SortOrder;
    port?: Prisma.SortOrder;
    encryption?: Prisma.SortOrder;
    authMethod?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    senderName?: Prisma.SortOrder;
    senderEmail?: Prisma.SortOrder;
    createAt?: Prisma.SortOrder;
    updateAt?: Prisma.SortOrder;
};
export type smtpAvgOrderByAggregateInput = {
    port?: Prisma.SortOrder;
};
export type smtpMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    host?: Prisma.SortOrder;
    port?: Prisma.SortOrder;
    encryption?: Prisma.SortOrder;
    authMethod?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    senderName?: Prisma.SortOrder;
    senderEmail?: Prisma.SortOrder;
    createAt?: Prisma.SortOrder;
    updateAt?: Prisma.SortOrder;
};
export type smtpMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    host?: Prisma.SortOrder;
    port?: Prisma.SortOrder;
    encryption?: Prisma.SortOrder;
    authMethod?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    senderName?: Prisma.SortOrder;
    senderEmail?: Prisma.SortOrder;
    createAt?: Prisma.SortOrder;
    updateAt?: Prisma.SortOrder;
};
export type smtpSumOrderByAggregateInput = {
    port?: Prisma.SortOrder;
};
export type NullableEnumEncryptionTypeFieldUpdateOperationsInput = {
    set?: $Enums.EncryptionType | null;
};
export type NullableEnumAuthMethodFieldUpdateOperationsInput = {
    set?: $Enums.AuthMethod | null;
};
export type smtpSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    host?: boolean;
    port?: boolean;
    encryption?: boolean;
    authMethod?: boolean;
    username?: boolean;
    password?: boolean;
    senderName?: boolean;
    senderEmail?: boolean;
    createAt?: boolean;
    updateAt?: boolean;
}, ExtArgs["result"]["smtp"]>;
export type smtpSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    host?: boolean;
    port?: boolean;
    encryption?: boolean;
    authMethod?: boolean;
    username?: boolean;
    password?: boolean;
    senderName?: boolean;
    senderEmail?: boolean;
    createAt?: boolean;
    updateAt?: boolean;
}, ExtArgs["result"]["smtp"]>;
export type smtpSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    host?: boolean;
    port?: boolean;
    encryption?: boolean;
    authMethod?: boolean;
    username?: boolean;
    password?: boolean;
    senderName?: boolean;
    senderEmail?: boolean;
    createAt?: boolean;
    updateAt?: boolean;
}, ExtArgs["result"]["smtp"]>;
export type smtpSelectScalar = {
    id?: boolean;
    host?: boolean;
    port?: boolean;
    encryption?: boolean;
    authMethod?: boolean;
    username?: boolean;
    password?: boolean;
    senderName?: boolean;
    senderEmail?: boolean;
    createAt?: boolean;
    updateAt?: boolean;
};
export type smtpOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "host" | "port" | "encryption" | "authMethod" | "username" | "password" | "senderName" | "senderEmail" | "createAt" | "updateAt", ExtArgs["result"]["smtp"]>;
export type $smtpPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "smtp";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        host: string | null;
        port: number | null;
        encryption: $Enums.EncryptionType | null;
        authMethod: $Enums.AuthMethod | null;
        username: string | null;
        password: string | null;
        senderName: string | null;
        senderEmail: string | null;
        createAt: Date;
        updateAt: Date;
    }, ExtArgs["result"]["smtp"]>;
    composites: {};
};
export type smtpGetPayload<S extends boolean | null | undefined | smtpDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$smtpPayload, S>;
export type smtpCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<smtpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SmtpCountAggregateInputType | true;
};
export interface smtpDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['smtp'];
        meta: {
            name: 'smtp';
        };
    };
    findUnique<T extends smtpFindUniqueArgs>(args: Prisma.SelectSubset<T, smtpFindUniqueArgs<ExtArgs>>): Prisma.Prisma__smtpClient<runtime.Types.Result.GetResult<Prisma.$smtpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends smtpFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, smtpFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__smtpClient<runtime.Types.Result.GetResult<Prisma.$smtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends smtpFindFirstArgs>(args?: Prisma.SelectSubset<T, smtpFindFirstArgs<ExtArgs>>): Prisma.Prisma__smtpClient<runtime.Types.Result.GetResult<Prisma.$smtpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends smtpFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, smtpFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__smtpClient<runtime.Types.Result.GetResult<Prisma.$smtpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends smtpFindManyArgs>(args?: Prisma.SelectSubset<T, smtpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$smtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends smtpCreateArgs>(args: Prisma.SelectSubset<T, smtpCreateArgs<ExtArgs>>): Prisma.Prisma__smtpClient<runtime.Types.Result.GetResult<Prisma.$smtpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends smtpCreateManyArgs>(args?: Prisma.SelectSubset<T, smtpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends smtpCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, smtpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$smtpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends smtpDeleteArgs>(args: Prisma.SelectSubset<T, smtpDeleteArgs<ExtArgs>>): Prisma.Prisma__smtpClient<runtime.Types.Result.GetResult<Prisma.$smtpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends smtpUpdateArgs>(args: Prisma.SelectSubset<T, smtpUpdateArgs<ExtArgs>>): Prisma.Prisma__smtpClient<runtime.Types.Result.GetResult<Prisma.$smtpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends smtpDeleteManyArgs>(args?: Prisma.SelectSubset<T, smtpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends smtpUpdateManyArgs>(args: Prisma.SelectSubset<T, smtpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends smtpUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, smtpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$smtpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends smtpUpsertArgs>(args: Prisma.SelectSubset<T, smtpUpsertArgs<ExtArgs>>): Prisma.Prisma__smtpClient<runtime.Types.Result.GetResult<Prisma.$smtpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends smtpCountArgs>(args?: Prisma.Subset<T, smtpCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SmtpCountAggregateOutputType> : number>;
    aggregate<T extends SmtpAggregateArgs>(args: Prisma.Subset<T, SmtpAggregateArgs>): Prisma.PrismaPromise<GetSmtpAggregateType<T>>;
    groupBy<T extends smtpGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: smtpGroupByArgs['orderBy'];
    } : {
        orderBy?: smtpGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, smtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSmtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: smtpFieldRefs;
}
export interface Prisma__smtpClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface smtpFieldRefs {
    readonly id: Prisma.FieldRef<"smtp", 'String'>;
    readonly host: Prisma.FieldRef<"smtp", 'String'>;
    readonly port: Prisma.FieldRef<"smtp", 'Int'>;
    readonly encryption: Prisma.FieldRef<"smtp", 'EncryptionType'>;
    readonly authMethod: Prisma.FieldRef<"smtp", 'AuthMethod'>;
    readonly username: Prisma.FieldRef<"smtp", 'String'>;
    readonly password: Prisma.FieldRef<"smtp", 'String'>;
    readonly senderName: Prisma.FieldRef<"smtp", 'String'>;
    readonly senderEmail: Prisma.FieldRef<"smtp", 'String'>;
    readonly createAt: Prisma.FieldRef<"smtp", 'DateTime'>;
    readonly updateAt: Prisma.FieldRef<"smtp", 'DateTime'>;
}
export type smtpFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.smtpSelect<ExtArgs> | null;
    omit?: Prisma.smtpOmit<ExtArgs> | null;
    where: Prisma.smtpWhereUniqueInput;
};
export type smtpFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.smtpSelect<ExtArgs> | null;
    omit?: Prisma.smtpOmit<ExtArgs> | null;
    where: Prisma.smtpWhereUniqueInput;
};
export type smtpFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.smtpSelect<ExtArgs> | null;
    omit?: Prisma.smtpOmit<ExtArgs> | null;
    where?: Prisma.smtpWhereInput;
    orderBy?: Prisma.smtpOrderByWithRelationInput | Prisma.smtpOrderByWithRelationInput[];
    cursor?: Prisma.smtpWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SmtpScalarFieldEnum | Prisma.SmtpScalarFieldEnum[];
};
export type smtpFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.smtpSelect<ExtArgs> | null;
    omit?: Prisma.smtpOmit<ExtArgs> | null;
    where?: Prisma.smtpWhereInput;
    orderBy?: Prisma.smtpOrderByWithRelationInput | Prisma.smtpOrderByWithRelationInput[];
    cursor?: Prisma.smtpWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SmtpScalarFieldEnum | Prisma.SmtpScalarFieldEnum[];
};
export type smtpFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.smtpSelect<ExtArgs> | null;
    omit?: Prisma.smtpOmit<ExtArgs> | null;
    where?: Prisma.smtpWhereInput;
    orderBy?: Prisma.smtpOrderByWithRelationInput | Prisma.smtpOrderByWithRelationInput[];
    cursor?: Prisma.smtpWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SmtpScalarFieldEnum | Prisma.SmtpScalarFieldEnum[];
};
export type smtpCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.smtpSelect<ExtArgs> | null;
    omit?: Prisma.smtpOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.smtpCreateInput, Prisma.smtpUncheckedCreateInput>;
};
export type smtpCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.smtpCreateManyInput | Prisma.smtpCreateManyInput[];
    skipDuplicates?: boolean;
};
export type smtpCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.smtpSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.smtpOmit<ExtArgs> | null;
    data: Prisma.smtpCreateManyInput | Prisma.smtpCreateManyInput[];
    skipDuplicates?: boolean;
};
export type smtpUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.smtpSelect<ExtArgs> | null;
    omit?: Prisma.smtpOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.smtpUpdateInput, Prisma.smtpUncheckedUpdateInput>;
    where: Prisma.smtpWhereUniqueInput;
};
export type smtpUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.smtpUpdateManyMutationInput, Prisma.smtpUncheckedUpdateManyInput>;
    where?: Prisma.smtpWhereInput;
    limit?: number;
};
export type smtpUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.smtpSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.smtpOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.smtpUpdateManyMutationInput, Prisma.smtpUncheckedUpdateManyInput>;
    where?: Prisma.smtpWhereInput;
    limit?: number;
};
export type smtpUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.smtpSelect<ExtArgs> | null;
    omit?: Prisma.smtpOmit<ExtArgs> | null;
    where: Prisma.smtpWhereUniqueInput;
    create: Prisma.XOR<Prisma.smtpCreateInput, Prisma.smtpUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.smtpUpdateInput, Prisma.smtpUncheckedUpdateInput>;
};
export type smtpDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.smtpSelect<ExtArgs> | null;
    omit?: Prisma.smtpOmit<ExtArgs> | null;
    where: Prisma.smtpWhereUniqueInput;
};
export type smtpDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.smtpWhereInput;
    limit?: number;
};
export type smtpDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.smtpSelect<ExtArgs> | null;
    omit?: Prisma.smtpOmit<ExtArgs> | null;
};
export {};
