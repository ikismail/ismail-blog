import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"]
})
export class BlogComponent implements OnInit {
  isToggle = false;
  constructor() {}

  ngOnInit() {}

  toggle() {
    this.isToggle = !this.isToggle;
  }
}
