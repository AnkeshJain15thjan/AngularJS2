import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from 'app/home.component';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent }
 /* {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: '', component: AboutHomeComponent },
      { path: 'item/:id', component: AboutItemComponent }
    ]
  }*/
];