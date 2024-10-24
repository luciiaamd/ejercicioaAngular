import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {
  comentario: string = '';
  comentarios: string[] = [];

  // Emite eventos desde el componente hijo hasta el componente padre
  @Output() comentarioEnviado = new EventEmitter<string>();

  enviar(){
    if (this.comentario.trim()){
      // Si hay comentario lo añade a la lista de comentarios y emite un evento al componente padre
      this.comentarios.push(this.comentario);
      this.comentarioEnviado.emit(this.comentario);
      // Le pone el valor al comentario vacio
      this.comentario = '';
    }
  }
}
