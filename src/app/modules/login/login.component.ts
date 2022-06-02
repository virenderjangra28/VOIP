import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantService } from 'src/app/services/constant.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogin : boolean = true;
  loginEmail = '';
  loginPassword = '';
  regMobile = '';
  regEmail = '';
  regPassword = '';
  regConfirmPassword = '';
  showPwd : boolean = false;
  isError : boolean = false;
  errorText = '';
  isValidForLogin : boolean = false;
  isValidForReg : boolean = false;
  constructor(
    private _router : Router,
    private _constantService : ConstantService
  ) { }

  ngOnInit(): void {
    document.body.style.backgroundColor = "#1649DA";
    
  }
  changeMode(){
    this.isError = false;
    this.errorText = '';
    this.isLogin = !this.isLogin
  }
  loginSubmit(){
    this.logiVaidation();
    if(!this.isValidForLogin){
      return;
    }
    if(this.loginEmail == 'admin' && this.loginPassword == '123') {
      alert('Login Success');
      this._router.navigate(['/approvals']);

    } else {
      var emailLogin = document.getElementsByClassName('inputEmailField')[0];
      var passwordLogin = document.getElementsByClassName('inputPassField')[0];
      this.isError = true;
      this.errorText = 'Wrong Credentials !';
      emailLogin.classList.add('error');
      passwordLogin.classList.add('error')
      setTimeout(() => {
        emailLogin.classList.remove('error');
        passwordLogin.classList.remove('error')
      }, 500);
      this.autoHideError();
      return;
    }

  }

  // ============== Registration Process Start ==========================

  registration() {
    this.validate();
    if(!this.isValidForReg) {
        return;
    }
    alert('hi')
    var register : any = {}
    register['email'] = this.regEmail;
    register['mobileNumber'] = this.regMobile;
    register['password'] = this.regPassword;
    this._constantService.fetchDataApi(this._constantService.getNewAdminRegistrationServiceUrl(), register).subscribe(data => {
      var response = data;
    })
    
  }

  //  ===================== Validation for Registration ======================

  validate() {
        if(this.regMobile == ''){
          this.isValidForReg = false;
            var mobRegister = document.getElementsByClassName('inputFieldForMobileReg')[0];
            this.isError = true;
            this.errorText = 'Please enter valid Mobile Number!';
            mobRegister.classList.add('error');
            setTimeout(() => {
              mobRegister.classList.remove('error');
            }, 500);
            this.autoHideError();
            return;
        } else if(this.regEmail == ''){
          this.isValidForReg = false;
          var mailRegister = document.getElementsByClassName('inputFieldForEmailReg')[0];
          this.isError = true;
          this.errorText = 'Please enter valid Email Address!';
          mailRegister.classList.add('error');
          setTimeout(() => {
            mailRegister.classList.remove('error');
          }, 500);
          this.autoHideError();
          return;
        } else if(this.regPassword == ''){
          this.isValidForReg = false;
        var passRegister = document.getElementsByClassName('inputFieldForPassReg')[0];
        this.isError = true;
        this.errorText = 'Please enter Password!';
        passRegister.classList.add('error');
        setTimeout(() => {
          passRegister.classList.remove('error');
        }, 500);
        this.autoHideError();
        return;
        } else if(this.regConfirmPassword == ''){
          this.isValidForReg = false;
        var confirmPassRegister = document.getElementsByClassName('inputFieldForRepeatPassReg')[0];
        this.isError = true;
        this.errorText = 'Please re-type Password!';
        confirmPassRegister.classList.add('error');
        setTimeout(() => {
          confirmPassRegister.classList.remove('error');
        }, 500);
        this.autoHideError();
        return;
        } else if (this.regPassword != this.regConfirmPassword) {
          this.isValidForReg = false;
        var confirmPassRegister = document.getElementsByClassName('inputFieldForRepeatPassReg')[0];
        this.isError = true;
        this.errorText = 'Please type same Password!';
        confirmPassRegister.classList.add('error');
        setTimeout(() => {
          confirmPassRegister.classList.remove('error');
        }, 500);
        this.autoHideError();
        return;
        } else {
          this.isValidForReg = true;
        }
  }

  // ======================== Auto Hide Error Text ===========================
  autoHideError() {
    setTimeout(() => {
      this.isError = false;
      this.errorText = '';
    }, 5000);
  }

  //  ===================== Validation for Login ======================

  logiVaidation() {
    if(this.loginEmail == ''){
      this.isValidForLogin = false;
        var emailLogin = document.getElementsByClassName('inputEmailField')[0];
        this.isError = true;
        this.errorText = 'Please enter valid Email Address!';
        emailLogin.classList.add('error');
        setTimeout(() => {
          emailLogin.classList.remove('error');
        }, 500);
        this.autoHideError();
        return;
    } else if(this.loginPassword == ''){
      this.isValidForLogin = false;
        var passwordLogin = document.getElementsByClassName('inputPassField')[0];
        this.isError = true;
        this.errorText = 'Please enter Password!';
        passwordLogin.classList.add('error');
        setTimeout(() => {
          passwordLogin.classList.remove('error');
        }, 500);
        this.autoHideError();
        return;
    }else {
      this.isValidForLogin = true;
    }
  }

}
