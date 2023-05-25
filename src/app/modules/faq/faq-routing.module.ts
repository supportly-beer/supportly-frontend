import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {canActivate} from "../../guards/auth.guard";
import {FaqComponent} from "./component/faq/faq.component";

const routes: Routes = [
  {
    path: '',
    component: FaqComponent,
    canActivate: [canActivate]
  },
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {path: '**', redirectTo: 'dashboard'},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqRoutingModule {

}
