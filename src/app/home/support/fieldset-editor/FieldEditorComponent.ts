import {Component, Input, OnInit, AfterViewInit, ChangeDetectorRef} from 'angular2/core';
import {Control, FORM_DIRECTIVES, AbstractControl} from 'angular2/common';
import {FieldSlotModel, DataFieldModel, FieldsetModel} from '../../../common/model/FieldsetModel';
import {TypeAheadComponent} from '../../../common/component/TypeAheadComponent';
import {SelectOptionModel} from '../../../common/model/SelectOPtionModel';
import {FieldsetService} from '../../../services/FieldsetService';


function validateFieldName(control: AbstractControl, fieldSlot:FieldSlotModel, parent:FieldsetModel) {
    let name = control.value;
    for (let i = 0; i < parent.children.length; i++) {
        let slot = parent.children[i];
        if (fieldSlot !== slot && name === slot.field.name) {
            console.warn('Duplicate field name: ' + name);
            return {
                validateFieldName: {valid: false}
            };
        }
    }
    return null;
}

@Component({
    selector: 'ab-field-editor',
    templateUrl: './app/home/support/fieldset-editor/FieldEditorComponent.html',
    directives: [TypeAheadComponent, FORM_DIRECTIVES]
})
export class FieldEditorComponent implements OnInit, AfterViewInit {

    @Input()
    fieldSlot:FieldSlotModel;
    @Input()
    parent:FieldsetModel;
    @Input()
    controlName: string;
    fieldName:Control;
    private dataTypeOptions:SelectOptionModel[];
    private required = false;

    constructor(private fieldsetService:FieldsetService,
                private changeDetectorRef:ChangeDetectorRef) {
    }

    ngOnInit():any {
        if (this.fieldSlot.field === null) {
            this.fieldSlot.field = new DataFieldModel('');
            this.fieldSlot.isDataField = true;
        }

        this.dataTypeOptions = this.fieldsetService.getFieldDataTypes();
        console.log('slot is:', this.fieldSlot);
        console.log('parent is:', this.parent);
        this.fieldName = new Control('New Data Field', (control) => validateFieldName(control, this.fieldSlot, this.parent));
        console.log('added control: ' + this.controlName);
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
