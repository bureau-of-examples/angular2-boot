
declare function jQuery(element:any):any;

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
