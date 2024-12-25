import { OfferPrice } from "./offer-price";
import { UnitBasedAttribute } from "./unit-based-attribute";

export type DurationPrice = {
  Price?: OfferPrice;
  Duration?: UnitBasedAttribute;
};
