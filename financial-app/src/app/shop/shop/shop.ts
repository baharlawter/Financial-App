import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shop',
  imports: [CommonModule],
  templateUrl: './shop.html',
  styleUrl: './shop.scss',
})
export class Shop {
  books = [
    {
      title: 'The Total Money Makeover Updated and Expanded: A Proven Plan for Financial Peace',
      image: 'https://m.media-amazon.com/images/I/81RvIwENAbL._SY522_.jpg',
      price: '$24.20',
    },
    {
      title:
        'Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do',
      image: 'https://m.media-amazon.com/images/I/81BE7eeKzAL._SY522_.jpg',
      price: '$7.34',
    },
  ];
}
