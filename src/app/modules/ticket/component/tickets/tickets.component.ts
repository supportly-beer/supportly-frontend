import {Component, OnInit} from "@angular/core";
import {TicketModel} from "../../../../models/ticket.model";
import {faFilter, faUser, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {UserModel} from "../../../../models/user.model";
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {select, Store} from "@ngrx/store";
import {userErrorSelector, userIsLoadingSelector, userSelector} from "../../../../store/user/user.selectors";
import {AppState} from "../../../../store/appState.interface";
import * as TicketActions from "../../../../store/ticket/ticket.actions";
import {
  ticketErrorSelector,
  ticketIsLoadingSelector,
  ticketSelector,
  ticketsSelector
} from "../../../../store/ticket/ticket.selectors";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: []
})
export class TicketsComponent implements OnInit {

  filterIcon: IconDefinition = faFilter;
  assignedIcon: IconDefinition = faUser;

  tickets: TicketModel[] = [];
  currentPage: number;
  itemsPerPage: number;
  totalItems: number = 0;

  onlyShowMine: boolean = false;

  userIsLoading$: Observable<boolean>;
  userError$: Observable<HttpErrorResponse | null>;
  user$: Observable<UserModel | null>;

  ticketIsLoading$: Observable<boolean>;
  ticketError$: Observable<HttpErrorResponse | null>;
  ticket$: Observable<TicketModel | null>;
  tickets$: Observable<TicketModel[] | null>;

  constructor(
    private store: Store<AppState>
  ) {
    this.userIsLoading$ = this.store.pipe(select(userIsLoadingSelector));
    this.userError$ = this.store.pipe(select(userErrorSelector));
    this.user$ = this.store.pipe(select(userSelector));

    this.ticketIsLoading$ = this.store.pipe(select(ticketIsLoadingSelector));
    this.ticketError$ = this.store.pipe(select(ticketErrorSelector));
    this.ticket$ = this.store.pipe(select(ticketSelector));
    this.tickets$ = this.store.pipe(select(ticketsSelector));

    this.currentPage = 1;
    this.itemsPerPage = 8;
  }

  ngOnInit() {
    this.fetchAllTickets(0, 999999999);

    this.tickets$.subscribe((tickets: TicketModel[] | null) => {
      this.updateTable(tickets || [])
    });
  }

  getNextPage(): void {
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  getPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPage(page: number): void {
    const totalPages = this.getTotalPages();

    if (page >= 1 && page <= totalPages) {
      this.currentPage = page;
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  getAvailablePageNumbers(): number[] {
    const totalPages = this.getTotalPages();

    return Array.from({length: totalPages}, (_, index) => index + 1);
  }

  getDisplayedTickets(): TicketModel[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    return this.tickets.slice(startIndex, endIndex);
  }

  showAssignedToMe() {
    this.onlyShowMine = true
    this.fetchMyTickets(0, 999999999);
  }

  showAll() {
    this.onlyShowMine = false
    this.fetchAllTickets(0, 999999999);
  }

  fetchMyTickets(page: number, count: number) {
    this.store.dispatch(TicketActions.fetchUserTickets({
      page: page,
      count: count
    }))
  }

  fetchAllTickets(page: number, count: number) {
    this.store.dispatch(TicketActions.fetchAllTickets({
      page: page,
      count: count
    }))
  }

  updateTable(tickets: TicketModel[]) {
    this.tickets = tickets;
    this.totalItems = tickets.length;
  }
}
