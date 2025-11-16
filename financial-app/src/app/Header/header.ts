import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, PanelMenuModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  items: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Blogs',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'How to Pay off your debt early!',
            icon: 'pi pi-eraser',
            command: () => {
              this.router.navigate(['/blog', 1]);
            },
          },
          {
            label: 'Buying a House',
            icon: 'pi pi-heart',
            command: () => {
              this.router.navigate(['/blog', 2]);
            },
          },
          {
            label: 'Building credit',
            icon: 'pi pi-link',
            command: () => {
              this.router.navigate(['/blog', 3]);
            },
          },
        ],
      },
    ];
  }
}
