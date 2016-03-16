import {Component, Input, OnInit} from 'angular2/core';
import {FieldSlot, DataField} from '../../../common/model/Fieldset';
import {} from "../../../common/model/Fieldset";


@Component({
    selector: 'ab-field-editor',
    templateUrl: './app/home/support/fieldset-editor/FieldEditorComponent.html'
})
export class FieldEditorComponent implements OnInit{

    @Input() fieldSlot: FieldSlot;
    private isDataField: boolean;

    ngOnInit():any {
        if(this.fieldSlot.field == null) {
            this.fieldSlot.field = new DataField('');
        }
        if(this.fieldSlot.field instanceof DataField) {
            this.isDataField = true;
        } else {
            this.isDataField = false;
        }
        return undefined;
    }




}