import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "./store/appState.interface";
import {Router} from "@angular/router";
import * as UserActions from './store/user/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private store: Store<AppState>,
    public readonly router: Router
  ) {
  }

  ngOnInit(): void {
    if (!localStorage.getItem("accessToken") && !localStorage.getItem("refreshToken")) {
      return;
    }

    this.store.dispatch(UserActions.getUser())
  }
}
