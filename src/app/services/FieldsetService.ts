import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {Fieldset, DataField, FieldSlot, FieldDataType} from '../common/model/Fieldset';

@Injectable()
export class FieldsetService {

    private mockFieldsets: Fieldset[] = [];

    constructor() {
        this.populateMockFieldsets();
    }

    getAll(): Observable<Fieldset[]> {
        return Observable.interval(500).take(1).map(index => this.mockFieldsets);
    }

    getOne(id: string): Observable<Fieldset> {
        return Observable.interval(500).take(1).map(index => {
            for(var i: number = 0; i < this.mockFieldsets.length; i++) {
                var item: Fieldset = this.mockFieldsets[i];
                if(item.id === id) {
                    return item;
                }
            }
            return null;
        });
    }

    private populateMockFieldsets() {
        var phoneFieldset: Fieldset = new Fieldset('Smart Phone Fields');
        phoneFieldset.id = '1';
        var cpu: DataField = new DataField('cpu');
        var memory: DataField = new DataField('memory');
        phoneFieldset.children.push(new FieldSlot(cpu));
        phoneFieldset.children.push(new FieldSlot(memory));
        this.mockFieldsets.push(phoneFieldset);

        var phonePrices: Fieldset = new Fieldset('Available prices');
        phonePrices.id = '2';
        var phonePrice: Fieldset = new Fieldset('Price');
        var slot: FieldSlot = new FieldSlot(phonePrice);
        phonePrices.children.push(slot);
        var date: DataField = new DataField('date', FieldDataType.DATE);
        var price: DataField = new DataField('price', FieldDataType.NUMBER);
        var shop: DataField = new DataField('shop');
        var hasStock: DataField = new DataField('stock', FieldDataType.BOOLEAN);
        phonePrice.children.push(new FieldSlot(shop));
        phonePrice.children.push(new FieldSlot(price));
        phonePrice.children.push(new FieldSlot(date));
        phonePrice.children.push(new FieldSlot(hasStock));
        this.mockFieldsets.push(phonePrices);
    }


}
