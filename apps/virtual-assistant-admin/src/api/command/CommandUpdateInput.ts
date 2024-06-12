import { ResponseUpdateManyWithoutCommandsInput } from "./ResponseUpdateManyWithoutCommandsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommandUpdateInput = {
  commandText?: string | null;
  responses?: ResponseUpdateManyWithoutCommandsInput;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
