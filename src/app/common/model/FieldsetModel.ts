import {BaseModel} from './BaseModel';

export abstract class FieldModel extends BaseModel {

    constructor(public name:string) {
        super();
    }

}

export enum FieldDataType {
    STRING, NUMBER, DATE, BOOLEAN
}

export class DataFieldModel extends FieldModel {

    dataType:FieldDataType = FieldDataType.STRING;
    defaultValue:string;
    pattern:RegExp;

    constructor(name:string, dataType?:FieldDataType) {
        super(name);

        if (dataType)
            this.dataType = dataType;
    }
}

export class FieldSlotModel {

    constructor(public field?:FieldModel) {
        if (this.field) {
            this.isDataField = this.field instanceof DataFieldModel;
        } else {
            this.isDataField = true;
            this.field = new DataFieldModel('');
        }
    }

    required:boolean = false;
    minCount:number = 1;
    maxCount:number = null;
    isDataField:boolean;
}

export class FieldsetModel extends FieldModel {

    constructor(name: string) {
        super(name);
    }

    children:FieldSlotModel[] = [];

    toString() {
        return this.name;
    }
}


