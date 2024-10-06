import { Component, OnInit } from '@angular/core';
import { Tabla1Component } from './tabla1/tabla1.component';
import { Tabla2Component } from './tabla2/tabla2.component';
import { LibroService } from '../servicios/libro.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [Tabla1Component, Tabla2Component],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  nocturno = true;
  idiomaActual = 'es';
  libros: any[] = [];

  constructor(private libroService: LibroService) {}

  ngOnInit(): void {
    this.libroService.getLibros().subscribe((data: any[]) => {
      this.libros = data;
      for (const libro of this.libros) {
        libro.showDetails = false; // Inicializar showDetails en false para cada libro
      }
    });
  }

  cambioVista() {
    this.nocturno = !this.nocturno;
  }

  cambiarIdioma() {
    this.idiomaActual = this.idiomaActual === 'es' ? 'en' : 'es';
  }
}
