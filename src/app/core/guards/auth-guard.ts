import { CanActivateFn } from "@angular/router";

export const authGuard: CanActivateFn = (route, state) => {
  // TODO Asegurarse que exista el token
  const token = localStorage.getItem("token");

  return token ? true : false;
};
