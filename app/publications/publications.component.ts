import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'publications',
	templateUrl: './publications.html',
})
export class PublicationsComponent {
	private data: Object[];
	private router: Router;

 constructor(private http: Http, router: Router) {
    this.router = router;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));
    http.get('http://localhost/baza-it255/prikaz.php')
        .map(res => res.json()).share()
        .subscribe(data => {
        	console.log(data);
              this.data = data;
            },
            err => {
              this.router.navigate(['./']);
            }
        );

}
public openKnjige(id: number) {
    console.log("asd" + id);
    this.router.navigateByUrl('/openKnjige/' + id);
  }


}
