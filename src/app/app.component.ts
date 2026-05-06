import { Component, OnInit } from '@angular/core';
import { ProductType } from './types/product.type';
import { ProductService } from './services/product.service';
import { ProductCartService } from './services/product-cart.service';
import { AdvantagesType } from './types/advantage.type';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductService, ProductCartService],
})
export class AppComponent implements OnInit {
  public showCountToCart: boolean = false;
  public showPresent: boolean = true;
  public phone = '375293689869';
  public instagramLink = 'http://google.ru';

  public formValues = {
    productTitle: '',
    name: '',
    phone: '',
  };
  public advantages: AdvantagesType[] = [
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

  public products: ProductType[] = [];

  constructor(
    private productServis: ProductService,
    public cart: ProductCartService,
  ) {}

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();

    this.showCountToCart = true;
    alert(product.title + ' добавлен в корзину!');
  }

  ngOnInit(): void {
    this.products = this.productServis.getProduct();
    const burgerElement: HTMLElement | null = document.getElementById('burger');
    const menuElement = document.getElementById('menu');
    if (burgerElement && menuElement) {
      burgerElement.onclick = function () {
        menuElement.classList.add('open');
      };
      document.querySelectorAll('#menu *').forEach((item) => {
        (item as HTMLElement).onclick = () => {
          menuElement.classList.remove('open');
        };
      });
    }
  }
}
