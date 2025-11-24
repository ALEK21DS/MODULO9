import { Component } from '@angular/core';
import { Ventas } from '../ventas/ventas';
import { Producto } from '../producto/producto';

@Component({
  selector: 'app-usuario',
  imports: [Ventas, Producto],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  web = 'https://amazon.com';
  redirigir = true;
  marcasAutos = [
    { id: 1, nombre: 'Toyota' },
    { id: 2, nombre: 'Ford' },
    { id: 3, nombre: 'Chevrolet' },
    { id: 4, nombre: 'Honda' },
    { id: 5, nombre: 'Nissan' }
  ];

	usuario = {
    id: 1,
		nombre: 'Carlos Palacios',
		nick: 'CarlosDev',
		rol: 'admin'
	};

  /*ngOnInit() {
    this.marcasAutos = [];
  }; Para poner la lista vacia*/

  cambioRedireccion(){
    if(this.redirigir == false){
      this.redirigir = true;
    } else {
      this.redirigir = false;
    }
  }
}
