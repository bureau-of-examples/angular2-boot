import {Component} from 'angular2/core';


@Component({
    templateUrl: './app/products/phone/SearchComponent.html'
})
export class SearchComponent {

    showField4: boolean;
    sampleCollection: any[] = [
        {name: 'Item 1', pattern: '\\w+'}, 
        {name: 'Item 2', pattern: '\\w+'}, 
        {name: 'Item 3 - digit only but does not disable save button', pattern: '\\d+'}];
    
    save() {
        console.log('save called.');
    }
}
