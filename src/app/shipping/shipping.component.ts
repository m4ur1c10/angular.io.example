import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  public shippingCosts;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getShippingPrices()
    .subscribe(items => this.shippingCosts = items);
  }

}