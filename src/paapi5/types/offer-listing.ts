import { OfferAvailability } from "./offer-availability";
import { OfferCondition } from "./offer-condition";
import { OfferDeliveryInfo } from "./offer-delivery-info";
import { OfferLoyaltyPoints } from "./offer-loyalty-points";
import { OfferMerchantInfo } from "./offer-merchant-info";
import { OfferPrice } from "./offer-price";
import { OfferProgramEligibility } from "./offer-program-eligibility";
import { OfferPromotion } from "./offer-promotion";

export type OfferListing = {
  Availability?: OfferAvailability;
  Condition?: OfferCondition;
  DeliveryInfo?: OfferDeliveryInfo;
  Id?: string;
  IsBuyBoxWinner?: boolean;
  LoyaltyPoints?: OfferLoyaltyPoints;
  MerchantInfo?: OfferMerchantInfo;
  Price?: OfferPrice;
  ProgramEligibility?: OfferProgramEligibility;
  Promotions?: OfferPromotion[];
  SavingBasis?: OfferPrice;
  ViolatesMAP?: boolean;
};
