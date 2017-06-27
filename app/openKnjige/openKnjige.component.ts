import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Component({
  moduleId:module.id,
  selector: 'knjige-component',
  templateUrl: './openKnjige.html'
})

export class OpenKnjigeComponent {
  
    http: Http;
	router: Router;
	route: ActivatedRoute;
	user:Object;
	isAdmin: String;
	data: Object[];
	

constructor(route: ActivatedRoute, http: Http, router: Router) {
	this.http = http;
	this.router = router;
	this.route = route;
}

ngOnInit() {
	this.route.params.subscribe((event => {
          this.http.get('http://localhost/baza-it255/getUser.php?token=' + localStorage.getItem('token')).map(res => res.json()).share().subscribe(data => {
            this.user = data.data;
            console.log(this.user);
          })
        if(localStorage.getItem('admin') == '1') {

          // alert("ovo je admin");
          this.isAdmin = 'yes';
        }
        else {
          this.isAdmin = 'no';
          // alert('obo  nije admn');  
        }
      }
    ));
    this.route.params.subscribe((params: Params) => {
	let id = params['id'];
	let headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	headers.append("token",localStorage.getItem("token"));
	this.http.get('http://localhost/baza-it255/getKnjiga.php?id='+id,{headers:headers}).map(res => res.json()).share()
		.subscribe(data => {
  			console.log(data);
			this.data = data.data;
		},
		err => {
			 this.router.navigate(['./']);
		}
		);
	});
	}

	public basket(id:number) {
		console.log(this.user.id);
		console.log("id je" + id);
		
	}
addToBasket(id:number): void {
	var data = "id_korisnik=" + this.user.id + "&id_knjiga=" + id;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	this.http.post('http://localhost/baza-it255/order.php', data, {
		headers: headers })
	.subscribe(
		data => {
			console.log(data["_body"]);
			if (data["_body"] == " ok[]") {
				this.router.navigate(['/basket']);
			}}, 

			 err => {
                    alert('All fields are required.');
                    let obj = JSON.parse(err._body);
                    alert(obj.error);
                    // let element  = <HTMLElement> document.getElementsByClassName('alert')[0];
                    // element.innerHTML = obj.error.split('\\r\\n').join('<br/>').split('\"').join('');
              }
		
	);
	}
}

