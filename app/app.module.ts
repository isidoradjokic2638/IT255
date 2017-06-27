import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routes';

import { HomeComponent } from './home/home.component';
import { AddBookComponent } from './addBook/addBook.component';
import { PublicationsComponent } from './publications/publications.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';import { AboutComponent } from './about/about.component';
import { BrowseComponent } from './browse/browse.component';
import { CategoryComponent } from './category/category.component';
import { OpenKnjigeComponent } from './openKnjige/openKnjige.component';
import { DeleteBookComponent } from './deleteBook/deleteBook.component';
import { EditBookComponent } from './editBook/editBook.component';
import { ChangeBookComponent } from './changeBook/changeBook.component';
import { BasketComponent } from './basket/basket.component';

@NgModule({
imports: [ BrowserModule, HttpModule, routing, FormsModule, ReactiveFormsModule ],
declarations: [ AppComponent, HomeComponent, AboutComponent, AddBookComponent,
PublicationsComponent, LoginComponent, RegisterComponent,  BrowseComponent,
CategoryComponent, OpenKnjigeComponent, DeleteBookComponent, EditBookComponent, ChangeBookComponent,
BasketComponent],
bootstrap: [ AppComponent ]
})
export class AppModule { }
