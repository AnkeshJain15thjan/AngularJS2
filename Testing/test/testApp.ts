//our root app component
import {Component} from 'angular2/core'
import {CustomerData} from './customerService';
import {CustomerBrowser} from './customerBrowser';

@Component({
    selector: 'my-app',
    template : `<span (click)="serviceCall()" *ngIf="!edited">click me </span><customer-browser *ngIf="edited" [customers]="customers | async" [selectedCustomer]="selectedCustomer | async" class="row"></customer-browser>`,
     providers: [CustomerData],
  directives: [CustomerBrowser]
})
export class testApp {
  constructor(public customerData:CustomerData) {
    this.edited=false;
  }
  serviceCall()
  {
  this.customers = this.customerData.customers;
    this.selectedCustomer=this.customers[0];
    this.edited=true;;
  
  }
}