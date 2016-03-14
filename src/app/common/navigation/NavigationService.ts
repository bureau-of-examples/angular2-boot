import {Injectable} from 'angular2/core';
import {RouterLinkModel} from '../model/RouterLinkModel';

@Injectable()
export class NavigationService {

    tabLinks: RouterLinkModel[] = [];

    constructor() {
        this.tabLinks = [
            {text: 'News Details 1', routerLink: ['NewsDetails', {id: 1}]},
            {text: 'News Details 2', routerLink: ['NewsDetails', {id: 2}]},
            {text: 'News Details 3', routerLink: ['NewsDetails', {id: 3}]}
        ];
    }

    getTabLinks() : RouterLinkModel[] {
        return this.tabLinks;
    }

}
