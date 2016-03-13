import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {DocSummaryModel} from '../../common/model/DocSummaryModel';

@Injectable()
export class DocsService {

    mockDocSummaries: DocSummaryModel[] = [
        {id: '1', title: 'v1_user-manual.pdf', description: 'Version 1 user manual.', lastUpdated: new Date('2013-12-04'), lastUpdatedBy: 'user 1'},
        {id: '2', title: 'database naming convention', description: 'SQL Server database naming convention.', lastUpdated: new Date('2014-04-12'), lastUpdatedBy: 'user 2'}
    ];

    search(keywords: string): Observable<DocSummaryModel[]> {

        var result: DocSummaryModel[] = [];
        for(var i:number = 0; i<this.mockDocSummaries.length; i++) {
            var item: DocSummaryModel = this.mockDocSummaries[i];
            if(item.title.indexOf(keywords) >= 0) {
                result.push(item);
            }
        }
        return Observable.of(result);

    }
}
