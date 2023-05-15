import {Component} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../store/appState.interface";
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {UserModel} from "../../../models/user.model";
import {errorSelector, isLoadingSelector, userSelector} from "../../../store/user/user.selectors";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent {

  isLoading$: Observable<boolean>;
  error$: Observable<HttpErrorResponse | null>
  user$: Observable<UserModel | null>

  constructor(
    private store: Store<AppState>
  ) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.user$ = this.store.pipe(select(userSelector));
  }
}
