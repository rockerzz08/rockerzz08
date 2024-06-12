import { SortOrder } from "../../util/SortOrder";

export type ResponseOrderByInput = {
  commandId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  responseText?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
