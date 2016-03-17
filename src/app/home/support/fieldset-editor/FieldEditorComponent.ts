import {Component, Input, OnInit} from 'angular2/core';
import {FieldSlot, DataField, Fieldset} from '../../../common/model/Fieldset';
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
    private dataTypeOptions: SelectOPtionModel[];

    constructor(private fieldsetService: FieldsetService) {
    }

    ngOnInit():any {
        if (this.fieldSlot.field === null) {
            this.fieldSlot.field = new DataField('');
            this.fieldSlot.isDataField = true;
        }

        this.dataTypeOptions = this.fieldsetService.getFieldDataTypes();
        return undefined;
    }

    getCurrentFieldset(): any {
        if(this.fieldSlot.field instanceof Fieldset) {
            return this.fieldSlot.field;
        }
        return null;
    }

    toggleView($event): void {
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

    setDataType(field: DataField, dataType: string): void {
        console.log('setting data type:', dataType);
        field.dataType = parseInt(dataType);
    }
}
