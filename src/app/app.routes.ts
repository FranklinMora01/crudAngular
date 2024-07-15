import { Routes } from '@angular/router';
import { HomePagesComponent } from './modules/home/pages/home-pages/home-pages.component';

export const routes: Routes = [
    {
        path: 'auth', 
        loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
        /* loadChildren: () => import('./auth/auth-routing.module').then( m => m.AuthRoutingModule) */
    }, 
    {
        path: '',
        component: HomePagesComponent,
        loadChildren: () => import('./modules/home/home.module').then( m => m.HomeModule)
    }
];
