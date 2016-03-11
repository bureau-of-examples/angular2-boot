import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {LinkData} from '../common/LinkData';

@Component({
    selector: 'ab-product-categories',
    templateUrl: './app/products/ProductCategoriesComponent.html',
    directives: [ROUTER_DIRECTIVES]
})
export class ProductCategoriesComponent {

    categoryLinks: LinkData[] = [
        {
            text: 'Phone',
            routeName: 'PhoneSearch'
        },
        {
            text: 'Computer',
            routeName: 'ComputerSearch'
        },
        {
            text: 'Offer',
            routeName: 'OfferSearch'
        }
    ];

}
