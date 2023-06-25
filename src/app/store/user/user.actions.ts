import {createAction, props} from "@ngrx/store";
import {UserModel} from "../../models/user.model";
import {HttpErrorResponse} from "@angular/common/http";
import {UserRoleEnum} from "../../models/userRole.enum";

export const getUser = createAction("[User] Get User");
export const getUserSuccess = createAction("[User] Get User Success", props<{ user: UserModel }>());
export const userFailure = createAction("[User] Get User Failure", props<{ error: HttpErrorResponse }>());
export const enableTwofa = createAction("[User] Enable Twofa");
export const enableTwofaSuccess = createAction("[User] Enable Twofa Success", props<{ qrCode: string }>());
export const disableTwofa = createAction("[User] Disable Twofa");
export const uploadAvatar = createAction("[User] Upload Avatar", props<{ avatar: File }>());
export const updateUser = createAction("[User] Update User", props<{
  firstName: string | null,
  lastName: string | null,
  password: string | null
}>());
export const getAllUsers = createAction("[User] Get All Users", props<{ page: number, count: number }>());
export const getAllUsersSuccess = createAction("[User] Get All Users Success", props<{ users: UserModel[] | null }>());
export const updateRole = createAction("[User] Update Role", props<{ id: number, role: UserRoleEnum }>());
