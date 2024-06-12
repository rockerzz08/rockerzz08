import { SortOrder } from "../../util/SortOrder";

export type CommandOrderByInput = {
  commandText?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
