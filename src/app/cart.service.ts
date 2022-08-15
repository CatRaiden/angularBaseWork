import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  baseUrl =
    'https://raw.githubusercontent.com/CatRaiden/forHelloWorld/master/178eats.json';
  constructor(private http: HttpClient) {}

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }

  getProducts() {
    interface Store {
      data: Array<any>;
      nulltest: null;
    }
    console.log('store');
    this.http.get<Store>(this.baseUrl).subscribe((res) => {
      console.log(res);
      console.log(JSON.stringify(res));
      console.log(JSON.parse(JSON.stringify(res)));
      console.log(res.data);
    });
  }

  addToCart(product: Product) {
    console.log('add');
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
