import { Profile } from "./../../shared/data/profile";
import { projects } from "./../../shared/data/projects";
import { User } from "./../../shared/models/User";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {
  user: User;

  projects = projects;

  showBlog = false;
  constructor() {}

  ngOnInit() {
    this.user = Profile;

  }
}
