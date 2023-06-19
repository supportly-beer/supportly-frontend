import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {UserModel} from "../../../../models/user.model";
import {TicketModel} from "../../../../models/ticket.model";
import {select, Store} from "@ngrx/store";
import {userErrorSelector, userIsLoadingSelector, userSelector} from "../../../../store/user/user.selectors";
import {ticketErrorSelector, ticketIsLoadingSelector, ticketSelector} from "../../../../store/ticket/ticket.selectors";
import * as TicketActions from "../../../../store/ticket/ticket.actions"
import {AppState} from "../../../../store/appState.interface";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: []
})
export class TicketComponent implements OnInit {

  userIsLoading$: Observable<boolean>;
  userError$: Observable<HttpErrorResponse | null>;
  user$: Observable<UserModel | null>;

  ticketIsLoading$: Observable<boolean>;
  ticketError$: Observable<HttpErrorResponse | null>;
  ticket$: Observable<TicketModel | null>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.userIsLoading$ = this.store.pipe(select(userIsLoadingSelector));
    this.userError$ = this.store.pipe(select(userErrorSelector));
    this.user$ = this.store.pipe(select(userSelector));

    this.ticketIsLoading$ = this.store.pipe(select(ticketIsLoadingSelector));
    this.ticketError$ = this.store.pipe(select(ticketErrorSelector));
    this.ticket$ = this.store.pipe(select(ticketSelector));
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let identifier = params["identifier"]

      if (!identifier) {
        this.router.navigate(["/ticket"]).then()
      }

      this.store.dispatch(TicketActions.fetchTicket({
        identifier: identifier
      }))
    })
  }
}
