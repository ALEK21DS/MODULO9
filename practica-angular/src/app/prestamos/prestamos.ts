import { Component } from '@angular/core';
import { Transacciones } from '../transacciones/transacciones';
import { UpperCasePipe, LowerCasePipe, DatePipe, TitleCasePipe, CurrencyPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-prestamos',
  imports: [Transacciones, UpperCasePipe, LowerCasePipe, DatePipe, TitleCasePipe, CurrencyPipe, PercentPipe],
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
    tipo: 'hipotecario',
    monto: 250000,
    interes: 0.05,
    fechaPago: '2025-12-31',
  }

  cambioRedireccion(){
    if(this.redirigir == false){
      this.redirigir = true;
    } else {
      this.redirigir = false;
    }
  }
}
