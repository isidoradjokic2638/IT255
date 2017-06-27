import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
    moduleId:module.id,
    selector: 'register',
    templateUrl: './register.html'
})

export class RegisterComponent {
    registerForm = new FormGroup({
        first: new FormControl(),
        last: new FormControl(),
        username: new FormControl(),
        password: new FormControl(),
        confirm: new FormControl(),
        country: new FormControl(),
        city: new FormControl(),
        email: new FormControl(),
        mobile: new FormControl()
    });
    http: Http;
    router: Router;
    data: string;

    constructor(http: Http,  router: Router) {
        this.http = http;
        this.router = router;
        if (localStorage.getItem('token') != null) {
            this.router.navigate(['']);
        }
    }

    register(): void {
        this.data = 'first=' + this.registerForm.value.first +'&last=' + this.registerForm.value.last + 
        '&username=' + this.registerForm.value.username + '&password=' + this.registerForm.value.password +
        '&confirm=' + this.registerForm.value.confirm + '&country=' + this.registerForm.value.country + 
        '&city=' + this.registerForm.value.city + '&email=' + this.registerForm.value.email + 
        '&mobile=' + this.registerForm.value.mobile;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        console.log(this.data);
        this.http.post('http://localhost/baza-it255/register.php', this.data, {headers: headers})
            .map(res => res)
            .subscribe( data => {
                    this.router.navigate(['/login']);
                },
                err => {
                    alert('Fill every field');
                    let obj = JSON.parse(err._body);
                    alert(obj.error);
                    // let element  = <HTMLElement> document.getElementsByClassName('alert')[0];
                    // element.innerHTML = obj.error.split('\\r\\n').join('<br/>').split('\"').join('');
                });
    }

}