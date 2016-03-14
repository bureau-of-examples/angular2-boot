import {Injectable} from 'angular2/core';
import {NewsDetailsModel} from '../../common/model/NewsDetailsModel';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class NewsService {

    mockNewsList: NewsDetailsModel[] = [
        {
            id: '1',
            title: 'test entry',
            summary: 'write something exciting here...',
            publishDate: new Date('2015-12-23'),
            content: 'some sample content'
        },
        {
            id: '2',
            title: 'Galaxy S7 is released!',
            summary: 'write something exciting here...',
            publishDate: new Date('2016-03-11'),
            content: 'some sample content 22222'
        },
        {
            id: '3',
            title: 'Angular2 is in beta!',
            summary: 'write something exciting here...',
            publishDate: new Date('2016-01-23'),
            content: 'some sample content 33333'
        }
    ];

    get(id: string): Observable<NewsDetailsModel> {
        for(var i: number = 0; i < this.mockNewsList.length; i++) {
            var item: NewsDetailsModel = this.mockNewsList[i];
            if(item.id === '' + id) {
                return Observable.fromArray([item]);
            }
        }
        return Observable.of(null);
    }

    getAll(): Observable<NewsDetailsModel[]> {
        return Observable.of(this.mockNewsList);
    }

}
