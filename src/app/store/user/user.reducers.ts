import {UserState} from "./userState.interface";
import * as UserActions from "./user.actions";
import {createReducer, on} from "@ngrx/store";

export const initialState: UserState = {
  isLoading: false,
  error: null,
  user: null,
}

export const userReducer = createReducer(
  initialState,
  on(UserActions.getUser, (state) => ({...state, isLoading: true})),
  on(UserActions.getUserSuccess, (state, action) => ({...state, isLoading: false, user: action.user})),
  on(UserActions.getUserFailure, (state, action) => ({...state, isLoading: false, error: action.error})),
)
