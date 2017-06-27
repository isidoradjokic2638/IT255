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
var AddBookComponent = (function () {
    function AddBookComponent(http, router) {
        this.addBookForm = new forms_1.FormGroup({
            name: new forms_1.FormControl(),
            author: new forms_1.FormControl(),
            price: new forms_1.FormControl(),
            about: new forms_1.FormControl(),
            type: new forms_1.FormControl()
        });
        this.http = http;
        this.router = router;
    }
    AddBookComponent.prototype.onAddBook = function () {
        var _this = this;
        var data = "name=" + this.addBookForm.value.name + "&author=" + this.addBookForm.value.author + "&price=" +
            this.addBookForm.value.price + "&about=" + this.addBookForm.value.about + "&type=" + this.addBookForm.value.type;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/baza-it255/addBook.php', data, {
            headers: headers })
            .subscribe(function (data) {
            console.log(data["_body"]);
            if (data["_body"] == " ok[]") {
                _this.router.navigate(['/editBook']);
            }
        }, function (err) {
            alert('All fields are required.');
            var obj = JSON.parse(err._body);
            alert(obj.error);
            // let element  = <HTMLElement> document.getElementsByClassName('alert')[0];
            // element.innerHTML = obj.error.split('\\r\\n').join('<br/>').split('\"').join('');
        });
    };
    AddBookComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'AddBookComponent',
            templateUrl: './addBook.html',
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], AddBookComponent);
    return AddBookComponent;
}());
exports.AddBookComponent = AddBookComponent;
//# sourceMappingURL=addBook.component.js.map