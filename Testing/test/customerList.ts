import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {Customer} from './customerService';

@Component({
  selector: 'customer-list',
  template: `
  <div >
    <div>
      <h3>Customers</h3>
    </div>
    <ul>
      <li 
        *ngFor="#customer of customers">
        <a (click)="selectCustomer(customer)">{{customer.name.first}} {{customer.name.last}}</a></li>
    </ul>
  </div>
  `
})
export class CustomerList {
  @Input() customers: [];
  @Input() selected
  @Output() selectedChange: EventEmitter<Customer> = new EventEmitter();
  @Output() selection = new EventEmitter();
  
  selectCustomer(customer)
  {
  
   this.selection.emit({
      value: customer
    })
  }
}