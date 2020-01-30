import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products, Product } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product: Product;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>
      this.product = products[+params.get('productId')]);
  }

  addToCart(product: Product): void {
    window.alert('Your product has benn added to the cart!');
    this.cartService.addToCart(product);
  }

}