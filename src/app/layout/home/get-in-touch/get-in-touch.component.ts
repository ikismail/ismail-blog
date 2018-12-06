import { Component, OnInit } from "@angular/core";
import { User } from "src/app/shared/models/User";
import { Profile } from "src/app/shared/data/profile";

@Component({
    selector: "app-get-in-touch",
    templateUrl: "./get-in-touch.component.html",
    styleUrls: ["./get-in-touch.component.scss"]
})
export class GetInTouchComponent implements OnInit {
    user: User;
    constructor() {
        this.user = Profile;
    }

    ngOnInit() {
    }

}
