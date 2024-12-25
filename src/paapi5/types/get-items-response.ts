import { ErrorData } from "./error-data";
import { ItemsResult } from "./items-result";

export type GetItemsResponse = {
  Errors?: ErrorData[];
  ItemsResult?: ItemsResult;
};
