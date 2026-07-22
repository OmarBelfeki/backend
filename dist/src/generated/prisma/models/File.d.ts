import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type FileModel = runtime.Types.Result.DefaultSelection<Prisma.$FilePayload>;
export type AggregateFile = {
    _count: FileCountAggregateOutputType | null;
    _min: FileMinAggregateOutputType | null;
    _max: FileMaxAggregateOutputType | null;
};
export type FileMinAggregateOutputType = {
    id: string | null;
    filename: string | null;
    path: string | null;
    mimetype: string | null;
    createdAt: Date | null;
    contactId: string | null;
};
export type FileMaxAggregateOutputType = {
    id: string | null;
    filename: string | null;
    path: string | null;
    mimetype: string | null;
    createdAt: Date | null;
    contactId: string | null;
};
export type FileCountAggregateOutputType = {
    id: number;
    filename: number;
    path: number;
    mimetype: number;
    createdAt: number;
    contactId: number;
    _all: number;
};
export type FileMinAggregateInputType = {
    id?: true;
    filename?: true;
    path?: true;
    mimetype?: true;
    createdAt?: true;
    contactId?: true;
};
export type FileMaxAggregateInputType = {
    id?: true;
    filename?: true;
    path?: true;
    mimetype?: true;
    createdAt?: true;
    contactId?: true;
};
export type FileCountAggregateInputType = {
    id?: true;
    filename?: true;
    path?: true;
    mimetype?: true;
    createdAt?: true;
    contactId?: true;
    _all?: true;
};
export type FileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FileWhereInput;
    orderBy?: Prisma.FileOrderByWithRelationInput | Prisma.FileOrderByWithRelationInput[];
    cursor?: Prisma.FileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FileCountAggregateInputType;
    _min?: FileMinAggregateInputType;
    _max?: FileMaxAggregateInputType;
};
export type GetFileAggregateType<T extends FileAggregateArgs> = {
    [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFile[P]> : Prisma.GetScalarType<T[P], AggregateFile[P]>;
};
export type FileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FileWhereInput;
    orderBy?: Prisma.FileOrderByWithAggregationInput | Prisma.FileOrderByWithAggregationInput[];
    by: Prisma.FileScalarFieldEnum[] | Prisma.FileScalarFieldEnum;
    having?: Prisma.FileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FileCountAggregateInputType | true;
    _min?: FileMinAggregateInputType;
    _max?: FileMaxAggregateInputType;
};
export type FileGroupByOutputType = {
    id: string;
    filename: string;
    path: string;
    mimetype: string;
    createdAt: Date;
    contactId: string | null;
    _count: FileCountAggregateOutputType | null;
    _min: FileMinAggregateOutputType | null;
    _max: FileMaxAggregateOutputType | null;
};
type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FileGroupByOutputType[P]>;
}>>;
export type FileWhereInput = {
    AND?: Prisma.FileWhereInput | Prisma.FileWhereInput[];
    OR?: Prisma.FileWhereInput[];
    NOT?: Prisma.FileWhereInput | Prisma.FileWhereInput[];
    id?: Prisma.StringFilter<"File"> | string;
    filename?: Prisma.StringFilter<"File"> | string;
    path?: Prisma.StringFilter<"File"> | string;
    mimetype?: Prisma.StringFilter<"File"> | string;
    createdAt?: Prisma.DateTimeFilter<"File"> | Date | string;
    contactId?: Prisma.StringNullableFilter<"File"> | string | null;
    contact?: Prisma.XOR<Prisma.ContactNullableScalarRelationFilter, Prisma.ContactWhereInput> | null;
};
export type FileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    mimetype?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    contactId?: Prisma.SortOrderInput | Prisma.SortOrder;
    contact?: Prisma.ContactOrderByWithRelationInput;
};
export type FileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.FileWhereInput | Prisma.FileWhereInput[];
    OR?: Prisma.FileWhereInput[];
    NOT?: Prisma.FileWhereInput | Prisma.FileWhereInput[];
    filename?: Prisma.StringFilter<"File"> | string;
    path?: Prisma.StringFilter<"File"> | string;
    mimetype?: Prisma.StringFilter<"File"> | string;
    createdAt?: Prisma.DateTimeFilter<"File"> | Date | string;
    contactId?: Prisma.StringNullableFilter<"File"> | string | null;
    contact?: Prisma.XOR<Prisma.ContactNullableScalarRelationFilter, Prisma.ContactWhereInput> | null;
}, "id">;
export type FileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    mimetype?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    contactId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.FileCountOrderByAggregateInput;
    _max?: Prisma.FileMaxOrderByAggregateInput;
    _min?: Prisma.FileMinOrderByAggregateInput;
};
export type FileScalarWhereWithAggregatesInput = {
    AND?: Prisma.FileScalarWhereWithAggregatesInput | Prisma.FileScalarWhereWithAggregatesInput[];
    OR?: Prisma.FileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FileScalarWhereWithAggregatesInput | Prisma.FileScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"File"> | string;
    filename?: Prisma.StringWithAggregatesFilter<"File"> | string;
    path?: Prisma.StringWithAggregatesFilter<"File"> | string;
    mimetype?: Prisma.StringWithAggregatesFilter<"File"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"File"> | Date | string;
    contactId?: Prisma.StringNullableWithAggregatesFilter<"File"> | string | null;
};
export type FileCreateInput = {
    id?: string;
    filename: string;
    path: string;
    mimetype: string;
    createdAt?: Date | string;
    contact?: Prisma.ContactCreateNestedOneWithoutFilesInput;
};
export type FileUncheckedCreateInput = {
    id?: string;
    filename: string;
    path: string;
    mimetype: string;
    createdAt?: Date | string;
    contactId?: string | null;
};
export type FileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    mimetype?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contact?: Prisma.ContactUpdateOneWithoutFilesNestedInput;
};
export type FileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    mimetype?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contactId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type FileCreateManyInput = {
    id?: string;
    filename: string;
    path: string;
    mimetype: string;
    createdAt?: Date | string;
    contactId?: string | null;
};
export type FileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    mimetype?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    mimetype?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contactId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type FileListRelationFilter = {
    every?: Prisma.FileWhereInput;
    some?: Prisma.FileWhereInput;
    none?: Prisma.FileWhereInput;
};
export type FileOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    mimetype?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    contactId?: Prisma.SortOrder;
};
export type FileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    mimetype?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    contactId?: Prisma.SortOrder;
};
export type FileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    mimetype?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    contactId?: Prisma.SortOrder;
};
export type FileCreateNestedManyWithoutContactInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutContactInput, Prisma.FileUncheckedCreateWithoutContactInput> | Prisma.FileCreateWithoutContactInput[] | Prisma.FileUncheckedCreateWithoutContactInput[];
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutContactInput | Prisma.FileCreateOrConnectWithoutContactInput[];
    createMany?: Prisma.FileCreateManyContactInputEnvelope;
    connect?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
};
export type FileUncheckedCreateNestedManyWithoutContactInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutContactInput, Prisma.FileUncheckedCreateWithoutContactInput> | Prisma.FileCreateWithoutContactInput[] | Prisma.FileUncheckedCreateWithoutContactInput[];
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutContactInput | Prisma.FileCreateOrConnectWithoutContactInput[];
    createMany?: Prisma.FileCreateManyContactInputEnvelope;
    connect?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
};
export type FileUpdateManyWithoutContactNestedInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutContactInput, Prisma.FileUncheckedCreateWithoutContactInput> | Prisma.FileCreateWithoutContactInput[] | Prisma.FileUncheckedCreateWithoutContactInput[];
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutContactInput | Prisma.FileCreateOrConnectWithoutContactInput[];
    upsert?: Prisma.FileUpsertWithWhereUniqueWithoutContactInput | Prisma.FileUpsertWithWhereUniqueWithoutContactInput[];
    createMany?: Prisma.FileCreateManyContactInputEnvelope;
    set?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    disconnect?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    delete?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    connect?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    update?: Prisma.FileUpdateWithWhereUniqueWithoutContactInput | Prisma.FileUpdateWithWhereUniqueWithoutContactInput[];
    updateMany?: Prisma.FileUpdateManyWithWhereWithoutContactInput | Prisma.FileUpdateManyWithWhereWithoutContactInput[];
    deleteMany?: Prisma.FileScalarWhereInput | Prisma.FileScalarWhereInput[];
};
export type FileUncheckedUpdateManyWithoutContactNestedInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutContactInput, Prisma.FileUncheckedCreateWithoutContactInput> | Prisma.FileCreateWithoutContactInput[] | Prisma.FileUncheckedCreateWithoutContactInput[];
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutContactInput | Prisma.FileCreateOrConnectWithoutContactInput[];
    upsert?: Prisma.FileUpsertWithWhereUniqueWithoutContactInput | Prisma.FileUpsertWithWhereUniqueWithoutContactInput[];
    createMany?: Prisma.FileCreateManyContactInputEnvelope;
    set?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    disconnect?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    delete?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    connect?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    update?: Prisma.FileUpdateWithWhereUniqueWithoutContactInput | Prisma.FileUpdateWithWhereUniqueWithoutContactInput[];
    updateMany?: Prisma.FileUpdateManyWithWhereWithoutContactInput | Prisma.FileUpdateManyWithWhereWithoutContactInput[];
    deleteMany?: Prisma.FileScalarWhereInput | Prisma.FileScalarWhereInput[];
};
export type FileCreateWithoutContactInput = {
    id?: string;
    filename: string;
    path: string;
    mimetype: string;
    createdAt?: Date | string;
};
export type FileUncheckedCreateWithoutContactInput = {
    id?: string;
    filename: string;
    path: string;
    mimetype: string;
    createdAt?: Date | string;
};
export type FileCreateOrConnectWithoutContactInput = {
    where: Prisma.FileWhereUniqueInput;
    create: Prisma.XOR<Prisma.FileCreateWithoutContactInput, Prisma.FileUncheckedCreateWithoutContactInput>;
};
export type FileCreateManyContactInputEnvelope = {
    data: Prisma.FileCreateManyContactInput | Prisma.FileCreateManyContactInput[];
    skipDuplicates?: boolean;
};
export type FileUpsertWithWhereUniqueWithoutContactInput = {
    where: Prisma.FileWhereUniqueInput;
    update: Prisma.XOR<Prisma.FileUpdateWithoutContactInput, Prisma.FileUncheckedUpdateWithoutContactInput>;
    create: Prisma.XOR<Prisma.FileCreateWithoutContactInput, Prisma.FileUncheckedCreateWithoutContactInput>;
};
export type FileUpdateWithWhereUniqueWithoutContactInput = {
    where: Prisma.FileWhereUniqueInput;
    data: Prisma.XOR<Prisma.FileUpdateWithoutContactInput, Prisma.FileUncheckedUpdateWithoutContactInput>;
};
export type FileUpdateManyWithWhereWithoutContactInput = {
    where: Prisma.FileScalarWhereInput;
    data: Prisma.XOR<Prisma.FileUpdateManyMutationInput, Prisma.FileUncheckedUpdateManyWithoutContactInput>;
};
export type FileScalarWhereInput = {
    AND?: Prisma.FileScalarWhereInput | Prisma.FileScalarWhereInput[];
    OR?: Prisma.FileScalarWhereInput[];
    NOT?: Prisma.FileScalarWhereInput | Prisma.FileScalarWhereInput[];
    id?: Prisma.StringFilter<"File"> | string;
    filename?: Prisma.StringFilter<"File"> | string;
    path?: Prisma.StringFilter<"File"> | string;
    mimetype?: Prisma.StringFilter<"File"> | string;
    createdAt?: Prisma.DateTimeFilter<"File"> | Date | string;
    contactId?: Prisma.StringNullableFilter<"File"> | string | null;
};
export type FileCreateManyContactInput = {
    id?: string;
    filename: string;
    path: string;
    mimetype: string;
    createdAt?: Date | string;
};
export type FileUpdateWithoutContactInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    mimetype?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FileUncheckedUpdateWithoutContactInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    mimetype?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FileUncheckedUpdateManyWithoutContactInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    mimetype?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    filename?: boolean;
    path?: boolean;
    mimetype?: boolean;
    createdAt?: boolean;
    contactId?: boolean;
    contact?: boolean | Prisma.File$contactArgs<ExtArgs>;
}, ExtArgs["result"]["file"]>;
export type FileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    filename?: boolean;
    path?: boolean;
    mimetype?: boolean;
    createdAt?: boolean;
    contactId?: boolean;
    contact?: boolean | Prisma.File$contactArgs<ExtArgs>;
}, ExtArgs["result"]["file"]>;
export type FileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    filename?: boolean;
    path?: boolean;
    mimetype?: boolean;
    createdAt?: boolean;
    contactId?: boolean;
    contact?: boolean | Prisma.File$contactArgs<ExtArgs>;
}, ExtArgs["result"]["file"]>;
export type FileSelectScalar = {
    id?: boolean;
    filename?: boolean;
    path?: boolean;
    mimetype?: boolean;
    createdAt?: boolean;
    contactId?: boolean;
};
export type FileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "filename" | "path" | "mimetype" | "createdAt" | "contactId", ExtArgs["result"]["file"]>;
export type FileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contact?: boolean | Prisma.File$contactArgs<ExtArgs>;
};
export type FileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contact?: boolean | Prisma.File$contactArgs<ExtArgs>;
};
export type FileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contact?: boolean | Prisma.File$contactArgs<ExtArgs>;
};
export type $FilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "File";
    objects: {
        contact: Prisma.$ContactPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        filename: string;
        path: string;
        mimetype: string;
        createdAt: Date;
        contactId: string | null;
    }, ExtArgs["result"]["file"]>;
    composites: {};
};
export type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FilePayload, S>;
export type FileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FileCountAggregateInputType | true;
};
export interface FileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['File'];
        meta: {
            name: 'File';
        };
    };
    findUnique<T extends FileFindUniqueArgs>(args: Prisma.SelectSubset<T, FileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FileFindFirstArgs>(args?: Prisma.SelectSubset<T, FileFindFirstArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FileFindManyArgs>(args?: Prisma.SelectSubset<T, FileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FileCreateArgs>(args: Prisma.SelectSubset<T, FileCreateArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FileCreateManyArgs>(args?: Prisma.SelectSubset<T, FileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FileDeleteArgs>(args: Prisma.SelectSubset<T, FileDeleteArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FileUpdateArgs>(args: Prisma.SelectSubset<T, FileUpdateArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FileDeleteManyArgs>(args?: Prisma.SelectSubset<T, FileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FileUpdateManyArgs>(args: Prisma.SelectSubset<T, FileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FileUpsertArgs>(args: Prisma.SelectSubset<T, FileUpsertArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FileCountArgs>(args?: Prisma.Subset<T, FileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FileCountAggregateOutputType> : number>;
    aggregate<T extends FileAggregateArgs>(args: Prisma.Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>;
    groupBy<T extends FileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FileGroupByArgs['orderBy'];
    } : {
        orderBy?: FileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FileFieldRefs;
}
export interface Prisma__FileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    contact<T extends Prisma.File$contactArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.File$contactArgs<ExtArgs>>): Prisma.Prisma__ContactClient<runtime.Types.Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FileFieldRefs {
    readonly id: Prisma.FieldRef<"File", 'String'>;
    readonly filename: Prisma.FieldRef<"File", 'String'>;
    readonly path: Prisma.FieldRef<"File", 'String'>;
    readonly mimetype: Prisma.FieldRef<"File", 'String'>;
    readonly createdAt: Prisma.FieldRef<"File", 'DateTime'>;
    readonly contactId: Prisma.FieldRef<"File", 'String'>;
}
export type FileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelect<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    include?: Prisma.FileInclude<ExtArgs> | null;
    where: Prisma.FileWhereUniqueInput;
};
export type FileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelect<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    include?: Prisma.FileInclude<ExtArgs> | null;
    where: Prisma.FileWhereUniqueInput;
};
export type FileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelect<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    include?: Prisma.FileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FileCreateInput, Prisma.FileUncheckedCreateInput>;
};
export type FileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FileCreateManyInput | Prisma.FileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    data: Prisma.FileCreateManyInput | Prisma.FileCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FileIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelect<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    include?: Prisma.FileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FileUpdateInput, Prisma.FileUncheckedUpdateInput>;
    where: Prisma.FileWhereUniqueInput;
};
export type FileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FileUpdateManyMutationInput, Prisma.FileUncheckedUpdateManyInput>;
    where?: Prisma.FileWhereInput;
    limit?: number;
};
export type FileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FileUpdateManyMutationInput, Prisma.FileUncheckedUpdateManyInput>;
    where?: Prisma.FileWhereInput;
    limit?: number;
    include?: Prisma.FileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelect<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    include?: Prisma.FileInclude<ExtArgs> | null;
    where: Prisma.FileWhereUniqueInput;
    create: Prisma.XOR<Prisma.FileCreateInput, Prisma.FileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FileUpdateInput, Prisma.FileUncheckedUpdateInput>;
};
export type FileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelect<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    include?: Prisma.FileInclude<ExtArgs> | null;
    where: Prisma.FileWhereUniqueInput;
};
export type FileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FileWhereInput;
    limit?: number;
};
export type File$contactArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContactSelect<ExtArgs> | null;
    omit?: Prisma.ContactOmit<ExtArgs> | null;
    include?: Prisma.ContactInclude<ExtArgs> | null;
    where?: Prisma.ContactWhereInput;
};
export type FileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FileSelect<ExtArgs> | null;
    omit?: Prisma.FileOmit<ExtArgs> | null;
    include?: Prisma.FileInclude<ExtArgs> | null;
};
export {};
