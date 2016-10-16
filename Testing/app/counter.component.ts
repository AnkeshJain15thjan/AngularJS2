import {Component, Input} from 'angular2/core';

@Component({
  selector: 'counter',
  template: `
    <div class="counter">
      <div class="counter__container">
        <button (click)="decrement();" class="counter__button">
          -
        </button>
        <input type="text" class="counter__input" [value]="counterValue">
        <button (click)="increment();" class="counter__button">
          +
        </button>
      </div>
    </div>
  `
})
export class CounterComponent {
  @Input() counterValue = 0;
  increment() {
    this.counterValue++;
  }
  decrement() {
    this.counterValue--;
  }
  ngOnInit() {
        alert(this.counterValue);
    }
}