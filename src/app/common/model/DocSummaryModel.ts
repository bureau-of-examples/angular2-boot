import {BaseModel} from './BaseModel';

export class DocSummaryModel extends BaseModel {
    title: string;
    description: string;
    lastUpdated: Date;
    lastUpdatedBy: string;
}
