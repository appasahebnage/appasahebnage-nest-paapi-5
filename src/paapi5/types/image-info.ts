import { ByLineInfo } from "./by-line-info";
import { Classifications } from "./classifications";
import { ContentInfo } from "./content-info";
import { ContentRating } from "./content-rating";
import { ExternalIds } from "./external-ids";
import { ManufactureInfo } from "./manufacture-info";
import { MultiValuedAttribute } from "./multi-valued-attribute";
import { ProductInfo } from "./product-info";
import { SingleStringValuedAttribute } from "./single-string-valued-attribute";
import { TechnicalInfo } from "./technical-info";
import { TradeInInfo } from "./traded-in-info";

export type ItemInfo = {
  ByLineInfo?: ByLineInfo;
  Classifications?: Classifications;
  ContentInfo?: ContentInfo;
  ContentRating?: ContentRating;
  ExternalIds?: ExternalIds;
  Features?: MultiValuedAttribute;
  ManufactureInfo?: ManufactureInfo;
  ProductInfo?: ProductInfo;
  TechnicalInfo?: TechnicalInfo;
  Title?: SingleStringValuedAttribute;
  TradeInInfo?: TradeInInfo;
};
