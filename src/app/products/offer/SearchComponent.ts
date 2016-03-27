import {Component, OnInit} from 'angular2/core';
import {ControlGroup, Control, Validators, AbstractControl} from 'angular2/common';
import {DynamicFieldModel} from './DynamicFieldModel';
import {ValidatorFn} from "angular2/src/common/forms/directives/validators";

@Component({
    templateUrl: './app/products/offer/SearchComponent.html'
})
export class SearchComponent implements OnInit {

    fields:DynamicFieldModel[] = [];
    controlGroup:ControlGroup;

    constructor() {
        console.log('offer search component is loaded..');
        this.createFields();
        this.buildControlGroup();
    }

    ngOnInit():any {

        return undefined;
    }

    createFields():void {

        var field1 = new DynamicFieldModel();
        field1.label = 'Username';
        field1.required = true;
        field1.defaultValue = 'test';
        this.fields.push(field1);

        var field2 = new DynamicFieldModel();
        field2.label = 'Password';
        field2.required = true;
        field2.pattern = '\\w{8,12}';
        this.fields.push(field2);

        var field3 = new DynamicFieldModel();
        field3.label = 'Phone';
        field3.pattern = '\\d+';
        this.fields.push(field3);
    }

    buildControlGroup():void {

        var groupArg:{
            [key:string]:AbstractControl;
        } = {};
        for (let i = 0; i < this.fields.length; i++) {
            let field = this.fields[i];
            let validators: ValidatorFn[] = [];
            if(field.required) {
                validators.push(Validators.required);
            }
            if(field.pattern) {
                validators.push(Validators.pattern(field.pattern));
            }
            groupArg[field.label] = new Control(field.defaultValue, Validators.compose(validators));
        }

        this.controlGroup = new ControlGroup(groupArg);
    }

    save(): void {
        console.log('Saving...');
    }


}
