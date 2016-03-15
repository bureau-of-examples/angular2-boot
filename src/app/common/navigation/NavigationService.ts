import {Injectable} from 'angular2/core';
import {RouterLinkModel} from '../model/RouterLinkModel';

@Injectable()
export class NavigationService {

    tabLinks: RouterLinkModel[] = [];

    constructor() {
        this.tabLinks = [];
    }

    getTabLinks() : RouterLinkModel[] {
        return this.tabLinks;
    }

    closeTab(item: RouterLinkModel): void {
        for(var i: number = 0; i< this.tabLinks.length; i++) {
            if(this.tabLinks[i] === item) {
                this.tabLinks.splice(i, 1);
            }
        }
    }

    addTab(text: string, routerLink: any[]): RouterLinkModel {

        var newLinkJson: string = JSON.stringify(routerLink);

        for(var i: number = 0; i< this.tabLinks.length; i++) {
            var item: RouterLinkModel = this.tabLinks[i];
            var linkJson: string = JSON.stringify(item.routerLink);
            if(linkJson === newLinkJson) { //do not add again if already added

                if(item.text !== text) {
                    item.text = text;
                }
                return item;
            }
        }

        var newRouterLink: RouterLinkModel = {text: text, routerLink: routerLink};
        this.tabLinks.push(newRouterLink);
        return newRouterLink;

    }
}
