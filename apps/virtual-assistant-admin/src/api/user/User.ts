import { Command } from "../command/Command";
import { JsonValue } from "type-fest";
import { Task } from "../task/Task";

export type User = {
  commands?: Array<Command>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  tasks?: Array<Task>;
  updatedAt: Date;
  username: string;
};
