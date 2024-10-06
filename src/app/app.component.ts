import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NavVarComponent } from './nav-var/nav-var.component';
import { ProductosComponent } from "./productos/productos.component";
import { InformacionComponent } from './informacion/informacion.component';
import { ContactoComponent } from './contacto/contacto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InicioComponent, NavVarComponent, ProductosComponent, InformacionComponent, ContactoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my_prject_web';
}
