import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  imports: [],
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
