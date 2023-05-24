import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product', //forma en que se llama a este componente, como si fuera una tag
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product!: Product;//requiere inicializar el valor, en este caso se debería inicializar con un objeto de tipo Product
  // !: significa que se inicializara en algún momento
}
