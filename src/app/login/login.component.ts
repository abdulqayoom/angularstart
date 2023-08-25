import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginser: LoginService, private router: Router) {

  }
  user: any = {
    email: "",
    password: ""
  }

  login() {
    debugger
    if (this.loginser.login(this.user.email, this.user.password)) {
      this.router.navigateByUrl("/employee")
    }
  }
}
