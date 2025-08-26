import { Component, inject } from "@angular/core";
import { Auth } from "../../core/services/auth";

@Component({
  selector: "app-login",
  standalone: false,
  templateUrl: "./login.html",
  styleUrl: "./login.css",
})
export class Login {
  protected username = "";
  protected password = "";

  private readonly authService = inject(Auth);

  login() {
    const credenciales = {
      usuario: this.username,
      clave: this.password,
    };
    // TODO El usuario envía sus credenciales a la API

    this.authService.login(credenciales).subscribe((data) => {
      console.log(data);
    });
  }
}
