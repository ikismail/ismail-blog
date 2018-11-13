import { HomeRoutes } from "./home.routing";
import { SharedModule } from "./../../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { GithubCalendarComponent } from "./github-calendar/github-calendar.component";
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { RecentWorkComponent } from './recent-work/recent-work.component';

@NgModule({
  imports: [CommonModule, SharedModule, HomeRoutes],
  declarations: [HomeComponent, GithubCalendarComponent, WorkExperienceComponent, RecentWorkComponent]
})
export class HomeModule {}
