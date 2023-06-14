import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {canActivate} from "../../guards/auth.guard";
import {TicketsComponent} from "./component/tickets/tickets.component";
import {TicketComponent} from "./component/ticket/ticket.component";

const routes: Routes = [
  {
    path: '',
    component: TicketsComponent,
    canActivate: [canActivate]
  },
  {
    path: ':identifier',
    component: TicketComponent,
    canActivate: [canActivate]
  },
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {path: '**', redirectTo: 'dashboard'},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule {

}
