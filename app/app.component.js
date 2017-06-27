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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
require('rxjs/Rx');
var AppComponent = (function () {
    function AppComponent(router, http) {
        this.router = router;
        this.http = http;
        this.currentUrl = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (localStorage.getItem('token') !== null) {
                _this.isAuth = 'yes';
                _this.http.get('http://localhost/baza-it255/getUser.php?token=' + localStorage.getItem('token')).map(function (res) { return res.json(); }).share().subscribe(function (data) {
                    _this.user = data.data;
                    console.log(_this.user);
                });
                if (localStorage.getItem('admin') == '1') {
                    _this.isAdmin = 'yes';
                }
                else {
                    _this.isAdmin = 'no';
                }
            }
            else {
                _this.isAuth = 'no';
            }
        });
    };
    AppComponent.prototype.onLogout = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("admin");
        this.router.navigate(['./home']);
        if (localStorage.getItem('token') !== null) {
            this.isAuth = "yes";
        }
        else {
            this.isAuth = "no";
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: './template.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map