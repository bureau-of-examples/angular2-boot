import {Component} from 'angular2/core';
import {RouteParams, OnActivate, ComponentInstruction, OnDeactivate} from 'angular2/router';
import {SupportTabService} from '../SupportTabService';
import {RouterLinkModel} from '../../../common/model/RouterLinkModel';

@Component({
    templateUrl: './app/home/support/fieldset-editor/FieldsetEditorComponent.html'
})
export class FieldsetEditorComponent implements OnActivate, OnDeactivate {

    private id:string;
    private link:RouterLinkModel;

    constructor(private routeParams:RouteParams,
                private supportTabService:SupportTabService) {
        this.id = this.routeParams.get('id');
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

}


