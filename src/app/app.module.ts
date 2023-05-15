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
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    AuthModule,
    HttpClientModule,

    // Store Modules
    StoreModule.forRoot({'user': userReducer, 'login': loginReducer}),
    EffectsModule.forRoot([Effects]),

    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      autoPause: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
