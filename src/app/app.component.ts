import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './components/models/product.model';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPrimerExample';
  //Patrón de diseño: Inyección de dependencias con patrón de diseño Singleton
  http = inject(HttpClient); //se inyecta el servicio HttpClient
  products: Product[] = [];

  changeTitle() {
    this.title = 'changed';
  }
  ngOnInit() { //se ejecuta cuando se carga el componente
    //se hace una petición http
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').subscribe((data:any)=>{
      //<Product[]> tipado fuerte
      this.products = data;
    });
    /*
    * no es una promise, es un patrón de programación reactiva RxJs
    * es lo que se conoce como un Observable
    * */

  }
}
