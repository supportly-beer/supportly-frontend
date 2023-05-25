import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {canActivate} from "../../guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [canActivate]
  },
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {path: '**', redirectTo: 'dashboard'},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {

}
