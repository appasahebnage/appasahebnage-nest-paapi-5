import { Condition } from "./condition";
import { GetItemsResource } from "./get-item-resource";
import { ItemIdType } from "./item-id-type";
import { Merchant } from "./merchant";
import { OfferCount } from "./offer-count";
import { PartnerType } from "./partner-type";

export type GetItemsRequest = {
  Condition?: Condition;
  CurrencyOfPreference?: string;
  ItemIds?: string[];
  ItemIdType?: ItemIdType;
  LanguagesOfPreference?: string[];
  Marketplace?: string;
  Merchant?: Merchant;
  OfferCount?: OfferCount;
  PartnerTag?: string;
  PartnerType?: PartnerType;
  Properties?: object;
  Resources?: GetItemsResource[];
};
