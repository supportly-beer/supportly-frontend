import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {canActivate} from "../../guards/auth.guard";
import {AccountComponent} from "./component/account/account.component";

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    canActivate: [canActivate]
  },
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {path: '**', redirectTo: 'dashboard'},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {

}
