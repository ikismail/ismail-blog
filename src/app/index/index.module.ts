import { SharedModule } from "./../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IndexComponent } from "./index.component";
import { IndexRoutes } from "./index.routing";

@NgModule({
  imports: [CommonModule, SharedModule, IndexRoutes],
  declarations: [IndexComponent]
})
export class IndexModule {}
