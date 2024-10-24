import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {
  // Lo que hace es coger el valor del padre en caso de que se le indique por el html, si no se le indica coje el valor dle hijo
  @Input() nombre: string = "";


}
