import {Component, Input, OnInit, AfterViewInit, ChangeDetectorRef} from 'angular2/core';
import {FieldSlotModel, DataFieldModel, FieldsetModel} from '../../../common/model/FieldsetModel';
import {SelectOptionModel} from '../../../common/model/SelectOPtionModel';
import {FieldsetService} from '../../../services/FieldsetService';
import {TypeAheadComponent} from '../../../common/component/TypeAheadComponent';


@Component({
    selector: 'ab-field-editor',
    templateUrl: './app/home/support/fieldset-editor/FieldEditorComponent.html',
    directives: [TypeAheadComponent]
})
export class FieldEditorComponent implements OnInit, AfterViewInit {

    @Input()
    fieldSlot:FieldSlotModel;
    private dataTypeOptions:SelectOptionModel[];
    private required = false;

    constructor(
        private fieldsetService:FieldsetService,
        private changeDetectorRef: ChangeDetectorRef
    ) {}

    ngOnInit():any {
        if (this.fieldSlot.field === null) {
            this.fieldSlot.field = new DataFieldModel('');
            this.fieldSlot.isDataField = true;
        }

        this.dataTypeOptions = this.fieldsetService.getFieldDataTypes();
        return undefined;
    }

    ngAfterViewInit():any {
        this.required = true;
        this.changeDetectorRef.detectChanges();
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
