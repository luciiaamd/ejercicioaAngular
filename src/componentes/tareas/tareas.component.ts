import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
  ],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {
  tareaInsertada: string = '';
  tareas: string[] = ["jhbgjg", "ksjdjf"];

  anadirTarea(){
    // Comprueba que en el input se ha insertado una tarea y que no está vacio
    // El metodo .trim elimina los espacios en blancos innecesarios de la tarea insertada
    if (this.tareaInsertada.trim()){
      // En caso de que lo haya añade a la lista de tareas la tarea que se ha escrito en el input
      this.tareas.push(this.tareaInsertada.trim());
      // Deja vacia la variable de tareaInsertada para poder volver a añadir otra
      this.tareaInsertada = '';
    }
  }


}
