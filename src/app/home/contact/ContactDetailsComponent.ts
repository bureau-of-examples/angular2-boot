import {Component, OnInit} from 'angular2/core';
import {DataService} from '../../services/DataService';
import {RouteParams} from 'angular2/router';
import {ContactModel} from '../../common/model/ContactModel';
import {Fieldset} from '../../common/model/Fieldset';

@Component({
    templateUrl: './app/home/contact/ContactDetailsComponent.html'
})
export class ContactDetailsComponent implements OnInit {

    private id:string;
    private contact:ContactModel = null;
    private fieldset:Fieldset = null;
    private formData:any;

    constructor(private dataService:DataService,
                private routeParams:RouteParams) {

        this.id = this.routeParams.get('id');
    }

    ngOnInit():any {
        console.log('going to load contact ' + this.id);
        this.dataService.getContact(this.id).subscribe(result => {
            this.contact = result;
            if (this.contact.fieldsetId) {
                console.log('going to load fieldset ' + this.contact.fieldsetId);
                this.dataService.getFieldset(this.contact.fieldsetId).subscribe(result => {
                    this.fieldset = result;
                    this.formData = {};
                });
            }

        });

        return undefined;
    }

    save() {
        console.log('saving form data: ', this.formData);
    }

}
