import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeComponent } from './home/home.component';
import { Blog1 } from './blog1/blog1/blog1';
import { Blog2 } from './blog2/blog2/blog2';
import { Blog3 } from './blog3/blog3/blog3';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'blog1', component: Blog1 },
  { path: 'blog1', component: Blog2 },
  { path: 'blog3', component: Blog3 },
];
