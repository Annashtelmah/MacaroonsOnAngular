import { Injectable } from '@angular/core';
import { ProductType } from 'app/types/product.type';

@Injectable()
export class ProductService {
  constructor() {}

  getProduct(): ProductType[] {
    return [
      {
        image: '1.png',
        title: 'Макарун с малиной',
        price: {
          quantity: '1 шт.',
          value: 1.70,
        },
      },
      {
        image: '2.png',
        title: 'Макарун с манго',
        price: {
          quantity: '1 шт.',
          value: 1.90,
        },
      },
      {
        image: '3.png',
        title: 'Пирог с ванилью',
        price: {
          quantity: '1 шт.',
          value: 2.70,
        },
      },
      {
        image: '4.png',
        title: 'Пирог с фисташками',
        price: {
          quantity: '1 шт.',
          value: 1.85,
        },
      },
    ];
  }
}
