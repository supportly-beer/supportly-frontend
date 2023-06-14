import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {FormControl, Validators} from "@angular/forms";
import * as LoginActions from "../../../../store/login/login.actions";
import {AppState} from "../../../../store/appState.interface";
import {select, Store} from "@ngrx/store";
import {loginErrorSelector, loginIsLoadingSelector} from "../../../../store/login/login.selectors";
import {faRightToBracket, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent {

  loginIcon: IconDefinition = faRightToBracket;
  githubIcon: IconDefinition = faGithub;
  linkedInIcon: IconDefinition = faLinkedin;
  instagramIcon: IconDefinition = faInstagram;

  requestError: boolean = false;
  emailError: boolean = false;
  passwordError: boolean = false;

  requestErrorMessage: string = "";
  emailErrorMessage: string = "";
  passwordErrorMessage: string = "";

  loginIsLoading$: Observable<boolean>
  loginError$: Observable<HttpErrorResponse | null>

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
    this.loginIsLoading$ = this.store.pipe(select(loginIsLoadingSelector));
    this.loginError$ = this.store.pipe(select(loginErrorSelector));

    this.loginError$.subscribe((error) => {
      if (!error) return;

      switch (error.status) {
        case 400:
          this.requestError = true;
          this.requestErrorMessage = "Bei der Anfrage an das Backend ist ein Fehler aufgetreten!"
          break;
        case 401:
          break;
        case 403:
          this.requestError = true;
          this.requestErrorMessage = "Das Passwort ist falsch!"
          break;
        case 404:
          this.requestError = true;
          this.requestErrorMessage = "Es wurde kein Nutzer mit dieser Email Adresse gefunden!"
          break
        case 500:
        default:
          this.requestError = true;
          this.requestErrorMessage = "Es ist ein Fehler aufgetreten. Bitte melde diesen Fehler einem Administrator!"
          break;
      }
    });
  }

  async login() {
    this.requestError = false;
    this.emailError = false;
    this.passwordError = false;

    this.requestErrorMessage = "";
    this.emailErrorMessage = "";
    this.passwordErrorMessage = "";

    this.checkEmail();
    this.checkPassword();

    if (!this.requestError && !this.emailError && !this.passwordError) {
      this.store.dispatch(LoginActions.preLogin({
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
      this.emailErrorMessage = "Diese Email ist nicht valide!";
    } else {
      this.emailError = true;
      this.emailErrorMessage = "Die Email wird benötigt!";
    }
  }

  private checkPassword() {
    if (!this.passwordInputField.invalid) {
      return;
    }

    if (this.passwordInputField.hasError("minlength")) {
      this.passwordError = true;
      this.passwordErrorMessage = "Das Passwort hat nicht die nötige Länge!";
    } else {
      this.passwordError = true;
      this.passwordErrorMessage = "Das Passwort wird benötigt!";
    }
  }
}
