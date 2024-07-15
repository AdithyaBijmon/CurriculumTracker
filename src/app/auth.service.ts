import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}

  adminLogin(username: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/admin-login`, { username, password });
  }
  // addInput(item:InputModel){
  //   console.log(item);
  //   return this.http.post('http://localhost:3000/input',{"input":item})
  //   .subscribe(data=>{console.log(data)})
  // }
}
  