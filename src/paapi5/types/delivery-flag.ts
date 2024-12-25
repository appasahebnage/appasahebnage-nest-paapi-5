export enum DeliveryFlag {
  AmazonGlobal = "AmazonGlobal",
  FreeShipping = "FreeShipping",
  FulfilledByAmazon = "FulfilledByAmazon",
  Prime = "Prime",
}

export type DeliveryFlagEnum = keyof typeof DeliveryFlag;
