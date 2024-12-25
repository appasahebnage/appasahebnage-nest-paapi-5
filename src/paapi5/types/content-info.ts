import { Languages } from "./languages";
import { SingleIntegerValuedAttribute } from "./single-integer-valued-attribute";
import { SingleStringValuedAttribute } from "./single-string-valued-attribute";

export type ContentInfo = {
  Edition?: SingleStringValuedAttribute;
  Languages?: Languages;
  PagesCount?: SingleIntegerValuedAttribute;
  PublicationDate?: SingleStringValuedAttribute;
};
