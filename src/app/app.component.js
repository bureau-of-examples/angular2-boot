System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.message = 'This is my message 222';
                    this.counter = 0;
                    console.log('hello!');
                }
                AppComponent.prototype.incrementCounter = function () {
                    this.counter++;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'rw-app',
                        template: "<h2>{{message}} {{counter}}</h2>\n<button (click)=\"incrementCounter()\">Increment</button>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFJSTtvQkFGQSxZQUFPLEdBQUcsd0JBQXdCLENBQUM7b0JBTW5DLFlBQU8sR0FBRyxDQUFDLENBQUM7b0JBSFIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFJRCx1Q0FBZ0IsR0FBaEI7b0JBQ0ksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNuQixDQUFDO2dCQW5CTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQ1osK0ZBRUM7cUJBQ0EsQ0FBQzs7Z0NBQUE7Z0JBY0YsbUJBQUM7WUFBRCxDQUFDLEFBYkQsSUFhQztZQWJELHVDQWFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdydy1hcHAnLFxyXG4gICAgdGVtcGxhdGU6XHJcbmA8aDI+e3ttZXNzYWdlfX0ge3tjb3VudGVyfX08L2gyPlxyXG48YnV0dG9uIChjbGljayk9XCJpbmNyZW1lbnRDb3VudGVyKClcIj5JbmNyZW1lbnQ8L2J1dHRvbj5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuXHJcbiAgICBtZXNzYWdlID0gJ1RoaXMgaXMgbXkgbWVzc2FnZSAyMjInO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoZWxsbyEnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3VudGVyID0gMDtcclxuXHJcbiAgICBpbmNyZW1lbnRDb3VudGVyKCk6dm9pZCB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyKys7XHJcbiAgICB9XHJcbn1cclxuIl19