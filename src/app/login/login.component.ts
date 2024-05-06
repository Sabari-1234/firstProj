import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   hide = true;
  regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[\W_])[A-za-z\d\W_]{8,}$/
  errormsg = ""
  emailerrormsg = ""
  errorvalue: boolean = false
  emailerrorvalue: boolean = false
  emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  buttonVisible = () => this.errorvalue && this.emailerrorvalue;

   onChangeEmail(event:any){
    this.emailerrorvalue = false
    event.target.value = event.target.value.replace(/\s/g, '');
    if(!this.emailRegex.test(event.target.value)){
        this.emailerrormsg = "Invalid email format"
    }
    else{
        this.emailerrorvalue = true
    }
   }

   onChangePasswd(event:any){
    this.errorvalue = false
    event.target.value = event.target.value.replace(/\s/g, '');
    console.log(event.target.value.length)
    if(event.target.value.length < 8){
      this.errormsg = "*Password atleast 8 characters"
    }
    else{
      if(!this.regex.test(event.target.value)){
        this.errormsg = "*Password must conatin atleat one caps and special chars"
      }
      else{
        this.errorvalue= true
      }
    }
   }

   onClick = () =>{
    alert("Login validating...")
   }

   onMouseOvered(){
    console.log("Mouse over...")
   }
   onKeyPressed(){
    console.log("Key pressed...")
   }
   keyDown(){
    console.log("KeyDown pressed...")
   }

   tests = "jndj"
}