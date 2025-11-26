import { Component, Input, Output, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  nombreHijo: string = 'Componente Hijo';

  @Input() elNombreDeMiPadre: string = '';

  @Output() saludoHijo = new EventEmitter();

  enviarSaludo(){
    this.saludoHijo.emit("Hola como estas Padre?? Saludos") 
  }
}
