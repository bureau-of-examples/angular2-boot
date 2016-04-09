import {
    Component, Directive, ElementRef, Renderer, ViewContainerRef, QueryList,
    TemplateRef, ViewQuery, Query
} from 'angular2/core';

@Directive({
    selector: '[abGreen]',
    exportAs: 'abGreen'
})
class GreenDirective {

    elementId : string;

    constructor(elementRef : ElementRef, renderer : Renderer) {
        renderer.setElementStyle(elementRef.nativeElement, 'color', 'green');
        this.elementId = elementRef.nativeElement.id;
    }
}

@Directive({
    selector: '[abRed]',
    exportAs: 'abRed'
})
class RedDirective {

    elementId : string;

    constructor(elementRef : ElementRef, renderer : Renderer) {
        renderer.setElementStyle(elementRef.nativeElement, 'color', 'red');
        this.elementId = elementRef.nativeElement.id;
    }
}

@Component({
    selector: 'ab-template',
    template: `I can handle myself, 
<button class="button" (click)="instantiateViewTemplate()">instantiateViewTemplate</button>
<button class="button" (click)="instantiateContentTemplate()">instantiateContentTemplate</button>
<button class="button" (click)="clear()">clear</button>
<template><p>Template 1</p></template>`
})
class TemplateComponent {

    private templateQuery : QueryList<TemplateRef>;
    private contentTemplateQuery : QueryList<TemplateRef>;

    constructor(
        private viewContainerRef : ViewContainerRef,
        @ViewQuery(TemplateRef) templateQuery : QueryList<TemplateRef>,
        @Query(TemplateRef) contentTemplateQuery : QueryList<TemplateRef>
    ) {
        this.templateQuery = templateQuery;
        this.contentTemplateQuery = contentTemplateQuery;
    }

    instantiateViewTemplate() {
        this.templateQuery.forEach((ref) => {
            this.viewContainerRef.createEmbeddedView(ref);
        });
    }

    instantiateContentTemplate() {
        this.contentTemplateQuery.forEach((ref) => {
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

}
