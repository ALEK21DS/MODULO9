import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { Producto } from "./producto/producto"; Constantes
//import { Usuario } from './usuario/usuario';  Plantillas
import { Ventas } from './ventas/ventas'; //Directivas

@Component({
  selector: 'app-root',
  imports: [Ventas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Primer Proyecto Angular');
}
