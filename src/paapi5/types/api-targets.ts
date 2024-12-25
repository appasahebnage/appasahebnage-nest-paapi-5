export const ApiTarget = {
  getItems: "com.amazon.paapi5.v1.ProductAdvertisingAPIv1.GetItems",
  searchItems: "com.amazon.paapi5.v1.ProductAdvertisingAPIv1.SearchItems",
  getBrowseNodes: "com.amazon.paapi5.v1.ProductAdvertisingAPIv1.GetBrowseNodes",
  getVariations: "com.amazon.paapi5.v1.ProductAdvertisingAPIv1.GetVariations",
};

export type ApiTarget = (typeof ApiTarget)[keyof typeof ApiTarget];
