import { NgModule, provideBrowserGlobalErrorListeners } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing-module";
import { App } from "./app";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { tokenInterceptor } from "./core/interceptors/token-interceptor";
import { CookieService } from "ngx-cookie-service";

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([tokenInterceptor])),
    CookieService
  ],
  bootstrap: [App],
})
export class AppModule {}
