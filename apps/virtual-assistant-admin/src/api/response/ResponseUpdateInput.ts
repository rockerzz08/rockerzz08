import { CommandWhereUniqueInput } from "../command/CommandWhereUniqueInput";

export type ResponseUpdateInput = {
  command?: CommandWhereUniqueInput | null;
  responseText?: string | null;
  timestamp?: Date | null;
};
