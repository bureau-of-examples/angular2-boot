
export abstract class Field {

    id: string;

    constructor(public name: string) {}
}

export enum FieldDataType {
    STRING, NUMBER, DATE, BOOLEAN
}

export class DataField extends Field {

    dataType: FieldDataType = FieldDataType.STRING;
    defaultValue: string;
    pattern: RegExp;

    constructor(name: string, dataType?: FieldDataType) {
        super(name);

        if(dataType)
            this.dataType = dataType;
    }

}

export class FieldSlot {

    constructor(public field?: Field) {
        if(this.field) {
            this.isDataField = this.field instanceof DataField;
        } else {
            this.isDataField = true;
            this.field = new DataField('');
        }
    }

    required: boolean = false;
    minCount: number = 1;
    maxCount: number = null;
    isDataField: boolean;
}

export class Fieldset extends Field {

    children: FieldSlot[] = [];

    toString() {
        return this.name;
    }
}


