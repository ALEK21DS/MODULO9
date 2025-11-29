import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tareas',
  imports: [NgStyle, FormsModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas {
  cambiar = true;

  materiaRapida: string = '';


  tareas = [
    { id: 1, titulo: 'Matematicas', descripcion: 'Sumas', completada: true },
    { id: 2, titulo: 'Educacion Fisica', descripcion: 'Ejercicio de marcha', completada: false },
    { id: 3, titulo: 'Ciencias', descripcion: 'Animales', completada: false },
    { id: 4, titulo: 'Fisica', descripcion: 'MCU', completada: true },
    { id: 5, titulo: 'Historia', descripcion: 'Ensayo Segunda Guerra Mundial', completada: false },
  ]

  cambiarEstado(id: number) {
    this.tareas = this.tareas.map((tarea) => {
      if (tarea.id === id) {
        return {
          ...tarea,
          completada: tarea.completada ? false : true,
        };
      }
      return tarea;
    });
  }

  addTareaRapida(){
    let identificador = this.tareas[this.tareas.length - 1].id + 1;
    let nuevaTareaRapida = {id: identificador, titulo: this.materiaRapida, descripcion: this.materiaRapida, completada: false};
    this.tareas.push(nuevaTareaRapida);
    alert("Se ha creado una nueva Tarea:" + nuevaTareaRapida.titulo)
    this.materiaRapida = '';
  }

  deleteTarea(indice: number) {
    this.tareas.splice(indice, 1);
  }

  haciendoFoco(){ 
    console.warn('Input Activo');
  }
  saliendoDelFoco(){
    console.warn('Input Inactivo');
  }
}
