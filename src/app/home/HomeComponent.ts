import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AboutComponent} from './about/AboutComponent';
import {NewsComponent} from './news/NewsComponent';
import {NewsDetailsComponent} from './news/NewsDetailsComponent';
import {SupportComponent} from './support/SupportComponent';
import {ContactComponent} from './contact/ContactComponent';
import {DocsComponent} from './docs/DocsComponent';
import {LinkDataModel} from '../common/model/LinkDataModel';

@Component({
    templateUrl: './app/home/HomeComponent.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/news', name:'News', component: NewsComponent, useAsDefault: true},
    {path: '/news/:id', name: 'NewsDetails', component: NewsDetailsComponent},
    {path:'/support', name:'Support', component: SupportComponent},
    {path:'/docs', name:'Docs', component: DocsComponent},
    {path:'/contact', name:'Contact', component: ContactComponent},
    {path:'/about', name:'About', component: AboutComponent}
])
export class HomeComponent {

    navLinks: LinkDataModel[] = [];

    constructor() {
        this.navLinks = [
            {text: 'News', routeName: 'News'},
            {text: 'Docs', routeName: 'Docs'},
            {text: 'Support', routeName: 'Support'},
            {text: 'Contact', routeName: 'Contact'},
            {text: 'About', routeName: 'About'}
        ];
    }

}
