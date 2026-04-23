import { Component } from '@angular/core';
import { ProductType } from './types/product.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public showPresent: boolean = true;
  public phone="+375 (29) 368-98-69";
  public instagramLink='http://google.ru';

  public formValues = {
    productTitle: '',
    name: '',
    phone: '',
  };
  public advantages = [
    {
      title: 'Лучшие продукты',
      description:
        'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.',
    },
    {
      title: 'Много вкусов',
      description:
        'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.',
    },
    {
      title: 'Бисквитное тесто',
      description:
        'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!',
    },
    {
      title: 'Честный продукт',
      description:
        'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016г',
    },
  ];

  public products: ProductType[] = [
    {
      image: '1.png',
      title: 'Макарун с малиной',
      price: {
        quantity: '1 шт.',
        value: '1,70 руб.',
      },
    },
    {
      image: '2.png',
      title: 'Макарун с манго',
      price: {
        quantity: '1 шт.',
        value: '1,90 руб.',
      },
    },
    {
      image: '3.png',
      title: 'Пирог с ванилью',
      price: {
        quantity: '1 шт.',
        value: '2,70 руб.',
      },
    },
    {
      image: '4.png',
      title: 'Пирог с фисташками',
      price: {
        quantity: '1 шт.',
        value: '1,80 руб.',
      },
    },
  ];

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
  }
}
