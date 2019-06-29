import { projects } from "./../../../shared/data/projects";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recent-work",
  templateUrl: "./recent-work.component.html",
  styleUrls: ["./recent-work.component.scss"]
})
export class RecentWorkComponent implements OnInit {
  projects = projects;
  constructor() {}

  ngOnInit() {}
}
