import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';

  constructor( private router: Router,public auth:AuthService) {}

  login() {
  // const adminUsername = 'Adithya';
  // const  adminPassword = '123'
  // console.log(this.username,this.password)
  //  if(this.username==adminUsername && this.password == adminPassword){
  //   this.router.navigate(['/admin-dashboard'])
  //  }else{
  //       alert('You do not have admin access')
  //  }
this.auth.adminLogin(this.username,this.password).subscribe({
  next :(res) =>{
    this.router.navigate(['/admin-dashboard']);
    
  },
  error : (er) => {
    alert("Invalid credentials");
  }
  
})
      
}
}
