import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Component({
  moduleId:module.id,
  selector: 'category-component',
  templateUrl: './category.html'
})

export class CategoryComponent {
  
    http: Http;
	router: Router;
	route: ActivatedRoute;
	data: Object[];
	
constructor(route: ActivatedRoute, http: Http, router: Router) {
	this.http = http;
	this.router = router;
	this.route = route;
}
	
ngOnInit() {
	this.route.params.subscribe((params: Params) => {
	let type = params['type'];
	let headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	headers.append("token",localStorage.getItem("token"));
	this.http.get('http://localhost/baza-it255/category.php?type='+type,{headers:headers}).map(res => res.json()).share()
		.subscribe(data => {
			this.data = data.data;
		},
		err => {
			alert("brao");
			// this.router.navigate(['./']);
		}
		);
	});
	}

public openKnjige(id: number) {
    this.router.navigateByUrl('/openKnjige/' + id);
  }
	}