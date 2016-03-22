///<reference path="../ambient/foundation.d.ts" />

import {Injectable}     from 'angular2/core';
import {Observable}     from 'rxjs/Rx';
import {BaseModel}      from '../common/model/BaseModel';
import {AppStateModel}  from '../common/model/AppStateModel';
import {
    FieldsetModel,
    DataFieldModel,
    FieldSlotModel,
    FieldDataType
}                        from '../common/model/FieldsetModel';
import {ContactModel}   from '../common/model/ContactModel';
import {ProductTypeModel} from '../common/model/ProductTypeModel';

const HTTP_DELAY = 500;
const APP_DATA_KEY = 'appData';

@Injectable()
export class DataService {

    private saveOnExit: boolean = true;
    private state: AppStateModel = null;
    private keySequence: Map<string, number> = new Map<string, number>();

    constructor() {
        console.log('Binding to window.unload');
        jQuery(window).unload(() => {
            this.saveState();
        });

        if (this.state === null) {
            this.loadState();
        }
    }

    //region state management methods

    saveState():void {
        if(this.saveOnExit) {
            console.log('saving data to local storage..');
            var data:string = JSOG.stringify(this.state);
            localStorage.setItem(APP_DATA_KEY, data);
        }
    }

    loadState():void {
        var data:string = localStorage.getItem(APP_DATA_KEY);
        if (data) {
            console.log('loading data from local storage...');
            this.state = JSOG.parse(data);
        } else {
            console.log('initializing app state...');
            this.loadInitialData();
        }
    }

    clearState(): void {
        localStorage.removeItem(APP_DATA_KEY);
        this.saveOnExit = false;
    }

    //endregion

    //region data access methods

    getFieldsets():Observable<FieldsetModel[]> {

        return this.getList<FieldsetModel>('fieldsets');
    }

    getDataFields(): Observable<DataFieldModel[]> {
        return this.getList<DataFieldModel>('dataFields');
    }

    getContacts(): Observable<ContactModel[]> {

        return this.getList<ContactModel>('contacts');
    }

    getProductTypeList(): Observable<ProductTypeModel[]> {

        return this.getList<ProductTypeModel>('productTypes');
    }

    getFieldset(id:string):Observable<FieldsetModel> {

        return this.getItem<FieldsetModel>('fieldsets', id);
    }

    getDataField(id:string):Observable<DataFieldModel> {

        return this.getItem<DataFieldModel>('dataFields', id);
    }

    getContact(id:string):Observable<ContactModel> {

        return this.getItem<ContactModel>('contacts', id);
    }

    getProductType(id: string): Observable<ProductTypeModel> {

        return this.getItem<ProductTypeModel>('productTypes', id);
    }

    searchFieldsets(keywords:string):Observable<FieldsetModel[]> {

        return this.searchItems<FieldsetModel>('fieldsets', item => item.name.indexOf(keywords) >= 0);
    }

    searchDataFields(keywords: string): Observable<DataFieldModel[]> {

        return this.searchItems<DataFieldModel>('dataFields', item => item.name.indexOf(keywords) >= 0);
    }

    searchContacts(keywords:string):Observable<ContactModel[]> {

        return this.searchItems<ContactModel>('contacts', item => item.name.indexOf(keywords) >= 0);
    }

    searchProductTypes(keywords:string):Observable<ProductTypeModel[]> {

        return this.searchItems<ProductTypeModel>('productTypes', item => item.name.indexOf(keywords) >= 0);
    }

    saveFieldset(item: FieldsetModel): Observable<FieldsetModel> {

        return this.saveItem<FieldsetModel>('fieldsets', item);
    }

    saveDataField(item: DataFieldModel): Observable<DataFieldModel> {

        return this.saveItem<DataFieldModel>('dataFields', item);
    }

    saveContact(item: ContactModel): Observable<ContactModel> {

        return this.saveItem<ContactModel>('contacts', item);
    }

    saveProductType(item: ProductTypeModel): Observable<ProductTypeModel> {

        return this.saveItem<ProductTypeModel>('productTypes', item);
    }

    deleteFieldset(id: string): Observable<FieldsetModel> {

        return this.deleteItem<FieldsetModel>('fieldsets', id);
    }

    deleteDataFields(id: string): Observable<DataFieldModel> {

        return this.deleteItem<DataFieldModel>('dataFields', id);
    }

    deleteContact(id: string): Observable<ContactModel> {

        return this.deleteItem<ContactModel>('contacts', id);
    }

    deleteProductType(id: string): Observable<ProductTypeModel> {

        return this.deleteItem<ProductTypeModel>('productTypes', id);
    }

    //endregion

    //region common data access

    private searchItems<T extends BaseModel>(collectionName: string, predicate: (item: T)=>boolean):Observable<T[]> {
        return Observable.interval(HTTP_DELAY).take(1).map(() => {

            var list: T[] = this.state[collectionName];
            console.log('searching in list: ', list);
            var result:T[] = [];
            for (var i:number = 0; i < list.length; i++) {
                var item:T = list[i];
                if (predicate(item)) {
                    result.push(JSON.parse(JSON.stringify(item)));
                }
            }
            return result;
        });
    }

    private getList<T extends BaseModel>(collectionName: string):Observable<T[]> {

        return this.searchItems<T>(collectionName, ()=>true);
    }

    private getItem<T extends BaseModel>(collectionName: string, id:string):Observable<T> {

        return this.searchItems(collectionName, item => item.id === id).map(result => result.length ? result[0] : null);
    }

    private saveItem<T extends BaseModel>(collectionName: string, item: T): Observable<T> {

        return Observable.interval(HTTP_DELAY).take(1).map(() => {
            var list:BaseModel[] = this.state[collectionName];
            if(!item.id) {
                item.id = '' + this.keySequence[collectionName]++;
                list.push(item);
                console.log('created ', item);
                return item;
            } else {
                for(var i: number=0; i<list.length; i++) {
                    let result: BaseModel = list[i];
                    if(result.id === item.id) {
                        BaseModel[i] = item;
                        console.log('saved ', item);
                        return item;
                    }
                }
            }
            return null;
        });
    }

    private deleteItem<T extends BaseModel>(collectionName: string, id: string): Observable<T> {

        return Observable.interval(HTTP_DELAY).take(1).map(() => {
            var list:BaseModel[] = this.state[collectionName];
            for(var i: number=0; i<list.length; i++) {
                var item: BaseModel = list[i];
                if(id === item.id) {
                    list.splice(i, 1);
                    console.log('delete ', item);
                    return item;
                }
            }

            return null;
        });

    }

    //endregion

    //region mock data

    private loadInitialData(): void {
        console.log('creating initial app state...');
        this.state = new AppStateModel();
        this.populateMockFieldsets();
        this.populateMockContacts();
        this.populateMockProductTypeList();
    }

    private populateMockFieldsets() {

        console.log('add fieldsets...');
        this.keySequence['fieldsets'] = 1;
        this.keySequence['dataFields'] = 1;

        var cpu: DataFieldModel = new DataFieldModel('cpu');
        this.saveDataField(cpu);

        var memory: DataFieldModel = new DataFieldModel('memory');
        this.saveDataField(memory);

        var screen: DataFieldModel = new DataFieldModel('screen', FieldDataType.NUMBER);
        this.saveDataField(screen);

        var phoneFieldset: FieldsetModel = new FieldsetModel('Smart Phone Fields');
        phoneFieldset.children.push(new FieldSlotModel(cpu));
        phoneFieldset.children.push(new FieldSlotModel(memory));
        phoneFieldset.children.push(new FieldSlotModel(screen));
        this.saveFieldset(phoneFieldset);

        var date: DataFieldModel = new DataFieldModel('date', FieldDataType.DATE);
        this.saveDataField(date);
        var price: DataFieldModel = new DataFieldModel('price', FieldDataType.NUMBER);
        this.saveDataField(price);
        var shop: DataFieldModel = new DataFieldModel('shop');
        this.saveDataField(shop);
        var hasStock: DataFieldModel = new DataFieldModel('stock', FieldDataType.BOOLEAN);
        this.saveDataField(hasStock);

        var phonePrice: FieldsetModel = new FieldsetModel('Price');
        phonePrice.children.push(new FieldSlotModel(shop));
        phonePrice.children.push(new FieldSlotModel(price));
        phonePrice.children.push(new FieldSlotModel(date));
        phonePrice.children.push(new FieldSlotModel(hasStock));
        this.saveFieldset(phonePrice);

        var collector: DataFieldModel = new DataFieldModel('collector');
        this.saveDataField(collector);

        var phonePrices: FieldsetModel = new FieldsetModel('Available prices');
        phonePrices.children.push(new FieldSlotModel(collector));
        phonePrices.children.push(new FieldSlotModel(phonePrice));
        this.saveFieldset(phonePrices);
    }

    private populateMockContacts() {

        console.log('add contacts...');
        this.keySequence['contacts'] = 1;

        var contact: ContactModel = new ContactModel();
        contact.name = 'test1';
        contact.data = {};
        this.saveContact(contact);
    }

    private populateMockProductTypeList() {

        console.log('add product types..');
        this.keySequence['productTypes'] = 1;

        var phone: ProductTypeModel = new ProductTypeModel();
        phone.name = 'Phone';
        phone.description = 'Smart phones and utility phones';
        this.saveProductType(phone);

        var computer: ProductTypeModel = new ProductTypeModel();
        computer.name = 'Computer';
        computer.description = 'Laptop, desktop, 2-in-1 and all-in-one';
        this.saveProductType(computer);

        var network: ProductTypeModel = new ProductTypeModel();
        network.name = 'Network';
        network.description = 'Modem, Router, Range Extender and many other things';
        this.saveProductType(network);
    }

    //endregion
}
