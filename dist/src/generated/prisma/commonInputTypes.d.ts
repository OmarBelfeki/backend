import type * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type DecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type EnumSenderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SenderStatus | Prisma.EnumSenderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SenderStatus[] | Prisma.ListEnumSenderStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SenderStatus[] | Prisma.ListEnumSenderStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSenderStatusFilter<$PrismaModel> | $Enums.SenderStatus;
};
export type EnumSenderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SenderStatus | Prisma.EnumSenderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SenderStatus[] | Prisma.ListEnumSenderStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SenderStatus[] | Prisma.ListEnumSenderStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSenderStatusWithAggregatesFilter<$PrismaModel> | $Enums.SenderStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSenderStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSenderStatusFilter<$PrismaModel>;
};
export type EnumContactStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactStatus | Prisma.EnumContactStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ContactStatus[] | Prisma.ListEnumContactStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ContactStatus[] | Prisma.ListEnumContactStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumContactStatusNullableFilter<$PrismaModel> | $Enums.ContactStatus | null;
};
export type EnumContactStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactStatus | Prisma.EnumContactStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ContactStatus[] | Prisma.ListEnumContactStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ContactStatus[] | Prisma.ListEnumContactStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumContactStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ContactStatus | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumContactStatusNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumContactStatusNullableFilter<$PrismaModel>;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type EnumCampaignTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignType | Prisma.EnumCampaignTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CampaignType[] | Prisma.ListEnumCampaignTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CampaignType[] | Prisma.ListEnumCampaignTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCampaignTypeFilter<$PrismaModel> | $Enums.CampaignType;
};
export type EnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | Prisma.EnumCampaignStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CampaignStatus[] | Prisma.ListEnumCampaignStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CampaignStatus[] | Prisma.ListEnumCampaignStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedBoolNullableFilter<$PrismaModel> | boolean | null;
};
export type EnumCampaignTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignType | Prisma.EnumCampaignTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CampaignType[] | Prisma.ListEnumCampaignTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CampaignType[] | Prisma.ListEnumCampaignTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCampaignTypeWithAggregatesFilter<$PrismaModel> | $Enums.CampaignType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCampaignTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCampaignTypeFilter<$PrismaModel>;
};
export type EnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | Prisma.EnumCampaignStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CampaignStatus[] | Prisma.ListEnumCampaignStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CampaignStatus[] | Prisma.ListEnumCampaignStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCampaignStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCampaignStatusFilter<$PrismaModel>;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolNullableFilter<$PrismaModel>;
};
export type EnumDlrStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DlrStatus | Prisma.EnumDlrStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.DlrStatus[] | Prisma.ListEnumDlrStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.DlrStatus[] | Prisma.ListEnumDlrStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumDlrStatusNullableFilter<$PrismaModel> | $Enums.DlrStatus | null;
};
export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type EnumMessageTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | Prisma.EnumMessageTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.MessageType[] | Prisma.ListEnumMessageTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.MessageType[] | Prisma.ListEnumMessageTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumMessageTypeNullableFilter<$PrismaModel> | $Enums.MessageType | null;
};
export type EnumDlrStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DlrStatus | Prisma.EnumDlrStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.DlrStatus[] | Prisma.ListEnumDlrStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.DlrStatus[] | Prisma.ListEnumDlrStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumDlrStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.DlrStatus | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDlrStatusNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDlrStatusNullableFilter<$PrismaModel>;
};
export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type EnumMessageTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | Prisma.EnumMessageTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.MessageType[] | Prisma.ListEnumMessageTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.MessageType[] | Prisma.ListEnumMessageTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumMessageTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.MessageType | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMessageTypeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMessageTypeNullableFilter<$PrismaModel>;
};
export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | Prisma.EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus;
};
export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | Prisma.EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTransactionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTransactionStatusFilter<$PrismaModel>;
};
export type EnumNotificationTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | Prisma.EnumNotificationTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumNotificationTypeNullableFilter<$PrismaModel> | $Enums.NotificationType | null;
};
export type JsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type EnumNotificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | Prisma.EnumNotificationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationStatus[] | Prisma.ListEnumNotificationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationStatus[] | Prisma.ListEnumNotificationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationStatusFilter<$PrismaModel> | $Enums.NotificationStatus;
};
export type EnumNotificationTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | Prisma.EnumNotificationTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumNotificationTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumNotificationTypeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumNotificationTypeNullableFilter<$PrismaModel>;
};
export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
};
export type EnumNotificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | Prisma.EnumNotificationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationStatus[] | Prisma.ListEnumNotificationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationStatus[] | Prisma.ListEnumNotificationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.NotificationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumNotificationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumNotificationStatusFilter<$PrismaModel>;
};
export type EnumEncryptionTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EncryptionType | Prisma.EnumEncryptionTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.EncryptionType[] | Prisma.ListEnumEncryptionTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.EncryptionType[] | Prisma.ListEnumEncryptionTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumEncryptionTypeNullableFilter<$PrismaModel> | $Enums.EncryptionType | null;
};
export type EnumAuthMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethod | Prisma.EnumAuthMethodFieldRefInput<$PrismaModel> | null;
    in?: $Enums.AuthMethod[] | Prisma.ListEnumAuthMethodFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.AuthMethod[] | Prisma.ListEnumAuthMethodFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumAuthMethodNullableFilter<$PrismaModel> | $Enums.AuthMethod | null;
};
export type EnumEncryptionTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EncryptionType | Prisma.EnumEncryptionTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.EncryptionType[] | Prisma.ListEnumEncryptionTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.EncryptionType[] | Prisma.ListEnumEncryptionTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumEncryptionTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.EncryptionType | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEncryptionTypeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEncryptionTypeNullableFilter<$PrismaModel>;
};
export type EnumAuthMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethod | Prisma.EnumAuthMethodFieldRefInput<$PrismaModel> | null;
    in?: $Enums.AuthMethod[] | Prisma.ListEnumAuthMethodFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.AuthMethod[] | Prisma.ListEnumAuthMethodFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumAuthMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.AuthMethod | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAuthMethodNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAuthMethodNullableFilter<$PrismaModel>;
};
export type EnumTestProviderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TestProviderType | Prisma.EnumTestProviderTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TestProviderType[] | Prisma.ListEnumTestProviderTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TestProviderType[] | Prisma.ListEnumTestProviderTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTestProviderTypeFilter<$PrismaModel> | $Enums.TestProviderType;
};
export type EnumTestProviderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TestProviderType | Prisma.EnumTestProviderTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TestProviderType[] | Prisma.ListEnumTestProviderTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TestProviderType[] | Prisma.ListEnumTestProviderTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTestProviderTypeWithAggregatesFilter<$PrismaModel> | $Enums.TestProviderType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTestProviderTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTestProviderTypeFilter<$PrismaModel>;
};
export type JsonFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>, Required<JsonFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>;
export type JsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type JsonWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel>;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleFilter<$PrismaModel> | $Enums.Role;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | Prisma.EnumRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.Role[] | Prisma.ListEnumRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRoleFilter<$PrismaModel>;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedEnumSenderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SenderStatus | Prisma.EnumSenderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SenderStatus[] | Prisma.ListEnumSenderStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SenderStatus[] | Prisma.ListEnumSenderStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSenderStatusFilter<$PrismaModel> | $Enums.SenderStatus;
};
export type NestedEnumSenderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SenderStatus | Prisma.EnumSenderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.SenderStatus[] | Prisma.ListEnumSenderStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.SenderStatus[] | Prisma.ListEnumSenderStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumSenderStatusWithAggregatesFilter<$PrismaModel> | $Enums.SenderStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumSenderStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumSenderStatusFilter<$PrismaModel>;
};
export type NestedEnumContactStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactStatus | Prisma.EnumContactStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ContactStatus[] | Prisma.ListEnumContactStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ContactStatus[] | Prisma.ListEnumContactStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumContactStatusNullableFilter<$PrismaModel> | $Enums.ContactStatus | null;
};
export type NestedEnumContactStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContactStatus | Prisma.EnumContactStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.ContactStatus[] | Prisma.ListEnumContactStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.ContactStatus[] | Prisma.ListEnumContactStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumContactStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ContactStatus | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumContactStatusNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumContactStatusNullableFilter<$PrismaModel>;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnumCampaignTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignType | Prisma.EnumCampaignTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CampaignType[] | Prisma.ListEnumCampaignTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CampaignType[] | Prisma.ListEnumCampaignTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCampaignTypeFilter<$PrismaModel> | $Enums.CampaignType;
};
export type NestedEnumCampaignStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | Prisma.EnumCampaignStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CampaignStatus[] | Prisma.ListEnumCampaignStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CampaignStatus[] | Prisma.ListEnumCampaignStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCampaignStatusFilter<$PrismaModel> | $Enums.CampaignStatus;
};
export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedBoolNullableFilter<$PrismaModel> | boolean | null;
};
export type NestedEnumCampaignTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignType | Prisma.EnumCampaignTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.CampaignType[] | Prisma.ListEnumCampaignTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CampaignType[] | Prisma.ListEnumCampaignTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCampaignTypeWithAggregatesFilter<$PrismaModel> | $Enums.CampaignType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCampaignTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCampaignTypeFilter<$PrismaModel>;
};
export type NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CampaignStatus | Prisma.EnumCampaignStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.CampaignStatus[] | Prisma.ListEnumCampaignStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.CampaignStatus[] | Prisma.ListEnumCampaignStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumCampaignStatusWithAggregatesFilter<$PrismaModel> | $Enums.CampaignStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumCampaignStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumCampaignStatusFilter<$PrismaModel>;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolNullableFilter<$PrismaModel>;
};
export type NestedEnumDlrStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DlrStatus | Prisma.EnumDlrStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.DlrStatus[] | Prisma.ListEnumDlrStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.DlrStatus[] | Prisma.ListEnumDlrStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumDlrStatusNullableFilter<$PrismaModel> | $Enums.DlrStatus | null;
};
export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type NestedEnumMessageTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | Prisma.EnumMessageTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.MessageType[] | Prisma.ListEnumMessageTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.MessageType[] | Prisma.ListEnumMessageTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumMessageTypeNullableFilter<$PrismaModel> | $Enums.MessageType | null;
};
export type NestedEnumDlrStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DlrStatus | Prisma.EnumDlrStatusFieldRefInput<$PrismaModel> | null;
    in?: $Enums.DlrStatus[] | Prisma.ListEnumDlrStatusFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.DlrStatus[] | Prisma.ListEnumDlrStatusFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumDlrStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.DlrStatus | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDlrStatusNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDlrStatusNullableFilter<$PrismaModel>;
};
export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | Prisma.ListDecimalFieldRefInput<$PrismaModel> | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type NestedEnumMessageTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | Prisma.EnumMessageTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.MessageType[] | Prisma.ListEnumMessageTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.MessageType[] | Prisma.ListEnumMessageTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumMessageTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.MessageType | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumMessageTypeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumMessageTypeNullableFilter<$PrismaModel>;
};
export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | Prisma.EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus;
};
export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | Prisma.EnumTransactionStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransactionStatus[] | Prisma.ListEnumTransactionStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTransactionStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTransactionStatusFilter<$PrismaModel>;
};
export type NestedEnumNotificationTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | Prisma.EnumNotificationTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumNotificationTypeNullableFilter<$PrismaModel> | $Enums.NotificationType | null;
};
export type NestedEnumNotificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | Prisma.EnumNotificationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationStatus[] | Prisma.ListEnumNotificationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationStatus[] | Prisma.ListEnumNotificationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationStatusFilter<$PrismaModel> | $Enums.NotificationStatus;
};
export type NestedEnumNotificationTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | Prisma.EnumNotificationTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.NotificationType[] | Prisma.ListEnumNotificationTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumNotificationTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumNotificationTypeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumNotificationTypeNullableFilter<$PrismaModel>;
};
export type NestedJsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | Prisma.EnumNotificationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.NotificationStatus[] | Prisma.ListEnumNotificationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.NotificationStatus[] | Prisma.ListEnumNotificationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.NotificationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumNotificationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumNotificationStatusFilter<$PrismaModel>;
};
export type NestedEnumEncryptionTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EncryptionType | Prisma.EnumEncryptionTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.EncryptionType[] | Prisma.ListEnumEncryptionTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.EncryptionType[] | Prisma.ListEnumEncryptionTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumEncryptionTypeNullableFilter<$PrismaModel> | $Enums.EncryptionType | null;
};
export type NestedEnumAuthMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethod | Prisma.EnumAuthMethodFieldRefInput<$PrismaModel> | null;
    in?: $Enums.AuthMethod[] | Prisma.ListEnumAuthMethodFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.AuthMethod[] | Prisma.ListEnumAuthMethodFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumAuthMethodNullableFilter<$PrismaModel> | $Enums.AuthMethod | null;
};
export type NestedEnumEncryptionTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EncryptionType | Prisma.EnumEncryptionTypeFieldRefInput<$PrismaModel> | null;
    in?: $Enums.EncryptionType[] | Prisma.ListEnumEncryptionTypeFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.EncryptionType[] | Prisma.ListEnumEncryptionTypeFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumEncryptionTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.EncryptionType | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumEncryptionTypeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumEncryptionTypeNullableFilter<$PrismaModel>;
};
export type NestedEnumAuthMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethod | Prisma.EnumAuthMethodFieldRefInput<$PrismaModel> | null;
    in?: $Enums.AuthMethod[] | Prisma.ListEnumAuthMethodFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.AuthMethod[] | Prisma.ListEnumAuthMethodFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumAuthMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.AuthMethod | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumAuthMethodNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumAuthMethodNullableFilter<$PrismaModel>;
};
export type NestedEnumTestProviderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TestProviderType | Prisma.EnumTestProviderTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TestProviderType[] | Prisma.ListEnumTestProviderTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TestProviderType[] | Prisma.ListEnumTestProviderTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTestProviderTypeFilter<$PrismaModel> | $Enums.TestProviderType;
};
export type NestedEnumTestProviderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TestProviderType | Prisma.EnumTestProviderTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.TestProviderType[] | Prisma.ListEnumTestProviderTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TestProviderType[] | Prisma.ListEnumTestProviderTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTestProviderTypeWithAggregatesFilter<$PrismaModel> | $Enums.TestProviderType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTestProviderTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTestProviderTypeFilter<$PrismaModel>;
};
export type NestedJsonFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
