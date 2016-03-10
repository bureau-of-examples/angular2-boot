///<reference path="../../typings/browser.d.ts" />
System.register(['angular2/core', 'angular2/router', 'angular2/platform/browser', './home/HomeComponent', './products/ProductsComponent', './contact/ContactComponent'], function(exports_1, context_1) {
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
    var core_1, router_1, browser_1, HomeComponent_1, ProductsComponent_1, ContactComponent_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (HomeComponent_1_1) {
                HomeComponent_1 = HomeComponent_1_1;
            },
            function (ProductsComponent_1_1) {
                ProductsComponent_1 = ProductsComponent_1_1;
            },
            function (ContactComponent_1_1) {
                ContactComponent_1 = ContactComponent_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent(location, elementRef) {
                    this.location = location;
                    this.elementRef = elementRef;
                    this.message = 'Angular2 starter project';
                    this.counter = 0;
                    console.log('MainComponent.constructor');
                }
                MainComponent.prototype.ngAfterViewInit = function () {
                    //console.log(this.elementRef.nativeElement);
                    //new Foundation.Tabs($(this.elementRef.nativeElement).find('.tabs'));
                };
                MainComponent.prototype.incrementCounter = function () {
                    this.counter++;
                };
                MainComponent.prototype.pathStartWith = function (portion) {
                    return this.location.path().startsWith(portion);
                };
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'ab-main',
                        templateUrl: './app/main.component.html',
                        providers: [],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: HomeComponent_1.HomeComponent, useAsDefault: true },
                        { path: '/products', name: 'Products', component: ProductsComponent_1.ProductsComponent },
                        { path: '/contact', name: 'Contact', component: ContactComponent_1.ContactComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Location, core_1.ElementRef])
                ], MainComponent);
                return MainComponent;
            }());
            exports_1("MainComponent", MainComponent);
            browser_1.bootstrap(MainComponent, [
                router_1.ROUTER_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrREFBa0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW9DbEQ7Z0JBS0ksdUJBQ1ksUUFBa0IsRUFDbEIsVUFBc0I7b0JBRHRCLGFBQVEsR0FBUixRQUFRLENBQVU7b0JBQ2xCLGVBQVUsR0FBVixVQUFVLENBQVk7b0JBTGxDLFlBQU8sR0FBRywwQkFBMEIsQ0FBQztvQkFDckMsWUFBTyxHQUFHLENBQUMsQ0FBQztvQkFNUixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBRUQsdUNBQWUsR0FBZjtvQkFDSSw2Q0FBNkM7b0JBQzdDLHNFQUFzRTtnQkFDMUUsQ0FBQztnQkFFRCx3Q0FBZ0IsR0FBaEI7b0JBQ0ksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNuQixDQUFDO2dCQUVELHFDQUFhLEdBQWIsVUFBYyxPQUFnQjtvQkFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNwRCxDQUFDO2dCQWxDTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxTQUFTO3dCQUNuQixXQUFXLEVBQUUsMkJBQTJCO3dCQUN4QyxTQUFTLEVBQUUsRUFBRTt3QkFDYixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztxQkFDbEMsQ0FBQztvQkFDRCxvQkFBVyxDQUFDO3dCQUNULEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw2QkFBYSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQzFFLEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxxQ0FBaUIsRUFBQzt3QkFDbEUsRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG1DQUFnQixFQUFDO3FCQUNsRSxDQUFDOztpQ0FBQTtnQkF5QkYsb0JBQUM7WUFBRCxDQUFDLEFBeEJELElBd0JDO1lBeEJELHlDQXdCQyxDQUFBO1lBR0QsbUJBQVMsQ0FBTSxhQUFhLEVBQUU7Z0JBQzFCLHlCQUFnQjthQUNuQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy88cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiIC8+XHJcblxyXG5pbXBvcnQge1xyXG4gICAgICAgIENvbXBvbmVudCxcclxuICAgICAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgICAgIEVsZW1lbnRSZWZcclxufSAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gICAgICAgIFJPVVRFUl9QUk9WSURFUlMsXHJcbiAgICAgICAgUm91dGVDb25maWcsXHJcbiAgICAgICAgUk9VVEVSX0RJUkVDVElWRVMsXHJcbiAgICAgICAgTG9jYXRpb25cclxufSAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge2Jvb3RzdHJhcH0gICAgICAgICAgZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XHJcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gICAgICBmcm9tICcuL2hvbWUvSG9tZUNvbXBvbmVudCc7XHJcbmltcG9ydCB7UHJvZHVjdHNDb21wb25lbnR9ICBmcm9tICcuL3Byb2R1Y3RzL1Byb2R1Y3RzQ29tcG9uZW50JztcclxuaW1wb3J0IHtDb250YWN0Q29tcG9uZW50fSAgIGZyb20gJy4vY29udGFjdC9Db250YWN0Q29tcG9uZW50JztcclxuXHJcbmRlY2xhcmUgZnVuY3Rpb24gJChlbGVtZW50OiBhbnkpOiBhbnk7XHJcbmRlY2xhcmUgbW9kdWxlIEZvdW5kYXRpb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFRhYnMge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGVsZW0gOiBhbnkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWItbWFpbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwL21haW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHtwYXRoOicvaG9tZScsIG5hbWU6ICdIb21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxyXG4gICAge3BhdGg6Jy9wcm9kdWN0cycsIG5hbWU6ICdQcm9kdWN0cycsIGNvbXBvbmVudDogUHJvZHVjdHNDb21wb25lbnR9LFxyXG4gICAge3BhdGg6Jy9jb250YWN0JywgbmFtZTogJ0NvbnRhY3QnLCBjb21wb25lbnQ6IENvbnRhY3RDb21wb25lbnR9XHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gICAgbWVzc2FnZSA9ICdBbmd1bGFyMiBzdGFydGVyIHByb2plY3QnO1xyXG4gICAgY291bnRlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXHJcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmXHJcbiAgICApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTWFpbkNvbXBvbmVudC5jb25zdHJ1Y3RvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICAvL25ldyBGb3VuZGF0aW9uLlRhYnMoJCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZmluZCgnLnRhYnMnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5jcmVtZW50Q291bnRlcigpOnZvaWQge1xyXG4gICAgICAgIHRoaXMuY291bnRlcisrO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdGhTdGFydFdpdGgocG9ydGlvbiA6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2F0aW9uLnBhdGgoKS5zdGFydHNXaXRoKHBvcnRpb24pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuYm9vdHN0cmFwKDxhbnk+TWFpbkNvbXBvbmVudCwgW1xyXG4gICAgUk9VVEVSX1BST1ZJREVSU1xyXG5dKTtcclxuIl19