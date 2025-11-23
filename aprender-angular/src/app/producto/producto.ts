import { Component } from "@angular/core";
import { Pelicula } from "../pelicula/pelicula";
import { Usuario } from "../usuario/usuario";
import { Ventas } from "../ventas/ventas";


@Component({
    selector: 'mi-producto',
    imports: [Pelicula, Usuario, Ventas],
    templateUrl: 'producto.html',
    styleUrl: 'producto.css'
})

export class Producto{

    public nombre: string;
    public marca: string;
    public precio: number;
    public descripcion: string;

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

    ngDoCheck(){
        console.log("Componente actualizado");
    }

    CambiarNombre(){
        this.nombre = 'PC SOBREMESA';
    }
}