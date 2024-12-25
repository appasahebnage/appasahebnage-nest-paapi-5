export enum Condition {
  Any = "Any",
  Collectible = "Collectible",
  New = "New",
  Refurbished = "Refurbished",
  Used = "Used",
}

export type ConditionEnum = keyof typeof Condition;
