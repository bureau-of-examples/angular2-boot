import {Component, ViewContainerRef} from 'angular2/core';
import {ComponentInstruction} from 'angular2/router';
import {NestedViewComponent} from '../../../common/navigation/NestedViewComponent';
import {SupportTabService} from '../SupportTabService';

@Component({
    template: 'product type component.'
})
export class ProductTypeComponent extends NestedViewComponent {

    constructor(private supportTabService:SupportTabService) {
    }

    routerOnActivate(nextInstruction:ComponentInstruction, prevInstruction:ComponentInstruction):any {
        this.supportTabService.setSelectedTab('ProductType');
        return super.routerOnActivate(nextInstruction, prevInstruction);
    }
}
