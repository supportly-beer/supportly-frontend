import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {TwofaComponent} from "./component/twofa/twofa.component";
import {canActivateTwofa} from "../../guards/twofa.guard";
import {ValidateEmailComponent} from "./component/validate-email/validate-email.component";
import {ResetPasswordComponent} from "./component/reset-password/reset-password.component";

const routes: Routes = [
  {
    path: 'twofa',
    component: TwofaComponent,
    canActivate: [canActivateTwofa]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'validate-email/:token/:email',
    component: ValidateEmailComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {path: '**', redirectTo: 'dashboard'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
