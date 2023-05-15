import {createAction, props} from "@ngrx/store";
import {HttpErrorResponse} from "@angular/common/http";

export const login = createAction("[Login] Login", props<{ email: string, password: string }>());
export const loginSuccess = createAction("[Login] Login Success");
export const loginFailure = createAction("[Login] Login Failure", props<{ error: HttpErrorResponse }>());
export const logout = createAction("[Login] Logout");
