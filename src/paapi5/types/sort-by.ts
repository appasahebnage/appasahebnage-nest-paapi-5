export const SortBy = {
  AvgCustomerReviews: "AvgCustomerReviews",
  Featured: "Featured",
  NewestArrivals: "NewestArrivals",
  PriceHighToLow: "Price:HighToLow",
  PriceLowToHigh: "Price:LowToHigh",
  Relevance: "Relevance",
};

export type SortBy = (typeof SortBy)[keyof typeof SortBy];
