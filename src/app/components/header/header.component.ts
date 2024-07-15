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
        this.userData = res.userProfile;
      }, err=>{ 
        console.log(err);
      });
    }
  }
  fetchData(){
    
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
    this.auth.signOut();
    this.username = '';
    this.showDropdown = false;
  }
  sleep(ms : number){
    // new Promise<void>{
      return new Promise((resolve) =>{
        setTimeout(resolve, ms)
      })
    // }
  }
  loginBtn($e : any){
    $e.preventDefault();
    const body = document.querySelector("body");
    body?.classList.add("page-transition");
    this.sleep(200)
    this.router.navigate(['/login']);
    body?.classList.remove("page-transition");
  }
}
