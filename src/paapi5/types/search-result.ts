import { Item } from "./item";
import { SearchRefinements } from "./search-refinements";

export interface SearchResult {
  TotalResultCount?: number;
  SearchURL?: string;
  Items?: Item[];
  SearchRefinements?: SearchRefinements;
}
