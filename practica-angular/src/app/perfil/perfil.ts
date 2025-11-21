import { Component } from "@angular/core";

@Component({
    selector: 'mi-perfil',
    templateUrl: 'perfil.html',
    styleUrl: 'perfil.css',

})

export class Perfil{

    public nombre: string;
    public edad: number;
    public ocupacion: string;
    public direccion: string;
    public telefono: string;

    constructor(){

        this.nombre = 'Brandon Pesantez';
        this.edad = 23;
        this.ocupacion = 'Desarrollador Web';
        this.direccion = 'Calle Amarunan, Quito, Ecuador';
        this.telefono = '0968174829';

        alert('¡Bienvenido al perfil, estás dentro de la aplicación!');
        console.log('Se cargó el componente de perfil correctamente.');
    }
}