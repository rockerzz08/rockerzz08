import { Command } from "../command/Command";

export type Response = {
  command?: Command | null;
  createdAt: Date;
  id: string;
  responseText: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
