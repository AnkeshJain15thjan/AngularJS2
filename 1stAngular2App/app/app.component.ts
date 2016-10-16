import { Component } from '@angular/core';
import {MasterComponent} from './c'
@Component({
  selector: 'my-app',
  template: `<h1>My First Angular App</h1> <master-component></master-component>`,
  directives:[MasterComponent]
})
export class AppComponent { }