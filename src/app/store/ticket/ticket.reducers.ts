import {TicketState} from "./ticketState.interface";
import {createReducer, on} from "@ngrx/store";
import * as TicketActions from "./ticket.actions";

export const initialState: TicketState = {
  isLoading: false,
  error: null,
  page: null,
  count: null,
  tickets: null,
  ticket: null,
  identifier: null,
}

export const ticketReducer = createReducer(
  initialState,
  on(TicketActions.fetchAllTickets, (state, {page, count}) => ({
    ...state,
    isLoading: true,
    page: page,
    count: count
  })),
  on(TicketActions.fetchUserTickets, (state, {page, count}) => ({
    ...state,
    isLoading: true,
    page: page,
    count: count
  })),
  on(TicketActions.fetchTicketsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    tickets: action.tickets
  })),
  on(TicketActions.fetchTicket, (state, {identifier}) => ({
    ...state,
    isLoading: true,
    identifier: identifier
  })),
  on(TicketActions.fetchTicketSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    ticket: action.ticket
  })),
  on(TicketActions.fetchTicketFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error
  })),
)
