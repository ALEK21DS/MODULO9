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

  cambioRedireccion(){
    if(this.redirigir == false){
      this.redirigir = true;
    } else {
      this.redirigir = false;
    }
  }
}
