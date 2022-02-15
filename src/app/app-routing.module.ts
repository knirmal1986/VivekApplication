import { HttpPostExComponent } from './http-post-ex/http-post-ex.component';
import { HttpGetComponent } from './http-get/http-get.component';
import { HTTPModuleComponent } from './httpmodule/httpmodule.component';
import { BoostrapComponent } from './boostrap/boostrap.component';
import { EmployeeModule } from './employee/employee.module';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
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
import { AdminAuthGuardService } from './admin-guard.service';


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
   { path: 'reactiveForms', component: ReactiveFormsComponent },
   { path: 'httpex', component: HTTPModuleComponent,
   children:[
    { path: 'get', component: HttpGetComponent },
    { path: 'post', component: HttpPostExComponent },
  ] },
   { path: 'boostrap', component: BoostrapComponent },
   { path: 'employee', loadChildren:() => import('./employee/employee.module').then(m=>m.EmployeeModule),
  canLoad:[AdminAuthGuardService] },
  { path: '', redirectTo: 'login', pathMatch:'full' },
  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routesObj)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
