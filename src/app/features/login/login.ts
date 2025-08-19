import { Component } from "@angular/core";

@Component({
  selector: "app-login",
  standalone: false,
  templateUrl: "./login.html",
  styleUrl: "./login.css",
})
export class Login {
  protected username = "";
  protected password = "";
  login() {
    const credenciales = {
      username: this.username,
      password: this.password,
    };

    console.log(credenciales);
    // TODO El usuario envía sus credenciales a la API
    throw Error("Method not implemented");
  }

  test(valor: string) {
    console.log(valor);
  }
}
