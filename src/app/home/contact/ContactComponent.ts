import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {DataService} from '../../services/DataService';
import {ContactModel} from '../../common/model/ContactModel';
import {ContactOverviewComponent} from './ContactOverviewComponent';
import {ContactDetailsComponent} from './ContactDetailsComponent';

@Component({
    templateUrl: './app/home/contact/ContactComponent.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig(
    [
        {path: '/:id', name: 'ContactDetails', component: ContactDetailsComponent},
        {path: '/', name: 'ContactOverview', component: ContactOverviewComponent, useAsDefault: true}
    ]
)
export class ContactComponent implements OnInit {

    loaded: boolean = false;
    contacts: ContactModel[] = [];

    constructor(private dataService: DataService) {}

    ngOnInit():any {

        this.dataService.getContacts().subscribe(result => {
            this.contacts = result;
            this.loaded = true;
        });
        return undefined;
    }

}
