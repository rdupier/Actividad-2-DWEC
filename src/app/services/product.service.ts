import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private arrProducts: IProduct[] = [];

  constructor() {
    fetch("https://jsonblob.com/api/1332321945622077440")
    .then(response => response.json())
    .then(products => {
      products.forEach((element: any) => {
        let product = element as IProduct;
        this.arrProducts.push(product);
      });
    });
  }

  getAllProducts(): IProduct[]{
    return this.arrProducts;
  }

  removeProduct(productToDelete: IProduct): void {
    const index = this.arrProducts.findIndex(product => product._id === productToDelete._id);
    if (index !== -1) {
      this.arrProducts.splice(index, 1);
    }
  }

  addProduct(product: IProduct): void {
    this.arrProducts.push(product);
  }

  filterProducts(filters: any): IProduct[] {
    return this.arrProducts.filter(product => {
      return (
        (!filters.name || product.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (!filters.category || product.category.toLowerCase().includes(filters.category.toLowerCase())) &&
        (product.price >= filters.priceMin && product.price <= filters.priceMax) &&
        (filters.active === undefined || product.active === filters.active)
      );
    });
  }

}
