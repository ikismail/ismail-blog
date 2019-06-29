import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgProgressModule } from "@ngx-progressbar/core";
import { NgProgressRouterModule } from "@ngx-progressbar/router";
import { ToastrModule } from "ngx-toastr";
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot({
            timeOut: 1500,
            positionClass: "toast-bottom-right",
            preventDuplicates: true,
            progressBar: true
        }),
        NgProgressModule.forRoot(),
        NgProgressRouterModule.forRoot()
    ],
    declarations: [],
    exports: [RouterModule, HttpClientModule, FormsModule, ReactiveFormsModule, NgProgressModule, NgProgressRouterModule, ToastrModule]
})
export class SharedModule { }
