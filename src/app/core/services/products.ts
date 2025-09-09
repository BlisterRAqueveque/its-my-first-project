import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { HttpClient, HttpParams } from "@angular/common/http";
import { catchError, map, tap } from "rxjs";
import { CustomResponse } from "../../models/api-response";
import { Product } from "../../models/product";

@Injectable({
  providedIn: "root",
})
export class Products {
  private readonly url = environment.apiUrl + "products/";
  private readonly http = inject(HttpClient);

  findAll(params?: HttpParams) {
    return this.http
      .get<
        CustomResponse<
          Product[]
        > /** Especificamos el objeto que devuelve el backend */
      >(this.url, { params: params })
      .pipe(
        catchError((err) => {
          throw new Error(err);
        }),
        map((data) => data.result), //* Podemos mapear la respuesta
        tap((data) => {
          console.log(data);
        }) //* Podemos ejecutar una función intermedia
      );
  }
}
