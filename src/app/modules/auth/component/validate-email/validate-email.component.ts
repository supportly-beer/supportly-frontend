import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {OperationSuccessModel} from "../../../../models/operationSuccess.model";

@Component({
  selector: 'app-validate-email',
  templateUrl: './validate-email.component.html',
  styleUrls: []
})
export class ValidateEmailComponent implements OnInit {

  tokenInvalid: boolean = false;
  generalError: boolean = false;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let token = params['token'];
      let email = params['email'];

      if (!token || !email) {
        this.router.navigate(['/auth/login']).then()
        return;
      }

      this.authService.validateEmail(token, email).subscribe({
        next: (operationSuccessModel: OperationSuccessModel) => {
          this.router.navigate(['/auth/login']).then()
        },
        error: (err) => {
          if (!err) {
            this.router.navigate(['/auth/login']).then()
            return;
          }

          switch (err.status) {
            case 400:
              this.tokenInvalid = true;
              break;
            default:
              this.generalError = true;
              break;
          }
        }
      })
    })
  }
}
