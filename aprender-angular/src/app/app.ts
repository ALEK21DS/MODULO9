import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink, RouterLinkActive } from '@angular/router';
import { Ventas } from './components/ventas/ventas'; //Directivas
//import { Producto } from "./producto/producto"; Constantes
//import { Usuario } from './usuario/usuario';  Plantillas
import { config } from './models/config'; //Modelos
import { Cine } from './components/cine/cine';
import { Padre } from './components/padre/padre';


@Component({
  selector: 'app-root',
  imports: [Cine, Padre, RouterOutlet, RouterLinkWithHref, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Primer Proyecto Angular');

  titulo = config.title;
  descripcion = config.description;
}
