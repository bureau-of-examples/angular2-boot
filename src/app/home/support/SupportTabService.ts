import {Injectable} from 'angular2/core';

@Injectable()
export class SupportTabService {

    private selectedTab: string;

    getSelectedTab(): string {
        return this.selectedTab;
    }

    setSelectedTab(selectedTab: string): void {
        this.selectedTab = selectedTab;
    }
}
