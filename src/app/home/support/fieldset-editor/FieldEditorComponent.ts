import {Component, Input, OnInit} from 'angular2/core';
import {FieldSlotModel, DataFieldModel, FieldsetModel} from '../../../common/model/FieldsetModel';
import {SelectOptionModel} from '../../../common/model/SelectOPtionModel';
import {FieldsetService} from '../../../services/FieldsetService';
import {TypeAheadComponent} from '../../../common/component/TypeAheadComponent';


@Component({
    selector: 'ab-field-editor',
    templateUrl: './app/home/support/fieldset-editor/FieldEditorComponent.html',
    directives: [TypeAheadComponent]
})
export class FieldEditorComponent implements OnInit {

    @Input()
    fieldSlot:FieldSlotModel;
    private dataTypeOptions:SelectOptionModel[];

    constructor(private fieldsetService:FieldsetService) {
    }

    ngOnInit():any {
        if (this.fieldSlot.field === null) {
            this.fieldSlot.field = new DataFieldModel('');
            this.fieldSlot.isDataField = true;
        }

        this.dataTypeOptions = this.fieldsetService.getFieldDataTypes();
        return undefined;
    }

    getCurrentFieldset():any {
        if (this.fieldSlot.field instanceof FieldsetModel) {
            return this.fieldSlot.field;
        }
        return null;
    }

    toggleView($event):void {
        this.fieldSlot.isDataField = !this.fieldSlot.isDataField;
        //$event.preventDefault();
    }

    searchFieldsets($event) {
        this.fieldsetService.search($event.getSearchKeywords()).subscribe(result => $event.acceptResult(result));
    }

    fieldsetChanged($event) {
        console.log('selected fieldset: ', $event);
        this.fieldSlot.field = $event;
    }

    setDataType(field:DataFieldModel, dataType:string):void {
        console.log('setting data type:', dataType);
        field.dataType = parseInt(dataType);
    }
}
