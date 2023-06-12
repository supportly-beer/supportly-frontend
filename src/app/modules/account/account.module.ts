import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AccountRoutingModule} from "./account-routing.module";
import {AccountComponent} from "./component/account/account.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FontAwesomeModule,
    NgOptimizedImage,
    FormsModule
  ]
})
export class AccountModule {
}
