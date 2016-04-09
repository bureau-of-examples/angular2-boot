///<reference path="../../../../typings/browser.d.ts" />

import {Component, DynamicComponentLoader, Injector} from 'angular2/core';
//import {TestComponent} from './TestComponent';

@Component({
    templateUrl: 'FinanceComponent.html',
    moduleId: module.id
})
export class FinanceComponent {

    constructor(private dynamicComponentLoader:DynamicComponentLoader, private injector:Injector) {
    }

    loadTestComponent() {
        console.log('use import instead!');
        //this.dynamicComponentLoader.loadAsRoot(TestComponent, 'div.parent', this.injector);
    }

    importComponent() {
        System.import('./app/case-studies/finance/TestComponent').then((module) => {
            console.log(module);
            this.dynamicComponentLoader.loadAsRoot(module.TestComponent, 'div.parent', this.injector);
        });
    }
}
