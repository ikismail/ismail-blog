import { SharedModule } from "./../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { IndexComponent } from "./index.component";
import { IndexRoutes } from "./index.routing";

@NgModule({
  imports: [CommonModule, SharedModule, IndexRoutes],
  declarations: [NavbarComponent, FooterComponent, IndexComponent]
})
export class IndexModule {}
