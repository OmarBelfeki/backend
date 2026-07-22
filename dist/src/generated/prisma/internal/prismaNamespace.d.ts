import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Tenant: "Tenant";
    readonly User: "User";
    readonly SenderID: "SenderID";
    readonly Contact: "Contact";
    readonly File: "File";
    readonly Group: "Group";
    readonly Campaign: "Campaign";
    readonly Message: "Message";
    readonly Transaction: "Transaction";
    readonly AI: "AI";
    readonly Notification: "Notification";
    readonly Module: "Module";
    readonly Otp: "Otp";
    readonly Template: "Template";
    readonly AuditLog: "AuditLog";
    readonly SettingProfile: "SettingProfile";
    readonly LegalPages: "LegalPages";
    readonly Session: "Session";
    readonly Analytics: "Analytics";
    readonly smtp: "smtp";
    readonly TestProvider: "TestProvider";
    readonly RatePerSMS: "RatePerSMS";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "tenant" | "user" | "senderID" | "contact" | "file" | "group" | "campaign" | "message" | "transaction" | "aI" | "notification" | "module" | "otp" | "template" | "auditLog" | "settingProfile" | "legalPages" | "session" | "analytics" | "smtp" | "testProvider" | "ratePerSMS";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Tenant: {
            payload: Prisma.$TenantPayload<ExtArgs>;
            fields: Prisma.TenantFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TenantFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>;
                };
                findFirst: {
                    args: Prisma.TenantFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>;
                };
                findMany: {
                    args: Prisma.TenantFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>[];
                };
                create: {
                    args: Prisma.TenantCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>;
                };
                createMany: {
                    args: Prisma.TenantCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>[];
                };
                delete: {
                    args: Prisma.TenantDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>;
                };
                update: {
                    args: Prisma.TenantUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>;
                };
                deleteMany: {
                    args: Prisma.TenantDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TenantUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>[];
                };
                upsert: {
                    args: Prisma.TenantUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TenantPayload>;
                };
                aggregate: {
                    args: Prisma.TenantAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTenant>;
                };
                groupBy: {
                    args: Prisma.TenantGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TenantGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TenantCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TenantCountAggregateOutputType> | number;
                };
            };
        };
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        SenderID: {
            payload: Prisma.$SenderIDPayload<ExtArgs>;
            fields: Prisma.SenderIDFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SenderIDFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SenderIDPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SenderIDFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SenderIDPayload>;
                };
                findFirst: {
                    args: Prisma.SenderIDFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SenderIDPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SenderIDFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SenderIDPayload>;
                };
                findMany: {
                    args: Prisma.SenderIDFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SenderIDPayload>[];
                };
                create: {
                    args: Prisma.SenderIDCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SenderIDPayload>;
                };
                createMany: {
                    args: Prisma.SenderIDCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SenderIDCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SenderIDPayload>[];
                };
                delete: {
                    args: Prisma.SenderIDDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SenderIDPayload>;
                };
                update: {
                    args: Prisma.SenderIDUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SenderIDPayload>;
                };
                deleteMany: {
                    args: Prisma.SenderIDDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SenderIDUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SenderIDUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SenderIDPayload>[];
                };
                upsert: {
                    args: Prisma.SenderIDUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SenderIDPayload>;
                };
                aggregate: {
                    args: Prisma.SenderIDAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSenderID>;
                };
                groupBy: {
                    args: Prisma.SenderIDGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SenderIDGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SenderIDCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SenderIDCountAggregateOutputType> | number;
                };
            };
        };
        Contact: {
            payload: Prisma.$ContactPayload<ExtArgs>;
            fields: Prisma.ContactFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ContactFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload>;
                };
                findFirst: {
                    args: Prisma.ContactFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload>;
                };
                findMany: {
                    args: Prisma.ContactFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload>[];
                };
                create: {
                    args: Prisma.ContactCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload>;
                };
                createMany: {
                    args: Prisma.ContactCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload>[];
                };
                delete: {
                    args: Prisma.ContactDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload>;
                };
                update: {
                    args: Prisma.ContactUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload>;
                };
                deleteMany: {
                    args: Prisma.ContactDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ContactUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload>[];
                };
                upsert: {
                    args: Prisma.ContactUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ContactPayload>;
                };
                aggregate: {
                    args: Prisma.ContactAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateContact>;
                };
                groupBy: {
                    args: Prisma.ContactGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContactGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ContactCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContactCountAggregateOutputType> | number;
                };
            };
        };
        File: {
            payload: Prisma.$FilePayload<ExtArgs>;
            fields: Prisma.FileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>;
                };
                findFirst: {
                    args: Prisma.FileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>;
                };
                findMany: {
                    args: Prisma.FileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>[];
                };
                create: {
                    args: Prisma.FileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>;
                };
                createMany: {
                    args: Prisma.FileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>[];
                };
                delete: {
                    args: Prisma.FileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>;
                };
                update: {
                    args: Prisma.FileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>;
                };
                deleteMany: {
                    args: Prisma.FileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>[];
                };
                upsert: {
                    args: Prisma.FileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>;
                };
                aggregate: {
                    args: Prisma.FileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFile>;
                };
                groupBy: {
                    args: Prisma.FileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FileCountAggregateOutputType> | number;
                };
            };
        };
        Group: {
            payload: Prisma.$GroupPayload<ExtArgs>;
            fields: Prisma.GroupFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GroupFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupPayload>;
                };
                findFirst: {
                    args: Prisma.GroupFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupPayload>;
                };
                findMany: {
                    args: Prisma.GroupFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupPayload>[];
                };
                create: {
                    args: Prisma.GroupCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupPayload>;
                };
                createMany: {
                    args: Prisma.GroupCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupPayload>[];
                };
                delete: {
                    args: Prisma.GroupDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupPayload>;
                };
                update: {
                    args: Prisma.GroupUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupPayload>;
                };
                deleteMany: {
                    args: Prisma.GroupDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GroupUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupPayload>[];
                };
                upsert: {
                    args: Prisma.GroupUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GroupPayload>;
                };
                aggregate: {
                    args: Prisma.GroupAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGroup>;
                };
                groupBy: {
                    args: Prisma.GroupGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GroupGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GroupCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GroupCountAggregateOutputType> | number;
                };
            };
        };
        Campaign: {
            payload: Prisma.$CampaignPayload<ExtArgs>;
            fields: Prisma.CampaignFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CampaignFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignPayload>;
                };
                findFirst: {
                    args: Prisma.CampaignFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignPayload>;
                };
                findMany: {
                    args: Prisma.CampaignFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignPayload>[];
                };
                create: {
                    args: Prisma.CampaignCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignPayload>;
                };
                createMany: {
                    args: Prisma.CampaignCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignPayload>[];
                };
                delete: {
                    args: Prisma.CampaignDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignPayload>;
                };
                update: {
                    args: Prisma.CampaignUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignPayload>;
                };
                deleteMany: {
                    args: Prisma.CampaignDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CampaignUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignPayload>[];
                };
                upsert: {
                    args: Prisma.CampaignUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CampaignPayload>;
                };
                aggregate: {
                    args: Prisma.CampaignAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCampaign>;
                };
                groupBy: {
                    args: Prisma.CampaignGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CampaignGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CampaignCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CampaignCountAggregateOutputType> | number;
                };
            };
        };
        Message: {
            payload: Prisma.$MessagePayload<ExtArgs>;
            fields: Prisma.MessageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MessageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                findFirst: {
                    args: Prisma.MessageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                findMany: {
                    args: Prisma.MessageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[];
                };
                create: {
                    args: Prisma.MessageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                createMany: {
                    args: Prisma.MessageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[];
                };
                delete: {
                    args: Prisma.MessageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                update: {
                    args: Prisma.MessageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                deleteMany: {
                    args: Prisma.MessageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MessageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>[];
                };
                upsert: {
                    args: Prisma.MessageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MessagePayload>;
                };
                aggregate: {
                    args: Prisma.MessageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMessage>;
                };
                groupBy: {
                    args: Prisma.MessageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MessageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MessageCountAggregateOutputType> | number;
                };
            };
        };
        Transaction: {
            payload: Prisma.$TransactionPayload<ExtArgs>;
            fields: Prisma.TransactionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TransactionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>;
                };
                findFirst: {
                    args: Prisma.TransactionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>;
                };
                findMany: {
                    args: Prisma.TransactionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>[];
                };
                create: {
                    args: Prisma.TransactionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>;
                };
                createMany: {
                    args: Prisma.TransactionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>[];
                };
                delete: {
                    args: Prisma.TransactionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>;
                };
                update: {
                    args: Prisma.TransactionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>;
                };
                deleteMany: {
                    args: Prisma.TransactionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TransactionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>[];
                };
                upsert: {
                    args: Prisma.TransactionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TransactionPayload>;
                };
                aggregate: {
                    args: Prisma.TransactionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTransaction>;
                };
                groupBy: {
                    args: Prisma.TransactionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TransactionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TransactionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TransactionCountAggregateOutputType> | number;
                };
            };
        };
        AI: {
            payload: Prisma.$AIPayload<ExtArgs>;
            fields: Prisma.AIFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AIFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AIFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIPayload>;
                };
                findFirst: {
                    args: Prisma.AIFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AIFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIPayload>;
                };
                findMany: {
                    args: Prisma.AIFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIPayload>[];
                };
                create: {
                    args: Prisma.AICreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIPayload>;
                };
                createMany: {
                    args: Prisma.AICreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AICreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIPayload>[];
                };
                delete: {
                    args: Prisma.AIDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIPayload>;
                };
                update: {
                    args: Prisma.AIUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIPayload>;
                };
                deleteMany: {
                    args: Prisma.AIDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AIUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AIUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIPayload>[];
                };
                upsert: {
                    args: Prisma.AIUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AIPayload>;
                };
                aggregate: {
                    args: Prisma.AIAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAI>;
                };
                groupBy: {
                    args: Prisma.AIGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AIGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AICountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AICountAggregateOutputType> | number;
                };
            };
        };
        Notification: {
            payload: Prisma.$NotificationPayload<ExtArgs>;
            fields: Prisma.NotificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findFirst: {
                    args: Prisma.NotificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findMany: {
                    args: Prisma.NotificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                create: {
                    args: Prisma.NotificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                createMany: {
                    args: Prisma.NotificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                delete: {
                    args: Prisma.NotificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                update: {
                    args: Prisma.NotificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                upsert: {
                    args: Prisma.NotificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotification>;
                };
                groupBy: {
                    args: Prisma.NotificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationCountAggregateOutputType> | number;
                };
            };
        };
        Module: {
            payload: Prisma.$ModulePayload<ExtArgs>;
            fields: Prisma.ModuleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ModuleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ModuleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>;
                };
                findFirst: {
                    args: Prisma.ModuleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ModuleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>;
                };
                findMany: {
                    args: Prisma.ModuleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>[];
                };
                create: {
                    args: Prisma.ModuleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>;
                };
                createMany: {
                    args: Prisma.ModuleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ModuleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>[];
                };
                delete: {
                    args: Prisma.ModuleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>;
                };
                update: {
                    args: Prisma.ModuleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>;
                };
                deleteMany: {
                    args: Prisma.ModuleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ModuleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ModuleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>[];
                };
                upsert: {
                    args: Prisma.ModuleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModulePayload>;
                };
                aggregate: {
                    args: Prisma.ModuleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateModule>;
                };
                groupBy: {
                    args: Prisma.ModuleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ModuleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ModuleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ModuleCountAggregateOutputType> | number;
                };
            };
        };
        Otp: {
            payload: Prisma.$OtpPayload<ExtArgs>;
            fields: Prisma.OtpFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OtpFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OtpFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpPayload>;
                };
                findFirst: {
                    args: Prisma.OtpFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OtpFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpPayload>;
                };
                findMany: {
                    args: Prisma.OtpFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpPayload>[];
                };
                create: {
                    args: Prisma.OtpCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpPayload>;
                };
                createMany: {
                    args: Prisma.OtpCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OtpCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpPayload>[];
                };
                delete: {
                    args: Prisma.OtpDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpPayload>;
                };
                update: {
                    args: Prisma.OtpUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpPayload>;
                };
                deleteMany: {
                    args: Prisma.OtpDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OtpUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OtpUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpPayload>[];
                };
                upsert: {
                    args: Prisma.OtpUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OtpPayload>;
                };
                aggregate: {
                    args: Prisma.OtpAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOtp>;
                };
                groupBy: {
                    args: Prisma.OtpGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OtpGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OtpCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OtpCountAggregateOutputType> | number;
                };
            };
        };
        Template: {
            payload: Prisma.$TemplatePayload<ExtArgs>;
            fields: Prisma.TemplateFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TemplateFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemplatePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemplatePayload>;
                };
                findFirst: {
                    args: Prisma.TemplateFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemplatePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemplatePayload>;
                };
                findMany: {
                    args: Prisma.TemplateFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemplatePayload>[];
                };
                create: {
                    args: Prisma.TemplateCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemplatePayload>;
                };
                createMany: {
                    args: Prisma.TemplateCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TemplateCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemplatePayload>[];
                };
                delete: {
                    args: Prisma.TemplateDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemplatePayload>;
                };
                update: {
                    args: Prisma.TemplateUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemplatePayload>;
                };
                deleteMany: {
                    args: Prisma.TemplateDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TemplateUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TemplateUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemplatePayload>[];
                };
                upsert: {
                    args: Prisma.TemplateUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TemplatePayload>;
                };
                aggregate: {
                    args: Prisma.TemplateAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTemplate>;
                };
                groupBy: {
                    args: Prisma.TemplateGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TemplateGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TemplateCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TemplateCountAggregateOutputType> | number;
                };
            };
        };
        AuditLog: {
            payload: Prisma.$AuditLogPayload<ExtArgs>;
            fields: Prisma.AuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findMany: {
                    args: Prisma.AuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                create: {
                    args: Prisma.AuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                createMany: {
                    args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                delete: {
                    args: Prisma.AuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                update: {
                    args: Prisma.AuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                upsert: {
                    args: Prisma.AuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.AuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditLog>;
                };
                groupBy: {
                    args: Prisma.AuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogCountAggregateOutputType> | number;
                };
            };
        };
        SettingProfile: {
            payload: Prisma.$SettingProfilePayload<ExtArgs>;
            fields: Prisma.SettingProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SettingProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SettingProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingProfilePayload>;
                };
                findFirst: {
                    args: Prisma.SettingProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SettingProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingProfilePayload>;
                };
                findMany: {
                    args: Prisma.SettingProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingProfilePayload>[];
                };
                create: {
                    args: Prisma.SettingProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingProfilePayload>;
                };
                createMany: {
                    args: Prisma.SettingProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SettingProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingProfilePayload>[];
                };
                delete: {
                    args: Prisma.SettingProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingProfilePayload>;
                };
                update: {
                    args: Prisma.SettingProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.SettingProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SettingProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SettingProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingProfilePayload>[];
                };
                upsert: {
                    args: Prisma.SettingProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SettingProfilePayload>;
                };
                aggregate: {
                    args: Prisma.SettingProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSettingProfile>;
                };
                groupBy: {
                    args: Prisma.SettingProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SettingProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SettingProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SettingProfileCountAggregateOutputType> | number;
                };
            };
        };
        LegalPages: {
            payload: Prisma.$LegalPagesPayload<ExtArgs>;
            fields: Prisma.LegalPagesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LegalPagesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LegalPagesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LegalPagesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LegalPagesPayload>;
                };
                findFirst: {
                    args: Prisma.LegalPagesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LegalPagesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LegalPagesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LegalPagesPayload>;
                };
                findMany: {
                    args: Prisma.LegalPagesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LegalPagesPayload>[];
                };
                create: {
                    args: Prisma.LegalPagesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LegalPagesPayload>;
                };
                createMany: {
                    args: Prisma.LegalPagesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LegalPagesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LegalPagesPayload>[];
                };
                delete: {
                    args: Prisma.LegalPagesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LegalPagesPayload>;
                };
                update: {
                    args: Prisma.LegalPagesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LegalPagesPayload>;
                };
                deleteMany: {
                    args: Prisma.LegalPagesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LegalPagesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LegalPagesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LegalPagesPayload>[];
                };
                upsert: {
                    args: Prisma.LegalPagesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LegalPagesPayload>;
                };
                aggregate: {
                    args: Prisma.LegalPagesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLegalPages>;
                };
                groupBy: {
                    args: Prisma.LegalPagesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LegalPagesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LegalPagesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LegalPagesCountAggregateOutputType> | number;
                };
            };
        };
        Session: {
            payload: Prisma.$SessionPayload<ExtArgs>;
            fields: Prisma.SessionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SessionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                findFirst: {
                    args: Prisma.SessionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                findMany: {
                    args: Prisma.SessionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                create: {
                    args: Prisma.SessionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                createMany: {
                    args: Prisma.SessionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                delete: {
                    args: Prisma.SessionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                update: {
                    args: Prisma.SessionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                deleteMany: {
                    args: Prisma.SessionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SessionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>[];
                };
                upsert: {
                    args: Prisma.SessionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SessionPayload>;
                };
                aggregate: {
                    args: Prisma.SessionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSession>;
                };
                groupBy: {
                    args: Prisma.SessionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SessionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SessionCountAggregateOutputType> | number;
                };
            };
        };
        Analytics: {
            payload: Prisma.$AnalyticsPayload<ExtArgs>;
            fields: Prisma.AnalyticsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AnalyticsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AnalyticsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsPayload>;
                };
                findFirst: {
                    args: Prisma.AnalyticsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AnalyticsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsPayload>;
                };
                findMany: {
                    args: Prisma.AnalyticsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsPayload>[];
                };
                create: {
                    args: Prisma.AnalyticsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsPayload>;
                };
                createMany: {
                    args: Prisma.AnalyticsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AnalyticsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsPayload>[];
                };
                delete: {
                    args: Prisma.AnalyticsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsPayload>;
                };
                update: {
                    args: Prisma.AnalyticsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsPayload>;
                };
                deleteMany: {
                    args: Prisma.AnalyticsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AnalyticsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AnalyticsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsPayload>[];
                };
                upsert: {
                    args: Prisma.AnalyticsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnalyticsPayload>;
                };
                aggregate: {
                    args: Prisma.AnalyticsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAnalytics>;
                };
                groupBy: {
                    args: Prisma.AnalyticsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnalyticsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AnalyticsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnalyticsCountAggregateOutputType> | number;
                };
            };
        };
        smtp: {
            payload: Prisma.$smtpPayload<ExtArgs>;
            fields: Prisma.smtpFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.smtpFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$smtpPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.smtpFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$smtpPayload>;
                };
                findFirst: {
                    args: Prisma.smtpFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$smtpPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.smtpFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$smtpPayload>;
                };
                findMany: {
                    args: Prisma.smtpFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$smtpPayload>[];
                };
                create: {
                    args: Prisma.smtpCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$smtpPayload>;
                };
                createMany: {
                    args: Prisma.smtpCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.smtpCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$smtpPayload>[];
                };
                delete: {
                    args: Prisma.smtpDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$smtpPayload>;
                };
                update: {
                    args: Prisma.smtpUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$smtpPayload>;
                };
                deleteMany: {
                    args: Prisma.smtpDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.smtpUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.smtpUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$smtpPayload>[];
                };
                upsert: {
                    args: Prisma.smtpUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$smtpPayload>;
                };
                aggregate: {
                    args: Prisma.SmtpAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSmtp>;
                };
                groupBy: {
                    args: Prisma.smtpGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SmtpGroupByOutputType>[];
                };
                count: {
                    args: Prisma.smtpCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SmtpCountAggregateOutputType> | number;
                };
            };
        };
        TestProvider: {
            payload: Prisma.$TestProviderPayload<ExtArgs>;
            fields: Prisma.TestProviderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TestProviderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestProviderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TestProviderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestProviderPayload>;
                };
                findFirst: {
                    args: Prisma.TestProviderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestProviderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TestProviderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestProviderPayload>;
                };
                findMany: {
                    args: Prisma.TestProviderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestProviderPayload>[];
                };
                create: {
                    args: Prisma.TestProviderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestProviderPayload>;
                };
                createMany: {
                    args: Prisma.TestProviderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TestProviderCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestProviderPayload>[];
                };
                delete: {
                    args: Prisma.TestProviderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestProviderPayload>;
                };
                update: {
                    args: Prisma.TestProviderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestProviderPayload>;
                };
                deleteMany: {
                    args: Prisma.TestProviderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TestProviderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TestProviderUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestProviderPayload>[];
                };
                upsert: {
                    args: Prisma.TestProviderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestProviderPayload>;
                };
                aggregate: {
                    args: Prisma.TestProviderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTestProvider>;
                };
                groupBy: {
                    args: Prisma.TestProviderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TestProviderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TestProviderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TestProviderCountAggregateOutputType> | number;
                };
            };
        };
        RatePerSMS: {
            payload: Prisma.$RatePerSMSPayload<ExtArgs>;
            fields: Prisma.RatePerSMSFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RatePerSMSFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RatePerSMSPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RatePerSMSFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RatePerSMSPayload>;
                };
                findFirst: {
                    args: Prisma.RatePerSMSFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RatePerSMSPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RatePerSMSFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RatePerSMSPayload>;
                };
                findMany: {
                    args: Prisma.RatePerSMSFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RatePerSMSPayload>[];
                };
                create: {
                    args: Prisma.RatePerSMSCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RatePerSMSPayload>;
                };
                createMany: {
                    args: Prisma.RatePerSMSCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RatePerSMSCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RatePerSMSPayload>[];
                };
                delete: {
                    args: Prisma.RatePerSMSDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RatePerSMSPayload>;
                };
                update: {
                    args: Prisma.RatePerSMSUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RatePerSMSPayload>;
                };
                deleteMany: {
                    args: Prisma.RatePerSMSDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RatePerSMSUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RatePerSMSUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RatePerSMSPayload>[];
                };
                upsert: {
                    args: Prisma.RatePerSMSUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RatePerSMSPayload>;
                };
                aggregate: {
                    args: Prisma.RatePerSMSAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRatePerSMS>;
                };
                groupBy: {
                    args: Prisma.RatePerSMSGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RatePerSMSGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RatePerSMSCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RatePerSMSCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const TenantScalarFieldEnum: {
    readonly id: "id";
    readonly companyName: "companyName";
    readonly email: "email";
    readonly timezone: "timezone";
    readonly providerApiKey: "providerApiKey";
    readonly virtualBalance: "virtualBalance";
    readonly taxId: "taxId";
    readonly businessSector: "businessSector";
    readonly phone: "phone";
    readonly city: "city";
    readonly postalCode: "postalCode";
    readonly address: "address";
    readonly createdAt: "createdAt";
};
export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly role: "role";
    readonly isActive: "isActive";
    readonly isVerified: "isVerified";
    readonly phone: "phone";
    readonly lang: "lang";
    readonly tenantId: "tenantId";
    readonly hashedRefreshToken: "hashedRefreshToken";
    readonly lastActiveAt: "lastActiveAt";
    readonly createdAt: "createdAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SenderIDScalarFieldEnum: {
    readonly id: "id";
    readonly label: "label";
    readonly status: "status";
    readonly requestedAt: "requestedAt";
    readonly tenantId: "tenantId";
};
export type SenderIDScalarFieldEnum = (typeof SenderIDScalarFieldEnum)[keyof typeof SenderIDScalarFieldEnum];
export declare const ContactScalarFieldEnum: {
    readonly id: "id";
    readonly phone: "phone";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly customFields: "customFields";
    readonly error: "error";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly tenantId: "tenantId";
};
export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum];
export declare const FileScalarFieldEnum: {
    readonly id: "id";
    readonly filename: "filename";
    readonly path: "path";
    readonly mimetype: "mimetype";
    readonly createdAt: "createdAt";
    readonly contactId: "contactId";
};
export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum];
export declare const GroupScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly tenantId: "tenantId";
    readonly nbContact: "nbContact";
    readonly createdAt: "createdAt";
};
export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum];
export declare const CampaignScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly type: "type";
    readonly messageContent: "messageContent";
    readonly scheduledAt: "scheduledAt";
    readonly status: "status";
    readonly totalContacts: "totalContacts";
    readonly estimatedCost: "estimatedCost";
    readonly createdAt: "createdAt";
    readonly isActive: "isActive";
    readonly tenantId: "tenantId";
    readonly senderId: "senderId";
    readonly groupId: "groupId";
};
export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum];
export declare const MessageScalarFieldEnum: {
    readonly id: "id";
    readonly phone: "phone";
    readonly messageBody: "messageBody";
    readonly providerMsgId: "providerMsgId";
    readonly error: "error";
    readonly status: "status";
    readonly costInCredits: "costInCredits";
    readonly sentAt: "sentAt";
    readonly deliveredAt: "deliveredAt";
    readonly campaignId: "campaignId";
    readonly type: "type";
    readonly tenantId: "tenantId";
    readonly senderId: "senderId";
};
export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum];
export declare const TransactionScalarFieldEnum: {
    readonly id: "id";
    readonly amount: "amount";
    readonly currency: "currency";
    readonly konnectRef: "konnectRef";
    readonly nbSMS: "nbSMS";
    readonly remainingSMS: "remainingSMS";
    readonly rateSMS: "rateSMS";
    readonly status: "status";
    readonly invoiceUrl: "invoiceUrl";
    readonly createdAt: "createdAt";
    readonly endAt: "endAt";
    readonly tenantId: "tenantId";
};
export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum];
export declare const AIScalarFieldEnum: {
    readonly id: "id";
    readonly linkSMS: "linkSMS";
    readonly linkAnti: "linkAnti";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly tenantId: "tenantId";
};
export type AIScalarFieldEnum = (typeof AIScalarFieldEnum)[keyof typeof AIScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly message: "message";
    readonly dateTime: "dateTime";
    readonly type: "type";
    readonly data: "data";
    readonly tenantId: "tenantId";
    readonly createdAt: "createdAt";
    readonly unread: "unread";
    readonly sender: "sender";
    readonly status: "status";
    readonly to: "to";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const ModuleScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly logo: "logo";
    readonly actived: "actived";
    readonly price: "price";
    readonly desc: "desc";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum];
export declare const OtpScalarFieldEnum: {
    readonly userId: "userId";
    readonly email: "email";
    readonly phone: "phone";
    readonly otp: "otp";
};
export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum];
export declare const TemplateScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly template: "template";
    readonly createdAt: "createdAt";
    readonly tenantId: "tenantId";
};
export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly tenantId: "tenantId";
    readonly userId: "userId";
    readonly action: "action";
    readonly resource: "resource";
    readonly resourceId: "resourceId";
    readonly requestData: "requestData";
    readonly responseData: "responseData";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly createdAt: "createdAt";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const SettingProfileScalarFieldEnum: {
    readonly userId: "userId";
    readonly username: "username";
    readonly avatar: "avatar";
    readonly bio: "bio";
    readonly urls: "urls";
};
export type SettingProfileScalarFieldEnum = (typeof SettingProfileScalarFieldEnum)[keyof typeof SettingProfileScalarFieldEnum];
export declare const LegalPagesScalarFieldEnum: {
    readonly id: "id";
    readonly termsOfService: "termsOfService";
    readonly privacyPolicy: "privacyPolicy";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LegalPagesScalarFieldEnum = (typeof LegalPagesScalarFieldEnum)[keyof typeof LegalPagesScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly visitorId: "visitorId";
    readonly device: "device";
    readonly browser: "browser";
    readonly os: "os";
    readonly ip: "ip";
    readonly startedAt: "startedAt";
    readonly endedAt: "endedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const AnalyticsScalarFieldEnum: {
    readonly id: "id";
    readonly sessionId: "sessionId";
    readonly page: "page";
    readonly referrer: "referrer";
    readonly createdAt: "createdAt";
};
export type AnalyticsScalarFieldEnum = (typeof AnalyticsScalarFieldEnum)[keyof typeof AnalyticsScalarFieldEnum];
export declare const SmtpScalarFieldEnum: {
    readonly id: "id";
    readonly host: "host";
    readonly port: "port";
    readonly encryption: "encryption";
    readonly authMethod: "authMethod";
    readonly username: "username";
    readonly password: "password";
    readonly senderName: "senderName";
    readonly senderEmail: "senderEmail";
    readonly createAt: "createAt";
    readonly updateAt: "updateAt";
};
export type SmtpScalarFieldEnum = (typeof SmtpScalarFieldEnum)[keyof typeof SmtpScalarFieldEnum];
export declare const TestProviderScalarFieldEnum: {
    readonly id: "id";
    readonly sender: "sender";
    readonly type: "type";
    readonly msg: "msg";
    readonly apiKey: "apiKey";
    readonly mobileTest: "mobileTest";
    readonly createAt: "createAt";
    readonly updateAt: "updateAt";
};
export type TestProviderScalarFieldEnum = (typeof TestProviderScalarFieldEnum)[keyof typeof TestProviderScalarFieldEnum];
export declare const RatePerSMSScalarFieldEnum: {
    readonly id: "id";
    readonly ranges: "ranges";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RatePerSMSScalarFieldEnum = (typeof RatePerSMSScalarFieldEnum)[keyof typeof RatePerSMSScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: runtime.JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type EnumSenderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SenderStatus'>;
export type ListEnumSenderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SenderStatus[]'>;
export type EnumContactStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactStatus'>;
export type ListEnumContactStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContactStatus[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type EnumCampaignTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignType'>;
export type ListEnumCampaignTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignType[]'>;
export type EnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus'>;
export type ListEnumCampaignStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CampaignStatus[]'>;
export type EnumDlrStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DlrStatus'>;
export type ListEnumDlrStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DlrStatus[]'>;
export type EnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType'>;
export type ListEnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType[]'>;
export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>;
export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>;
export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>;
export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type EnumNotificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationStatus'>;
export type ListEnumNotificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationStatus[]'>;
export type EnumEncryptionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EncryptionType'>;
export type ListEnumEncryptionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EncryptionType[]'>;
export type EnumAuthMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthMethod'>;
export type ListEnumAuthMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthMethod[]'>;
export type EnumTestProviderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TestProviderType'>;
export type ListEnumTestProviderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TestProviderType[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    tenant?: Prisma.TenantOmit;
    user?: Prisma.UserOmit;
    senderID?: Prisma.SenderIDOmit;
    contact?: Prisma.ContactOmit;
    file?: Prisma.FileOmit;
    group?: Prisma.GroupOmit;
    campaign?: Prisma.CampaignOmit;
    message?: Prisma.MessageOmit;
    transaction?: Prisma.TransactionOmit;
    aI?: Prisma.AIOmit;
    notification?: Prisma.NotificationOmit;
    module?: Prisma.ModuleOmit;
    otp?: Prisma.OtpOmit;
    template?: Prisma.TemplateOmit;
    auditLog?: Prisma.AuditLogOmit;
    settingProfile?: Prisma.SettingProfileOmit;
    legalPages?: Prisma.LegalPagesOmit;
    session?: Prisma.SessionOmit;
    analytics?: Prisma.AnalyticsOmit;
    smtp?: Prisma.smtpOmit;
    testProvider?: Prisma.TestProviderOmit;
    ratePerSMS?: Prisma.RatePerSMSOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
