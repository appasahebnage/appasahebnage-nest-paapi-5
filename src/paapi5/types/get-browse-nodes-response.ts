import { BrowseNodesResult } from "./browse-nodes-result";
import { ErrorData } from "./error-data";

export type GetBrowseNodesResponse = {
  BrowseNodesResult?: BrowseNodesResult;
  Errors?: ErrorData[];
};
