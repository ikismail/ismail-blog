import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgProgressModule } from "@ngx-progressbar/core";
import { NgProgressRouterModule } from "@ngx-progressbar/router";
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgProgressModule.forRoot(),
        NgProgressRouterModule.forRoot()
    ],
    declarations: [],
    exports: [RouterModule, HttpClientModule, FormsModule, ReactiveFormsModule, NgProgressModule, NgProgressRouterModule]
})
export class SharedModule { }
