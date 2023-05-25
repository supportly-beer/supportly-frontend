import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AccountRoutingModule} from "./account-routing.module";
import {AccountComponent} from "./component/account/account.component";

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FontAwesomeModule
  ]
})
export class AccountModule {
}
