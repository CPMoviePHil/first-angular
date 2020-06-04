import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  cart_items;
  cart_form;
  constructor( 
    private cartService: CartService, 
    private http: HttpClient,
    private formBuilder: FormBuilder,
    ) { 
      this.cart_form = this.formBuilder.group({
        'name':'',
        'address':'',
      });
    }

  ngOnInit() {
    this.cart_items = this.cartService.getItems();
  }
  get(){
    
  }
  onSubmit(formData){
    this.cart_form.reset();
    this.cart_items = this.cartService.clearCart();
    console.warn('hello your form has been submitted', formData);
  }

}