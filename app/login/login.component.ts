import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
    moduleId:module.id,
    selector: 'login',
    templateUrl: './login.html'
})

export class LoginComponent {
    loginForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
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

    login(): void {
   this.data = 'username=' + this.loginForm.value.username + '&password=' + this.loginForm.value.password;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/baza-it255/login.php', this.data, {headers: headers})
            .map(res => res)
            .subscribe( data => {
                    let obj = JSON.parse(data['_body']);
                    console.log(obj);
                    localStorage.setItem('token', obj.token);
                    localStorage.setItem('admin', obj.admin);
                    this.router.navigate(['/home']);
                },
                err => {
                    alert('Nepostojeci username ili password');
                    let obj = JSON.parse(err._body);
                    let element = <HTMLElement>document.getElementsByClassName('alert')[0];
                    element.style.display = 'block';
                    element.innerHTML = obj.error.split('\\r\\n').join('<br/>').split('\"').join('');
                }
            );
    }

}