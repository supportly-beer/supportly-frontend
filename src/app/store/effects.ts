import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "../services/auth.service";
import * as LoginActions from "./login/login.actions";
import {catchError, map, mergeMap, of} from "rxjs";
import * as UserActions from "./user/user.actions";
import {Router} from "@angular/router";
import {AppState} from "./appState.interface";
import {Store} from "@ngrx/store";
import {UserService} from "../services/user.service";

@Injectable()
export class Effects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.login),
      mergeMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map(token => {
            localStorage.setItem('accessToken', token.accessToken);

            this.router.navigate(["/dashboard"]).then();
            this.store.dispatch(UserActions.getUser())

            return LoginActions.loginSuccess();
          }),
          catchError(error => of(LoginActions.loginFailure({error})))
        )
      })));

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.logout),
    ));

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUser),
      mergeMap(() => {
        return this.userService.getUser().pipe(
          map(user => UserActions.getUserSuccess({user})),
          catchError(error => of(UserActions.getUserFailure({error})))
        )
      })));

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private store: Store<AppState>
  ) {
  }
}
