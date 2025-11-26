import { Component } from "@angular/core";
import { Pelicula } from "../pelicula/pelicula";


@Component({
    selector: 'mi-producto',
    imports: [Pelicula],
    templateUrl: 'producto.html',
    styleUrl: 'producto.css'
})

export class Producto{

    public nombre: string;
    public marca: string;
    public precio: number;
    public descripcion: string;

    public mostrarPeliculas: boolean = true;

    constructor(){
        this.nombre = 'PC PORTATIL';
        this.marca = 'ASUS';
        this.precio = 457.99;
        this.descripcion = 'Este es un producto de alta calidad.';
        console.log('Componente Producto Cargado');
    }

    ngOnInit(){
        console.log("El componente esta inicializado");
    }

    ngAfterViewInit(){
        console.log("La vista esta cargada");
    }

    ngDoCheck(){
        console.log("Componente actualizado");
    }

    cambiarNombre(){
        this.nombre = 'PC SOBREMESA';
    }

    ocultarPeliculas(valor: boolean){
        this.mostrarPeliculas = valor;
    }
}