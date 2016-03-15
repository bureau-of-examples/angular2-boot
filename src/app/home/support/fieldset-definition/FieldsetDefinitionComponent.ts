import {Component} from 'angular2/core';
import {ComponentInstruction} from 'angular2/router';
import {NestedViewComponent} from '../../../common/navigation/NestedViewComponent';
import {SupportTabService} from '../SupportTabService';

@Component({
    templateUrl: './app/home/support/fieldset-definition/FieldsetDefinitionComponent.html'
})
export class FieldsetDefinitionComponent extends NestedViewComponent {

    constructor(private supportTabService:SupportTabService) {
        super();
    }

    routerOnActivate(nextInstruction:ComponentInstruction, prevInstruction:ComponentInstruction):any {
        this.supportTabService.setSelectedTab('FieldsetDefinition');
        return super.routerOnActivate(nextInstruction, prevInstruction);
    }
}
