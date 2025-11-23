import { Component } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  imports: [],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css',
})
export class Cuenta {
  ngOnInit(){
    console.log('El componente de Cuenta esta arrancando');
  }
  ngOnDestroy(){
    console.log('El componente de Cuenta ha sido elimando');
  }

}
