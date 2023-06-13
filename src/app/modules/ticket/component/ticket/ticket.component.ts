import {Component} from "@angular/core";
import {TicketModel} from "../../../../models/ticket.model";
import {TicketState} from "../../../../models/ticketState.enum";
import {TicketUrgency} from "../../../../models/ticketUrgency.enum";
import {faker} from '@faker-js/faker';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: []
})
export class TicketComponent {
  tickets: TicketModel[] = [];
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;

  constructor() {
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

    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.totalItems = this.tickets.length;
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
}
