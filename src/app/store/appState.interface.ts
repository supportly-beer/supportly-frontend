import {UserState} from "./user/userState.interface";
import {LoginState} from "./login/loginState.interface";
import {SearchState} from "./search/searchState.interface";
import {StatsState} from "./stats/statsState.interface";
import {TicketState} from "./ticket/ticketState.interface";

export interface AppState {
  user: UserState;
  login: LoginState;
  search: SearchState;
  stats: StatsState;
  ticket: TicketState;
}
