import { Component, OnInit, OnDestroy } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent implements OnInit, OnDestroy {
  horaActual: Date = new Date();
  private intervalo: any;

  ngOnInit() {
    this.iniciarReloj();
  }

  ngOnDestroy() {
    this.detenerReloj();
  }

  iniciarReloj() {
    // El set interval hace algo cada X tiempo que es el que se le marca abajo
    this.intervalo = setInterval(() => {
      // Aqui lo que hace es actualizar la hora actual
      this.horaActual = new Date();
    //   Cada mil milisegundos = 1 segundo
    }, 1000);
  }

  detenerReloj() {
    // Se encarga de verificar que el contador está definido
    if (this.intervalo) {
      // En caso de que lo esté lo que hace es pararlo
      clearInterval(this.intervalo);
    }
  }
}
