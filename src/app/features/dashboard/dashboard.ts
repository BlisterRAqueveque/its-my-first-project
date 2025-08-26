import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, Observable } from "rxjs";

@Component({
  selector: "app-dashboard",
  standalone: false,
  templateUrl: "./dashboard.html",
  styleUrl: "./dashboard.css",
})
export class Dashboard {
  private readonly route = inject(ActivatedRoute);
  user$!: Observable<any>;

  ngOnInit() {
    this.user$ = this.route.data.pipe(map((data) => data["user"]));
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }
}
