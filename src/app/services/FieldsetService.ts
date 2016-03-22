import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {FieldsetModel, FieldDataType} from '../common/model/FieldsetModel';
import {SelectOptionModel} from '../common/model/SelectOPtionModel';
import {DataService} from './DataService';
import {UtilService} from './UtilService';


@Injectable()
export class FieldsetService {

    private dataTypeOptions: SelectOptionModel[] = null;

    constructor(
        private dataService: DataService
    ) {}

    getAll(): Observable<FieldsetModel[]> {
        return this.dataService.getFieldsets();
    }

    getOne(id: string): Observable<FieldsetModel> {
        return this.dataService.getFieldset(id);
    }

    search(keywords: string): Observable<FieldsetModel[]> {
        return this.dataService.searchFieldsets(keywords);
    }

    getFieldDataTypes(): SelectOptionModel[] {
        if(this.dataTypeOptions === null) {
            var keys: string[] = UtilService.getStringKeys(FieldDataType);
            var result: SelectOptionModel[] = [];
            keys.forEach(key => {
                result.push({key: key, value: '' + FieldDataType[key]});
            });
            console.log('select options: ', result);
            this.dataTypeOptions = result;
        }
        return this.dataTypeOptions;
    }


    save(fieldset:FieldsetModel):void {
        this.dataService.saveFieldset(fieldset);
    }
}
