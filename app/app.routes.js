"use strict";
var router_1 = require('@angular/router');
var publications_component_1 = require('./publications/publications.component');
var home_component_1 = require('./home/home.component');
var addBook_component_1 = require('./addBook/addBook.component');
var login_component_1 = require('./login/login.component');
var register_component_1 = require('./register/register.component');
var about_component_1 = require('./about/about.component');
var browse_component_1 = require('./browse/browse.component');
var category_component_1 = require('./category/category.component');
var openKnjige_component_1 = require('./openKnjige/openKnjige.component');
var deleteBook_component_1 = require('./deleteBook/deleteBook.component');
var editBook_component_1 = require('./editBook/editBook.component');
var changeBook_component_1 = require('./changeBook/changeBook.component');
var basket_component_1 = require('./basket/basket.component');
var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'addBook', component: addBook_component_1.AddBookComponent },
    { path: 'publications', component: publications_component_1.PublicationsComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'browse', component: browse_component_1.BrowseComponent },
    { path: 'category/:type', component: category_component_1.CategoryComponent },
    { path: 'openKnjige/:id', component: openKnjige_component_1.OpenKnjigeComponent },
    { path: 'changeBook/:id', component: changeBook_component_1.ChangeBookComponent },
    { path: 'deleteBook', component: deleteBook_component_1.DeleteBookComponent },
    { path: 'editBook', component: editBook_component_1.EditBookComponent },
    { path: 'basket', component: basket_component_1.BasketComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map