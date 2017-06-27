import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'ChangeBookComponent',
	templateUrl: './changeBook.html',
})
export class ChangeBookComponent {
	http: Http;
	data: any;
	router: Router;
	route: ActivatedRoute;
	postResponse: String;
	id: number;
	changeBookForm = new FormGroup({
	name: new FormControl(),
	author: new FormControl(),
	price: new FormControl(),
	about: new FormControl(),
	type: new FormControl()
});
constructor(http: Http, router: Router, route: ActivatedRoute) {
	this.http = http;
	this.router = router;
	this.route=route;


} 
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.id=id;
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('token',localStorage.getItem('token'));
      console.log(headers);
      this.http.get('http://localhost/baza-it255/getKnjiga.php?id='+id, {headers: headers}).map(res => res.json()).share()
        .subscribe(data => {
            this.data = data.data;
            this.changeBookForm.controls['name'].setValue(this.data.name);
            this.changeBookForm.controls['author'].setValue(this.data.author);
            this.changeBookForm.controls['price'].setValue(this.data.price);
            this.changeBookForm.controls['about'].setValue(this.data.about);
            this.changeBookForm.controls['type'].setValue(this.data.type);
          },
          err => {
            //this._router.navigate(['']);
          }
        );
    });
  
  }
changeBook(): void {
	this.route.params.subscribe((params: Params) => { 
	var data ="id=" + params['id'] + "&name=" + this.changeBookForm.value.name + "&author=" +
	 this.changeBookForm.value.author + "&price=" +
	this.changeBookForm.value.price + "&about=" + this.changeBookForm.value.about + "&type=" + this.changeBookForm.value.type;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	this.http.post('http://localhost/baza-it255/changeBook.php', data, {
		headers: headers })
	.subscribe(
		data => {
			console.log(data["_body"]);
			if (data["_body"] ==" ") {
				this.router.navigate(['/editBook']);
			}
		});
   });
}


}