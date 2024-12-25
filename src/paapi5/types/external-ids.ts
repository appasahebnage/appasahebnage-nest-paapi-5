import { MultiValuedAttribute } from "./multi-valued-attribute";

export type ExternalIds = {
  EANs?: MultiValuedAttribute;
  ISBNs?: MultiValuedAttribute;
  UPCs?: MultiValuedAttribute;
};
