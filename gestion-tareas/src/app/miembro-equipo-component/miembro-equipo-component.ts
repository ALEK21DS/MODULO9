import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-miembro-equipo-component',
  imports: [],
  templateUrl: './miembro-equipo-component.html',
  styleUrl: './miembro-equipo-component.css',
})
export class MiembroEquipoComponent {
  contadorMiembro: string = 'Soy miembro del equipo del contador lider';

  @Input() contadorLiderComponent: string = '';

  @Output() CuentaM = new EventEmitter();

  @Output() aumentarContador = new EventEmitter<number>();
  sumarCuentas() {
    this.aumentarContador.emit(1);
  }
  ngOnInit() {
    this.aumentarContador.emit(0);
  }

  enviarCuenta(){
    this.CuentaM.emit("Cuentas:  \n Juan \n MC04")
  }
}
