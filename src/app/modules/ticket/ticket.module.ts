import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {TicketRoutingModule} from "./ticket-routing.module";
import {TicketsComponent} from "./component/tickets/tickets.component";
import {FormsModule} from "@angular/forms";
import {TicketComponent} from './component/ticket/ticket.component';

@NgModule({
  declarations: [
    TicketsComponent,
    TicketComponent
  ],
  imports: [
    CommonModule,
    TicketRoutingModule,
    FontAwesomeModule,
    NgOptimizedImage,
    FormsModule
  ]
})
export class TicketModule {
}
