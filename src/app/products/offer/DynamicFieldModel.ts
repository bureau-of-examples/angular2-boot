export class DynamicFieldModel {

    label:string;
    required:boolean;
    type:string;
    pattern:string;
    defaultValue:string;

    constructor() {
        this.type = 'text';
        this.required = false;
    }

}
