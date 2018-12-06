import { SpinnerService } from "./../../shared/service/spinner.service";
import { Profile } from "./../../shared/data/profile";
import { projects } from "./../../shared/data/projects";
import { User } from "./../../shared/models/User";
import {
    Component,
    OnInit,
    ViewEncapsulation,
    AfterViewInit
} from "@angular/core";
@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit, AfterViewInit {
    user: User;

    projects = projects;
    constructor(private _spinner: SpinnerService) { }

    ngOnInit() {
        this.user = Profile;
    }

    ngAfterViewInit(): void {
        const self = this;
        setTimeout(function () {
            self._spinner.hide();
        }, 1500);
    }
}
