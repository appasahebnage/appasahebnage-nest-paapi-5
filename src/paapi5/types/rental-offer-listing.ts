import { DurationPrice } from "./duration-price";
import { OfferAvailability } from "./offer-availability";
import { OfferCondition } from "./offer-condition";
import { OfferDeliveryInfo } from "./offer-delivery-info";
import { OfferMerchantInfo } from "./offer-merchant-info";

export type RentalOfferListing = {
  Availability?: OfferAvailability;
  BasePrice?: DurationPrice;
  Condition?: OfferCondition;
  DeliveryInfo?: OfferDeliveryInfo;
  Id?: string;
  MerchantInfo?: OfferMerchantInfo;
};
