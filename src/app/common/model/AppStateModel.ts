import {FieldsetModel, DataFieldModel} from './FieldsetModel';
import {ContactModel} from './ContactModel';
import {ProductTypeModel} from './ProductTypeModel';


export class AppStateModel {

    fieldsets: FieldsetModel[] = [];
    dataFields: DataFieldModel[] = [];
    contacts: ContactModel[] = [];
    productTypes: ProductTypeModel[] = [];

}

