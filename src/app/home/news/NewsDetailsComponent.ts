import {Component, OnInit} from 'angular2/core';
import {NewsService} from './NewsService';
import {NewsDetailsModel} from '../../common/model/NewsDetailsModel';
import {RouteParams, ComponentInstruction} from 'angular2/router';
import {RouteDestinationComponent} from '../../common/navigation/RouteDestinationComponent';
import {NavigationService} from '../../common/navigation/NavigationService';

@Component({
    templateUrl: './app/home/news/NewsDetailsComponent.html'
})
export class NewsDetailsComponent extends RouteDestinationComponent implements OnInit {

    newsDetails: NewsDetailsModel;
    private id: string;

    constructor (
        private newsService: NewsService,
        private routeParams: RouteParams,
        private navigationService: NavigationService
    ) {
        super();
        this.id = this.routeParams.get('id');
    }

    ngOnInit() {

        console.log('fetching news details ' + this.id);
        this.newsService.get(this.id).subscribe(
            result => this.newsDetails = result,
            error => console.log(error),
            () => console.log('Finished fetching news details ' + this.id)
        );
    }

    routerOnActivate(nextInstruction:ComponentInstruction, prevInstruction:ComponentInstruction):any {
        super.routerOnActivate(nextInstruction, prevInstruction);

        this.navigationService.addTab('NewsDetails ' + this.id, ['NewsDetails', {id: this.id}]);
    }
}
