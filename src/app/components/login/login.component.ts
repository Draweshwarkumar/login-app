import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../service/login.service';
import { response } from 'express';
import { error } from 'console';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Use styleUrls, not styleUrl
})
export class LoginComponent implements OnInit {
  
  credentials = {
    username: '',
    password: ''
  };

  constructor(private loginService: LoginService) {} // Inject the LoginService

  ngOnInit(): void {
     
  }

  onSubmit() {
    if ((this.credentials.username !== '' && this.credentials.password !== '') && 
        (this.credentials.username !== null && this.credentials.password !== null)) {
      console.log("We have to submit the form to server");
      // You can call your login service here, e.g. this.loginService.doLogin(this.credentials);
      this.loginService.generateToken(this.credentials).subscribe(
        response=>{
            console.log(response);
        },
        error=>{
          console.log(error);

        }
      )
    } else {
      console.log("Fields are empty!!");
    }
  }
}