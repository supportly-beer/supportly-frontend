import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StatsResultModel} from "../models/statsResult.model";
import {BACKEND_URL} from "../app.config";

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getStats(start: number, end: number): Observable<StatsResultModel> {
    return this.httpClient.get<StatsResultModel>(`${BACKEND_URL}/ticket/statistics/agent?startDate=${start}&endDate=${end}`, {
      headers: {"Authorization": "Bearer " + localStorage.getItem("accessToken")}
    });
  }
}
