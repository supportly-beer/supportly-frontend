import {Component, OnInit} from "@angular/core";
import {TicketModel} from "../../../../models/ticket.model";
import {
  faAnglesLeft,
  faAnglesRight,
  faPaperPlane,
  faPencil,
  faSave,
  faUser,
  faXmark,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import {UserModel} from "../../../../models/user.model";
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {select, Store} from "@ngrx/store";
import {userErrorSelector, userIsLoadingSelector, userSelector} from "../../../../store/user/user.selectors";
import {AppState} from "../../../../store/appState.interface";
import * as TicketActions from "../../../../store/ticket/ticket.actions";
import {ticketErrorSelector, ticketIsLoadingSelector, ticketsSelector} from "../../../../store/ticket/ticket.selectors";
import {Router} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: []
})
export class TicketsComponent implements OnInit {

  assignedIcon: IconDefinition = faUser;
  createIcon: IconDefinition = faPencil;
  paperPlaneIcon: IconDefinition = faPaperPlane;
  nextIcon: IconDefinition = faAnglesRight;
  prevIcon: IconDefinition = faAnglesLeft;
  closeIcon: IconDefinition = faXmark;
  saveIcon: IconDefinition = faSave;

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
  tickets$: Observable<TicketModel[] | null>;

  modalOpen: boolean = false;

  titleInputField: FormControl = new FormControl('', {
    validators: [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50)
    ]
  });

  descriptionInputField: FormControl = new FormControl('', {
    validators: [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(5000)
    ]
  });

  createTicketHasError: boolean = false;
  createTicketError: string | null = null;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
    this.userIsLoading$ = this.store.pipe(select(userIsLoadingSelector));
    this.userError$ = this.store.pipe(select(userErrorSelector));
    this.user$ = this.store.pipe(select(userSelector));

    this.ticketIsLoading$ = this.store.pipe(select(ticketIsLoadingSelector));
    this.ticketError$ = this.store.pipe(select(ticketErrorSelector));
    this.tickets$ = this.store.pipe(select(ticketsSelector));

    this.currentPage = 1;
    this.itemsPerPage = 10;
  }

  ngOnInit() {
    this.user$.subscribe(user => {
      if (!user) {
        return
      }

      if (user.role.name == "ROLE_USER") {
        this.fetchMyTickets(0, 999999999);
      } else {
        this.fetchAllTickets(0, 999999999);
      }

      this.tickets$.subscribe((tickets: TicketModel[] | null) => {
        this.updateTable(this.sortTicketsByCreatedAt(tickets) || [])
      });
    })
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

  openTicket(identifier: string) {
    this.router.navigate([`/ticket/${identifier}`]).then()
  }

  sortTicketsByCreatedAt(tickets: TicketModel[] | null): TicketModel[] {
    if (!tickets) {
      return []
    }

    const copiedTickets = [...tickets];

    return copiedTickets.sort((a, b) => b.createdAt - a.createdAt);
  }

  createTicket() {
    if (!this.titleInputField.valid) {
      this.createTicketHasError = true;
      this.createTicketError = "Der Titel muss zwischen 5 und 50 Zeichen lang sein";
      return;
    }

    if (!this.descriptionInputField.valid) {
      this.createTicketHasError = true;
      this.createTicketError = "Der Inhalt muss zwischen 10 und 5000 Zeichen lang sein";
      return;
    }

    this.createTicketHasError = false;
    this.createTicketError = null;

    this.store.dispatch(TicketActions.createTicket({
      title: this.titleInputField.value,
      description: this.descriptionInputField.value
    }))

    this.modalOpen = false;

    this.titleInputField.reset();
    this.descriptionInputField.reset();
  }

  switchModal() {
    this.modalOpen = !this.modalOpen;
  }
}
