import { GitHubServiceService } from './../git-hub-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-get',
  templateUrl: './http-get.component.html',
  styleUrls: ['./http-get.component.css']
})
export class HttpGetComponent implements OnInit {

  // userName: string = "tektutorialshub"
  // baseURL: string = "https://api.github.com/";
  loading: boolean = false;
  errorMessage;
  repos: Repos[];
  constructor(private gitGubService: GitHubServiceService) { }

  ngOnInit() {
    this.getRepos()
  }

  public getRepos() {
    this.loading = true;
    this.gitGubService.getRepos().
    subscribe
    (response => {
      console.log(response);
      this.repos = response;
      this.loading = false;
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
