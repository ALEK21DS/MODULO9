import { Routes } from '@angular/router';
import { Perfil } from './components/perfil/perfil';
import { Cuenta } from './components/cuenta/cuenta';
import { Transacciones } from './components/transacciones/transacciones';
import { Prestamos } from './components/prestamos/prestamos';
import { PaginaNoEncontrada } from './components/pagina-no-encontrada/pagina-no-encontrada';

export const routes: Routes = [
    {path: "", component: Perfil},
    {path: "inicio", component: Perfil},
    {path: "cuenta", component: Cuenta},
    {path: "transacciones", component: Transacciones},
    {path: "prestamos", component: Prestamos},
    {path: "**", component: PaginaNoEncontrada}
];
