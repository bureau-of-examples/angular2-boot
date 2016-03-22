///<reference path="../../../ambient/foundation.d.ts" />

import {Component, AfterViewInit, ElementRef} from 'angular2/core';
import {ComponentInstruction} from 'angular2/router';
import {NestedViewComponent} from '../../../common/navigation/NestedViewComponent';
import {SupportTabService} from '../SupportTabService';
import {ProductTypeService} from '../../../products/services/ProductTypeService';
import {ProductTypeModel} from '../../../common/model/ProductTypeModel';

@Component({
    templateUrl: './app/home/support/product-type/ProductTypeComponent.html'
})
export class ProductTypeComponent extends NestedViewComponent implements AfterViewInit {

    editor:any;
    editedProductType:ProductTypeModel = {id: '', name: '', description: ''};
    productTypeList:ProductTypeModel[];
    private loaded: boolean = false;
    private saving: boolean = false;

    constructor(private supportTabService:SupportTabService,
                private productTypeService:ProductTypeService,
                private element: ElementRef
    ) {
        super();
        this.refresh();
    }

    refresh() {
        this.productTypeService.getAll().subscribe(result => {
            console.log('retrieved product type list:', result);
            this.productTypeList = result;
            this.loaded = true;
        });
    }

    routerOnActivate(nextInstruction:ComponentInstruction, prevInstruction:ComponentInstruction):any {
        this.supportTabService.setSelectedTab('ProductType');
        return super.routerOnActivate(nextInstruction, prevInstruction);
    }

    ngAfterViewInit():any {
        this.editor = new Foundation.Reveal(jQuery('#productTypeEditor'));
        return undefined;
    }

    editProductType(id:string) {
        console.log('opening product type editor for id: ' + id);
        for (var i:number = 0; i < this.productTypeList.length; i++) {
            var item:ProductTypeModel = this.productTypeList[i];
            if (item.id === id) {
                this.editedProductType = item;
                this.editor.open();
            }
        }
    }

    deleteProductType(id:string):void {
        console.log('deleting product type: ' + id);
        this.productTypeService.delete(id).subscribe(x => this.refresh());
    }

    createProductType() {
        console.log('creating new product type');
        this.editedProductType  = {id: '', name: '', description: ''};
        this.editor.open();
    }

    saveProductType(closeButton) {
        this.saving = true;
        this.productTypeService.add(this.editedProductType).subscribe(() => {
            this.refresh();
            this.saving = false;
            closeButton.click();
        }, ()=> {
            this.saving = false;
        });
    }
}
