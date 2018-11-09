import { User } from "./../../shared/models/User";
import { particles } from "./../../shared/config/particle";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
declare var particlesJS: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HomeComponent implements OnInit {
  user: User;
  constructor() {}

  ngOnInit() {
    this.user = <User>{
      name: "Mohammed Ismail",
      position: "Software Engineer",
      bio: "Angular | Java | Web-service | Github",
      avatar: "https://avatars1.githubusercontent.com/u/17190913?s=460&v=4",
      email: "ikismail7@gmail.com",
      phoneNumber: "8124794942",
      link: {
        github: { username: "ikismail", link: "https://github.com/ikismail" },
        facebook: {
          username: "ikismail7",
          link: "https://www.facebook.com/ikismail7"
        },
        freeCodeCamp: {
          username: "ikismail",
          link: "https://www.freecodecamp.org/ikismail"
        },
        linkedIn: {
          username: "ikismail7",
          link: "https://www.linkedin.com/in/ikismail7/"
        },
        twitter: {
          username: "ikismail7",
          link: "https://twitter.com/ikismail7"
        },
        youtube: {
          username: "ikismail7",
          link: "https://www.youtube.com/user/ikismail7/"
        },
        codepen: { username: "ikismail", link: "https://codepen.io/ikismail/" },
        instagram: {
          username: "ikismail27",
          link: "https://www.instagram.com/ikismail27/"
        }
      }
    };
  }
}
