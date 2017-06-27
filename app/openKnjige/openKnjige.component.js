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
var OpenKnjigeComponent = (function () {
    function OpenKnjigeComponent(route, http, router) {
        this.http = http;
        this.router = router;
        this.route = route;
    }
    OpenKnjigeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe((function (event) {
            _this.http.get('http://localhost/baza-it255/getUser.php?token=' + localStorage.getItem('token')).map(function (res) { return res.json(); }).share().subscribe(function (data) {
                _this.user = data.data;
                console.log(_this.user);
            });
            if (localStorage.getItem('admin') == '1') {
                // alert("ovo je admin");
                _this.isAdmin = 'yes';
            }
            else {
                _this.isAdmin = 'no';
            }
        }));
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            var headers = new http_1.Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append("token", localStorage.getItem("token"));
            _this.http.get('http://localhost/baza-it255/getKnjiga.php?id=' + id, { headers: headers }).map(function (res) { return res.json(); }).share()
                .subscribe(function (data) {
                console.log(data);
                _this.data = data.data;
            }, function (err) {
                _this.router.navigate(['./']);
            });
        });
    };
    OpenKnjigeComponent.prototype.basket = function (id) {
        console.log(this.user.id);
        console.log("id je" + id);
    };
    OpenKnjigeComponent.prototype.addToBasket = function (id) {
        var _this = this;
        var data = "id_korisnik=" + this.user.id + "&id_knjiga=" + id;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/baza-it255/order.php', data, {
            headers: headers })
            .subscribe(function (data) {
            console.log(data["_body"]);
            if (data["_body"] == " ok[]") {
                _this.router.navigate(['/basket']);
            }
        }, function (err) {
            alert('All fields are required.');
            var obj = JSON.parse(err._body);
            alert(obj.error);
            // let element  = <HTMLElement> document.getElementsByClassName('alert')[0];
            // element.innerHTML = obj.error.split('\\r\\n').join('<br/>').split('\"').join('');
        });
    };
    OpenKnjigeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'knjige-component',
            templateUrl: './openKnjige.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, http_1.Http, router_1.Router])
    ], OpenKnjigeComponent);
    return OpenKnjigeComponent;
}());
exports.OpenKnjigeComponent = OpenKnjigeComponent;
//# sourceMappingURL=openKnjige.component.js.map