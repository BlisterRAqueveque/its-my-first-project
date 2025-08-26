import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Dashboard } from "./dashboard";
import { userResolver } from "../../core/resolvers/user-resolver";

const routes: Routes = [
  {
    path: "",
    component: Dashboard,
    children: [],
    resolve: { user: userResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
