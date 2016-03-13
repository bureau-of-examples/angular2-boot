import {Component, OnInit} from 'angular2/core';
import {NewsService} from './NewsService';
import {NewsDetailsModel} from '../../common/model/NewsDetailsModel';
import {RouteParams} from 'angular2/router';

@Component({
    templateUrl: './app/home/news/NewsDetailsComponent.html'
})
export class NewsDetailsComponent implements OnInit {

    newsDetails: NewsDetailsModel;

    constructor (
        private newsService: NewsService,
        private routeParams: RouteParams
    ) {}

    ngOnInit() {
        let id: string = this.routeParams.get('id');
        console.log('fetching news details ' + id);
        this.newsService.get(id).subscribe(
            result => this.newsDetails = result,
            error => console.log(error),
            () => console.log('Finished fetching news details ' + id)
        );
    }
}
