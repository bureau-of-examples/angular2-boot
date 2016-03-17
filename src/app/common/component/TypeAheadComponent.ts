import {Input, Output, EventEmitter, Component, OnInit} from 'angular2/core';

export interface QueryCallback {

    getSearchKeywords(): string;
    acceptResult(result:any[]);
}

@Component({
    selector: 'ab-type-ahead',
    templateUrl: './app/common/component/TypeAheadComponent.html'
})
export class TypeAheadComponent implements OnInit, QueryCallback {

    private static QUERY_DELAY:number = 500;

    @Input() currentItem: any;
    @Output() itemChange:EventEmitter<any> = new EventEmitter();
    @Output() query:EventEmitter<QueryCallback> = new EventEmitter();

    private text:string;

    private pendingQuery:any;

    private result:any[] = [];

    ngOnInit():any {
        if(this.currentItem) {
            this.text = this.currentItem.toString();
        }
        return undefined;
    }

    getSearchKeywords():string {
        return this.text;
    }

    acceptResult(result:any[]) {
        if (!this.pendingQuery) {
            this.result = result;
        }
    }

    itemClick(item):void {
        this.result = [];
        this.text = item.toString();
        this.currentItem = item;
        this.itemChange.emit(item);
    }

    valueChange():void {

        if (this.pendingQuery) {
            clearTimeout(this.pendingQuery);
            this.pendingQuery = null;
        }
        this.pendingQuery = setTimeout(()=> {
            this.executeQuery();
        }, TypeAheadComponent.QUERY_DELAY);
    }

    private executeQuery():void {
        this.pendingQuery = null;
        this.query.emit(this);
    }

}
