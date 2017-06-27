import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'DeleteBookComponent',
	templateUrl: './deleteBook.html',
})
export class DeleteBookComponent {
	http: Http;
	router: Router;
	postResponse: String;
	deleteBookForm = new FormGroup({
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
	
}
