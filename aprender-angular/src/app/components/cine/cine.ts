import { Component } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-cine',
  imports: [],
  templateUrl: './cine.html',
  styleUrl: './cine.css',
})
export class Cine {

  public titulo: string;

  public peliculas: Array<Pelicula>;

  constructor(){
    this.titulo = "Modelos";
    this.peliculas = [
      new Pelicula(1, "Toy Story", "Aventura", "John Lasseter", 1995, "Disney+", true),
      new Pelicula(2, "El Padrino", "Drama", "Francis Ford Coppola", 1972, "Netflix", true),
      new Pelicula(3, "Inception", "Ciencia Ficción", "Christopher Nolan", 2010, "HBO Max", false),
      new Pelicula(4, "La La Land", "Musical", "Damien Chazelle", 2016, "Amazon Prime", true),
      new Pelicula(5, "Parasite", "Thriller", "Bong Joon-ho", 2019, "Hulu", false),
      new Pelicula(6, "Interstellar", "Ciencia Ficción", "Christopher Nolan", 2014, "HBO Max", true),
      new Pelicula(7, "The Dark Knight", "Acción", "Christopher Nolan", 2008, "Netflix", true),
      new Pelicula(8, "Forrest Gump", "Drama", "Robert Zemeckis", 1994, "Amazon Prime", true),
      new Pelicula(9, "The Matrix", "Ciencia Ficción", "The Wachowskis", 1999, "HBO Max", false),
      new Pelicula(10, "Gladiator", "Acción", "Ridley Scott", 2000, "Netflix", true)
    ];
  }

  ngOnInit(){
    console.log(this.peliculas);

    this.peliculas[1].titulo = "SHREK"
  }
}
