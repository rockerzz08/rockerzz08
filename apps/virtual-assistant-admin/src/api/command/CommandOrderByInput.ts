import { SortOrder } from "../../util/SortOrder";

export type CommandOrderByInput = {
  arguments?: SortOrder;
  commandText?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isCompleted?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
