import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {

  @Input() nombre: string = '';
  @Input() descripcion: string = '';
  @Input() precio: number = 0;



}
