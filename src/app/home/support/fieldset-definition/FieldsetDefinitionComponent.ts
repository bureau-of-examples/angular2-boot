import {Component} from 'angular2/core';
import {ComponentInstruction, ROUTER_DIRECTIVES} from 'angular2/router';
import {NestedViewComponent} from '../../../common/navigation/NestedViewComponent';
import {SupportTabService} from '../SupportTabService';
import {FieldsetService} from '../../../services/FieldsetService';
import {Fieldset} from '../../../common/model/Fieldset';

@Component({
    templateUrl: './app/home/support/fieldset-definition/FieldsetDefinitionComponent.html',
    directives: [ROUTER_DIRECTIVES]
})
export class FieldsetDefinitionComponent extends NestedViewComponent {

    private fieldsets: Fieldset[];

    loaded: boolean = false;

    constructor(
        private supportTabService:SupportTabService,
        private fieldsetService: FieldsetService
    ) {
        super();
    }

    routerOnActivate(nextInstruction:ComponentInstruction, prevInstruction:ComponentInstruction):any {
        this.supportTabService.setSelectedTab('FieldsetDefinition');
        this.refresh();

        return super.routerOnActivate(nextInstruction, prevInstruction);
    }

    private refresh(): void {
        this.fieldsetService.getAll()
            .subscribe(result => {this.fieldsets = result; this.loaded = true;});
    }
}
