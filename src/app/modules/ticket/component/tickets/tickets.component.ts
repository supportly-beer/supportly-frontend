import {Component} from "@angular/core";
import {TicketModel} from "../../../../models/ticket.model";
import {TicketState} from "../../../../models/ticketState.enum";
import {TicketUrgency} from "../../../../models/ticketUrgency.enum";
import {faker} from '@faker-js/faker';
import {faFilter, faUser, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {UserModel} from "../../../../models/user.model";
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {select, Store} from "@ngrx/store";
import {userErrorSelector, userIsLoadingSelector, userSelector} from "../../../../store/user/user.selectors";
import {AppState} from "../../../../store/appState.interface";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: []
})
export class TicketsComponent {

  filterIcon: IconDefinition = faFilter;
  assignedIcon: IconDefinition = faUser;

  tickets: TicketModel[] = [];
  currentPage: number;
  itemsPerPage: number;
  totalItems: number = 0;

  onlyShowMine: boolean = false;

  userIsLoading$: Observable<boolean>;
  userError$: Observable<HttpErrorResponse | null>
  user$: Observable<UserModel | null>

  constructor(
    private store: Store<AppState>
  ) {
    this.userIsLoading$ = this.store.pipe(select(userIsLoadingSelector));
    this.userError$ = this.store.pipe(select(userErrorSelector));
    this.user$ = this.store.pipe(select(userSelector));

    this.generateRandomTickets()

    this.currentPage = 1;
    this.itemsPerPage = 8;
  }

  getNextPage(): void {
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    if (this.currentPage < totalPages) this.currentPage++;
  }

  getPreviousPage(): void {
    if (this.currentPage > 1) this.currentPage--;
  }

  goToPage(page: number): void {
    const totalPages = this.getTotalPages();

    if (page >= 1 && page <= totalPages) this.currentPage = page;
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

  showAssignedToMe(user: UserModel) {
    this.onlyShowMine = true
    this.tickets = this.tickets.filter(ticket => ticket.assignee?.id === user.id);
    this.totalItems = this.tickets.length;
  }

  showAll() {
    this.onlyShowMine = false
    this.generateRandomTickets()
  }

  generateRandomTickets() {
    for (let i = 1; i <= 100; i++) {
      const ticket = {
        identifier: `TICKET-${i}`,
        title: faker.lorem.sentence(5),
        description: faker.lorem.paragraph(5),
        createdAt: new Date('2023-06-10').getDate(),
        closedAt: new Date('2023-06-10').getDate(),
        updatedAt: new Date('2023-06-10').getDate(),
        creator: null,
        assignee: null,
        state: TicketState.OPEN,
        urgency: TicketUrgency.SHOW_STOPPER
      };

      this.tickets.push(ticket);
    }

    this.totalItems = this.tickets.length;
  }
}
