import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ProductTypeComponent} from './product-type/ProductTypeComponent';
import {FieldsetDefinitionComponent} from './fieldset-definition/FieldsetDefinitionComponent';
import {FieldsetEditorComponent} from './fieldset-editor/FieldsetEditorComponent';
import {SupportTabService} from './SupportTabService';

@Component({
    templateUrl: './app/home/support/SupportComponent.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [SupportTabService]
})
@RouteConfig([
    {path: '/product-type', name: 'ProductType', component: ProductTypeComponent, useAsDefault: true},
    {path: '/fieldset-definition', name: 'FieldsetDefinition', component: FieldsetDefinitionComponent},
    {path: '/fieldset-editor/:id', name: 'FieldsetEditor', component: FieldsetEditorComponent}
])
export class SupportComponent {

    constructor(
        private supportTabService: SupportTabService
    ) {}

}
