import {Component } from 'angular2/core';
import {ProductCategoriesComponent} from './ProductCategoriesComponent';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {SearchComponent as PhoneSearchComponent} from './phone/SearchComponent';
import {SearchComponent as OfferSearchComponent} from './offer/SearchComponent';
import {SearchComponent as ComputerSearchComponent} from './computer/SearchComponent';
import {RouteDestinationComponent} from '../common/navigation/RouteDestinationComponent';

@Component({
    templateUrl: './app/products/ProductsComponent.html',
    directives: [ProductCategoriesComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/phone', name: 'PhoneSearch', component: PhoneSearchComponent},
    {path: '/offer', name: 'OfferSearch', component: OfferSearchComponent, useAsDefault: true},
    {path: '/computer', name: 'ComputerSearch', component: ComputerSearchComponent}
])
export class ProductsComponent extends RouteDestinationComponent {
}
