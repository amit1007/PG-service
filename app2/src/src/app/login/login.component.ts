import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  login:string;
  password:string;
  message:string;

  constructor() { 
    console.log("login page.")
  }

  onsubmitclick(ngform){
  //this.message="successfully login"
  if(ngform.vaild==true){
  if (this.checkloginandpassword(this.login,this.password)==true ){
    console.log("successfully login");
    this.message="successfully login"
  }
  else
  {
    console.log("not login")
    this.message="wrong login"
  }
}
}
private checkloginandpassword(login:string,password:string)
{
var u=JSON.parse(localStorage.users);
var found:boolean=false;
for(var i=0;i<u.length;i++){
if(u[i].login == login &&u[i].password==password)
{
  found=true;
}
return found;
}
}


}
