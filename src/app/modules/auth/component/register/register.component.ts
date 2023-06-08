import {Component} from "@angular/core";
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/auth.service";
import {OperationSuccessModel} from "../../../../models/operationSuccess.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent {

  modalOpen: boolean = false

  requestError: boolean = false
  firstNameError: boolean = false
  lastNameError: boolean = false
  emailError: boolean = false
  passwordError: boolean = false
  repeatPasswordError: boolean = false

  passwordNotSameError: boolean = false

  requestErrorMessage: string = "";
  firstNameErrorMessage: string = "";
  lastNameErrorMessage: string = "";
  emailErrorMessage: string = "";
  passwordErrorMessage: string = "";
  repeatPasswordErrorMessage: string = "";
  passwordNotSameErrorMessage: string = "";

  firstNameInputField = new FormControl('', {
    validators: [
      Validators.required
    ]
  });

  lastNameInputField = new FormControl('', {
    validators: [
      Validators.required
    ]
  });

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

  repeatPasswordInputField = new FormControl('', {
    validators: [
      Validators.required,
      Validators.minLength(8)
    ]
  });

  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  startRegister() {
    this.requestError = false
    this.firstNameError = false
    this.lastNameError = false
    this.emailError = false
    this.passwordError = false
    this.repeatPasswordError = false

    this.passwordNotSameError = false

    this.requestErrorMessage = "";
    this.firstNameErrorMessage = "";
    this.lastNameErrorMessage = "";
    this.emailErrorMessage = "";
    this.passwordErrorMessage = "";
    this.repeatPasswordErrorMessage = "";
    this.passwordNotSameErrorMessage = "";

    this.checkFirstName();
    this.checkLastName();
    this.checkEmail();
    this.checkPassword();
    this.checkPasswordRepeat();
    this.checkPasswordSame();

    if (
      !this.requestError &&
      !this.firstNameInputField.invalid &&
      !this.lastNameInputField.invalid &&
      !this.emailInputField.invalid &&
      !this.passwordInputField.invalid &&
      !this.repeatPasswordInputField.invalid &&
      !this.passwordNotSameError
    ) {
      this.switchModal()
    }
  }

  switchModal() {
    this.modalOpen = !this.modalOpen;
  }

  finishRegister() {
    this.switchModal()

    this.loading = true;

    this.authService.register(
      this.emailInputField.value!,
      this.firstNameInputField.value!,
      this.lastNameInputField.value!,
      this.passwordInputField.value!
    ).subscribe({
      next: (operationSuccessModel: OperationSuccessModel) => {
        if (!operationSuccessModel.successful) {
          this.loading = false;
          this.requestError = true;
          this.requestErrorMessage = operationSuccessModel.error!
        } else {
          this.router.navigate(['/auth/login']).then();
        }
      },
      error: (err) => {
        this.loading = false;
        this.requestError = true;

        switch (err.status) {
          case 400:
            this.requestErrorMessage = "Es sieht so aus, als würde diese Email bereits für einen Account genutzt werden!"
            break;
          case 401:
            this.requestErrorMessage = "Leider scheinst du nicht die nötigen Zugriffsrechte zu besitzen!"
            break;
          case 500:
          default:
            this.requestErrorMessage = "Es ist ein Fehler aufgetreten. Bitte melde diesen Fehler einem Administrator!"
            break;
        }
      }
    })
  }

  private checkFirstName() {
    if (!this.firstNameInputField.invalid || (!this.firstNameInputField.value || this.firstNameInputField.value == "")) {
      return;
    }

    this.firstNameError = true;
    this.firstNameErrorMessage = "Der Vorname wird benötigt!";
  }

  private checkLastName() {
    if (!this.lastNameInputField.invalid || (!this.lastNameInputField.value || this.lastNameInputField.value == "")) {
      return;
    }

    this.lastNameError = true;
    this.lastNameErrorMessage = "Der Nachname wird benötigt!";
  }

  private checkEmail() {
    if (!this.emailInputField.invalid || (!this.emailInputField.value || this.emailInputField.value == "")) {
      return;
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
    if (!this.passwordInputField.invalid || (!this.passwordInputField.value || this.passwordInputField.value == "")) {
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

  private checkPasswordRepeat() {
    if (!this.repeatPasswordInputField.invalid || (!this.repeatPasswordInputField.value || this.repeatPasswordInputField.value == "")) {
      return;
    }

    if (this.repeatPasswordInputField.hasError("minlength")) {
      this.repeatPasswordError = true;
      this.repeatPasswordErrorMessage = "Das Passwort hat nicht die nötige Länge!";
    } else {
      this.repeatPasswordError = true;
      this.repeatPasswordErrorMessage = "Das Passwort wird benötigt!";
    }
  }

  private checkPasswordSame() {
    if (this.passwordInputField.value!.length < 8 && this.repeatPasswordInputField.value!.length < 8) {
      return;
    }

    if (this.passwordInputField!.value != this.repeatPasswordInputField.value!) {
      this.passwordNotSameError = true;
      this.passwordNotSameErrorMessage = "Die eingegebenen Passwörter stimmen nicht überein!";
    }
  }
}
