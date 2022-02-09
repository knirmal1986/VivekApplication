import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { LoginComponent } from './login/login.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuardService } from './auth-guard.service';


const routesObj: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent , canActivate:[AuthGuardService]},
  { path: 'product', component: ProductComponent ,
    children:[
      { path: 'detail/:id', component: ProductdetailComponent },
    ]
   },
   { path: 'templateForms', component: TemplateFormsComponent },
  { path: '', redirectTo: 'login', pathMatch:'full' },
  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routesObj)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
