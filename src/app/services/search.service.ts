import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {TicketSearchResultModel} from "../models/ticketSearchResult.model";
import {HttpClient} from "@angular/common/http";
import {SearchResultModel} from "../models/searchResult.model";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl: string = "http://localhost:8080"

  constructor(
    private httpClient: HttpClient
  ) {
  }

  search(limit: number, query: string): Observable<SearchResultModel> {
    return this.httpClient.get<SearchResultModel>(`${this.apiUrl}/ticket/search?limit=${limit}&query=${query}`, {
      headers: {"Authorization": "Bearer " + localStorage.getItem("accessToken")}
    });
  }
}
