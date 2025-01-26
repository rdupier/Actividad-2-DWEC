import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { ProductFilterComponent } from "./components/product-filter/product-filter.component";

@Component({
  selector: 'app-root',
  imports: [ProductListComponent, ProductFormComponent, ProductFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ApiProducts';
}
