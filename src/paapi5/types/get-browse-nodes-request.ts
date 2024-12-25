import { GetBrowseNodesResource } from "./get-browse-nodes-resource";
import { PartnerType } from "./partner-type";

export type GetBrowseNodesRequest = {
  BrowseNodeIds?: string[];
  LanguagesOfPreference?: string[];
  Marketplace?: string;
  PartnerTag?: string;
  PartnerType?: PartnerType;
  Resources?: GetBrowseNodesResource[];
};
