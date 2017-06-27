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
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var router_1 = require('@angular/router');
var RegisterComponent = (function () {
    function RegisterComponent(http, router) {
        this.registerForm = new forms_1.FormGroup({
            first: new forms_1.FormControl(),
            last: new forms_1.FormControl(),
            username: new forms_1.FormControl(),
            password: new forms_1.FormControl(),
            confirm: new forms_1.FormControl(),
            country: new forms_1.FormControl(),
            city: new forms_1.FormControl(),
            email: new forms_1.FormControl(),
            mobile: new forms_1.FormControl()
        });
        this.http = http;
        this.router = router;
        if (localStorage.getItem('token') != null) {
            this.router.navigate(['']);
        }
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.data = 'first=' + this.registerForm.value.first + '&last=' + this.registerForm.value.last +
            '&username=' + this.registerForm.value.username + '&password=' + this.registerForm.value.password +
            '&confirm=' + this.registerForm.value.confirm + '&country=' + this.registerForm.value.country +
            '&city=' + this.registerForm.value.city + '&email=' + this.registerForm.value.email +
            '&mobile=' + this.registerForm.value.mobile;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        console.log(this.data);
        this.http.post('http://localhost/baza-it255/register.php', this.data, { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (data) {
            _this.router.navigate(['/login']);
        }, function (err) {
            alert('Fill every field');
            var obj = JSON.parse(err._body);
            alert(obj.error);
            // let element  = <HTMLElement> document.getElementsByClassName('alert')[0];
            // element.innerHTML = obj.error.split('\\r\\n').join('<br/>').split('\"').join('');
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register',
            templateUrl: './register.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map