import { Routes } from '@angular/router';
import { Hello } from './components/hello/hello';
import { Login } from './pages/login/login';
import { Ausent } from './pages/ausent/ausent';
import { App } from './app';

export const routes: Routes = [
    // ROTAS SIMPLES
    {
        path: "",
        component: Ausent
    },
    {
        path: "login",
        component: Login
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
