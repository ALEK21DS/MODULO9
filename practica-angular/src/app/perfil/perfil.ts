import { Component } from "@angular/core";
import { Cuenta } from "../cuenta/cuenta";
import { Prestamos } from "../prestamos/prestamos";
import { Transacciones } from "../transacciones/transacciones";

@Component({
    selector: 'mi-perfil',
    imports: [Cuenta, Prestamos, Transacciones],
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

        console.log('Se cargó el componente de perfil correctamente.');
    }

    ngDoCheck(){
        console.log('Se han detectado cambios en el perfil.');
    }

    cambiarEdad(){
        this.edad = 24;
    }
    cambiarDireccion(){
        this.direccion = 'Calle Nueva, Quito, Ecuador';
    }
}