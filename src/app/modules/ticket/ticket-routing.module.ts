import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {canActivate} from "../../guards/auth.guard";
import {TicketComponent} from "./component/ticket/ticket.component";

const routes: Routes = [
  {
    path: '',
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
