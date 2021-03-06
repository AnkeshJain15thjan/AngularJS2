import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {routes} from './app.route';
import { AppComponent }   from './app.component';
import {HomeComponent} from './home.component';
import {LandingComponent} from './landing.component';
import {Landing1Component} from './landing1.component';
import {LandingHomeComponent} from './landing.component';
@NgModule({
  imports:   
  [ BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes) ],
  declarations: [ AppComponent,HomeComponent,LandingComponent,Landing1Component,LandingHomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }