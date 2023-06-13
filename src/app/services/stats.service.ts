import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StatsResultModel} from "../models/statsResult.model";

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private apiUrl: string = "http://jevzo.com:8080"

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getStats(start: number, end: number): Observable<StatsResultModel> {
    return this.httpClient.get<StatsResultModel>(`${this.apiUrl}/ticket/statistics/agent?startDate=${start}&endDate=${end}`, {
      headers: {"Authorization": "Bearer " + localStorage.getItem("accessToken")}
    });
  }
}
