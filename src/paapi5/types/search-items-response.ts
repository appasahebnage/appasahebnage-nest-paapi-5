import { SearchResult } from "./search-result";
import { ErrorData } from "./error-data";

export type SearchItemsResponse = {
  SearchResult?: SearchResult;
  Errors?: ErrorData[];
};
