/// <reference path="../ambient/foundation.d.ts" />

import {Injectable} from 'angular2/core';

@Injectable()
export class UIService {

    globalOverlay(show: boolean): void {
        jQuery('#global-overlay').foundation(show ? 'open' : 'close');
    }
    
}
