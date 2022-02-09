import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isloggedIn: boolean =false;
  public userName:string;
  constructor() {
    this.isloggedIn=false;
   }

   login(username: string, password:string) {

    //Assuming users are provided the correct credentials.
    //In real app you will query the database to verify.

            this.isloggedIn=true;
            this.userName= username
            alert("user logged in successfully");

    return this.isloggedIn
   // this.userName=username;

}
}
