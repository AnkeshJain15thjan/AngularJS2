import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {routes} from './app.route';
import { AppComponent }   from './app.component';
import {HomeComponent} from './home.component';
@NgModule({
  imports:   
  [ BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes) ],
  declarations: [ AppComponent,HomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }