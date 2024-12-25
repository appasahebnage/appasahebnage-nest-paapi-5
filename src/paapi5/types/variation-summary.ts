import { Price } from "./price";
import { VariationDimension } from "./variation-dimension";

export type VariationSummary = {
  PageCount: number;
  Price: Price;
  VariationCount: number;
  VariationDimensions: VariationDimension[];
};
