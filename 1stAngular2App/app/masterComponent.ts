import {Component, Input,OnInit} from 'angular2/angular2'


@Component({
  selector : 'master-component',
  template: `{{name}}Test Value : {{test}}`
})
export class MasterComponent implements OnInit {
    @Input() test: string;
    public name:string;

    ngOnInit() {
        this.test="Bharath";
        this.name="Hai";
    }
}