import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-tarea',
  imports: [FormsModule],
  templateUrl: './crear-tarea.html',
  styleUrl: './crear-tarea.css',
})
export class CrearTarea {

  
  materia: string = '';
  descripcion: string = '';

  
  addTarea(){
    if(this.materia == '' || this.descripcion == ''){
      alert('Completa todos los campos');
    }else{
      console.log("Se ha creado la tarea: - "+ this.materia + " - "+ this.descripcion)
      this.materia = '';
      this.descripcion = '';
    }
  }

}
