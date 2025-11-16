import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { IndexComponent } from './index/index';
import { Blog } from './blog/blog';
import { Shop } from './shop/shop/shop';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'blog/:id', component: Blog },
  { path: 'shop', component: Shop },
];
