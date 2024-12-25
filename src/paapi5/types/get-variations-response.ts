import { ErrorData } from "./error-data";
import { VariationsResult } from "./variations-result";

export type GetVariationsResponse = {
  Errors: ErrorData[];
  VariationsResult: VariationsResult;
};
