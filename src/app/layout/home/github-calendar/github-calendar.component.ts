import { Component, OnInit } from "@angular/core";
declare var GitHubCalendar: any;
@Component({
  selector: "app-github-calendar",
  templateUrl: "./github-calendar.component.html",
  styleUrls: ["./github-calendar.component.scss"]
})
export class GithubCalendarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    GitHubCalendar(".calendar", "ikismail", {responsice: true});
  }
}
