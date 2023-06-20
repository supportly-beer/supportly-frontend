import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TicketModel} from "../models/ticket.model";
import {Observable} from "rxjs";
import {BACKEND_URL} from "../app.config";
import {OperationSuccessModel} from "../models/operationSuccess.model";
import {TicketUrgencyEnum} from "../models/ticketUrgency.enum";
import {TicketStateEnum} from "../models/ticketState.enum";
import {TicketCreatedModel} from "../models/ticketCreated.model";

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

  getMyTicket(identifier: string): Observable<TicketModel> {
    return this.httpClient.get<TicketModel>(`${BACKEND_URL}/ticket/my/${identifier}`, {
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

  updateTicket(identifier: string, ticketUrgency: TicketUrgencyEnum | null, ticketState: TicketStateEnum | null): Observable<OperationSuccessModel> {
    return this.httpClient.post<OperationSuccessModel>(`${BACKEND_URL}/ticket/${identifier}/update`, {
      ticketUrgency: ticketUrgency ?? null,
      ticketState: ticketState ?? null
    }, {
      headers: {"Authorization": "Bearer " + localStorage.getItem("accessToken")}
    });
  }

  assignTicket(identifier: string): Observable<OperationSuccessModel> {
    return this.httpClient.post<OperationSuccessModel>(`${BACKEND_URL}/ticket/${identifier}/assign`, {}, {
      headers: {"Authorization": "Bearer " + localStorage.getItem("accessToken")}
    });
  }

  createTicket(title: string, description: string) {
    return this.httpClient.post<TicketCreatedModel>(`${BACKEND_URL}/ticket`, {
      title: title,
      description: description
    }, {
      headers: {"Authorization": "Bearer " + localStorage.getItem("accessToken")}
    });
  }
}
