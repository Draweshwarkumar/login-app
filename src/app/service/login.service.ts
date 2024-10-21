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
  generateToken(credentials: any): Observable<any> { // Use Observable for the HTTP response type
    return this.http.post(`${this.url}/auth/login`, credentials); // Use backticks for URL interpolation
  }

  // Logs the user in by storing the token in localStorage
  loginUser(token: string): boolean {
    localStorage.setItem("token", token);
    return true; // Returning true as a success flag
  }

  // Checks if the user is logged in
  isLoggedIn(): boolean {
    let token = localStorage.getItem("token");
    return token !== undefined && token !== '' && token !== null; // Simplified token check
  }

  // Logs the user out by removing the token from localStorage
  logout(): boolean {
    localStorage.removeItem('token');
    return true; // Returning true as a success flag
  }

  // Gets the stored token from localStorage
  getToken(): string | null {
    return localStorage.getItem("token");
  }
}
