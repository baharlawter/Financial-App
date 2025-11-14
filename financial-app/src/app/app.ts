import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Header } from './header/header';
import { CalculatorComponent } from './calculator/calculator.component';
import { Blog1 } from './blog1/blog1/blog1';
import { Blog2 } from './blog2/blog2/blog2';
import { Blog3 } from './blog3/blog3/blog3';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, CalculatorComponent, Blog1, Blog2, Blog3],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = signal('financial-app');
}
