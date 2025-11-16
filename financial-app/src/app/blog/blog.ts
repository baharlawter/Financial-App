import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-blog',
  imports: [ButtonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params: any) => {
      const id = params['id'];
      if (id == 1) {
        this.blogTitle = 'How to Pay off your debt early!';
        this.blogContent =
          'To pay off your debt, start by reviewing every single charge on your credit and debt cards. Cancel automatic subscriptions you don’t use and cut recurring costs where possible. Then choose a payoff strategy — begin by paying off your smallest credit card balance first to build momentum, then tackle larger balances. Small wins make the process easier and keep you motivated.';
      } else if (id == 2) {
        this.blogTitle = 'Buying a House';
        this.blogContent =
          'Buying a house is harder right now because of high interest rates and rising prices. Aim to save at least a 10% down payment, and work on improving your credit score so you qualify for lower mortgage rates. If you’re a first-time homebuyer, some programs allow down payments as low as 3–5%, but those often have additional requirements and may increase your monthly cost.';
      } else if (id == 3) {
        this.blogTitle = 'Building Credit';
        this.blogContent =
          'To build credit, many issuers offer secured credit cards that require a refundable deposit you use as your credit line. Use the card responsibly and pay the balance on time—this is the most important factor. Avoid maxing out the card; keep your credit utilization low and try to pay before the due date. Using a card consistently over a long period builds a stronger credit history. Also avoid opening many new cards at once, as frequent applications can hurt your score.';
      }
    });
  }

  blogTitle = '';
  blogContent = '';
}
