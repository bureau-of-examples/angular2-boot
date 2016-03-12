import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {LinkDataModel} from '../common/LinkDataModel';
import {FinanceComponent} from './finance/FinanceComponent';
import {EducationComponent} from './education/EducationComponent';

@Component({
    templateUrl: './app/case-studies/CaseStudiesComponent.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: 'education', name: 'Education', component: EducationComponent, useAsDefault: true},
    {path: 'finance', name: 'Finance', component: FinanceComponent }
])
export class CaseStudiesComponent {

    navLinks: LinkDataModel[];

    constructor() {
        this.navLinks = [
            {text: 'Education', routeName: 'Education'},
            {text: 'Finance', routeName: 'Finance'}
        ];
    }
}
