import { ContactService } from "./../../../shared/service/contact.service";
import { Component, OnInit } from "@angular/core";
import { User } from "src/app/shared/models/User";
import { Profile } from "src/app/shared/data/profile";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

declare var google: any;
@Component({
  selector: "app-get-in-touch",
  templateUrl: "./get-in-touch.component.html",
  styleUrls: ["./get-in-touch.component.scss"]
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
    private toastr: ToastrService
  ) {
    this.user = Profile;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      message: ["", [Validators.required]]
    });
  }

  submit() {
    this.loading = true;

    if (this.form.invalid) {
      this.isError = true;
      this.errorClass = "animated fadeIn";
      setTimeout(() => {
        this.errorClass = "animated fadeOut";
        this.isError = false;
      }, 4000);
      return;
    }

    const submitButton = <HTMLButtonElement>(
      document.getElementById("submitMessage")
    );

    submitButton.disabled = true;

    this.contactService
      .sendMessage(this.form.value)
      .toPromise()
      .then(
        data => {
          this.loading = false;
          submitButton.disabled = false;
          this.toastr.success("Got your message!", "Message Sent!");
        },
        err => {
          this.loading = false;
          submitButton.disabled = false;
          this.toastr.error("Something went wrong", "Error!");
        }
      );
  }
}
