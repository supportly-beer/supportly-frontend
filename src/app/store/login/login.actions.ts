import {createAction, props} from "@ngrx/store";
import {HttpErrorResponse} from "@angular/common/http";

export const preLogin = createAction("[Login] Pre Login", props<{ email: string, password: string }>());
export const loginTwofa = createAction("[Login] Login Twofa", props<{ email: string, code: string }>())
export const loginSuccess = createAction("[Login] Login Success");
export const loginCleanup = createAction("[Login] Login End")
export const loginFailure = createAction("[Login] Login Failure", props<{ error: HttpErrorResponse }>());
export const logout = createAction("[Login] Logout");
