import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
@Component({
  selector: 'my-app',
  template: `
    <h1 class="title"> App</h1>
    <nav>
      <a [routerLink]="['/']">Home</a>
      <a [routerLink]="['/landing']">Landing</a>  
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }