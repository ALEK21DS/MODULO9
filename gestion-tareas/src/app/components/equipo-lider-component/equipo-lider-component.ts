import { Component } from '@angular/core';
import { MiembroEquipoComponent } from '../../miembro-equipo-component/miembro-equipo-component';

@Component({
  selector: 'app-equipo-lider-component',
  imports: [MiembroEquipoComponent],
  templateUrl: './equipo-lider-component.html',
  styleUrl: './equipo-lider-component.css',
})
export class EquipoLiderComponent {
  contadorLider: string = 'Alex'

  cuentaRecibida: string = '';

  numeroCuentas: number = 0;
  recibirContador(numero: number) {
    this.numeroCuentas += numero;
  }


  recibirCuentas(cuenta: string){
    this.cuentaRecibida = cuenta;
  }
}
