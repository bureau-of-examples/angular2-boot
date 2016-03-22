import {BaseModel} from './BaseModel';

export class NewsSummaryModel extends BaseModel {
    title: string;
    summary: string;
    publishDate: Date;
}
