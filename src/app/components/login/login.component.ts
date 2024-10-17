import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { LoginService } from '../../service/login.service'; // Update the path if necessary

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, CommonModule, HttpClientModule], // Add HttpClientModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Fix styleUrl to styleUrls
})
export class LoginComponent implements OnInit {
  
  credentials = {
    username: '',
    password: ''
  }

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    // Initialization logic here
  }

  onSubmit() {
    if (this.credentials.username && this.credentials.password) {
      console.log("We have to submit the form to server");
      // Call the login method from the LoginService here
    } else {
      console.log("Fields are empty!!");
    }
  }
}
