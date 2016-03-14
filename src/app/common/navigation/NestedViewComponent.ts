import {EventEmitter} from 'angular2/core';
import {OnActivate, ComponentInstruction} from 'angular2/router';

export abstract class NestedViewComponent implements OnActivate {

    routerOnActivate(nextInstruction:ComponentInstruction, prevInstruction:ComponentInstruction):any {
        return undefined;
    }


}