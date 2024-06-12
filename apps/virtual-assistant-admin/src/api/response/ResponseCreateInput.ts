import { CommandWhereUniqueInput } from "../command/CommandWhereUniqueInput";

export type ResponseCreateInput = {
  command?: CommandWhereUniqueInput | null;
  responseText?: string | null;
  timestamp?: Date | null;
};
