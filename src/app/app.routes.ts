import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { Wrong } from './app.wrong.component';


import { DemoModule } from './demo/demo.module';
import { DemoComponent } from './demo/demo.component';
import { NoContent } from './demo/no-content/no-content';

import { Module1Module } from './module1/module1.module';
import { Module1Component } from './module1/module1.component';
import { Component1Component } from './module1/component1/component1.component';
import { Component2Component } from './module1/component2/conponent2.component';




import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  {
      path: '',
      component: LoginComponent
  },
  {
      path: 'demo',
      component: DemoComponent
  },
  {
    path: 'module1',
    component: Module1Component
  },
  { path: '**',    component: Wrong },
];
