import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './index.html',
  styleUrl: './index.scss',
})
export class IndexComponent {
  title = signal('financial-app');
}
