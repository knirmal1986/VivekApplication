import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidCredentialMsg: string;
  username:string;
  password:string;
  isUserLogged: boolean=false
  constructor(private authService: AuthService,
    private router:Router) {

}

  ngOnInit() {
  }

  onFormSubmit(){
    console.log(this.username);
    console.log(this.password);
    this.isUserLogged = this.authService.login(this.username,this.password)
    if(this.isUserLogged)
        this.router.navigate(['product'])
    else
       alert("user not logged in successfully")
  }
}
