import { SearchRefinementBin } from "./search-refinement-bin";

export type SearchRefinement = {
  Id: string;
  DisplayName: string;
  Bins: SearchRefinementBin[];
};
