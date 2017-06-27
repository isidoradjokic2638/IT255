import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';
import 'rxjs/Rx';

@Component({
	moduleId: module.id,
  selector: 'app-root',
  templateUrl: './template.html',

})

export class AppComponent {
  router: Router;
  user: Object;
  http: Http;
  isAuth: String;
  isAdmin: String;
  currentUrl : String;

constructor(router: Router, http: Http) {
  this.router = router;
  this.http = http;
  this.currentUrl = '';
}

ngOnInit() {
this.router.events.subscribe(event => {
if(localStorage.getItem('token') !== null){
        this.isAuth = 'yes';
        this.http.get('http://localhost/baza-it255/getUser.php?token=' + localStorage.getItem('token')).map(res => res.json()).share().subscribe(data => {
            this.user = data.data;
            console.log(this.user);
          });
        if(localStorage.getItem('admin') == '1') {
          this.isAdmin = 'yes';
        }
        else {

          this.isAdmin = 'no';
          // alert('obo  nije admn');  
        }
      }else {
        this.isAuth = 'no';
      }
    
    });
}

onLogout(): void {
  localStorage.removeItem("token");
  localStorage.removeItem("admin");
	this.router.navigate(['./home']);
	if(localStorage.getItem('token') !== null){
		this.isAuth = "yes";
	}else{
		this.isAuth = "no";
	}
	}
}