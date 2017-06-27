import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'AddBookComponent',
	templateUrl: './addBook.html',
})
export class AddBookComponent {
	http: Http;
	router: Router;
	postResponse: String;
	addBookForm = new FormGroup({
	name: new FormControl(),
	author: new FormControl(),
	price: new FormControl(),
	about: new FormControl(),
	type: new FormControl()
});
constructor(http: Http, router: Router) {
	this.http = http;
	this.router = router;

}
onAddBook(): void {
	var data = "name=" + this.addBookForm.value.name + "&author=" + this.addBookForm.value.author + "&price=" +
	this.addBookForm.value.price + "&about=" + this.addBookForm.value.about + "&type=" + this.addBookForm.value.type;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	this.http.post('http://localhost/baza-it255/addBook.php', data, {
		headers: headers })
	.subscribe(
		data => {
			console.log(data["_body"]);
			if (data["_body"] ==" ok[]") {
				this.router.navigate(['/editBook']);
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
