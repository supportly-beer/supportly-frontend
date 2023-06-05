import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgApexchartsModule} from "ng-apexcharts";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgApexchartsModule,


  ]
})
export class DashboardModule {
}
