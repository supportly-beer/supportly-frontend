import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TicketModel} from "../models/ticket.model";
import {Observable} from "rxjs";
import {BACKEND_URL} from "../app.config";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(
    private httpClient: HttpClient
  ) {

  }

  getTicket(identifier: string): Observable<TicketModel> {
    return this.httpClient.get<TicketModel>(`${BACKEND_URL}/ticket/${identifier}`, {
      headers: {"Authorization": "Bearer " + localStorage.getItem("accessToken")}
    });
  }

  getAllTickets(page: number, count: number): Observable<TicketModel[]> {
    return this.httpClient.get<TicketModel[]>(`${BACKEND_URL}/ticket/all?start=${page}&limit=${count}`, {
      headers: {"Authorization": "Bearer " + localStorage.getItem("accessToken")}
    });
  }

  getUserTickets(page: number, count: number): Observable<TicketModel[]> {
    return this.httpClient.get<TicketModel[]>(`${BACKEND_URL}/ticket/my?start=${page}&limit=${count}`, {
      headers: {"Authorization": "Bearer " + localStorage.getItem("accessToken")}
    });
  }
}
