import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-temporizador',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './temporizador.component.html',
  styleUrl: './temporizador.component.css'
})
export class TemporizadorComponent {
  tiempo: number = 0;
  tiempoRestante: number = 0;
  private intervalo: any;

  iniciar(){
    // En caso de que haya algun temporizador iniciado lo para
    this.detener();
    // Como el temporizador va a empezar, le establece que el tiempo restante es el tiempo que le ha establecido el usuario en el input
    this.tiempoRestante = this.tiempo;
    // SetInterval() es una funcion que ejecuta una acción en un periodo de tiempo especificado
    // Se le pasa la accion que queremos que haga y despues el periodo de tiempo que tiene que pasar entre acción y acción
    this.intervalo = setInterval(() => {
      // Verifica que el tiempo que le queda al temporizador sea mayor que cero
      if (this.tiempoRestante > 0){
        // En caso de serlo le reduce un segundo al tiempo restante
        this.tiempoRestante --;
      } else{
        // En caso de no serlo detiene el temporizador
        this.detener();
      }
    }, 1000);
  }

  detener(){
    if(this.intervalo) {
      // El clear interval se encarga de detener una accion que se repite en un intervalo
      clearInterval(this.intervalo);
      this.intervalo = null;
    }
  }


}
