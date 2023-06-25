import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {UserModel} from "../../../../models/user.model";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../store/appState.interface";
import {
  allUsersSelector,
  twofaQrCodeSelector,
  userErrorSelector,
  userIsLoadingSelector,
  userSelector,
} from "../../../../store/user/user.selectors";
import * as UserActions from "../../../../store/user/user.actions";
import {
  faAnglesLeft,
  faAnglesRight,
  faArrowRight,
  faFloppyDisk,
  faLock,
  faTrash,
  faUpload,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import * as LoginActions from "../../../../store/login/login.actions";
import {FormControl, Validators} from "@angular/forms";
import {UserRoleEnum} from "../../../../models/userRole.enum";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: []
})
export class AccountComponent implements OnInit {

  userIsLoading$: Observable<boolean>;
  userError$: Observable<HttpErrorResponse | null>
  user$: Observable<UserModel | null>
  users$: Observable<UserModel[] | null>

  qrCode$: Observable<string | null>
  qrCodeModalOpen = false;

  saveIcon: IconDefinition = faFloppyDisk;
  upload: IconDefinition = faUpload
  rightArrow: IconDefinition = faArrowRight
  trashIcon: IconDefinition = faTrash;
  lockIcon: IconDefinition = faLock;
  nextIcon: IconDefinition = faAnglesRight;
  prevIcon: IconDefinition = faAnglesLeft;

  firstNameInputField = new FormControl('');

  lastNameInputField = new FormControl('');

  passwordInputField = new FormControl('', {
    validators: [
      Validators.minLength(8)
    ]
  });

  repeatPasswordInputField = new FormControl('', {
    validators: [
      Validators.minLength(8)
    ]
  });

  currentPage: number;
  itemsPerPage: number;
  totalItems: number = 0;

  users: UserModel[] = [];

  validationError: boolean = false
  validationErrorMessage: string = "";

  constructor(
    private store: Store<AppState>,
  ) {
    this.userIsLoading$ = this.store.pipe(select(userIsLoadingSelector));
    this.userError$ = this.store.pipe(select(userErrorSelector));
    this.user$ = this.store.pipe(select(userSelector));
    this.users$ = this.store.pipe(select(allUsersSelector));

    this.qrCode$ = this.store.pipe(select(twofaQrCodeSelector));

    this.currentPage = 1;
    this.itemsPerPage = 10;
  }

  ngOnInit() {
    this.store.dispatch(UserActions.getAllUsers({
      page: 0,
      count: 999999999
    }));

    this.users$.subscribe(users => {
      this.updateTable(users || []);
    })
  }

  updateTable(users: UserModel[]) {
    this.users = users;
    this.totalItems = users.length;
  }

  enableTwofa() {
    this.qrCodeModalOpen = true
    this.store.dispatch(UserActions.enableTwofa());
  }

  closeModalAndRefreshUser() {
    this.qrCodeModalOpen = false
    this.store.dispatch(LoginActions.logout())
  }

  buildImageString(qrCode: string) {
    return "data:image/png;base64," + qrCode;
  }

  disableTwofa() {
    this.store.dispatch(UserActions.disableTwofa());
  }

  handleFileInput(files: any) {
    const target = files.target as HTMLInputElement;
    const file = (target.files as FileList)[0];

    this.store.dispatch(UserActions.uploadAvatar({avatar: file}));
  }

  getNextPage(): void {
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  getPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPage(page: number): void {
    const totalPages = this.getTotalPages();

    if (page >= 1 && page <= totalPages) {
      this.currentPage = page;
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  getAvailablePageNumbers(): number[] {
    const totalPages = this.getTotalPages();

    return Array.from({length: totalPages}, (_, index) => index + 1);
  }

  getDisplayedUsers(): UserModel[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    return this.users.slice(startIndex, endIndex);
  }

  changeState(event: Event, id: number) {
    let select = event.target as HTMLSelectElement

    this.store.dispatch(UserActions.updateRole({
      id: id,
      role: select.value as UserRoleEnum
    }))
  }

  getUserRoles() {
    return Object.keys(UserRoleEnum)
  }

  updateUser() {
    this.validationError = false
    this.validationErrorMessage = ""

    let firstName = this.firstNameInputField.value;
    let lastName = this.lastNameInputField.value;
    let password = this.passwordInputField.value;
    let repeatPassword = this.repeatPasswordInputField.value;

    if (firstName == "" || firstName == null) {
      firstName = null;
    }

    if (lastName == "" || lastName == null) {
      lastName = null;
    }

    if ((password != "" || repeatPassword != "") && (password != null || repeatPassword != null)) {
      this.checkPassword();
      this.checkPasswordRepeat();
      this.checkPasswordSame();
    } else {
      password = null;
    }

    if (!this.validationError && (firstName != null && lastName != null && password != null)) {
      this.store.dispatch(UserActions.updateUser({
        firstName: firstName,
        lastName: lastName,
        password: password
      }));

      this.firstNameInputField.reset();
      this.lastNameInputField.reset();
      this.passwordInputField.reset();
      this.repeatPasswordInputField.reset();
    } else {
      this.validationError = true;
      this.validationErrorMessage = "Bitte füllen Sie zumindest ein Feld aus!"
    }
  }

  private checkPassword() {
    if (!this.passwordInputField.hasError("minlength")) {
      return
    }

    this.validationError = true;
    this.validationErrorMessage = "Das Passwort hat nicht die nötige Länge! (min. 8 Zeichen)";
  }

  private checkPasswordRepeat() {
    if (!this.repeatPasswordInputField.hasError("minlength")) {
      return
    }

    this.validationError = true;
    this.validationErrorMessage = "Das Passwort hat nicht die nötige Länge! (min. 8 Zeichen)";
  }

  private checkPasswordSame() {
    if (this.passwordInputField.value!.length < 8 && this.repeatPasswordInputField.value!.length < 8) {
      return;
    }

    if (this.passwordInputField!.value != this.repeatPasswordInputField.value!) {
      this.validationError = true;
      this.validationErrorMessage = "Die eingegebenen Passwörter stimmen nicht überein!";
    }
  }
}
