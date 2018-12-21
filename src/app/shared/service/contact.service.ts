import { environment } from "./../../../environments/environment.prod";
import { Contact } from "./../models/Contact";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { isDevMode } from "@angular/core";
@Injectable({
    providedIn: "root"
})
export class ContactService {

    BASE_URL;

    constructor(private http: HttpClient) {
        this.BASE_URL =
            "https://ikismail-portfolio.herokuapp.com/api/user/mailservice";
    }

    sendMessage(data: Contact) {
        return this.http.post(this.BASE_URL, data);
    }

    getAllMessages() {
        return this.http.get(this.BASE_URL);
    }

}
