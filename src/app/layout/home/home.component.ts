import { SpinnerService } from "./../../shared/service/spinner.service";
import { Profile } from "./../../shared/data/profile";
import { projects } from "./../../shared/data/projects";
import { User } from "./../../shared/models/User";
import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
} from "@angular/core";
declare var particlesJS: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent implements OnInit, AfterViewInit {
  user: User;
  projects = projects;

  showBlog = false;

  today: number = Date.now();
  // tslint:disable-next-line:variable-name
  constructor(private _spinner: SpinnerService) {}

  ngOnInit() {
    const profile = {
      ...Profile,
    };
    const links = [];
    /* Converting the user links object */
    profile.links.map((link, i) => {
      const key = Object.keys(link)[0];
      const object = {
        platform: key,
        username: link[key].username,
        link: link[key].link,
        icon: this.iconFinderHandler(key),
        canShow: link[key].canShow,
      };
      links.push(object);
    });
    profile.links = links;
    this.user = profile;
  }

  ngAfterViewInit(): void {
    const self = this;
    setTimeout(() => {
      self._spinner.hide();

      particlesJS.load("particlejs", "../../../assets/particle.json", function () {
        console.log("callback - particles.js config loaded");
      });
    }, 1500);
  }

  iconFinderHandler(icon: string) {
    switch (icon) {
      case "github":
        return "fa-github";
      case "facebook":
        return "fa-facebook-f";
      case "freeCodeCamp":
        return "fa-free-code-camp";
      case "linkedIn":
        return "fa-linkedin";
      case "twitter":
        return "fa-twitter";
      case "youtube":
        return "fa-youtube";
      case "codepen":
        return "fa-codepen";
      case "instagram":
        return "fa-instagram";
    }
  }
}
