import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {UserModel} from "../../../models/user.model";
import {
  faArrowRight,
  faClose,
  faHandPeace,
  faHouse,
  faMagnifyingGlass,
  faMoon,
  faPaperPlane,
  faQuestionCircle,
  faRightFromBracket,
  faSun,
  faUser,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../store/appState.interface";
import {Router} from "@angular/router";
import * as LoginActions from "../../../store/login/login.actions";
import * as SearchActions from "../../../store/search/search.actions";
import {userErrorSelector, userIsLoadingSelector, userSelector} from "../../../store/user/user.selectors";
import {searchErrorSelector, searchIsLoadingSelector, searchSelector} from "../../../store/search/search.selectors";
import {FormControl} from "@angular/forms";
import {SearchResultModel} from "../../../models/searchResult.model";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: []
})
export class LayoutComponent {

  userIsLoading$: Observable<boolean>;
  userError$: Observable<HttpErrorResponse | null>
  user$: Observable<UserModel | null>

  searchIsLoading$: Observable<boolean>;
  searchError$: Observable<HttpErrorResponse | null>
  searchResult$: Observable<SearchResultModel | null>

  dashboard: IconDefinition = faHouse
  ticket: IconDefinition = faPaperPlane
  account: IconDefinition = faUser
  faq: IconDefinition = faQuestionCircle
  logout: IconDefinition = faRightFromBracket
  search: IconDefinition = faMagnifyingGlass
  close: IconDefinition = faClose
  rightArrow: IconDefinition = faArrowRight
  waveIcon: IconDefinition = faHandPeace
  moonIcon: IconDefinition = faMoon
  sunIcon: IconDefinition = faSun

  modalOpen: boolean = false

  navbarLinks: { url: string, icon: IconDefinition, fullName: string }[] = [
    {url: "/dashboard", icon: this.dashboard, fullName: 'Dashboard'},
    {url: "/ticket", icon: this.ticket, fullName: 'Tickets'},
    {url: "/account", icon: this.account, fullName: 'Account'},
    {url: "/faq", icon: this.faq, fullName: 'Oft gestellte Fragen'},
  ]

  searchInputField = new FormControl('');

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
    this.userIsLoading$ = this.store.pipe(select(userIsLoadingSelector));
    this.userError$ = this.store.pipe(select(userErrorSelector));
    this.user$ = this.store.pipe(select(userSelector));

    this.searchIsLoading$ = this.store.pipe(select(searchIsLoadingSelector));
    this.searchError$ = this.store.pipe(select(searchErrorSelector));
    this.searchResult$ = this.store.pipe(select(searchSelector));
  }

  isUrl(url: string): boolean {
    return this.router.url.split('/')[1] === url.split('/')[1];
  }

  logoutUser() {
    this.store.dispatch(LoginActions.logout())
  }

  switchModal() {
    this.modalOpen = !this.modalOpen
  }

  searchTickets() {
    this.store.dispatch(SearchActions.getResults({
      query: this.searchInputField.value!,
      limit: 5
    }))
  }

  switchDarkLightMode() {
    const theme = localStorage.getItem('theme');
    const themeToUse = theme === 'dark' ? 'light' : 'dark';

    document.querySelector('html')?.setAttribute('data-theme', themeToUse);
    localStorage.setItem('theme', themeToUse);
  }

  whichIconToUse(): IconDefinition {
    const theme = localStorage.getItem('theme');
    return theme === 'dark' ? this.sunIcon : this.moonIcon;
  }
}
