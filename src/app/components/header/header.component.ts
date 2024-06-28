import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthApiService } from 'src/app/services/auth-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  username : string = '';
  showDropdown: boolean = false;
  email!: string;
  userData:any;
  constructor(private cookie: CookieService, private router : Router, private auth: AuthApiService){ 
    if(this.cookie.check('email')){
      this.username = this.cookie.get('username');
      this.email = this.cookie.get('email');
    this.auth.getProfile(this.email).subscribe(res=>{
      console.log(res);
      this.userData = res.userProfile[0];
    }, err=>{ 
      console.log(err);
    });
  } 
  }
  
  getFirstLetter(): string {
    return this.username ? this.username.charAt(0).toUpperCase() : '';
  }
  showModal(){
    this.showDropdown = !this.showDropdown;
  }
  viewProfile(){
    if(this.cookie.check('email')){
      this.router.navigate(['profile']);
    }
  }
  logout() {
    this.cookie.deleteAll();
    this.username = '';
    this.showDropdown = false;
    this.router.navigate(['/login']);  // Redirect to login page after logout
  }
}
