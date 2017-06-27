import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'basket',
	templateUrl: './basket.html',
})
export class BasketComponent {
	private data: Object[];
	private router: Router;
	user: Object;


 constructor(private http: Http, router: Router) {
	this.router = router;
    let headers = new Headers();
 	 this.http.get('http://localhost/baza-it255/getUser.php?token=' + localStorage.getItem('token')).map(res => res.json()).share().subscribe(data => {
            this.user = data.data;
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));
             this.http.get('http://localhost/baza-it255/basket.php?id=' + this.user.id)
        .map(res => res.json()).share()
        .subscribe(data => {
        	console.log(data);
              this.data = data;
            },
            err => {
              this.router.navigate(['./']);
            });

          });

   }
    public deleteOrder(event: Event, id: Number) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));
    this.http.get('http://localhost/baza-it255/deleteOrder.php?id='+id)
    .subscribe( data => {
      console.log(data);
      event.srcElement.parentElement.parentElement.remove();
    });
  }
}