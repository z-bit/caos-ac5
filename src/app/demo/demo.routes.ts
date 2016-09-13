import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoComponent } from './demo.component';
import { Home } from './home/home.component';
import { About } from './about/about.component';
import { Detail } from './+detail/detail.component';

const routes: Routes = [
    {
        path: 'demo',
        component: DemoComponent,
        children: [
            { path: 'home', component: Home },
            { path: 'about', component: About },
//            {
//                path: 'detail', loadChildren: () => System.import('./+detail')
//            },
            { path: 'detail', component: Detail }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
