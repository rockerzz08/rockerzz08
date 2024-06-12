import { ResponseCreateNestedManyWithoutCommandsInput } from "./ResponseCreateNestedManyWithoutCommandsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommandCreateInput = {
  commandText?: string | null;
  responses?: ResponseCreateNestedManyWithoutCommandsInput;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
