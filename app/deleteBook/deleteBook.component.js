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
var DeleteBookComponent = (function () {
    function DeleteBookComponent(http, router) {
        this.deleteBookForm = new forms_1.FormGroup({
            name: new forms_1.FormControl(),
            author: new forms_1.FormControl(),
            price: new forms_1.FormControl(),
            about: new forms_1.FormControl(),
            type: new forms_1.FormControl()
        });
        this.http = http;
        this.router = router;
    }
    DeleteBookComponent.prototype.onAddBook = function () {
    };
    DeleteBookComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'DeleteBookComponent',
            templateUrl: './deleteBook.html',
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], DeleteBookComponent);
    return DeleteBookComponent;
}());
exports.DeleteBookComponent = DeleteBookComponent;
//# sourceMappingURL=deleteBook.component.js.map