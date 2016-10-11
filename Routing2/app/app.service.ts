import { Injectable } from '@angular/core';
import {Http, Headers, HTTP_PROVIDERS} from '@angular/http';

@Injectable()

export class AppService {

constructor(public http: Http) {     
        this.http = http;
        }
contacts = [
    { name: 'Pascal Precht', id: 1 },
    { name: 'Christoph Burgdorf', id: 2 },
    { name: 'Thomas Burleson', id: 3 }
  ];
  
  getContacts() {
    return this.contacts;  
  }
  
  getContact(id) {
    return this.contacts.find(contact => contact.id == id);
  }
}