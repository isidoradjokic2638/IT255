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
var ChangeBookComponent = (function () {
    function ChangeBookComponent(http, router, route) {
        this.changeBookForm = new forms_1.FormGroup({
            name: new forms_1.FormControl(),
            author: new forms_1.FormControl(),
            price: new forms_1.FormControl(),
            about: new forms_1.FormControl(),
            type: new forms_1.FormControl()
        });
        this.http = http;
        this.router = router;
        this.route = route;
    }
    ChangeBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.id = id;
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('token', localStorage.getItem('token'));
            console.log(headers);
            _this.http.get('http://localhost/baza-it255/getKnjiga.php?id=' + id, { headers: headers }).map(function (res) { return res.json(); }).share()
                .subscribe(function (data) {
                _this.data = data.data;
                _this.changeBookForm.controls['name'].setValue(_this.data.name);
                _this.changeBookForm.controls['author'].setValue(_this.data.author);
                _this.changeBookForm.controls['price'].setValue(_this.data.price);
                _this.changeBookForm.controls['about'].setValue(_this.data.about);
                _this.changeBookForm.controls['type'].setValue(_this.data.type);
            }, function (err) {
                //this._router.navigate(['']);
            });
        });
    };
    ChangeBookComponent.prototype.changeBook = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var data = "id=" + params['id'] + "&name=" + _this.changeBookForm.value.name + "&author=" +
                _this.changeBookForm.value.author + "&price=" +
                _this.changeBookForm.value.price + "&about=" + _this.changeBookForm.value.about + "&type=" + _this.changeBookForm.value.type;
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            _this.http.post('http://localhost/baza-it255/changeBook.php', data, {
                headers: headers })
                .subscribe(function (data) {
                console.log(data["_body"]);
                if (data["_body"] == " ") {
                    _this.router.navigate(['/editBook']);
                }
            });
        });
    };
    ChangeBookComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ChangeBookComponent',
            templateUrl: './changeBook.html',
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, router_1.ActivatedRoute])
    ], ChangeBookComponent);
    return ChangeBookComponent;
}());
exports.ChangeBookComponent = ChangeBookComponent;
//# sourceMappingURL=changeBook.component.js.map