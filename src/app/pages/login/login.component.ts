import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthApiService } from 'src/app/services/auth-api.service';
import { CommondataService } from 'src/app/services/commondata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup; //Definate Assignment (ayega hi ayega)
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router,private auth : AuthApiService,
    private cookie: CookieService, private cmnData : CommondataService
  ) {
    let username = this.cookie.get("username")
    if(username){
      this.router.navigate(['/home']);
    }
    this.loginForm = this.fb.group(
      {
        email: [''],
        password: ['']
      })
  }
  response: any;
  onSubmit() {
    this.auth.loginAPI(this.loginForm.value).subscribe(res => {
      console.log(res);
      this.response = res;
      this.cookie.set("email", this.response.email);
      this.cookie.set("username", this.response.user);
      this.cookie.set("mobile", this.response.mobile);
      this.cmnData.userData = res;
      this.router.navigate(['/home']);
      return res;
    });
  }
}
