import {Injectable} from 'angular2/core';

@Injectable()
export class UtilService {

    static getStringKeys(obj:any):string[] {
        var names:string[] = [];
        for (var n in obj) {
            if (typeof obj[n] === 'number') names.push(n);
        }
        return names;
    }

}

