import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ResponseListRelationFilter } from "../response/ResponseListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommandWhereInput = {
  commandText?: StringNullableFilter;
  id?: StringFilter;
  responses?: ResponseListRelationFilter;
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
