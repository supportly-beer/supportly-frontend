import {createAction, props} from "@ngrx/store";
import {UserModel} from "../../models/user.model";
import {HttpErrorResponse} from "@angular/common/http";

export const getUser = createAction("[User] Get User");
export const getUserSuccess = createAction("[User] Get User Success", props<{ user: UserModel }>());
export const getUserFailure = createAction("[User] Get User Failure", props<{ error: HttpErrorResponse }>());
