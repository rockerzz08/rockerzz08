import { InputJsonValue } from "../../types";
import { ResponseUpdateManyWithoutCommandsInput } from "./ResponseUpdateManyWithoutCommandsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommandUpdateInput = {
  arguments?: InputJsonValue;
  commandText?: string | null;
  isCompleted?: boolean | null;
  responses?: ResponseUpdateManyWithoutCommandsInput;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
