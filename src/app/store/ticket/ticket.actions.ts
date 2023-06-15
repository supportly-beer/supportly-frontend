import {createAction, props} from "@ngrx/store";
import {TicketModel} from "../../models/ticket.model";
import {HttpErrorResponse} from "@angular/common/http";

export const fetchAllTickets = createAction("[Ticket] Fetch All Tickets", props<{ page: number, count: number }>());
export const fetchUserTickets = createAction("[Ticket] Fetch User Tickets", props<{ page: number, count: number }>());
export const fetchTicketsSuccess = createAction("[Ticket] Fetch Tickets Success", props<{
  tickets: TicketModel[] | null,
}>());

export const fetchTicket = createAction("[Ticket] Fetch Ticket", props<{ identifier: string }>());
export const fetchTicketSuccess = createAction("[Ticket] Fetch Ticket Success", props<{
  ticket: TicketModel | null,
}>());

export const fetchTicketFailure = createAction("[Ticket] Fetch Ticket / Tickets Error", props<{
  error: HttpErrorResponse | null
}>());
