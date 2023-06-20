import {createAction, props} from "@ngrx/store";
import {TicketModel} from "../../models/ticket.model";
import {HttpErrorResponse} from "@angular/common/http";
import {TicketUrgencyEnum} from "../../models/ticketUrgency.enum";
import {TicketStateEnum} from "../../models/ticketState.enum";

export const fetchAllTickets = createAction("[Ticket] Fetch All Tickets", props<{ page: number, count: number }>());
export const fetchUserTickets = createAction("[Ticket] Fetch User Tickets", props<{ page: number, count: number }>());
export const fetchTicketsSuccess = createAction("[Ticket] Fetch Tickets Success", props<{
  tickets: TicketModel[] | null,
}>());

export const fetchTicket = createAction("[Ticket] Fetch Ticket", props<{ identifier: string }>());
export const fetchMyTicket = createAction("[Ticket] Fetch My Ticket", props<{ identifier: string }>());
export const fetchTicketSuccess = createAction("[Ticket] Fetch Ticket Success", props<{
  ticket: TicketModel | null,
}>());

export const fetchTicketFailure = createAction("[Ticket] Fetch Ticket / Tickets Error", props<{
  error: HttpErrorResponse | null
}>());

export const updateTicket = createAction("[Ticket] Update Ticket", props<{
  identifier: string,
  ticketUrgency: TicketUrgencyEnum | null,
  ticketState: TicketStateEnum | null,
}>());

export const assignTicket = createAction("[Ticket] Assign Ticket", props<{
  identifier: string,
}>());
export const createTicket = createAction("[Ticket] Create Ticket", props<{
  title: string,
  description: string,
}>());
export const createTicketSuccess = createAction("[Ticket] Create Ticket Success");
