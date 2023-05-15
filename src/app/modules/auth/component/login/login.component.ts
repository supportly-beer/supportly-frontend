import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {FormControl, Validators} from "@angular/forms";
import * as LoginActions from "../../../../store/login/login.actions";
import {AppState} from "../../../../store/appState.interface";
import {select, Store} from "@ngrx/store";
import {errorSelector, isLoadingSelector} from "../../../../store/login/login.selectors";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent {

  requestError: boolean = false;
  emailError: boolean = false;
  passwordError: boolean = false;
  isLoading: boolean = false;

  generalError: string = "";
  emailErrorMessage: string = "";
  passwordErrorMessage: string = "";

  isLoading$: Observable<boolean>
  error$: Observable<HttpErrorResponse | null>

  emailInputField = new FormControl('', {
    validators: [
      Validators.required,
      Validators.email
    ]
  });

  passwordInputField = new FormControl('', {
    validators: [
      Validators.required,
      Validators.minLength(8)
    ]
  });

  constructor(
    private store: Store<AppState>
  ) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));

    this.error$.subscribe((error) => {
      if (!error) return;

      this.requestError = true;

      switch (error.status) {
        case 400:
          this.generalError = "Bei der Anfrage an das Backend ist ein Fehler augetreten!"
          break;
        case 401:
          this.generalError = "Leider scheinst du nicht die nötigen Zugriffsrechte zu besitzen!"
          break;
        case 500:
        default:
          this.generalError = "Es ist ein Fehler augetreten. Bitte melde diesen Fehler einem Administrator!"
          break;
      }
    });
  }

  async login() {
    this.requestError = false;
    this.emailError = false;
    this.passwordError = false;

    this.generalError = "";
    this.emailErrorMessage = "";
    this.passwordErrorMessage = "";

    this.checkEmail();
    this.checkPassword();

    if (!this.requestError && !this.emailError && !this.passwordError) {
      this.store.dispatch(LoginActions.login({
        email: this.emailInputField.value!, password: this.passwordInputField.value!
      }))
    }
  }

  private checkEmail() {
    if (!this.emailInputField.invalid) {
      return
    }

    if (this.emailInputField.hasError("email")) {
      this.emailError = true;
      this.emailErrorMessage = "Diese Email ist nicht valide. Bitte überprüfen Sie Ihre Eingabe!";
    } else {
      this.emailError = true;
      this.emailErrorMessage = "Die Email wird benötigt! Bitte überprüfen Sie Ihre Eingabe!";
    }
  }

  private checkPassword() {
    if (!this.passwordInputField.invalid) {
      return;
    }

    if (this.passwordInputField.hasError("minlength")) {
      this.passwordError = true;
      this.passwordErrorMessage = "Das Passwort hat nicht die nötige Länge. Bitte überprüfen Sie Ihre Eingabe!";
    } else {
      this.passwordError = true;
      this.passwordErrorMessage = "Das Passwort wird benötigt! Bitte überprüfen Sie Ihre Eingabe!";
    }
  }
}
