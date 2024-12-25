import { DimensionBasedAttribute } from "./dimension-based-attribute";
import { SingleBooleanValuedAttribute } from "./single-boolean-valued-attribute";
import { SingleIntegerValuedAttribute } from "./single-integer-valued-attribute";
import { SingleStringValuedAttribute } from "./single-string-valued-attribute";

export type ProductInfo = {
  Color?: SingleStringValuedAttribute;
  IsAdultProduct?: SingleBooleanValuedAttribute;
  ItemDimensions?: DimensionBasedAttribute;
  ReleaseDate?: SingleStringValuedAttribute;
  Size?: SingleStringValuedAttribute;
  UnitCount?: SingleIntegerValuedAttribute;
};
