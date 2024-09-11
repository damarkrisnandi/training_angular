import { Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { MainPageComponent } from './features/main-page/main-page.component';

export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];
