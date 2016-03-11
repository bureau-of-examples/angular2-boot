import {Component, Input} from 'angular2/core';

@Component({
    selector: 'ab-header',
    templateUrl: './app/HeaderComponent.html'
})
export class HeaderComponent {

    @Input() bannerPath;

    constructor() {
        if(!this.bannerPath) {
            this.bannerPath = 'test!';
        }
    }
}



