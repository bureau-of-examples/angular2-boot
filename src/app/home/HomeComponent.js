System.register(['angular2/core', 'angular2/router', './about/AboutComponent', './news/NewsComponent', './support/SupportComponent', './contact/ContactComponent', './docs/DocsComponent'], function(exports_1, context_1) {
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
    var core_1, router_1, AboutComponent_1, NewsComponent_1, SupportComponent_1, ContactComponent_1, DocsComponent_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (AboutComponent_1_1) {
                AboutComponent_1 = AboutComponent_1_1;
            },
            function (NewsComponent_1_1) {
                NewsComponent_1 = NewsComponent_1_1;
            },
            function (SupportComponent_1_1) {
                SupportComponent_1 = SupportComponent_1_1;
            },
            function (ContactComponent_1_1) {
                ContactComponent_1 = ContactComponent_1_1;
            },
            function (DocsComponent_1_1) {
                DocsComponent_1 = DocsComponent_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                    this.navLinks = [];
                    this.navLinks = [
                        { text: 'News', routeName: 'News' },
                        { text: 'Docs', routeName: 'Docs' },
                        { text: 'Support', routeName: 'Support' },
                        { text: 'Contact', routeName: 'Contact' },
                        { text: 'About', routeName: 'About' }
                    ];
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/home/HomeComponent.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/news', name: 'News', component: NewsComponent_1.NewsComponent, useAsDefault: true },
                        { path: '/support', name: 'Support', component: SupportComponent_1.SupportComponent },
                        { path: '/docs', name: 'Docs', component: DocsComponent_1.DocsComponent },
                        { path: '/contact', name: 'Contact', component: ContactComponent_1.ContactComponent },
                        { path: '/about', name: 'About', component: AboutComponent_1.AboutComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhvbWVDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBSUk7b0JBRkEsYUFBUSxHQUFvQixFQUFFLENBQUM7b0JBRzNCLElBQUksQ0FBQyxRQUFRLEdBQUc7d0JBQ1osRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUM7d0JBQ2pDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDO3dCQUNqQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQzt3QkFDdkMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUM7d0JBQ3ZDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO3FCQUN0QyxDQUFDO2dCQUNOLENBQUM7Z0JBdkJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsV0FBVyxFQUFFLCtCQUErQjt3QkFDNUMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2xDLENBQUM7b0JBQ0Qsb0JBQVcsQ0FBQzt3QkFDVCxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsNkJBQWEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDO3dCQUN6RSxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsbUNBQWdCLEVBQUM7d0JBQzlELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSw2QkFBYSxFQUFDO3dCQUNyRCxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsbUNBQWdCLEVBQUM7d0JBQzlELEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSwrQkFBYyxFQUFDO3FCQUMzRCxDQUFDOztpQ0FBQTtnQkFlRixvQkFBQztZQUFELENBQUMsQUFkRCxJQWNDO1lBZEQseUNBY0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XHJcbmltcG9ydCB7QWJvdXRDb21wb25lbnR9IGZyb20gJy4vYWJvdXQvQWJvdXRDb21wb25lbnQnO1xyXG5pbXBvcnQge05ld3NDb21wb25lbnR9IGZyb20gJy4vbmV3cy9OZXdzQ29tcG9uZW50JztcclxuaW1wb3J0IHtTdXBwb3J0Q29tcG9uZW50fSBmcm9tICcuL3N1cHBvcnQvU3VwcG9ydENvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29udGFjdENvbXBvbmVudH0gZnJvbSAnLi9jb250YWN0L0NvbnRhY3RDb21wb25lbnQnO1xyXG5pbXBvcnQge0RvY3NDb21wb25lbnR9IGZyb20gJy4vZG9jcy9Eb2NzQ29tcG9uZW50JztcclxuaW1wb3J0IHtMaW5rRGF0YU1vZGVsfSBmcm9tICcuLi9jb21tb24vTGlua0RhdGFNb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHAvaG9tZS9Ib21lQ29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5AUm91dGVDb25maWcoW1xyXG4gICAge3BhdGg6Jy9uZXdzJywgbmFtZTonTmV3cycsIGNvbXBvbmVudDogTmV3c0NvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlfSxcclxuICAgIHtwYXRoOicvc3VwcG9ydCcsIG5hbWU6J1N1cHBvcnQnLCBjb21wb25lbnQ6IFN1cHBvcnRDb21wb25lbnR9LFxyXG4gICAge3BhdGg6Jy9kb2NzJywgbmFtZTonRG9jcycsIGNvbXBvbmVudDogRG9jc0NvbXBvbmVudH0sXHJcbiAgICB7cGF0aDonL2NvbnRhY3QnLCBuYW1lOidDb250YWN0JywgY29tcG9uZW50OiBDb250YWN0Q29tcG9uZW50fSxcclxuICAgIHtwYXRoOicvYWJvdXQnLCBuYW1lOidBYm91dCcsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnR9XHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcclxuXHJcbiAgICBuYXZMaW5rczogTGlua0RhdGFNb2RlbFtdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5uYXZMaW5rcyA9IFtcclxuICAgICAgICAgICAge3RleHQ6ICdOZXdzJywgcm91dGVOYW1lOiAnTmV3cyd9LFxyXG4gICAgICAgICAgICB7dGV4dDogJ0RvY3MnLCByb3V0ZU5hbWU6ICdEb2NzJ30sXHJcbiAgICAgICAgICAgIHt0ZXh0OiAnU3VwcG9ydCcsIHJvdXRlTmFtZTogJ1N1cHBvcnQnfSxcclxuICAgICAgICAgICAge3RleHQ6ICdDb250YWN0Jywgcm91dGVOYW1lOiAnQ29udGFjdCd9LFxyXG4gICAgICAgICAgICB7dGV4dDogJ0Fib3V0Jywgcm91dGVOYW1lOiAnQWJvdXQnfVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==