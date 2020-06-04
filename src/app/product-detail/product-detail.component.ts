import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productz;
  products;
  items;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ){ }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>(
      this.productz = products[params.get('productId')]
    ));
  }
  buy(){

  }
  prodTocart(product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  showMeTheCart(){
    this.items = this.cartService.getItems();
    window.alert(this.items);
  }
}