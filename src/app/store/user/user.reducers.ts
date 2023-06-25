import {UserState} from "./userState.interface";
import * as UserActions from "./user.actions";
import {createReducer, on} from "@ngrx/store";

export const initialState: UserState = {
  isLoading: false,
  error: null,
  user: null,
  twofaQrCode: null,
  avatar: null,
  firstName: null,
  lastName: null,
  password: null,
  page: 0,
  count: 0,
  users: null,
  id: 0,
  role: null
}

export const userReducer = createReducer(
  initialState,
  on(UserActions.getUser, (state) => ({...state, isLoading: true})),
  on(UserActions.getUserSuccess, (state, action) => ({...state, isLoading: false, user: action.user})),
  on(UserActions.userFailure, (state, action) => ({...state, isLoading: false, error: action.error})),
  on(UserActions.enableTwofa, (state) => ({...state, isLoading: true})),
  on(UserActions.enableTwofaSuccess, (state, action) => ({...state, isLoading: false, twofaQrCode: action.qrCode})),
  on(UserActions.disableTwofa, (state) => ({...state, isLoading: true})),
  on(UserActions.uploadAvatar, (state, {avatar}) => ({...state, isLoading: true, avatar: avatar})),
  on(UserActions.updateUser, (state, {firstName, lastName, password}) => ({
    ...state,
    isLoading: true,
    firstName: firstName ?? null,
    lastName: lastName ?? null,
    password: password ?? null
  })),
  on(UserActions.getAllUsers, (state, {page, count}) => ({...state, isLoading: true, page: page, count: count})),
  on(UserActions.getAllUsersSuccess, (state, {users}) => ({...state, isLoading: false, users: users})),
  on(UserActions.updateRole, (state, {id, role}) => ({...state, isLoading: true, id: id, role: role})),
)
