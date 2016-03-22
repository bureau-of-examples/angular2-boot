///<reference path="./ambient/foundation.d.ts" />

import {
        Component,
        AfterViewInit
}                           from 'angular2/core';
import {
        ROUTER_PROVIDERS,
        RouteConfig,
        ROUTER_DIRECTIVES,
        Location,
        Router,
        Instruction
}                                from 'angular2/router';
import {
        HTTP_PROVIDERS
}                                from 'angular2/http';
import {bootstrap}              from 'angular2/platform/browser';
import {HeaderComponent}        from './HeaderComponent';
import {HomeComponent}          from './home/HomeComponent';
import {ProductsComponent}      from './products/ProductsComponent';
import {CaseStudiesComponent}   from './case-studies/CaseStudiesComponent';
import {NavigationService}      from './common/navigation/NavigationService';
import {NewsService}            from './home/news/NewsService';
import {DocsService}            from './home/docs/DocsService';
import {NewsDetailsComponent}   from './home/news/NewsDetailsComponent';
import {RouterLinkModel}        from './common/model/RouterLinkModel';
import {ProductTypeService}     from './products/services/ProductTypeService';
import {FieldsetService}        from './services/FieldsetService';
import {DataService}                       from './services/DataService';


@Component({
    selector: 'ab-main',
    templateUrl: './app/MainComponent.html',
    providers: [NavigationService, NewsService, DocsService, ProductTypeService, FieldsetService, DataService, HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES, HeaderComponent]
})
@RouteConfig([
    {path:'/home/...', name: 'Home', component: HomeComponent, useAsDefault: true},
    {path: '/article/:id', name: 'NewsDetails', component: NewsDetailsComponent},
    {path:'/products/...', name: 'Products', component: ProductsComponent},
    {path:'/case-studies/...', name: 'CaseStudies', component: CaseStudiesComponent}
])
export class MainComponent implements AfterViewInit {

    message = 'Angular2 starter project';
    counter = 0;

    constructor(
        private location: Location,
        private router: Router,
        private navigationService: NavigationService,
        private dataService: DataService
    ) {
        console.log('MainComponent.constructor');
    }

    ngAfterViewInit() {
        //placeholder
    }

    pathStartWith(portion : string): boolean {
        return this.location.path().startsWith(portion);
    }

    closeTab($event: any, item: RouterLinkModel): void {
        $event.preventDefault();
        $event.stopPropagation();

        console.log('closing tab:');
        console.log(item.routerLink);

        var thisRoute: Instruction = this.router.generate(item.routerLink);
        if(this.router.isRouteActive(thisRoute)) {
            console.log('tab is active, go back to previous route');
            this.location.back();
        }
        this.navigationService.closeTab(item);
    }
}


bootstrap(<any>MainComponent, [
    ROUTER_PROVIDERS
]);
