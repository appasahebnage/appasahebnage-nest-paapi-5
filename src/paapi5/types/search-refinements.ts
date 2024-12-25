import { SearchRefinement } from "./search-refinement";

export type SearchRefinements = {
  SearchIndex?: SearchRefinement;
  BrowseNode?: SearchRefinement;
  OtherRefinements?: SearchRefinement[];
};
