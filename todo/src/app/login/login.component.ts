import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'davidiumprime'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  constructor() { }

  ngOnInit() {
  }

  handleLogin() {

    if (this.username === "davidiumprime" && this.password === 'dummy') {
      this.invalidLogin = false
    }
    else { this.invalidLogin = true }


    console.log(this.username);
    console.log(this.password);
  }

}
