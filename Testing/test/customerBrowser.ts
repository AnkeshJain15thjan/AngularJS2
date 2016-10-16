import {Component, Input,OnInit,OnChanges} from 'angular2/core';
import {Customer} from './customerService';
import {COMMON_DIRECTIVES} from 'angular2/common';
import {CustomerList} from './customerList';
import {CustomerDetail} from './customerDetail';


@Component({
  selector : 'customer-browser',
 template: `
  <div class="row">
    <customer-list [customers]="customers" [(selected)]="selectedCustomer"  (selection)="selection($event);"></customer-list>
    <customer-detail [customer]="selectedCustomer" ></customer-detail>
  </div>
  `,
     directives: [COMMON_DIRECTIVES,CustomerList,CustomerDetail]
})
export class CustomerBrowser implements OnInit {
   @Input() selectedCustomer;
  @Input() customers: [];

    ngOnInit() {
      // this.selectedCustomer=this.customers[0];
      console.log(this.selectedCustomer);
    }
      ngOnChanges(...args: any[]) {
           console.log('onChange fired');
        console.log('changing', args);
        if(args[0].customers.currentValue)
        this.selectedCustomer=args[0].customers.currentValue[0];
}
selection($event)
{
console.log($event);
this.selectedCustomer=$event.value;

}