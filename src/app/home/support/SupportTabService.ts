import {Injectable} from 'angular2/core';
import {NavigationService} from '../../common/navigation/NavigationService';

@Injectable()
export class SupportTabService extends NavigationService {

    private selectedTab:string;

    getSelectedTab():string {
        return this.selectedTab;
    }

    setSelectedTab(selectedTab:string):void {
        this.selectedTab = selectedTab;
    }

}
