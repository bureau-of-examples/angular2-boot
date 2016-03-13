import {Component} from 'angular2/core';
import {DocSummaryModel} from '../../common/model/DocSummaryModel';
import {DocsService} from './DocsService';

@Component({
    templateUrl: './app/home/docs/DocsComponent.html',
    providers: [DocsService]
})
export class DocsComponent {

    docList:DocSummaryModel[] = [];

    constructor(private docsService:DocsService) {
        this.search('');
    }

    search(keywords:string):void {

        this.docsService
            .search(keywords)
            .subscribe(
                result => this.docList = result,
                error => console.log(error),
                () => {}
            );
    }
}
