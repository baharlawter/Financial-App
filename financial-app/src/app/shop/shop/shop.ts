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
      title: 'The Total Money Makeover ',
      image: 'https://m.media-amazon.com/images/I/81RvIwENAbL._SY522_.jpg',
      price: '$24.20',
    },
    {
      title: 'Rich Dad Poor Dad',
      image: 'https://m.media-amazon.com/images/I/81BE7eeKzAL._SY522_.jpg',
      price: '$7.34',
    },
    {
      title: 'Rich Dad Poor Dad',
      image: 'https://m.media-amazon.com/images/I/81BE7eeKzAL._SY522_.jpg',
      price: '$7.34',
    },
    {
      title: 'Rich Dad Poor Dad',
      image: 'https://m.media-amazon.com/images/I/81BE7eeKzAL._SY522_.jpg',
      price: '$7.34',
    },
  ];
}
