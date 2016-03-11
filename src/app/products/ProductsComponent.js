System.register(['angular2/core', './ProductCategoriesComponent', 'angular2/router', './phone/SearchComponent', './offer/SearchComponent', './computer/SearchComponent'], function(exports_1, context_1) {
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
    var core_1, ProductCategoriesComponent_1, router_1, SearchComponent_1, SearchComponent_2, SearchComponent_3;
    var ProductsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ProductCategoriesComponent_1_1) {
                ProductCategoriesComponent_1 = ProductCategoriesComponent_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (SearchComponent_1_1) {
                SearchComponent_1 = SearchComponent_1_1;
            },
            function (SearchComponent_2_1) {
                SearchComponent_2 = SearchComponent_2_1;
            },
            function (SearchComponent_3_1) {
                SearchComponent_3 = SearchComponent_3_1;
            }],
        execute: function() {
            ProductsComponent = (function () {
                function ProductsComponent() {
                }
                ProductsComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/products/ProductsComponent.html',
                        directives: [ProductCategoriesComponent_1.ProductCategoriesComponent, router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/phone', name: 'PhoneSearch', component: SearchComponent_1.SearchComponent },
                        { path: '/offer', name: 'OfferSearch', component: SearchComponent_2.SearchComponent, useAsDefault: true },
                        { path: '/computer', name: 'ComputerSearch', component: SearchComponent_3.SearchComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], ProductsComponent);
                return ProductsComponent;
            }());
            exports_1("ProductsComponent", ProductsComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdHNDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQcm9kdWN0c0NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlCQTtnQkFBQTtnQkFDQSxDQUFDO2dCQVZEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsV0FBVyxFQUFFLHVDQUF1Qzt3QkFDcEQsVUFBVSxFQUFFLENBQUMsdURBQTBCLEVBQUUsMEJBQWlCLENBQUM7cUJBQzlELENBQUM7b0JBQ0Qsb0JBQVcsQ0FBQzt3QkFDVCxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsaUNBQW9CLEVBQUM7d0JBQ3RFLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxpQ0FBb0IsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDO3dCQUMxRixFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxpQ0FBdUIsRUFBQztxQkFDbEYsQ0FBQzs7cUNBQUE7Z0JBRUYsd0JBQUM7WUFBRCxDQUFDLEFBREQsSUFDQztZQURELGlEQUNDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCB9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge1Byb2R1Y3RDYXRlZ29yaWVzQ29tcG9uZW50fSBmcm9tICcuL1Byb2R1Y3RDYXRlZ29yaWVzQ29tcG9uZW50JztcclxuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7U2VhcmNoQ29tcG9uZW50IGFzIFBob25lU2VhcmNoQ29tcG9uZW50fSBmcm9tICcuL3Bob25lL1NlYXJjaENvbXBvbmVudCc7XHJcbmltcG9ydCB7U2VhcmNoQ29tcG9uZW50IGFzIE9mZmVyU2VhcmNoQ29tcG9uZW50fSBmcm9tICcuL29mZmVyL1NlYXJjaENvbXBvbmVudCc7XHJcbmltcG9ydCB7U2VhcmNoQ29tcG9uZW50IGFzIENvbXB1dGVyU2VhcmNoQ29tcG9uZW50fSBmcm9tICcuL2NvbXB1dGVyL1NlYXJjaENvbXBvbmVudCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwL3Byb2R1Y3RzL1Byb2R1Y3RzQ29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1Byb2R1Y3RDYXRlZ29yaWVzQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHtwYXRoOiAnL3Bob25lJywgbmFtZTogJ1Bob25lU2VhcmNoJywgY29tcG9uZW50OiBQaG9uZVNlYXJjaENvbXBvbmVudH0sXHJcbiAgICB7cGF0aDogJy9vZmZlcicsIG5hbWU6ICdPZmZlclNlYXJjaCcsIGNvbXBvbmVudDogT2ZmZXJTZWFyY2hDb21wb25lbnQsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXHJcbiAgICB7cGF0aDogJy9jb21wdXRlcicsIG5hbWU6ICdDb21wdXRlclNlYXJjaCcsIGNvbXBvbmVudDogQ29tcHV0ZXJTZWFyY2hDb21wb25lbnR9XHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0c0NvbXBvbmVudCB7XHJcbn1cclxuIl19