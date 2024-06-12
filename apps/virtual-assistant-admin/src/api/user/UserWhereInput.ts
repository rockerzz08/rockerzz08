import { CommandListRelationFilter } from "../command/CommandListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type UserWhereInput = {
  commands?: CommandListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  tasks?: TaskListRelationFilter;
  username?: StringFilter;
};
