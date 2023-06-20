import {TicketModel} from "../../models/ticket.model";
import {HttpErrorResponse} from "@angular/common/http";
import {TicketStateEnum} from "../../models/ticketState.enum";
import {TicketUrgencyEnum} from "../../models/ticketUrgency.enum";

export interface TicketState {
  isLoading: boolean;
  error: HttpErrorResponse | null;
  page: number | null;
  count: number | null;
  tickets: TicketModel[] | null;
  ticket: TicketModel | null;
  identifier: string | null;
  ticketState: TicketStateEnum | null;
  ticketUrgency: TicketUrgencyEnum | null;
  title: string | null;
  description: string | null;
}
