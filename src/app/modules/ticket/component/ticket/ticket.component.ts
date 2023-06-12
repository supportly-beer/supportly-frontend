import {Component} from "@angular/core";

export interface Ticket {
  id: number;
  subject: string;
  description: string;
  status: string;
  createdAt: Date;
  customer: string;
  supportAgent: string;
}

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: []
})


export class TicketComponent {
  tickets: Ticket[];
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;

  constructor() {
    this.tickets = [
      {
        id: 1,
        subject: 'Issue with login',
        description: 'Test Ticket.',
        status: 'Open',
        createdAt: new Date('2023-06-10'),
        customer: 'King Shark',
        supportAgent: 'Jerry Braun'
      },
      {
        id: 2,
        subject: 'Payment not processed',
        description: 'Dummy values.',
        status: 'In Progress',
        createdAt: new Date('2023-06-09'),
        customer: 'Jungkook Jeon',
        supportAgent: 'Elvira Alaskhanova'
      },
      {
        id: 3,
        subject: 'Product feature request',
        description: 'Will be replaced later.',
        status: 'Open',
        createdAt: new Date('2023-06-08'),
        customer: 'Felix Lee',
        supportAgent: 'Elvira Alaskhanova'
      },
      {
        id: 4,
        subject: 'Error loading page',
        description: 'Need to add that I can open the ticket.',
        status: 'Open',
        createdAt: new Date('2023-06-07'),
        customer: 'King Shark',
        supportAgent: 'Jerry Braun'
      },
      {
        id: 5,
        subject: 'Forgot password',
        description: 'With an edit icon?',
        status: 'Open',
        createdAt: new Date('2023-06-06'),
        customer: 'Terry Crews',
        supportAgent: 'Jerry Braun'
      },
      {
        id: 6,
        subject: 'Incorrect billing information',
        description: 'While hovering on one ticket.',
        status: 'In Progress',
        createdAt: new Date('2023-06-05'),
        customer: 'Lee Know',
        supportAgent: 'Elvira Alaskhanova'
      },
      {
        id: 7,
        subject: 'Request for refund',
        description: 'Or click on the ticket to open it and.',
        status: 'Open',
        createdAt: new Date('2023-06-04'),
        customer: 'King Shark',
        supportAgent: 'Jerry Braun'
      },
      {
        id: 8,
        subject: 'Feature enhancement',
        description: 'Dummy values.',
        status: 'In Progress',
        createdAt: new Date('2023-06-03'),
        customer: 'Jungkook Jeon',
        supportAgent: 'Elvira Alaskhanova'
      },
      {
        id: 9,
        subject: 'Application crashes on startup',
        description: 'Dummy values.',
        status: 'In Progress',
        createdAt: new Date('2023-06-02'),
        customer: 'King Shark',
        supportAgent: 'Jerry Braun'
      },
      {
        id: 10,
        subject: 'Account locked',
        description: 'Dummy valuess.',
        status: 'Open',
        createdAt: new Date('2023-06-01'),
        customer: 'Corpse Husband',
        supportAgent: 'Jerry Braun'
      },
      {
        id: 11,
        subject: 'Incorrect data displayed',
        description: 'Dummy values.',
        status: 'Open',
        createdAt: new Date('2023-05-31'),
        customer: 'Cha Eun-woo',
        supportAgent: 'Elvira Alaskhanova'
      },
      {
        id: 12,
        subject: 'Upgrade to premium plan',
        description: 'Dummy values.',
        status: 'In Progress',
        createdAt: new Date('2023-05-30'),
        customer: 'Bruce Wayne',
        supportAgent: 'Jerry Braun'
      },
      {
        id: 13,
        subject: 'Error during checkout',
        description: 'Dummy values.',
        status: 'Open',
        createdAt: new Date('2023-05-29'),
        customer: 'Jungkook Jeon',
        supportAgent: 'Elvira Alaskhanova'
      },
      {
        id: 14,
        subject: 'Request for account deletion',
        description: 'Dummy values.',
        status: 'Open',
        createdAt: new Date('2023-05-28'),
        customer: 'Felix Lee',
        supportAgent: 'Jerry Braun'
      },
      {
        id: 15,
        subject: 'Issue with data synchronization',
        description: 'Dummy values.',
        status: 'In Progress',
        createdAt: new Date('2023-05-27'),
        customer: 'Jungkook Jeon',
        supportAgent: 'Elvira Alaskhanova'
      },
      {
        id: 16,
        subject: 'Unable to submit form',
        description: 'Dummy values.',
        status: 'In Progress',
        createdAt: new Date('2023-05-26'),
        customer: 'Terry Crews',
        supportAgent: 'Jerry Braun'
      },
      {
        id: 17,
        subject: 'Performance degradation',
        description: 'Dummy values.',
        status: 'In Progress',
        createdAt: new Date('2023-05-25'),
        customer: 'Cha Eun-woo',
        supportAgent: 'Elvira Alaskhanova'
      },
      {
        id: 18,
        subject: 'Feature not working as expected',
        description: 'Dummy values.',
        status: 'Open',
        createdAt: new Date('2023-05-24'),
        customer: 'Andy Samberg',
        supportAgent: 'Elvira Alaskhanova'
      },
      {
        id: 19,
        subject: 'Compatibility issue with browser',
        description: 'Dummy values.',
        status: 'In Progress',
        createdAt: new Date('2023-05-23'),
        customer: 'Perry Orange',
        supportAgent: 'Jerry Braun'
      },
      {
        id: 20,
        subject: 'Request for account reactivation',
        description: 'Dummy values.',
        status: 'Open',
        createdAt: new Date('2023-05-22'),
        customer: 'Felix Lee',
        supportAgent: 'Elvira Alaskhanova'
      },
      {
        id: 21,
        subject: 'Bug in search functionality',
        description: 'Dummy values.',
        status: 'Open',
        createdAt: new Date('2023-06-03'),
        customer: 'Corpse Husband',
        supportAgent: 'Elvira Alaskhanova'
      },
      {
        id: 22,
        subject: 'Request for password reset',
        description: 'Dummy values.',
        status: 'In Progress',
        createdAt: new Date('2023-05-31'),
        customer: 'Mary White',
        supportAgent: 'Jerry Braun'
      },
      {
        id: 23,
        subject: 'Error during registration',
        description: 'Dummy values.',
        status: 'In Progress',
        createdAt: new Date('2023-05-18'),
        customer: 'Peter Parker',
        supportAgent: 'Elvira Alaskhanova'
      },
      {
        id: 24,
        subject: 'Difficulty accessing certain pages',
        description: 'Dummy values.',
        status: 'In Progress',
        createdAt: new Date('2023-05-21'),
        customer: 'Daniel Lee',
        supportAgent: 'Jerry Braun'
      },
      {
        id: 25,
        subject: 'Issue with file upload',
        description: 'Dummy values.',
        status: 'Open',
        createdAt: new Date('2023-05-26'),
        customer: 'Miles Morales',
        supportAgent: 'Elvira Alaskhanova'
      },
    ];
    this.currentPage = 1;
    this.itemsPerPage = 9; // Set the number of tickets to display per page
    this.totalItems = this.tickets.length;
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
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }
  getDisplayedTickets(): Ticket[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.tickets.slice(startIndex, endIndex);
  }
}
