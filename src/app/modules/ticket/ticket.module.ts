import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {TicketRoutingModule} from "./ticket-routing.module";
import {TicketComponent} from "./component/ticket/ticket.component";

@NgModule({
  declarations: [
    TicketComponent
  ],
  imports: [
    CommonModule,
    TicketRoutingModule,
    FontAwesomeModule,
    NgOptimizedImage
  ]
})
export class TicketModule {
}