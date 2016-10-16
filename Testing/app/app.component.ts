import {Component} from 'angular2/core';
import {CounterComponent} from './counter.component';

@Component({
  selector: 'my-app',
  styles: [`
    .app {
      display: block;
      text-align: center;
      padding: 25px;
      background: #f5f5f5;
    }
  `],
  template: `
    <div class="app">
      <counter [counterValue]="myValue"></counter>
    </div>
  `,
  directives: [CounterComponent]
})
export class AppComponent {
  public myValue:number = 2;
}