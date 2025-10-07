import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { PlanoDeCorteComponent } from './components/plano-de-corte/plano-de-corte';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path:"plano",
        component: PlanoDeCorteComponent
    }
];
