import { CommandWhereUniqueInput } from "../command/CommandWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ResponseWhereInput = {
  command?: CommandWhereUniqueInput;
  id?: StringFilter;
  responseText?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
