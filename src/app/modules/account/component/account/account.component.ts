import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {UserModel} from "../../../../models/user.model";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../store/appState.interface";
import {userErrorSelector, userIsLoadingSelector, userSelector} from "../../../../store/user/user.selectors";
import {
  faArrowRight,
  faFloppyDisk,
  faRightToBracket,
  faUpload,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: []
})
export class AccountComponent {

  userIsLoading$: Observable<boolean>;
  userError$: Observable<HttpErrorResponse | null>
  user$: Observable<UserModel | null>

  saveIcon: IconDefinition = faFloppyDisk;
  upload: IconDefinition = faUpload
  rightArrow: IconDefinition = faArrowRight

  constructor(
    private store: Store<AppState>,
  ) {
    this.userIsLoading$ = this.store.pipe(select(userIsLoadingSelector));
    this.userError$ = this.store.pipe(select(userErrorSelector));
    this.user$ = this.store.pipe(select(userSelector));
  }
}
