import { DatePipe, NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transaccion } from '../../models/transaccion';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-transacciones',
  imports: [NgClass, NgStyle, DatePipe, FormsModule],
  templateUrl: './transacciones.html',
  styleUrl: './transacciones.css',
})
export class Transacciones {

  public titulo: string;
  public transacciones: Array<Transaccion>;


  //Practica de modelos en angular

  public descripcionTransaccion: string = '';

  constructor() {
    this.titulo = 'Listado de Transacciones';
    this.transacciones = [
      new Transaccion(1, new Date('2024-01-10'), 'Ingreso', 1500, 'ingreso'),
      new Transaccion(2, new Date('2024-01-12'), 'Gasto', 500, 'egreso'),
      new Transaccion(3, new Date('2024-01-15'), 'Ingreso', 2000, 'ingreso'),
      new Transaccion(4, new Date('2024-01-20'), 'Gasto', 800, 'egreso'),
      new Transaccion(5, new Date('2024-01-25'), 'Ingreso', 1200, 'ingreso'),
      new Transaccion(6, new Date('2024-01-28'), 'Gasto', 300, 'egreso')
    ];
  }

  public mostrar:boolean=true;
    newStyles = {
    'background-color': 'green',
    'color': 'white',
    'font-weight': 'bold',
    'font-style': 'italic',
    'padding': '20px'
  }

  mostrarTransaccion(){
    alert(this.descripcionTransaccion);
  }

  
  @Output() mensajeEnviado = new EventEmitter;

  enviarSaludo(){
    this.mensajeEnviado.emit('Hola desde Transacciones')
  }
}
