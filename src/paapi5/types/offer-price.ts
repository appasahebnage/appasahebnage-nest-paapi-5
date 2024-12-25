import { OfferSavings } from "./offer-savings";
import { PriceType } from "./offer-type";

export type OfferPrice = {
  Amount?: number;
  Currency?: string;
  DisplayAmount?: string;
  PricePerUnit?: number;
  PriceType?: PriceType;
  PriceTypeLabel?: string;
  Savings?: OfferSavings;
};
