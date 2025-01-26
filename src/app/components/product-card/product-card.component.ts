import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() myProduct!: IProduct;
  @Output() onDelete: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  deleteProduct(): void {
    this.onDelete.emit(this.myProduct);
  }

}
