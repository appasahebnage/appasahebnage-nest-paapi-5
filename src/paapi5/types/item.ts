import { BrowseNodeInfo } from "./browse-node-info";
import { CustomerReviews } from "./customer-reviews";
import { Images } from "./images";
import { ItemInfo } from "./image-info";
import { Offers } from "./offers";
import { RentalOffers } from "./rental-offers";
import { VariationAttribute } from "./variation-attribute";

export interface Item {
  ASIN?: string;
  BrowseNodeInfo?: BrowseNodeInfo;
  CustomerReviews?: CustomerReviews;
  DetailPageURL?: string;
  Images?: Images;
  ItemInfo?: ItemInfo;
  Offers?: Offers;
  ParentASIN?: string;
  RentalOffers?: RentalOffers;
  Score?: number;
  VariationAttributes?: VariationAttribute[];
}
