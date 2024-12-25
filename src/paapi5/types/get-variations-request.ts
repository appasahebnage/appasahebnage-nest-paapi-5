import { Condition } from "./condition";
import { GetVariationsResource } from "./get-variations-resource";
import { Merchant } from "./merchant";
import { OfferCount } from "./offer-count";
import { PartnerType } from "./partner-type";

export type GetVariationsRequest = {
  ASIN?: string;
  Condition?: Condition;
  CurrencyOfPreference?: string;
  LanguagesOfPreference?: string[];
  Marketplace?: string;
  Merchant?: Merchant;
  OfferCount?: OfferCount;
  PartnerTag?: string;
  PartnerType?: PartnerType;
  Properties?: object;
  Resources?: GetVariationsResource[];
  VariationCount?: number;
  VariationPage?: number;
};
