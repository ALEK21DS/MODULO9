import { Component, Input } from '@angular/core';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-cuenta',
  imports: [],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css',
})
export class Cuenta {

  public c1 = new Cliente(1, 'Brandon', 'Gonzalez', 'brandon@gmail.com', 5000);

  constructor() {
    this.c1;
  }


  ngOnInit(){
    console.log('El componente de Cuenta esta arrancando');
  }
  ngOnDestroy(){
    console.log('El componente de Cuenta ha sido elimando');
  }

  @Input() nombreCliente: string = '';

}
