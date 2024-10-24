import { Component } from '@angular/core';

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})
export class CompraComponent {

  articulos = [
    { nombre: 'Tomate', precio: 1.50 },
    { nombre: 'Lechuga', precio: 0.80 },
    { nombre: 'Zanahoria', precio: 0.60 }
  ];

  carrito: { nombre: string, precio: number, cantidad: number }[] = [];
  total: number = 0;

  sumarArticulo(articulo: { nombre: string, precio: number }){
    const item = this.carrito.find(a => a.nombre === articulo.nombre);
    if (item){
      item.cantidad++;
    }else{
      this.carrito.push()
    }
  }

}
