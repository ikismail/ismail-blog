import { WorkExperience } from "./../../../shared/data/work_exp";
import { Work } from "./../../../shared/models/Work";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-work-experience",
  templateUrl: "./work-experience.component.html",
  styleUrls: ["./work-experience.component.scss"]
})
export class WorkExperienceComponent implements OnInit {
  works: Work[];

  constructor() {
    this.works = WorkExperience;
  }

  ngOnInit() {}
}
