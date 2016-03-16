import {Component, Input, OnInit} from 'angular2/core';
import {FieldSlot, DataField, FieldDataType} from '../../../common/model/Fieldset';
import {SelectOPtionModel} from '../../../common/model/SelectOPtionModel';
import {FieldsetService} from '../../../services/FieldsetService';
import {TypeAheadComponent} from '../../../common/component/TypeAheadComponent';

@Component({
    selector: 'ab-field-editor',
    templateUrl: './app/home/support/fieldset-editor/FieldEditorComponent.html',
    directives: [TypeAheadComponent]
})
export class FieldEditorComponent implements OnInit {

    @Input() fieldSlot:FieldSlot;
    private isDataField:boolean;
    private dataTypeOptions: SelectOPtionModel[];

    constructor(private fieldsetService: FieldsetService) {
    }

    ngOnInit():any {
        if (this.fieldSlot.field === null) {
            this.fieldSlot.field = new DataField('');
        }
        if (this.fieldSlot.field instanceof DataField) {
            this.isDataField = true;
            console.log('field being edited: ', this.fieldSlot.field);
        } else {
            this.isDataField = false;
        }

        this.dataTypeOptions = this.getFieldDataTypes();
        return undefined;
    }

    toggleView($event): void {
        this.isDataField = !this.isDataField;
        //$event.preventDefault();
    }

    searchFieldsets($event) {
        this.fieldsetService.search($event.getSearchKeywords()).subscribe(result => $event.acceptResult(result));
    }

    fieldsetChanged($event) {
        this.fieldSlot.field = $event;
    }

    setDataType(field: DataField, dataType: string): void {
        console.log('setting data type:', dataType);
        field.dataType = parseInt(dataType);
    }

    private getFieldDataTypes(): SelectOPtionModel[] {
        var keys: string[] = this.getStringKeys(FieldDataType);
        var result: SelectOPtionModel[] = [];
        keys.forEach(key => {
           result.push({key: key, value: '' + FieldDataType[key]});
        });
        console.log('select options: ', result);
        return result;
    }

    private getStringKeys(obj: any): string[] {
        var names: string[] = [];
        for(var n in obj) {
            if(typeof obj[n] === 'number') names.push(n);
        }
        return names;
    }


}
