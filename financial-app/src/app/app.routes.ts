import { Routes } from '@angular/router';
import { Calculator } from './Calculator/calculator';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calculator', component: Calculator },
];
