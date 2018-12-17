import { Injectable,Inject } from '@angular/core';
import {HttpClient}from '@angular/common/http'
@Injectable()
export class LogoutService {

  logoutStatus:boolean=false;
  constructor(@Inject(HttpClient)private http :HttpClient) { }
  public checkloginandpassword(login:string,password:string)
  {
  // var u=JSON.parse(localStorage.users);
  // var found:boolean=false;
  // for(var i=0;i<u.length;i++){
  // if(u[i].login == login &&u[i].password==password)
  // {
  //   found=true;
  // }
  // return found;
  // }
    var loginParams={login:login,password:password};
    this.http.post('/checkloginandpassword',login ,{responseType:"text"})
    .subscribe(function(response)
    {
      
      console.log("success"),
      function(error)
      {
        console.log(error)
      }
    })
  }
  
}
