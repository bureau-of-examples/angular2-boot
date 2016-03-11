///<reference path="../../typings/browser.d.ts" />

import {
        Component,
        AfterViewInit,
        ElementRef
}                           from 'angular2/core';
import {
        ROUTER_PROVIDERS,
        RouteConfig,
        ROUTER_DIRECTIVES,
        Location
}                            from 'angular2/router';
import {bootstrap}          from 'angular2/platform/browser';
import {HomeComponent}      from './home/HomeComponent';
import {ProductsComponent}  from './products/ProductsComponent';
import {ContactComponent}   from './contact/ContactComponent';

declare function $(element: any): any;
declare module Foundation {
    export class Tabs {
        constructor(elem : any);
    }
}

@Component({
    selector: 'ab-main',
    templateUrl: './app/MainComponent.html',
    providers: [],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/home', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path:'/products/...', name: 'Products', component: ProductsComponent},
    {path:'/contact', name: 'Contact', component: ContactComponent}
])
export class MainComponent implements AfterViewInit {

    message = 'Angular2 starter project';
    counter = 0;

    constructor(
        private location: Location,
        private elementRef: ElementRef
    ) {
        console.log('MainComponent.constructor');
    }

    ngAfterViewInit() {
        //console.log(this.elementRef.nativeElement);
        //new Foundation.Tabs($(this.elementRef.nativeElement).find('.tabs'));
    }

    incrementCounter():void {
        this.counter++;
    }

    pathStartWith(portion : string): boolean {
        return this.location.path().startsWith(portion);
    }
}


bootstrap(<any>MainComponent, [
    ROUTER_PROVIDERS
]);
