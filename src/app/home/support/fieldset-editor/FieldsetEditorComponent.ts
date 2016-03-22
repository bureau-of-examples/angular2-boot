import {Component} from 'angular2/core';
import {RouteParams, OnActivate, ComponentInstruction, OnDeactivate} from 'angular2/router';
import {SupportTabService} from '../SupportTabService';
import {RouterLinkModel} from '../../../common/model/RouterLinkModel';
import {FieldsetService} from '../../../services/FieldsetService';
import {FieldsetModel, FieldSlotModel} from '../../../common/model/FieldsetMOdel';
import {FieldEditorComponent} from './FieldEditorComponent';

@Component({
    templateUrl: './app/home/support/fieldset-editor/FieldsetEditorComponent.html',
    directives: [FieldEditorComponent]
})
export class FieldsetEditorComponent implements OnActivate, OnDeactivate {

    private id:string;
    private fieldset:FieldsetModel;
    private link:RouterLinkModel;

    constructor(private routeParams:RouteParams,
                private supportTabService:SupportTabService,
                private fieldsetService:FieldsetService) {
        this.id = this.routeParams.get('id');
        this.fieldsetService.getOne(this.id).subscribe(result => this.fieldset = result);
        console.log('editing fieldset ' + this.id);
    }

    routerOnActivate(nextInstruction:ComponentInstruction, prevInstruction:ComponentInstruction):any {

        var tabName:string = 'editor ' + this.id;
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
    }

    removeSlot(item:FieldSlotModel):void {

        var index:number = this.fieldset.children.indexOf(item);
        if (index >= 0) {
            this.fieldset.children.splice(index, 1);
        }
    }

    save():void {
        this.fieldsetService.save(this.fieldset);
    }

}



