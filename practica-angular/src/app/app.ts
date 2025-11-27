import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink, RouterLinkActive } from '@angular/router';
import { Cuenta } from './components/cuenta/cuenta';
import { Transacciones } from './components/transacciones/transacciones'; //Directivas
import { Prestamos } from './components/prestamos/prestamos';
import { Perfil } from './components/perfil/perfil';
//import { Perfil } from "./perfil/perfil"; Componentes
//import { Prestamos } from './prestamos/prestamos';  Plantillas

@Component({
  selector: 'app-root',
  imports: [Cuenta, Transacciones, Prestamos, Perfil, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Primer Proyecto Angular');
}
