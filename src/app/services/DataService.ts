///<reference path="../ambient/foundation.d.ts" />

import {Injectable} from 'angular2/core';
import {AppState} from '../common/model/AppState';
import {Observable} from 'rxjs/Rx';
import {Fieldset} from '../common/model/Fieldset';
import {ContactModel} from '../common/model/ContactModel';


@Injectable()
export class DataService {


    private static APP_DATA_KEY = 'appData';

    private state:AppState = null;

    constructor() {

        console.log('Binding to window.unload');
        jQuery(window).unload(() => {
            console.log('saving data on window unload event');
            this.saveState();
        });

        if (this.state === null) {
            this.loadState();
        }
    }

    saveState():void {
        var data:string = JSOG.stringify(this.state);
        localStorage.setItem(DataService.APP_DATA_KEY, data);
    }

    loadState():void {
        var data:string = localStorage.getItem(DataService.APP_DATA_KEY);
        if (data) {
            this.state = JSOG.parse(data);
        } else {
            this.resetState();
        }
    }

    resetState() {
        localStorage.removeItem(DataService.APP_DATA_KEY);
        this.state = new AppState();
        this.state.loadInitialData();
    }

    getFieldsets():Observable<Fieldset[]> {
        return Observable.interval(500).take(1).map(index => {

            //always return a copy
            var fieldsets:Fieldset[] = this.state.fieldsets;
            var result:Fieldset[] = [];
            for (var i:number = 0; i < fieldsets.length; i++) {
                result.push(JSON.parse(JSON.stringify(fieldsets[i])));
            }
            return result;
        });
    }

    getContacts(): Observable<ContactModel[]> {
        return Observable.interval(500).take(1).map(index => {

            //always return a copy
            var contacts:ContactModel[] = this.state.contacts;
            var result:ContactModel[] = [];
            for (var i:number = 0; i < contacts.length; i++) {
                result.push(JSON.parse(JSON.stringify(contacts[i])));
            }
            return result;
        });
    }

    getFieldset(id:string):Observable<Fieldset> {
        return Observable.interval(500).take(1).map(index => {
            var fieldsets:Fieldset[] = this.state.fieldsets;
            for (var i:number = 0; i < fieldsets.length; i++) {
                var item:Fieldset = fieldsets[i];
                if (item.id === id) {
                    return JSON.parse(JSON.stringify(item));
                }
            }
            return null;
        });
    }

    getContact(id:string):Observable<ContactModel> {
        return Observable.interval(500).take(1).map(index => {
            var contacts:ContactModel[] = this.state.contacts;
            for (var i:number = 0; i < contacts.length; i++) {
                var item:ContactModel = contacts[i];
                if (item.id === id) {
                    return JSON.parse(JSON.stringify(item));
                }
            }
            return null;
        });
    }

    searchFieldsets(keywords:string):Observable<Fieldset[]> {
        return Observable.interval(500).take(1).map(index => {

            var fieldsets:Fieldset[] = this.state.fieldsets;
            var result:Fieldset[] = [];
            for (var i:number = 0; i < fieldsets.length; i++) {
                var item:Fieldset = fieldsets[i];
                if (item.name.indexOf(keywords) >= 0) {
                    result.push(JSON.parse(JSON.stringify(item)));
                }
            }
            return result;
        });
    }

    saveFieldset(fieldset:Fieldset):void {
        var fieldsets:Fieldset[] = this.state.fieldsets;
        for(var i: number=0; i<fieldsets.length; i++) {
            var item:Fieldset = fieldsets[i];
            if(item.id === fieldset.id) {
                fieldsets[i] = fieldset;
                console.log('saved ', fieldset);
                break;
            }
        }
    }
}
