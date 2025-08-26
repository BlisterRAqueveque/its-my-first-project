import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { throwError } from "rxjs";

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieService = inject(CookieService);
  const token = cookieService.get("token");

  if (!token) return throwError(() => "No token");

  const cloneReq = req.clone({
    setHeaders: {
      authorization: `Bearer ${token}`,
    },
  });

  return next(cloneReq);
};
