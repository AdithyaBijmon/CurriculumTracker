import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminInputComponent } from '../admin-input/admin-input.component';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 constructor(private dialog: MatDialog){}
 add(){
  this.dialog.open(AdminInputComponent)
 }
 logout(){
  this.dialog.open(LogoutComponent)
 }
}
