import {LoginState} from "./loginState.interface";
import {createReducer, on} from "@ngrx/store";
import * as LoginActions from "./login.actions";

export const initialState: LoginState = {
  isLoading: false,
  error: null,
  email: null,
  password: null,
  code: null
}

export const loginReducer = createReducer(
  initialState,
  on(LoginActions.preLogin, (state, {email, password}) => ({
    ...state,
    isLoading: true,
    email: email,
    password: password
  })),
  on(LoginActions.loginTwofa, (state, {email, code}) => ({
    ...state,
    isLoading: true,
    email: email,
    code: code
  })),
  on(LoginActions.loginSuccess, (state) => ({
    ...state,
    isLoading: false,
    email: null,
    password: null
  })),
  on(LoginActions.loginCleanup, (state) => ({
    ...state,
    isLoading: false,
    email: null,
    password: null
  })),
  on(LoginActions.loginFailure, (state, {error}) => ({
    ...state,
    isLoading: false,
    error: error,
    email: null,
    password: null
  })),
  on(LoginActions.logout, () => initialState),
)
