import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
   
   
  constructor(private router:Router,private dialogRef:DialogRef<LogoutComponent>) {}

  logout(){
    this.dialogRef.close()
    this.router.navigate(['/login']);
  }
  cancel(){
    this.dialogRef.close();
  }
}
