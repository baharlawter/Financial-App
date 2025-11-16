import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterLink, ButtonModule],
  templateUrl: './index.html',
  styleUrl: './index.scss',
})
export class IndexComponent {
  title = signal('financial-app');
}
