import {Component} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "./store/appState.interface";
import {Router} from "@angular/router";
import * as UserActions from './store/user/user.actions';
import {Observable} from "rxjs";
import {userIsLoadingSelector} from "./store/user/user.selectors";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userIsLoading$: Observable<boolean>
  ignoredSidebarUrls: string[] = [
    "/auth/login",
    "/auth/register",
    "/auth/twofa",
    "/auth/validate-email",
    "/auth/reset-password"
  ]

  constructor(
    private store: Store<AppState>,
    public readonly router: Router
  ) {
    this.userIsLoading$ = this.store.pipe(select(userIsLoadingSelector))
  }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken") && !localStorage.getItem("refreshToken")) {
      return;
    }

    this.store.dispatch(UserActions.getUser())
  }

  shouldShowSidebar(): boolean {
    // check if any part of the url matches
    return !this.ignoredSidebarUrls.some(url => this.router.url.includes(url))
  }
}
