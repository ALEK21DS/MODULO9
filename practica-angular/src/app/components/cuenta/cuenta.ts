import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-cuenta',
  imports: [],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css',
})
export class Cuenta {

  c1: Cliente | undefined;

  constructor() {
    this.c1 = new Cliente(1, 'Brandon', 'Gonzalez', 'brandon@gmail.com', 5000);
  }


  ngOnInit(){
    console.log('El componente de Cuenta esta arrancando');
  }
  ngOnDestroy(){
    console.log('El componente de Cuenta ha sido elimando');
  }

}
