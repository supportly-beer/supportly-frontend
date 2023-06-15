import {TicketModel} from "../../models/ticket.model";
import {HttpErrorResponse} from "@angular/common/http";

export interface TicketState {
  isLoading: boolean;
  error: HttpErrorResponse | null;
  page: number | null;
  count: number | null;
  tickets: TicketModel[] | null;
  ticket: TicketModel | null;
  identifier: string | null;
}
