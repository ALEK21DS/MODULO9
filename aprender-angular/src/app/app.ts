import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { Producto } from "./producto/producto";
import { Usuario } from './usuario/usuario';

@Component({
  selector: 'app-root',
  imports: [Usuario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Primer Proyecto Angular');
}
