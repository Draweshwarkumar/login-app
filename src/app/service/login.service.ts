import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:8081";

  constructor(private http: HttpClient) { } // Inject HttpClient here

  generateToken(credentials: any) {
    return this.http.post(`${this.url}/auth/login`, credentials); // Use backticks for string interpolation
  }
  

  loginUser(token: string) {
    localStorage.setItem("token", token);
    return true;
  }

  isLoggedIn() {
    let token = localStorage.getItem("token");
    return token !== undefined && token !== '' && token !== null; // Simplified
  }

  logout() {
    localStorage.removeItem('token');
    return true;
  }

  getToken() {
    return localStorage.getItem("token");
  }
}