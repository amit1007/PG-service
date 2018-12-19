import { Component,  } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
name:string;
email:string;
password:string;
repassword:string;
//message:string;
isSuccessfullyRegistered:boolean=false;
shouldDispalyMessage:boolean=false;

onSignUpClick(){
  try
  {
  if (localStorage.users==null|| localStorage.users==undefined)
  {
    localStorage.users=JSON.stringify([]);
  }
  console.log(this.email+this.name+this.password+this.repassword)
 var u = JSON.parse(localStorage.users);
 console.log("print"+u);
 u.push({name:this.name,
  email:this.email,
  password:this.password,
  repassword:this.repassword,
  //message:this.message
})
localStorage.users=JSON.stringify(u);
//this.message="registered successfully";
this.isSuccessfullyRegistered=true;
this.shouldDispalyMessage=true;
}
catch(error)
{
  console.log(error);
  this.isSuccessfullyRegistered=false;
  this.shouldDispalyMessage=true;
}
}

}
