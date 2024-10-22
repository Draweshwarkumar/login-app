import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { Observable } from 'rxjs'; // Import Observable

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:8081"; // URL for API endpoint

  constructor(private http: HttpClient) { } // Inject HttpClient

  // Generates a token by sending credentials to the server
  generateToken(credentials: any): Observable<any> {
    return this.http.post(`${this.url}/auth/login`, credentials);
  }

  loginUser(token: string): boolean {
    localStorage.setItem("token", token);
    return true;
  }

  isLoggedIn(): boolean {
    let token = localStorage.getItem("token");
    return token !== undefined && token !== '' && token !== null;
  }

  logout(): boolean {
    localStorage.removeItem('token');
    return true;
  }

  getToken(): string | null {
    return localStorage.getItem("token");
  }
}
