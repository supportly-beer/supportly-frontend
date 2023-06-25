import {Component} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../store/appState.interface";
import {FormControl, Validators} from "@angular/forms";
import * as LoginActions from "../../../../store/login/login.actions";
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {loginErrorSelector, loginIsLoadingSelector} from "../../../../store/login/login.selectors";
import {Router} from "@angular/router";
import {faChampagneGlasses, faRightToBracket, IconDefinition} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-twofa',
  templateUrl: './twofa.component.html',
  styleUrls: []
})
export class TwofaComponent {

  twofaIcon: IconDefinition = faRightToBracket;

  requestError: boolean = false
  numberError: boolean = false

  requestErrorMessage: string = ""
  numberErrorMessage: string = ""

  loginIsLoading$: Observable<boolean>
  loginError$: Observable<HttpErrorResponse | null>

  firstNumberInputField = new FormControl('', {
    validators: [
      Validators.required
    ]
  })

  secondNumberInputField = new FormControl('', {
    validators: [
      Validators.required
    ]
  })

  thirdNumberInputField = new FormControl('', {
    validators: [
      Validators.required
    ]
  })

  fourthNumberInputField = new FormControl('', {
    validators: [
      Validators.required
    ]
  })

  fifthNumberInputField = new FormControl('', {
    validators: [
      Validators.required
    ]
  })

  sixthNumberInputField = new FormControl('', {
    validators: [
      Validators.required
    ]
  })

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
    this.loginIsLoading$ = this.store.pipe(select(loginIsLoadingSelector));
    this.loginError$ = this.store.pipe(select(loginErrorSelector));

    this.loginError$.subscribe((error) => {
      if (!error) return;

      switch (error.status) {
        case 400:
          this.requestError = true;
          this.requestErrorMessage = "Fuck you 400!"
          break;
        case 401:
          this.requestError = true;
          this.requestErrorMessage = "Fuck you 401!"
          break;
        case 500:
        default:
          this.requestError = true;
          this.requestErrorMessage = "Es ist ein Fehler augetreten. Bitte melde diesen Fehler einem Administrator!"
          break;
      }
    });
  }

  loginTwofa() {
    this.requestError = false
    this.numberError = false

    this.requestErrorMessage = ""
    this.numberErrorMessage = ""

    let email = localStorage.getItem("email")

    if (!email) {
      this.router.navigate(["/auth/login"]).then()
      return;
    }

    this.validate()

    if (!this.numberError) {
      let twofaCode = `${this.firstNumberInputField.value!}${this.secondNumberInputField.value!}${this.thirdNumberInputField.value!}${this.fourthNumberInputField.value!}${this.fifthNumberInputField.value!}${this.sixthNumberInputField.value!}`

      this.store.dispatch(LoginActions.loginTwofa({
        email: email, code: twofaCode
      }))
    }
  }

  numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode

    return !(charCode > 31 && (charCode < 48 || charCode > 57))
  }

  private validate() {
    if (
      this.firstNumberInputField.invalid ||
      this.secondNumberInputField.invalid ||
      this.thirdNumberInputField.invalid ||
      this.fourthNumberInputField.invalid ||
      this.fifthNumberInputField.invalid ||
      this.sixthNumberInputField.invalid
    ) {
      this.numberError = true;
      this.numberErrorMessage = "Bitte überprüfe deine Eingabe!"
      return;
    }
  }
}
