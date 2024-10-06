import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})
export class InformacionComponent {
  usuario = {
    nombre: '',
    email: ''
  };

  mensajeGuardado: boolean = false;

  enviarFormulario() {
    this.mensajeGuardado = true;

    this.usuario = {
      nombre: '',
      email: ''
    };

    // Ocultar el mensaje de guardado después de 3 segundos
    setTimeout(() => {
      this.mensajeGuardado = false;
    }, 3000);
  }
}
