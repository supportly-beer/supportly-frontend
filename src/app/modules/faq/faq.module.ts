import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FaqRoutingModule} from "./faq-routing.module";
import {FaqComponent} from "./component/faq/faq.component";

@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    FaqRoutingModule,
    FontAwesomeModule
  ]
})
export class FaqModule {
}
