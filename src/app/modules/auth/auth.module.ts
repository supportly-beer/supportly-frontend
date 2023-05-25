import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RegisterComponent} from "./component/register/register.component";
import {LoginComponent} from "./component/login/login.component";
import {TwofaComponent} from "./component/twofa/twofa.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    TwofaComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule {
}
