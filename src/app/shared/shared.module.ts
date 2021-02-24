import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgProgressModule } from "ngx-progressbar";
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
      progressBar: true,
    }),
    NgProgressModule,
  ],
  declarations: [],
  exports: [
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgProgressModule,
    ToastrModule,
  ],
})
export class SharedModule {}
