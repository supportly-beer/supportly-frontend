import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {UserModel} from "../../../models/user.model";
import {
  faComments,
  faHouse, faMagnifyingGlass,
  faQuestionCircle,
  faRightFromBracket,
  faUser,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../store/appState.interface";
import {Router} from "@angular/router";
import * as LoginActions from "../../../store/login/login.actions";
import {userErrorSelector, userIsLoadingSelector, userSelector} from "../../../store/user/user.selectors";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: []
})
export class LayoutComponent {

  isLoading$: Observable<boolean>;
  error$: Observable<HttpErrorResponse | null>
  user$: Observable<UserModel | null>

  dashboard: IconDefinition = faHouse
  ticket: IconDefinition = faComments
  account: IconDefinition = faUser
  faq: IconDefinition = faQuestionCircle
  logout: IconDefinition = faRightFromBracket
  search: IconDefinition = faMagnifyingGlass

  navbarLinks: { url: string, icon: IconDefinition }[] = [
    {url: "/dashboard", icon: this.dashboard},
    {url: "/ticket", icon: this.ticket},
    {url: "/account", icon: this.account},
    {url: "/faq", icon: this.faq}
  ]

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
    this.isLoading$ = this.store.pipe(select(userIsLoadingSelector));
    this.error$ = this.store.pipe(select(userErrorSelector));
    this.user$ = this.store.pipe(select(userSelector));
  }

  isUrl(url: string): boolean {
    return this.router.url == url
  }

  logoutUser() {
    this.store.dispatch(LoginActions.logout())
  }
}
