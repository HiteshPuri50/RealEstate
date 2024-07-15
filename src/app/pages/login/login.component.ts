import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('googlebtn', {static : true}) googlebtn !: ElementRef;
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

  ngOnInit(){
    console.log(document.getElementById("google-btn"));
    google.accounts.id.initialize({
      client_id : '430052986524-1ucb97q8430i548kh4e4aljmqicj9opi.apps.googleusercontent.com',
      callback : (res : any)=> this.handleToken(res)
    })
    // this.googlebtn.nativeElement
    google.accounts.id.renderButton(document.getElementById("google-btn") , {
      theme: 'outline',
      shape : 'rectangle',
      type: 'icon',
    })
  }
  private  decodeToken(token :string){
    return JSON.parse(atob(token.split(".")[1]));
  }
  handleToken(res :any){
    if(res){
      console.log(res.credential);
      const payload = this.decodeToken(res.credential);
      console.log(payload);
      this.cookie.set("loggedUser", JSON.stringify(payload));
    }
  }
  onSubmit() {
    this.auth.loginAPI(this.loginForm.value).subscribe(res => {
      // console.log(res);
      this.response = res;
      console.log(this.response);
      this.cookie.set("email", this.response.email);
      this.cookie.set("username", this.response.username);
      this.cookie.set("mobile", this.response.mobile);

    // Assuming `shortlistedProperties` is an array of properties
    if (this.response.shortlistedProperties) {
      this.cmnData.setShortListedProperties(this.response.shortlistedProperties);
    }
      this.router.navigate(['/home']);
    });
  }
  onClickHandler(){
    console.log("Sign in with Google button clicked...")
  }
}
