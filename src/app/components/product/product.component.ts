import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductCartService } from 'app/services/product-cart.service';
import { ProductType } from 'app/types/product.type';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: ProductType;
  @Output() addToCartEvent: EventEmitter<ProductType> =
    new EventEmitter<ProductType>();

  constructor(private cart:ProductCartService) {}

  addProductToCart() {
    this.cart.count++;
    this.cart.sum += this.product.price.value;
    this.addToCartEvent.emit(this.product);
  }

  ngOnInit(): void {}
}
