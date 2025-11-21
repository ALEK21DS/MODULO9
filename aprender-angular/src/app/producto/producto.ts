import { Component } from "@angular/core";


@Component({
    selector: 'mi-producto',
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
}