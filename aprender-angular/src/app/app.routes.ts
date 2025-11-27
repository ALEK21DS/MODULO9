import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Producto } from './components/producto/producto';
import { Cine } from './components/cine/cine';
import { Usuario } from './components/usuario/usuario';
import { Ventas } from './components/ventas/ventas';
import { Pelicula } from './components/pelicula/pelicula';
import { Padre } from './components/padre/padre';
import { Pagina404 } from './components/pagina404/pagina404';

export const routes: Routes = [
    {path: "", component: Producto},
    {path: "inicio", component: Producto},
    {path: "componentes", component: Producto},
    {path: "ciclo", component: Pelicula},
    {path: "plantillas", component: Usuario},
    {path: "directivas", component: Ventas},
    {path: "modelos", component: Cine},
    {path: "comunicacion", component: Padre},
    {path: "**", component: Pagina404}
];
