import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RacesComponent } from './races/races.component';
import { RegisterComponent } from './register/register.component';

export const ROUTES: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'races', component: RacesComponent },
  { path: '', component: HomeComponent }
];
