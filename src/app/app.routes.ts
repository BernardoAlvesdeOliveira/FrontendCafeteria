import { Routes } from '@angular/router';
import { Hello } from './components/hello/hello';
import { App } from './app';

export const routes: Routes = [
    // ROTAS SIMPLES
    {
        path: "",
        component: Hello
    },
    {
        path: "home",
        component: Hello
    },
    {
        path: "default",
        component: App
    }
];
