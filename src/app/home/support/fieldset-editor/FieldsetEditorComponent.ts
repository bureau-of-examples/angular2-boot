/// <reference path="../../../ambient/foundation.d.ts" />

import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {RouteParams, OnActivate, ComponentInstruction, OnDeactivate} from 'angular2/router';
import {SupportTabService} from '../SupportTabService';
import {RouterLinkModel} from '../../../common/model/RouterLinkModel';
import {FieldsetService} from '../../../services/FieldsetService';
import {FieldsetModel, FieldSlotModel} from '../../../common/model/FieldsetMOdel';
import {FieldEditorComponent} from './FieldEditorComponent';
import {UIService} from '../../../services/UIService';

@Component({
    templateUrl: './app/home/support/fieldset-editor/FieldsetEditorComponent.html',
    directives: [FORM_DIRECTIVES, FieldEditorComponent]
})
export class FieldsetEditorComponent implements OnActivate, OnDeactivate {

    private id:string;
    private fieldset:FieldsetModel;
    private link:RouterLinkModel;

    constructor(private routeParams:RouteParams,
                private supportTabService:SupportTabService,
                private fieldsetService:FieldsetService,
                private uiService:UIService) {
        this.id = this.routeParams.get('id');
        if (this.id) {
            this.fieldsetService.getOne(this.id).subscribe(result => this.fieldset = result);
            console.log('editing fieldset ' + this.id);
        } else {
            this.fieldset = new FieldsetModel('New fieldset');
        }
    }

    routerOnActivate(nextInstruction:ComponentInstruction, prevInstruction:ComponentInstruction):any {

        var tabName:string = this.id ? 'Edit Fieldset ' + this.id : 'Create New Fieldset';
        this.supportTabService.setSelectedTab(tabName);
        var routerLink:any[] = ['FieldsetEditor', {id: this.id}];
        this.link = this.supportTabService.addTab(tabName, routerLink);
        return undefined;
    }

    routerOnDeactivate(nextInstruction:ComponentInstruction, prevInstruction:ComponentInstruction):any {
        this.supportTabService.closeTab(this.link);
        return undefined;
    }

    addSlot():void {

        if (this.fieldset === null)
            return;

        var slot:FieldSlotModel = new FieldSlotModel(null);
        this.fieldset.children.push(slot);
        setTimeout(()=> { //todo wait for angular to render.
            this.goToElement('fieldset-editor-bottom');
        }, 10);
    }

    removeSlot(item:FieldSlotModel):void {

        var index:number = this.fieldset.children.indexOf(item);
        if (index >= 0) {
            this.fieldset.children.splice(index, 1);
        }
    }

    save():void {
        this.uiService.globalOverlay(true);
        this.fieldsetService.save(this.fieldset).subscribe(()=> {
            this.uiService.globalOverlay(false);
            toastr.success('great success!');
        });
    }

    goToElement(targetId):void {
        document.getElementById(targetId).scrollIntoView();
    }
}



