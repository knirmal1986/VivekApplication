import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskaddComponent } from './taskadd/taskadd.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ObservableExComponent } from './observable-ex/observable-ex.component';
import { SubjectexComponent } from './subjectex/subjectex.component';
import { ProductComponent } from './product/product.component'
import { ProductserviceService } from './product/productservice.service';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,
    TaskaddComponent,
    ParentComponent,
    ChildComponent,
    ObservableExComponent,
    SubjectexComponent,
    ProductComponent,
    HomeComponent,
    ContactComponent,
    ErrorComponent,
    ProductdetailComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
