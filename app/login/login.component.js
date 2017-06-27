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
var LoginComponent = (function () {
    function LoginComponent(http, router) {
        this.loginForm = new forms_1.FormGroup({
            username: new forms_1.FormControl(),
            password: new forms_1.FormControl()
        });
        this.http = http;
        this.router = router;
        if (localStorage.getItem('token') != null) {
            this.router.navigate(['']);
        }
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.data = 'username=' + this.loginForm.value.username + '&password=' + this.loginForm.value.password;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/baza-it255/login.php', this.data, { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (data) {
            var obj = JSON.parse(data['_body']);
            console.log(obj);
            localStorage.setItem('token', obj.token);
            localStorage.setItem('admin', obj.admin);
            _this.router.navigate(['/home']);
        }, function (err) {
            alert('Nepostojeci username ili password');
            var obj = JSON.parse(err._body);
            var element = document.getElementsByClassName('alert')[0];
            element.style.display = 'block';
            element.innerHTML = obj.error.split('\\r\\n').join('<br/>').split('\"').join('');
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: './login.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map