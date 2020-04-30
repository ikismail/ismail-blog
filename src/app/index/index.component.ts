import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  template: `<router-outlet></router-outlet>`,
  styleUrls: [],
})
export class IndexComponent implements OnInit {
  isToggle = false;
  constructor() {}

  ngOnInit() {}

  toggle() {
    this.isToggle = !this.isToggle;
  }
}
