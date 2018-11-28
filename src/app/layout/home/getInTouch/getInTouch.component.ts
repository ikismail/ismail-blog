import { Profile } from "./../../../shared/data/profile";
import { Component, OnInit } from "@angular/core";
import { User } from "../../../shared/models/User";

@Component({
  selector: "app-getInTouch",
  templateUrl: "./getInTouch.component.html",
  styleUrls: ["./getInTouch.component.scss"]
})
export class GetInTouchComponent implements OnInit {
  user: User;
  constructor() {

    this.user = Profile;
  }

  ngOnInit() {
  }

}
