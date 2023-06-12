import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AccountRoutingModule} from "./account-routing.module";
import {AccountComponent} from "./component/account/account.component";
import {NgApexchartsModule} from "ng-apexcharts";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FontAwesomeModule,
    NgApexchartsModule,
    FormsModule
  ]
})
export class AccountModule {
}
