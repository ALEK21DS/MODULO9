import { Component } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  imports: [],
  templateUrl: './pelicula.html',
  styleUrl: './pelicula.css',
})
export class Pelicula {
  ngOnInit(){
    console.log('El componente de Pelicula esta arrancando');
  }
  ngOnDestroy(){
    console.log('El componente de Pelicula ha sido elimando');
  }
}
