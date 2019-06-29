import { SpinnerService } from "./shared/service/spinner.service";
import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
    selector: "app-root",
    template: `
    <ng-progress [color]="'#f56a6a'"></ng-progress>
    <router-outlet></router-outlet>
  `,
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
    title = "app";

    constructor(private router: Router, private _spinner: SpinnerService) { }

    ngOnInit(): void {
        this.router.events.subscribe(evt => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}
