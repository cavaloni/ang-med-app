import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import {Router} from '@angular/router'

@Component({
  providers: [LoginService],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private _loginService: LoginService) { }
  
  ngOnInit() {
  }

  message: string;

  onSubmit(f) {
    if (this._loginService.login(f.value)) {
      this.router.navigate(['/main']);
    } else {
      this.message = 'Login Unsucssesful'
    }
  }

}
