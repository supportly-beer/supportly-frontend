import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {SearchResultModel} from "../models/searchResult.model";
import {BACKEND_URL} from "../app.config";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  search(limit: number, query: string): Observable<SearchResultModel> {
    return this.httpClient.get<SearchResultModel>(`${BACKEND_URL}/ticket/search?limit=${limit}&query=${query}`, {
      headers: {"Authorization": "Bearer " + localStorage.getItem("accessToken")}
    });
  }
}
