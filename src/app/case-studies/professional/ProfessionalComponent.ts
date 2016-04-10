import {
    Component, Directive, ElementRef, Renderer, ViewContainerRef, QueryList,
    TemplateRef, ViewQuery, Query, AppViewManager, ViewChild, AfterViewInit
} from 'angular2/core';

@Directive({
    selector: '[abGreen]',
    exportAs: 'abGreen',
    host: {
        '(click)': 'addChild()'
    }
})
class GreenDirective {

    elementId:string;
    templateRef:TemplateRef = null;

    constructor(elementRef:ElementRef, renderer:Renderer, private viewContainerRef:ViewContainerRef) {
        renderer.setElementStyle(elementRef.nativeElement, 'color', 'green');
        this.elementId = elementRef.nativeElement.id;
    }

    addChild() {
        if (this.templateRef !== null) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
            console.log('click instantiateViewTemplate below first.');
        }

    }
}

@Directive({
    selector: '[abRed]',
    exportAs: 'abRed'
})
class RedDirective {

    elementId:string;

    constructor(elementRef:ElementRef, renderer:Renderer) {
        renderer.setElementStyle(elementRef.nativeElement, 'color', 'red');
        this.elementId = elementRef.nativeElement.id;
    }
}

@Component({
    selector: 'ab-template',
    template: `<p abGreen>I can handle myself</p>
<button class="button" (click)="instantiateViewTemplate()">instantiateViewTemplate</button>
<button class="button" (click)="instantiateContentTemplate()">instantiateContentTemplate</button>
<button class="button" (click)="clear()">clear</button>
<template><p>Template 1</p></template>`,
    directives: [GreenDirective]
})
class TemplateComponent {

    private templateQuery:QueryList<TemplateRef>;
    private contentTemplateQuery:QueryList<TemplateRef>;
    @ViewChild(GreenDirective) private greenDirective : GreenDirective;

    constructor(private viewContainerRef:ViewContainerRef,
                @ViewQuery(TemplateRef) templateQuery:QueryList<TemplateRef>,
                @Query(TemplateRef) contentTemplateQuery:QueryList<TemplateRef>) {
        this.templateQuery = templateQuery;
        this.contentTemplateQuery = contentTemplateQuery;
    }

    instantiateViewTemplate() {
        this.templateQuery.forEach((ref) => {
            this.greenDirective.templateRef = ref;
            this.viewContainerRef.createEmbeddedView(ref);
        });
    }

    instantiateContentTemplate() {
        this.contentTemplateQuery.forEach((ref) => {
            this.greenDirective.templateRef = ref;
            this.viewContainerRef.createEmbeddedView(ref);
        });
    }

    clear() {
        this.viewContainerRef.clear();
    }
}


@Component({
    templateUrl: 'ProfessionalComponent.html',
    moduleId: module.id,
    directives: [GreenDirective, RedDirective, TemplateComponent]
})
export class ProfessionalComponent {

    constructor(private renderer:Renderer, private appViewManager:AppViewManager, private elementRef:ElementRef) {
    }

    changeText() {
        let myDiv:ElementRef = this.appViewManager.getNamedElementInComponentView(this.elementRef, 'myDiv');
        this.renderer.setText(myDiv.nativeElement, 'Wow text is changed!');
    }
}
