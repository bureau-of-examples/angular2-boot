import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {Fieldset, FieldDataType} from '../common/model/Fieldset';
import {SelectOPtionModel} from '../common/model/SelectOPtionModel';
import {DataService} from './DataService';
import {UtilService} from './UtilService';


@Injectable()
export class FieldsetService {

    private dataTypeOptions: SelectOPtionModel[] = null;

    constructor(
        private dataService: DataService
    ) {}

    getAll(): Observable<Fieldset[]> {
        return this.dataService.getFieldsets();
    }

    getOne(id: string): Observable<Fieldset> {
        return this.dataService.getFieldset(id);
    }

    search(keywords: string): Observable<Fieldset[]> {
        return this.dataService.searchFieldsets(keywords);
    }

    getFieldDataTypes(): SelectOPtionModel[] {
        if(this.dataTypeOptions === null) {
            var keys: string[] = UtilService.getStringKeys(FieldDataType);
            var result: SelectOPtionModel[] = [];
            keys.forEach(key => {
                result.push({key: key, value: '' + FieldDataType[key]});
            });
            console.log('select options: ', result);
            this.dataTypeOptions = result;
        }
        return this.dataTypeOptions;
    }


    save(fieldset:Fieldset):void {
        this.dataService.saveFieldset(fieldset);
    }
}
