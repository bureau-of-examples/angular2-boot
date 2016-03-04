import {Component} from 'angular2/core';
@Component({
    selector: 'rw-app',
    template:
`<h2>{{message}} {{counter}}</h2>
<button (click)="incrementCounter()">Increment</button>
`
})
export class AppComponent {

    message = 'This is my message 222';

    constructor() {
        console.log('hello!');
    }

    counter = 0;

    incrementCounter():void {
        this.counter++;
    }
}
