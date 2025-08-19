import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Login } from "./login";
import { LoginRoutingModule } from "./login-routing-module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [Login],
  imports: [CommonModule, LoginRoutingModule, FormsModule],
})
export class LoginModule {}
