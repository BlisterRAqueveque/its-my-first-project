import { inject, Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Login } from "../../features/login/login";
import { HttpClient } from "@angular/common/http";
import {
  BehaviorSubject,
  catchError,
  firstValueFrom,
  ignoreElements,
  map,
  of,
  switchMap,
  take,
  tap,
} from "rxjs";
import { Router } from "@angular/router";

interface LoginResponse {
  token: {
    access_token: string;
    token_type: string;
    expires_in_ms: number;
  };
  usuario: any;
}

@Injectable({
  providedIn: "root",
})
export class Auth {
  private readonly cookieService = inject(CookieService);
  private readonly http = inject(HttpClient);
  private readonly url = "http://localhost:3030/api/usuario/auth/";
  private readonly router = inject(Router);

  private usuario = new BehaviorSubject<any | null>(null);

  login(credenciales: { usuario: string; clave: string }) {
    const direction = this.url + "login";

    return this.http
      .post<{ ok: boolean; result: LoginResponse; msg: string }>(
        direction,
        credenciales
      )
      .pipe(
        catchError((err) => {
          throw new Error(err);
        }),
        map((data) => data.result),
        tap((data) => {
          console.log(data);

          const { token } = data;
          this.setToken(token.access_token, token.expires_in_ms);
          this.usuario.next(data.usuario);
          this.router.navigate(["/dashboard"]);
          ignoreElements();
        })
      );
  }

  returnUserInfo() {
    return firstValueFrom(
      this.usuario.pipe(
        take(1),
        switchMap((data) => of(data))
      )
    );
  }

  private setToken(token: string, expireIn: number) {
    this.cookieService.set("token", token, expireIn, "/");
    return;
  }
}
