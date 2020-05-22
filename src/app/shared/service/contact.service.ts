import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Contact } from "./../models/Contact";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  BASE_URL;

  constructor(private http: HttpClient) {
    // this.BASE_URL =
    //   "https://ikismail-portfolio.herokuapp.com/api/user/mailservice";
  }

  sendMessage(data: Contact) {
    const body = new HttpParams()
      .set("form-name", "contact")
      .append("name", data.name)
      .append("email", data.email)
      .append("message", data.message);

    return this.http.post("/", body.toString(), {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
  }

  // getAllMessages() {
  //   return this.http.get(this.BASE_URL);
  // }
}
