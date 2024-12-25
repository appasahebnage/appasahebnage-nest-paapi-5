import { OfferCondition } from "./offer-condition";
import { OfferPrice } from "./offer-price";

export type OfferSummary = {
  Condition?: OfferCondition;
  HighestPrice?: OfferPrice;
  LowestPrice?: OfferPrice;
  OfferCount?: number;
};
