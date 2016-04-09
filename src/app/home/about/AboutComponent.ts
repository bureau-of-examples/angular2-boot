import {Component, Renderer, AfterViewInit} from 'angular2/core';

@Component({
    templateUrl: 'AboutComponent.html',
    moduleId: module.id
})
export class AboutComponent implements AfterViewInit {

    private element:any;

    constructor(private renderer:Renderer) {
    }

    ngAfterViewInit():any {
        return undefined;
    }

    createChild() {
        if(this.element === null)
            this.element = this.renderer.selectRootElement('.dynamic-container');
        console.log('selected element: ', this.element);

        this.element = this.renderer.createElement(this.element, 'div'); //this will replace all content of element
        this.renderer.setElementStyle(this.element, 'padding-left', '15px');
        this.renderer.createText(this.element, 'created by renderer');

    }

}
