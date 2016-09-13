import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdModule } from '../md.module';

import { RouterModule } from '@angular/router';

import { routing } from './demo.routes';

import { DemoComponent } from './demo.component';
import { Home } from './home/home.component';
import { Detail } from './+detail/detail.component';
import { About } from './about/about.component';

import { XLarge } from './home/x-large/x-large.directive';
import { AppState } from '../app.service';


@NgModule({
    imports: [
        CommonModule,
        MdModule,
        routing
    ],
    declarations: [
        DemoComponent,
        Home,
        Detail,
        About,
        XLarge
    ],
    exports: [
        DemoComponent
    ]
})
export class DemoModule {}
