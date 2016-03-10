///<reference path="../../typings/browser.d.ts" />

import {Component, AfterViewInit, ElementRef} from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {bootstrap}    from 'angular2/platform/browser';

declare function $(element: any): any;
declare module Foundation {
    export class Tabs {
        constructor(elem : any);
    }
}


@Component({
    selector: 'ab-main',
    templateUrl: './app/main.component.html',
    providers: [],
    directives: []
})
export class MainComponent implements AfterViewInit {

    message = 'Angular2 starter project';
    counter = 0;

    constructor(
        private elementRef: ElementRef
    ) {
        console.log('MainComponent.constructor');
    }

    ngAfterViewInit() {
        console.log(this.elementRef.nativeElement);
        new Foundation.Tabs($(this.elementRef.nativeElement).find('.tabs'));
    }

    incrementCounter():void {
        this.counter++;
    }
}


bootstrap(<any>MainComponent, [
    ROUTER_PROVIDERS
]);
