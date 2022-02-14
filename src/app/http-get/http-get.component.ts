import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-get',
  templateUrl: './http-get.component.html',
  styleUrls: ['./http-get.component.css']
})
export class HttpGetComponent implements OnInit {

  userName: string = "tektutorialshub"
  baseURL: string = "https://api.github.com/";
  repos: Repos[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getRepos()
  }

  public getRepos() {
    this.http.get<Repos[]>(this.baseURL+ 'users/' + this.userName + '/repos').
    subscribe
    (response => {
      console.log(response);
      this.repos = response;
    },
    (error)=> {
      console.error('Request failed with error')
      alert(error);
    },
    () => {    console.error('http get got completed')})
  }
}

export class Repos {
  id: string;
  name: string;
  html_url: string;
  description: string;
}
