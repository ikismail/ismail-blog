import { HomeRoutes } from "./home.routing";
import { SharedModule } from "./../../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { GithubCalendarComponent } from "./github-calendar/github-calendar.component";

@NgModule({
  imports: [CommonModule, SharedModule, HomeRoutes],
  declarations: [HomeComponent, GithubCalendarComponent]
})
export class HomeModule {}
