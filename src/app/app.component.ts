import {Component, Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Ejercicio1Component} from '../componentes/ejercicio1/ejercicio1.component';
import {FormsModule} from '@angular/forms';
import {ContadorComponent} from '../componentes/contador/contador.component';
import {TareasComponent} from '../componentes/tareas/tareas.component';
import {TemporizadorComponent} from '../componentes/temporizador/temporizador.component';
import {ComentariosComponent} from '../componentes/comentarios/comentarios.component';
import {TarjetaComponent} from '../componentes/tarjeta/tarjeta.component';
import {CalculadoraComponent} from '../componentes/calculadora/calculadora.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Ejercicio1Component, FormsModule, ContadorComponent, TareasComponent, TemporizadorComponent, ComentariosComponent, TarjetaComponent, CalculadoraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = "Lucía";

  ultimoComentario: string = '';

  manejarComentario(comentario: string){
    this.ultimoComentario = comentario;
  }

  nombreProducto: string = "Tomate";

  descripcionProducto: string = "Ecologicos";

  precioProducto: number = 1.50;

}
