import { Component } from '@angular/core';

@Component({
    selector: 'demo',
    template: `<div>
        <h1>Demo Module</h1>
        <h4>Please choose one of the components shown in the taskbar.</h4>
        <router-outlet></router-outlet>
    </div>`
})
export class DemoComponent {}
