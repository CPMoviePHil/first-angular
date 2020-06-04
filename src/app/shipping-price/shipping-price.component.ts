import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping-price',
  templateUrl: './shipping-price.component.html',
  styleUrls: ['./shipping-price.component.css']
})
export class ShippingPriceComponent implements OnInit {
  shipping;
  constructor(private cart:CartService) { }

  ngOnInit() {
    this.shipping = this.cart.getShipprice();
  }
  showThePrice(){

  }

}