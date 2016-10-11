import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { AppService }  from 'app/app.service';

@Component({
  selector: 'my-app',
  template: `
    <h1 class="title"> App</h1>
    <nav>
      <a [routerLink]="['/']">Home</a>
      <a [routerLink]="['/landing']">Landing</a>  
    </nav>
    <router-outlet></router-outlet>
  `,
  providers:[AppService]
})
export class AppComponent   implements OnInit{
 constructor(private contactsService: AppService) {
    this.contacts = this.contactsService.getContacts();
    console.log(this.contacts); 
  }
  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
     console.log(this.contacts); 
  }
}