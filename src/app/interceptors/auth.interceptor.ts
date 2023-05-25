import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap({
      error: (error) => {
        if (!(error instanceof HttpErrorResponse)) {
          return;
        }

        if (error.status != 401) {
          return;
        }

        localStorage.removeItem("accessToken")
        this.router.navigate(["/auth/login"]).then()
      }
    }));
  }
}
