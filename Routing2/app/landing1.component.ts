import { ActivatedRoute } from '@angular/router';
import {Component} from '@angular/core';

@Component({
  template: `<h3>Item Id: {{id}}</h3>
            <h3>name: {{Name}}</h3>`
})
export class Landing1Component { 
  id: any;
  paramsSub: any;
  
  constructor(private activatedRoute: ActivatedRoute) { 
  var vm=this;
  vm.Name="Ankesh";
  }
  
  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = parseInt(params['id'], 10));
  }
  
  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}