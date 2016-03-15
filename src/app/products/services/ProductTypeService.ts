import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {ProductTypeModel} from '../../common/model/ProductTypeModel';

@Injectable()
export class ProductTypeService {

    mockProductTypeList: ProductTypeModel[] = [
        {id: '1', name: 'Phone', description: 'Smart phones and utility phones'},
        {id: '2', name: 'Computer', description: 'Laptop, desktop, 2-in-1 and all-in-one'}
    ];

    getAll(): Observable<ProductTypeModel[]> {
        return Observable.interval(500).take(1).map(index => this.mockProductTypeList);
    }

    delete(id: string): Observable<String> {
        for(var i: number = 0; i < this.mockProductTypeList.length; i++) {
            if(this.mockProductTypeList[i].id === id) {
                this.mockProductTypeList.splice(i, 1);
            }
        }
        return Observable.interval(500).take(1).map(index => 'success');
    }

}

