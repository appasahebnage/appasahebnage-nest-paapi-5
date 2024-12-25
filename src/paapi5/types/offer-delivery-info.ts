import { OfferShippingCharge } from "./offer-shipping-charge";

export type OfferDeliveryInfo = {
  IsAmazonFulfilled?: boolean;
  IsFreeShippingEligible?: boolean;
  IsPrimeEligible?: boolean;
  ShippingCharges?: OfferShippingCharge[];
};
