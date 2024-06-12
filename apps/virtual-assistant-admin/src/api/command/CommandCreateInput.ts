import { InputJsonValue } from "../../types";
import { ResponseCreateNestedManyWithoutCommandsInput } from "./ResponseCreateNestedManyWithoutCommandsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommandCreateInput = {
  arguments?: InputJsonValue;
  commandText?: string | null;
  isCompleted?: boolean | null;
  responses?: ResponseCreateNestedManyWithoutCommandsInput;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
