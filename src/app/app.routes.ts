import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductosComponent},
  { path: 'informacion', component: InformacionComponent},
  { path: 'contacto', component: ContactoComponent}
];
