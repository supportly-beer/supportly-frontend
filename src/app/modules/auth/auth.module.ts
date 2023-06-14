import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RegisterComponent} from "./component/register/register.component";
import {LoginComponent} from "./component/login/login.component";
import {TwofaComponent} from "./component/twofa/twofa.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ResetPasswordComponent} from "./component/reset-password/reset-password.component";
import {ValidateEmailComponent} from "./component/validate-email/validate-email.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    TwofaComponent,
    ResetPasswordComponent,
    ValidateEmailComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class AuthModule {
}
