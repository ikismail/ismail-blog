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
  constructor() {
    particlesJS.load(
      "particles-js",
      "../../../assets/js/particlejs.json",
      function() {
        console.log("callback - particle.js configloaded ");
      }
    );
  }

  ngOnInit() {}
}
