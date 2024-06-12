import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ResponseListRelationFilter } from "../response/ResponseListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommandWhereInput = {
  arguments?: JsonFilter;
  commandText?: StringNullableFilter;
  id?: StringFilter;
  isCompleted?: BooleanNullableFilter;
  responses?: ResponseListRelationFilter;
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
