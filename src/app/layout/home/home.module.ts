import { HomeRoutes } from "./home.routing";
import { SharedModule } from "./../../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";

@NgModule({
  imports: [CommonModule, SharedModule, HomeRoutes],
  declarations: [HomeComponent]
})
export class HomeModule {}
