import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {MasterComponent} from './masterComponent'
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,MasterComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }