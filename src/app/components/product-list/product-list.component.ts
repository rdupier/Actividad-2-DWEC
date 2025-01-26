import { Component, inject } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: IProduct[] = [];

  private productService = inject(ProductService);
  modelForm: any;

  constructor() {
    this.products = [];
  }

  ngOnInit(): void{
    this.products = this.productService.getAllProducts();
  }

}
