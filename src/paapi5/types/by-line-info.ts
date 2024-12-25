import { Contributor } from "./contributor";
import { SingleStringValuedAttribute } from "./single-string-valued-attribute";

export type ByLineInfo = {
  Brand?: SingleStringValuedAttribute;
  Contributors?: Contributor[];
  Manufacturer?: SingleStringValuedAttribute;
};
