import { JsonValue } from "type-fest";
import { Response } from "../response/Response";
import { User } from "../user/User";

export type Command = {
  arguments: JsonValue;
  commandText: string | null;
  createdAt: Date;
  id: string;
  isCompleted: boolean | null;
  responses?: Array<Response>;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
