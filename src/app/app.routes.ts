import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RacesComponent } from './races/races.component';

export const ROUTES: Routes = [
  { path: 'races', component: RacesComponent },
  { path: '', component: HomeComponent }
];
