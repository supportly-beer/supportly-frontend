import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthService} from "../services/auth.service";
import * as LoginActions from "./login/login.actions";
import {catchError, map, mergeMap, of} from "rxjs";
import * as UserActions from "./user/user.actions";
import * as SearchActions from "./search/search.actions";
import * as StatsActions from "./stats/stats.actions";
import * as TicketActions from "./ticket/ticket.actions";
import {Router} from "@angular/router";
import {AppState} from "./appState.interface";
import {Store} from "@ngrx/store";
import {UserService} from "../services/user.service";
import {SearchService} from "../services/search.service";
import {StatsService} from "../services/stats.service";
import {TicketService} from "../services/ticket.service";

@Injectable()
export class Effects {

  $updateRole = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateRole),
      mergeMap((action) => {
        return this.userService.updateRole(action.id, action.role).pipe(
          map(operationSuccess => UserActions.getAllUsers({page: 0, count: 999999999})),
          catchError(error => of(UserActions.userFailure({error})))
        )
      })
    ))

  $getAllUsers = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getAllUsers),
      mergeMap((action) => {
        return this.userService.getAllUsers(action.page, action.count).pipe(
          map(users => UserActions.getAllUsersSuccess({users})),
          catchError(error => of(UserActions.userFailure({error})))
        )
      })
    ))

  $updateUser = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUser),
      mergeMap((action) => {
        return this.userService.updateUser(action.firstName, action.lastName, action.password).pipe(
          map(operationSuccess => UserActions.getUser()),
          catchError(error => of(UserActions.userFailure({error})))
        )
      })
    ))

  $uploadAvatar = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.uploadAvatar),
      mergeMap((action) => {
        return this.userService.uploadAvatar(action.avatar).pipe(
          map(operationSuccess => UserActions.getUser()),
          catchError(error => of(UserActions.userFailure({error})))
        )
      })
    ))

  $enableTwofa = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.enableTwofa),
      mergeMap((action) => {
        return this.userService.enableTwofa().pipe(
          map(twofaEnabledModel => UserActions.enableTwofaSuccess({qrCode: twofaEnabledModel.qrCode})),
          catchError(error => of(UserActions.userFailure({error})))
        )
      })
    ))

  $disableTwofa = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.disableTwofa),
      mergeMap((action) => {
        return this.userService.disableTwofa().pipe(
          map(operationSuccess => UserActions.getUser()),
          catchError(error => of(UserActions.userFailure({error})))
        )
      })
    ))

  $createTicket = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketActions.createTicket),
      mergeMap((action) => {
        return this.ticketService.createTicket(action.title, action.description).pipe(
          map(ticketCreatedModel => {
            this.router.navigate([`/ticket/${ticketCreatedModel.identifier}`]).then()
            return TicketActions.createTicketSuccess()
          }),
          catchError(error => of(TicketActions.fetchTicketFailure({error})))
        )
      })
    ))

  $updateTicket = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketActions.updateTicket),
      mergeMap((action) => {
        return this.ticketService.updateTicket(action.identifier, action.ticketUrgency, action.ticketState).pipe(
          map(operationSuccess => TicketActions.fetchTicket({identifier: action.identifier})),
          catchError(error => of(TicketActions.fetchTicketFailure({error})))
        )
      })
    ))

  $assignTicket = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketActions.assignTicket),
      mergeMap((action) => {
        return this.ticketService.assignTicket(action.identifier).pipe(
          map(operationSuccess => TicketActions.fetchTicket({identifier: action.identifier})),
          catchError(error => of(TicketActions.fetchTicketFailure({error})))
        )
      })
    ))

  $allTickets = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketActions.fetchAllTickets),
      mergeMap((action) => {
        return this.ticketService.getAllTickets(action.page, action.count).pipe(
          map(tickets => TicketActions.fetchTicketsSuccess({tickets})),
          catchError(error => of(TicketActions.fetchTicketFailure({error})))
        )
      })
    ))

  $userTickets = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketActions.fetchUserTickets),
      mergeMap((action) => {
        return this.ticketService.getUserTickets(action.page, action.count).pipe(
          map(tickets => TicketActions.fetchTicketsSuccess({tickets})),
          catchError(error => of(TicketActions.fetchTicketFailure({error})))
        )
      })
    ))

  $ticket = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketActions.fetchTicket),
      mergeMap((action) => {
        return this.ticketService.getTicket(action.identifier).pipe(
          map(ticket => TicketActions.fetchTicketSuccess({ticket})),
          catchError(error => of(TicketActions.fetchTicketFailure({error})))
        )
      })
    ))

  $myTicket = createEffect(() =>
    this.actions$.pipe(
      ofType(TicketActions.fetchMyTicket),
      mergeMap((action) => {
        return this.ticketService.getMyTicket(action.identifier).pipe(
          map(ticket => TicketActions.fetchTicketSuccess({ticket})),
          catchError(error => of(TicketActions.fetchTicketFailure({error})))
        )
      })
    ))

  $stats = createEffect(() =>
    this.actions$.pipe(
      ofType(StatsActions.fetchStats),
      mergeMap((action) => {
        return this.statsService.getStats(action.start, action.end).pipe(
          map(statsResult => StatsActions.fetchStatsSuccess({statsResult})),
          catchError(error => of(StatsActions.fetchStatsFailure({error})))
        )
      })
    ))

  $search = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.getResults),
      mergeMap((action) => {
        return this.searchService.search(action.limit, action.query).pipe(
          map(searchResult => SearchActions.getResultsSuccess({searchResult})),
          catchError(error => of(SearchActions.getResultsFailure({error})))
        )
      })
    ));

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

              return of(LoginActions.loginFailure({error: null}))
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
          catchError(error => of(UserActions.userFailure({error})))
        )
      })));

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private userService: UserService,
    private searchService: SearchService,
    private statsService: StatsService,
    private ticketService: TicketService,
    private router: Router,
    private store: Store<AppState>
  ) {
  }
}
