import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { Perfil } from "./perfil/perfil"; Componentes
//import { Prestamos } from './prestamos/prestamos';  Plantillas
import { Transacciones } from './transacciones/transacciones';  //Directivas

@Component({
  selector: 'app-root',
  imports: [Transacciones],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Primer Proyecto Angular');
}
