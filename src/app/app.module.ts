import { AppRoutes } from "./app.routing";
import { SharedModule } from "./shared/shared.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutes, SharedModule, BrowserAnimationsModule],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule { }
