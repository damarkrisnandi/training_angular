import { Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { MainPageComponent } from './features/main-page/main-page.component';
import { CounterComponent } from './features/counter/counter.component'

export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
      path: 'counter',
      component: CounterComponent
    }
];
