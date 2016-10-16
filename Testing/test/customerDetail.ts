import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {Customer} from './customerService';

@Component({
  selector: 'customer-detail',
  template: `
  <div >
    <div *ngIf="!customer">
      <h3 >Select a Customer</h3>
    </div>
    <div *ngIf="customer" >
      <h3>{{customer.name.first}} {{customer.name.last}}</h3>
    </div>
    <ul *ngIf="customer">
      <li>
        <h4>First Name</h4>
        <p >{{customer.name.first}}</p>
      </li>
      <li >
        <h4 >Last Name</h4>
        <p>{{customer.name.last}}</p>
      </li>
      <li >
        <h4 >First Name</h4>
        <p>{{customer.email}}</p>
      </li>
  </ul>
  </div>
  `
})
export class CustomerDetail {
  @Input() customer
  
}