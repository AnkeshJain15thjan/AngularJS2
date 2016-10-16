import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/Rx';

interface CustomerName {
  first: string;
  last: string;
}



@Injectable()
export class CustomerData {
  constructor(private http: Http){
    this.customers = http.get('http://beta.json-generator.com/api/json/get/VkCoTefEg')
      .map(res => res.json());
  }
}