import { HttpParams } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Products } from "../../core/services/products";

@Component({
  selector: "app-dashboard",
  standalone: false,
  templateUrl: "./dashboard.html",
  styleUrl: "./dashboard.css",
})
export class Dashboard {
  private readonly service = inject(Products);

  async ngOnInit() {
    const params = new HttpParams()
      .set(/** Se setea clave */ "activo", /** Se setea valor */ true)
      .set("perPage", 10)
      .set("page", 1);

    //> Manejarlo como promesa
    // const data = await firstValueFrom(this.service.findAll(params));
    //> Manejarlo como observable
    this.service.findAll(params).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.info("Task completed");
      },
    });
  }
}
