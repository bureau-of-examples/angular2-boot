import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {NewsSummaryModel} from '../../common/model/NewsSummaryModel';
import {NewsService} from './NewsService';

@Component({
    templateUrl: './app/home/news/NewsComponent.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NewsComponent implements OnInit {

    newsList: NewsSummaryModel[] = [];

    constructor (
        private newsService: NewsService
    ) {}

    ngOnInit() {
        this.newsService.getAll().subscribe(
            result => this.newsList = result,
            error => console.log(error),
            () => console.log('done retrieving news list.')
        );
    }
}
