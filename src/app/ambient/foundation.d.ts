
declare interface IjQueryObject {
    prop: Function;
    unload: Function;
    foundation: Function;
}

declare function jQuery(element:any): IjQueryObject;

declare module Foundation {
    export class Tabs {
        constructor(elem:any, options?: any);
    }

    export class Reveal {
        constructor(elem:any, options?:any);
    }
}

declare module JSOG {

    export function stringify(obj: any): string;

    export function parse(str: string): any;

    export function encode(obj: any): any;

    export function decode(obj: any): any;
}

declare var toastr: any;

declare var A2B$ : {gwtZone : any};
