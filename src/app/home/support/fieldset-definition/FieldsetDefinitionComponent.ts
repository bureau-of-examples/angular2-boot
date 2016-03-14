import {Component} from 'angular2/core';
import {ComponentInstruction} from 'angular2/router';
import {NestedViewComponent} from '../../../common/navigation/NestedViewComponent';
import {SupportTabService} from '../SupportTabService';

@Component({
    template: 'fieldset definition'
})
export class FieldsetDefinitionComponent extends NestedViewComponent {

    constructor(private supportTabService:SupportTabService) {
    }

    routerOnActivate(nextInstruction:ComponentInstruction, prevInstruction:ComponentInstruction):any {
        this.supportTabService.setSelectedTab('FieldsetDefinition');
        return super.routerOnActivate(nextInstruction, prevInstruction);
    }
}
