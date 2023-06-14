import {inject} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {catchError, Observable, of, switchMap} from "rxjs";
import {AuthService} from "../services/auth.service";
import {OperationSuccessModel} from "../models/operationSuccess.model";
import {JwtUtils} from "../utils/jwt.utils";

export const canActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const authService: AuthService = inject(AuthService)
  const router: Router = inject(Router)

  const token = localStorage.getItem("accessToken")

  if (!token) {
    router.navigate(["/auth/login"]).then()
    return of(false)
  }

  const jwtUtils = new JwtUtils(token)
  const jwtPayload = jwtUtils.decode()

  if (!jwtPayload || jwtPayload.type != "access") {
    router.navigate(["/auth/login"]).then()
    return of(false)
  }

  if (jwtUtils.isExpired()) {
    router.navigate(["/auth/login"]).then()
    console.log("expired")
    return of(false)
  }

  console.log("not expired")
  return of(true)
}
