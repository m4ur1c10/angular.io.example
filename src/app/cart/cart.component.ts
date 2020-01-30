import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public items: Product[];
  public checkoutForm: FormGroup;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData) {

    //Process checkout customerData
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  get totalItems(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

}