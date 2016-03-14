import {OnActivate, ComponentInstruction} from 'angular2/router';

/*
 * Base class for all route components.
 */
export abstract class RouteDestinationComponent implements OnActivate {

    routerOnActivate(nextInstruction:ComponentInstruction, prevInstruction:ComponentInstruction):any {
        console.log('activating route.');
        return undefined;
    }

}
