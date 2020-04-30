import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Contact } from './../models/Contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  BASE_URL;

  constructor(private http: HttpClient) {
    this.BASE_URL =
      'https://ikismail-portfolio.herokuapp.com/api/user/mailservice';
  }

  sendMessage(data: Contact) {
    return this.http.post(this.BASE_URL, data);
  }

  getAllMessages() {
    return this.http.get(this.BASE_URL);
  }
}
