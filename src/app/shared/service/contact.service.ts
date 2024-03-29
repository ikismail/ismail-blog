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
    return this.http.post(
      `https://maker.ifttt.com/trigger/portfolio-contact-us/with/key/cfgRz9GBnrVrzzTJtZFmhC?value1=${data?.name}&value2=${data?.email}&value3=${data?.message}`,
      {}
    );
  }

  // getAllMessages() {
  //   return this.http.get(this.BASE_URL);
  // }
}
