import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicationsComponent } from './publications/publications.component';
import { HomeComponent } from './home/home.component';
import { AddBookComponent } from './addBook/addBook.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { BrowseComponent } from './browse/browse.component';
import { CategoryComponent } from './category/category.component';
import { OpenKnjigeComponent } from './openKnjige/openKnjige.component';
import { DeleteBookComponent } from './deleteBook/deleteBook.component';
import { EditBookComponent } from './editBook/editBook.component';
import { ChangeBookComponent } from './changeBook/changeBook.component';
import { BasketComponent } from './basket/basket.component';

const appRoutes: Routes = [

{ path: '', redirectTo:'/home', pathMatch:'full'},
{ path: 'home', component: HomeComponent},
{ path: 'addBook', component: AddBookComponent},
{ path: 'publications', component: PublicationsComponent},
{ path: 'login', component: LoginComponent},
{ path: 'register', component: RegisterComponent},
{ path: 'about', component: AboutComponent},
{ path: 'browse', component: BrowseComponent},
{ path: 'category/:type', component: CategoryComponent},
{ path: 'openKnjige/:id', component: OpenKnjigeComponent},
{ path: 'changeBook/:id', component: ChangeBookComponent},
{ path: 'deleteBook', component: DeleteBookComponent},
{ path: 'editBook', component: EditBookComponent},
{ path: 'basket', component: BasketComponent}

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
