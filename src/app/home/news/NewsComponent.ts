import {Component} from 'angular2/core';
import {NewsSummaryModel} from '../../common/model/NewsSummaryModel';

@Component({
    templateUrl: './app/home/news/NewsComponent.html'
})
export class NewsComponent {

    newsList: NewsSummaryModel[] = [];

    constructor() {
        this.newsList = [
            {id: '1', title: 'test entry', summary: 'write something exciting here...', publishDate: new Date('2015-12-23')},
            {id: '2', title: 'Galaxy S7 is released!', summary: 'write something exciting here...', publishDate: new Date('2016-03-11')},
            {id: '3', title: 'Angular2 is in beta!', summary: 'write something exciting here...', publishDate: new Date('2016-01-23')}
        ];
    }
}
