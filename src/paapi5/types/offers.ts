import { OfferListing } from "./offer-listing";
import { OfferSummary } from "./offer-summary";

export type Offers = {
  Listings?: OfferListing[];
  Summaries?: OfferSummary[];
};
