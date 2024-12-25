import { BrowseNodeAncestor } from "./browse-node-ancestor";
import { BrowseNodeChild } from "./browse-node-child";

export type BrowseNode = {
    Ancestor?: BrowseNodeAncestor;
    Children?: BrowseNodeChild[];
    ContextFreeName?: string;
    DisplayName?: string;
    Id?: string;
    IsRoot?: boolean;
    SalesRank?: number;
  };