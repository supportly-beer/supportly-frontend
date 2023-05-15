import {UserState} from "./user/userState.interface";
import {LoginState} from "./login/loginState.interface";

export interface AppState {
  user: UserState;
  login: LoginState;
}
