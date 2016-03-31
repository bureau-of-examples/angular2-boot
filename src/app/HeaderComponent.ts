///<reference path="./ambient/foundation.d.ts" />

import {Component, ViewQuery, QueryList, Input, ElementRef} from 'angular2/core';
import {Http} from 'angular2/http';
import {DataService} from './services/DataService';
import {RouterLinkModel} from './common/model/RouterLinkModel';


@Component({
    selector: 'ab-header',
    moduleId: module.id,
    templateUrl: 'HeaderComponent.html'
})
export class HeaderComponent {

    @Input()
    bannerPath;
    private bannerLink:ElementRef;

    constructor(private dataService:DataService,
                private http:Http,
                @ViewQuery('bannerLink') bannerLinkQuery:QueryList<ElementRef>) {
        bannerLinkQuery.changes.subscribe(list => {
            console.log('query returns elementRef: ', list.first);
            this.bannerLink = list.first;
        });
    }

    clearStorage():void {
        if (!this.bannerLink) {
            alert('Header is not ready');
            return;
        }

        console.log('Clearing local storage...');
        this.dataService.clearState();
        this.bannerLink.nativeElement.click();
    }

    test():void {
        this.http
            .get('/app/json/test.json')
            .map(res => <RouterLinkModel>res.json())
            .subscribe(result => console.log(result));

    }
}



