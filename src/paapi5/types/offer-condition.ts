import { OfferConditionNote } from "./offer-condition-note";
import { OfferSubCondition } from "./offer-sub-condition";

export type OfferCondition = {
  DisplayValue?: string;
  Label?: string;
  Locale?: string;
  Value?: string;
  SubCondition?: OfferSubCondition;
  ConditionNote?: OfferConditionNote;
};
