import {Component} from 'angular2/core';
import {ControlGroup, ControlArray, Control} from 'angular2/common';
import {ComputerPartModel} from './ComputerPartModel';
import {ComputerOrderModel} from './ComputerOrderModel';

@Component({
    templateUrl: './app/products/computer/SearchComponent.html'
})
export class SearchComponent {
    
    computerOrder: ComputerOrderModel;
    formControlGroup: ControlGroup;
    private nextPartId: number = 1;
    private partsArray: ControlArray;
    

    constructor() {
        //create initial data
        this.computerOrder = new ComputerOrderModel();
        var cpu = new ComputerPartModel();
        cpu.id = this.nextPartId++;
        cpu.name = 'Core i5';
        this.computerOrder.computerParts.push(cpu);

        //create corresponding control group
        this.partsArray = new ControlArray([
            new Control()
        ]);
        this.formControlGroup = new ControlGroup({
            nameControl: new Control('your name'),
            emailControl: new Control('your email'),
            partsControlArray: this.partsArray
        });
    }

    addPart() {
        var part = new ComputerPartModel();
        part.id = this.nextPartId++;
        part.name = 'new part';
        this.computerOrder.computerParts.push(part);
        this.partsArray.push(new Control());
    }

    save() {
        console.log('save called.');
    }
    
}
