import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  modelForm!: FormGroup<any>

  constructor(private productService: ProductService) {
    this.modelForm = new FormGroup ({
    name: new FormControl(null,[Validators.required, Validators.minLength(3)]),
    description: new FormControl(null,[Validators.required, Validators.minLength(10)]),
    price: new FormControl(null,[Validators.required, Validators.min(1)]),
    category: new FormControl("",[Validators.required]),
    image: new FormControl(null,[Validators.required]),
    });
  }

  getDataForm() {
    let formValues = this.modelForm.value as IProduct;

    function generateId(): string {
      return Math.random().toString(36).substr(2, 9);
  }

    let product: IProduct = {
      _id: generateId(),
      active: true, 
      name: formValues.name,
      description: formValues.description,
      price: formValues.price,
      category: formValues.category,
      image: formValues.image,
    };

    this.productService.addProduct(product); 
    this.modelForm.reset();
  }

  checkControl(formControlName: string, validador: string): boolean | undefined{
    return this.modelForm.get(formControlName)?.hasError(validador) && this.modelForm.get(formControlName)?.touched 
  }

}
