import { Routes } from '@angular/router';
import { Tareas } from './components/tareas/tareas';
import { CrearTarea } from './components/crear-tarea/crear-tarea';

export const routes: Routes = [
    {path: "", component: Tareas},
    {path: "tareas", component: Tareas},
    {path: "nueva-tarea", component: CrearTarea}
];
