import {Component} from 'angular2/core';
import {Panel, BarChart} from 'primeng/primeng';

@Component({
    templateUrl: './app/case-studies/education/EducationComponent.html',
    directives: [Panel, BarChart]
})
export class EducationComponent {

    data: any;

    constructor() {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    fillColor: '#42A5F5',
                    strokeColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    fillColor: '#9CCC65',
                    strokeColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
    }
}
