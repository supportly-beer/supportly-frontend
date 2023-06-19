import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable, of} from "rxjs";
import {JwtUtils} from "../utils/jwt.utils";
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";

export const canActivateTwofa: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const authService: AuthService = inject(AuthService)
  const router: Router = inject(Router)

  const token = localStorage.getItem("twofaToken")

  if (!token) {
    router.navigate(["/auth/login"]).then()
    return of(false)
  }

  const jwtUtils = new JwtUtils(token)
  const jwtPayload = jwtUtils.decode()

  if (!jwtPayload || jwtPayload.type != "twofa") {
    router.navigate(["/auth/login"]).then()
    return of(false)
  }

  if (jwtUtils.isExpired()) {
    router.navigate(["/auth/login"]).then()
    return of(false)
  }

  return of(true)
}
