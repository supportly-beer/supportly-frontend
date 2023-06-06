import {TicketSearchResultModel} from "./ticketSearchResult.model";

export class SearchResultModel {
  constructor(
    public query: string,
    public resultCount: number,
    public results: TicketSearchResultModel[],
    public timeTook: number
  ) {
  }
}
