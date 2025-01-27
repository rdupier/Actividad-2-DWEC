import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-filter',
  imports: [FormsModule],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css'
})
export class ProductFilterComponent {

  @Output() onFilterChange: EventEmitter<string> = new EventEmitter<string>();

  // Componente en mantenimiento: Tras realizar varios intentos con el código en el ProductFilterComponent, sigo sin conseguir que me funcione esta parte de la aplicación. 
  // Deseando ver la corrección de la actividad para aprender más.
  getDataForm(miFormulario: NgForm) {
  }

}
