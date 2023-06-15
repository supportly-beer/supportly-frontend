import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardModule} from "./modules/dashboard/dashboard.module";
import {AuthModule} from "./modules/auth/auth.module";
import {StoreModule} from "@ngrx/store";
import {userReducer} from "./store/user/user.reducers";
import {loginReducer} from "./store/login/login.reducers";
import {EffectsModule} from "@ngrx/effects";
import {Effects} from "./store/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./interceptors/auth.interceptor";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {LayoutComponent} from "./modules/shared/layout/layout.component";
import {NgOptimizedImage} from "@angular/common";
import {NgApexchartsModule} from "ng-apexcharts";
import {searchReducer} from "./store/search/search.reducers";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {statsReducer} from "./store/stats/stats.reducers";
import {ticketReducer} from "./store/ticket/ticket.reducers";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,

    // Store Modules
    StoreModule.forRoot({
      'user': userReducer,
      'login': loginReducer,
      'search': searchReducer,
      'stats': statsReducer,
      'ticket': ticketReducer,
    }),
    EffectsModule.forRoot([Effects]),

    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      autoPause: true,
    }),
    FontAwesomeModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
