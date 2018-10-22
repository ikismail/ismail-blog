import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<router-outlet></router-outlet>`,
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "app";

  ngOnInit(): void {
    console.log("App Component ");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
    );
    document.body.appendChild(script);
  }
}
