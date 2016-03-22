import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {ProductTypeModel} from '../../common/model/ProductTypeModel';
import {DataService} from '../../services/DataService';

@Injectable()
export class ProductTypeService {

    constructor(private dataService:DataService) {
    }

    getAll():Observable<ProductTypeModel[]> {
        return this.dataService.getProductTypeList();
    }

    delete(id:string):Observable<ProductTypeModel> {

        return this.dataService.deleteProductType(id);
    }

    add(editedProductType:ProductTypeModel):Observable<ProductTypeModel> {

        return this.dataService.saveProductType(editedProductType);
    }
}

