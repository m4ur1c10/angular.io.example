import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    
  public items: Product[] = [];

  constructor(private http: HttpClient) {
  }

  /**
   * Add a new Product to cart
   */
  addToCart(product: Product): void {
    this.items.push(product);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getItems(): Product[] {
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}