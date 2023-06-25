import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FaqRoutingModule} from "./faq-routing.module";
import {FaqComponent} from "./component/faq/faq.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    FaqComponent
  ],
    imports: [
        CommonModule,
        FaqRoutingModule,
        FontAwesomeModule,
        ReactiveFormsModule
    ]
})
export class FaqModule {
}
