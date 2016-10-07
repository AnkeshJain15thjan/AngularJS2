import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from 'app/home.component';

import {LandingComponent} from 'app/landing.component';

import {Landing1Component} from 'app/landing1.component';
import {LandingHomeComponent} from 'app/landing.component';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  {path :'landing',component:LandingComponent,
  children: [
      { path: '', component: LandingHomeComponent },
      { path: 'item/:id', component: Landing1Component }
      ]
      }
 /* {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: '', component: AboutHomeComponent },
      { path: 'item/:id', component: AboutItemComponent }
    ]
  }*/
];