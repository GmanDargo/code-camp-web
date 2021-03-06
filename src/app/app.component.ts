import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'start-app',
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'Code Camp Participant Application';
}
