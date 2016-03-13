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
import {HeaderComponent}    from './HeaderComponent';
import {HomeComponent}      from './home/HomeComponent';
import {ProductsComponent}  from './products/ProductsComponent';
import {CaseStudiesComponent}   from './case-studies/CaseStudiesComponent';
import {NavigationService} from './common/navigation/NavigationService';
import {NewsService} from './home/news/NewsService';
import {DocsService} from './home/docs/DocsService';


declare function $(element: any): any;
declare module Foundation {
    export class Tabs {
        constructor(elem : any);
    }
}

@Component({
    selector: 'ab-main',
    templateUrl: './app/MainComponent.html',
    providers: [NavigationService, NewsService, DocsService],
    directives: [ROUTER_DIRECTIVES, HeaderComponent]
})
@RouteConfig([
    {path:'/home/...', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path:'/products/...', name: 'Products', component: ProductsComponent},
    {path:'/case-studies/...', name: 'CaseStudies', component: CaseStudiesComponent}
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
