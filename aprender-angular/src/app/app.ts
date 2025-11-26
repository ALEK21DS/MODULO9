import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ventas } from './components/ventas/ventas'; //Directivas
//import { Producto } from "./producto/producto"; Constantes
//import { Usuario } from './usuario/usuario';  Plantillas
import { config } from './models/config'; //Modelos

@Component({
  selector: 'app-root',
  imports: [Ventas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Primer Proyecto Angular');

  titulo = config.title;
  descripcion = config.description;
}
