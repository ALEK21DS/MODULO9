import { Routes } from '@angular/router';
import { Tareas } from './components/tareas/tareas';
import { CrearTarea } from './components/crear-tarea/crear-tarea';
import { Pagina404 } from './components/pagina404/pagina404';
import { EquipoLiderComponent } from './components/equipo-lider-component/equipo-lider-component';

export const routes: Routes = [
    {path: "", component: Tareas},
    {path: "tareas", component: Tareas},
    {path: "nueva-tarea", component: CrearTarea},
    {path: "comunicacion", component: EquipoLiderComponent},
    {path: "**", component: Pagina404}
];
