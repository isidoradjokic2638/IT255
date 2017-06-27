"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var CategoryComponent = (function () {
    function CategoryComponent(route, http, router) {
        this.http = http;
        this.router = router;
        this.route = route;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var type = params['type'];
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append("token", localStorage.getItem("token"));
            _this.http.get('http://localhost/baza-it255/category.php?type=' + type, { headers: headers }).map(function (res) { return res.json(); }).share()
                .subscribe(function (data) {
                _this.data = data.data;
            }, function (err) {
                alert("brao");
                // this.router.navigate(['./']);
            });
        });
    };
    CategoryComponent.prototype.openKnjige = function (id) {
        this.router.navigateByUrl('/openKnjige/' + id);
    };
    CategoryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'category-component',
            templateUrl: './category.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, http_1.Http, router_1.Router])
    ], CategoryComponent);
    return CategoryComponent;
}());
exports.CategoryComponent = CategoryComponent;
//# sourceMappingURL=category.component.js.map