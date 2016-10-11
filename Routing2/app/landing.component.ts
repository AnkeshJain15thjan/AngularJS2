import {Component} from '@angular/core';

@Component({
  template: `<div>Landing </div>
  <nav>
      <a [routerLink]="['/landing']">Home</a>
     <a [routerLink]="['/landing/item', 1]">Item 1</a>  
    </nav>
    <router-outlet></router-outlet>`

})

export class LandingComponent{}

@Component({
  template: `<div>Home </div>`

})

export class LandingHomeComponent{}