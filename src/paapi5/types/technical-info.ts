import { MultiValuedAttribute } from "./multi-valued-attribute";
import { SingleStringValuedAttribute } from "./single-string-valued-attribute";

export type TechnicalInfo = {
  EnergyEfficiencyClass?: SingleStringValuedAttribute;
  Formats?: MultiValuedAttribute;
};
