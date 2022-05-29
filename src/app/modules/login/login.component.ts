import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogin : boolean = true;
  loginEmail = '';
  loginPassword = '';
  showPwd : boolean = false;
  constructor(
    private _router : Router
  ) { }

  ngOnInit(): void {
    document.body.style.backgroundColor = "#1649DA";
    
  }
  changeMode(){
    this.isLogin = !this.isLogin
  }
  loginSubmit(){
    if(this.loginEmail == 'admin' && this.loginPassword == '123') {
      alert('Login Success');
      this._router.navigate(['/approvals']);

    } else {
      alert('Wrong cred !');
    }

  }
}
