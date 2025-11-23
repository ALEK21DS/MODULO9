import { Component } from '@angular/core';
import { Transacciones } from '../transacciones/transacciones';

@Component({
  selector: 'app-prestamos',
  imports: [Transacciones],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css',
})
export class Prestamos {
  web = 'https://angular.dev';
  redirigir = true;
  prestamosList = [
    { id: 1, monto: 5000, estado: 'Aprobado' },
    { id: 2, monto: 10000, estado: 'Pendiente' },
    { id: 3, monto: 7500, estado: 'Aprobado' },
    { id: 4, monto: 20000, estado: 'Aprobado' },
    { id: 5, monto: 15000, estado: 'Pendiente' }
  ]

  prestamo = {
    id: 1,
    tipo: 'default',
    interes: 5.5
  }

  cambioRedireccion(){
    if(this.redirigir == false){
      this.redirigir = true;
    } else {
      this.redirigir = false;
    }
  }
}
