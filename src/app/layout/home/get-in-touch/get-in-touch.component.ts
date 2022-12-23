import { ContactService } from "./../../../shared/service/contact.service";
import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { User } from "src/app/shared/models/User";
import { Profile } from "src/app/shared/data/profile";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

declare var google: any;
@Component({
  selector: "app-get-in-touch",
  templateUrl: "./get-in-touch.component.html",
  styleUrls: ["./get-in-touch.component.scss"],
})
export class GetInTouchComponent implements OnInit {
  user: User;
  isError = false;
  errorClass = "";
  form: FormGroup;
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef
  ) {
    this.user = Profile;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      message: ["", [Validators.required]],
    });
  }

  submit() {
    if (this.form.invalid) {
      this.isError = true;
      this.errorClass = "animated fadeIn";
      setTimeout(() => {
        this.errorClass = "animated fadeOut";
        this.isError = false;
      }, 4000);
      return;
    }

    this.loading = true;

    const submitButton = document.getElementById(
      "submitMessage"
    ) as HTMLButtonElement;

    submitButton.disabled = true;

    this.contactService.sendMessage(this.form.value).subscribe(
      (data) => {
        this.toastr.success("Got your message!", "Message Sent!");
        this.loading = false;
        submitButton.disabled = false;

        this.cdr.detectChanges();
      },
      (err) => {
        if (err instanceof ErrorEvent) {
          // client side error
          this.toastr.error("Something went wrong", "Error!");
          console.log(err);
        } else {
          // backend error. If status is 200, then the message successfully sent
          if (err.status === 200) {
            this.toastr.success("Got your message!", "Message Sent!");
          } else {
            this.toastr.error("Something went wrong", "Error!");
            console.log(err);
          }
        }
        this.loading = false;
        submitButton.disabled = false;

        this.cdr.detectChanges();
      }
    );
  }
}
