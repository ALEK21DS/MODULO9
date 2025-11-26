import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cuenta } from './components/cuenta/cuenta';
import { Transacciones } from './components/transacciones/transacciones'; //Directivas
import { Prestamos } from './components/prestamos/prestamos';
//import { Perfil } from "./perfil/perfil"; Componentes
//import { Prestamos } from './prestamos/prestamos';  Plantillas

@Component({
  selector: 'app-root',
  imports: [Cuenta, Transacciones, Prestamos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Primer Proyecto Angular');
}
