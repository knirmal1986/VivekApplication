import { AboutusComponent } from "./aboutus/aboutus.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeewelcomeComponent } from "./employeewelcome/employeewelcome.component";

const routes: Routes = [
  { path: "", component: EmployeewelcomeComponent },
  { path: "home", component: HomeComponent },
  { path: "aboutus", component: AboutusComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
