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
      ofType(LoginActions.preLogin),
      mergeMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map(token => {
            localStorage.setItem('accessToken', token.token);
            return LoginActions.loginSuccess();
          }),
          catchError(error => {
            if (!error) {
              return of(LoginActions.loginFailure({error}))
            }

            if (error.status == 401) {
              localStorage.setItem("twofaToken", error.error.token)
              localStorage.setItem("email", action.email)

              this.router.navigate(["/auth/twofa"]).then()

              return of(LoginActions.loginFailure({error}))
            }

            return of(LoginActions.loginFailure({error}))
          })
        )
      })));

  loginTwofa$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.loginTwofa),
      mergeMap((action) => {
        return this.authService.loginTwofa(action.email, action.code).pipe(
          map(token => {
            localStorage.setItem('accessToken', token.token);
            return LoginActions.loginSuccess();
          }),
          catchError(error => {
            return of(LoginActions.loginFailure({error}))
          })
        )
      })
    ))

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.loginSuccess),
      mergeMap(() => {
        this.router.navigate(["/dashboard"]).then()
        this.store.dispatch(UserActions.getUser())

        return of(LoginActions.loginCleanup())
      })
    ))

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.logout),
      mergeMap(() => {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("twofaToken")
        localStorage.removeItem("email")

        this.router.navigate(["/auth/login"]).then()

        return of(LoginActions.loginCleanup())
      })
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
