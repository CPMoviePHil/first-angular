import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root',
})
export class CartService {
  items = [];
  constructor(private http: HttpClient) { }
  addToCart(product){
    this.items.push(product);
  }
  getItems(){
    return this.items;
  }
  getSingleItem(product){
    return this.items[product.index];
  }
  clearCart(){
    this.items = [];
    return this.items;
  }
  getShipprice(){
    return this.http.get('/assets/shipping.json');
  }

}