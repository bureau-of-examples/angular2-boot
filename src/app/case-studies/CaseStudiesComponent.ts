import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {LinkDataModel} from '../common/model/LinkDataModel';
import {FinanceComponent} from './finance/FinanceComponent';
import {EducationComponent} from './education/EducationComponent';
import {RouteDestinationComponent} from '../common/navigation/RouteDestinationComponent';
import {ProfessionalComponent} from './professional/ProfessionalComponent';

@Component({
    templateUrl: './app/case-studies/CaseStudiesComponent.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: 'education', name: 'Education', component: EducationComponent, useAsDefault: true},
    {path: 'finance', name: 'Finance', component: FinanceComponent },
    {path: 'professional', name: 'Professional', component: ProfessionalComponent }
])
export class CaseStudiesComponent extends RouteDestinationComponent {

    navLinks: LinkDataModel[];

    constructor() {
        super();

        this.navLinks = [
            {text: 'Education', routeName: 'Education'},
            {text: 'Finance', routeName: 'Finance'},
            {text: 'Professional', routeName: 'Professional'}
        ];
    }
}
