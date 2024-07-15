import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  passwordsMatching = false;
  iscpasswordDirty = false;
  cpasswordClass = 'form-control';
    signup = {username:'',password:'',cpassword:'',email:''}
  signUp(){


alert('Submitted Successfully')

  }
  
  checkPasswords(pw: string, cpw: string) {
    this.iscpasswordDirty = true;
    if (pw == cpw) {
      this.passwordsMatching = true;
      this.cpasswordClass = 'form-control is-valid';
    } else {
      this.passwordsMatching = false;
      this.cpasswordClass = 'form-control is-invalid';
    }
  }
}

 
    
  
