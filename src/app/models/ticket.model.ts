import {UserModel} from "./user.model";
import {TicketState} from "./ticketState.enum";
import {TicketUrgency} from "./ticketUrgency.enum";

export class TicketModel {
  constructor(
    public identifier: string,
    public title: string,
    public description: string,
    public createdAt: number,
    public closedAt: number,
    public updatedAt: number,
    public creator: UserModel | null,
    public assignee: UserModel | null,
    public state: TicketState,
    public urgency: TicketUrgency
  ) {
  }
}
