import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Repos {
  id: string = '';
  name: string = '';
  html_url: string= '';
  description: string = '';
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userName: string = "medic";
  baseURL: string = "https://api.github.com/";
  repos: Repos[]= [];

  constructor(private http:HttpClient){

  }

  ngOnInit(){
      this.getRepos();
  }

  public getRepos() {
    return this.http.get<Repos[]>(this.baseURL+'users/' + this.userName + '/repos')
    .subscribe(
      (response) => {
        console.log('Response Received');
        console.log(response);
        this.repos = response;

      },
      (error) => {
        console.error("Request Failed");
        alert('error')
      },
      ()=> {
        console.log("Request completed");
      }
    )
  }
}
