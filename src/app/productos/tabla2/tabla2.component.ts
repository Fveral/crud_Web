import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tabla2.component.html',
  styleUrl: './tabla2.component.css'
})
export class Tabla2Component {
  @Input() libros: any[] = [];
  @Input() idiomaActual: string = 'es';
  genero: any
}
