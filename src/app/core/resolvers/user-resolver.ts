import { ResolveFn } from "@angular/router";
import { Observable, of } from "rxjs";

export const userResolver: ResolveFn<
  Observable<{ id: number; name: string; lastName: string }>
> = (route, state) => {
  return of({
    id: 1,
    name: "Roberto",
    lastName: "Aqueveque",
  });
};
