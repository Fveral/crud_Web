import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tabla1.component.html',
  styleUrl: './tabla1.component.css'
})
export class Tabla1Component {
  @Input() libros: any[] = [];
  @Input() idiomaActual: string = 'es';
  genero:any
}
