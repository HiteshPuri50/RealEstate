import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  username : string = '';
  showDropdown: boolean = false;
  constructor(private cookie: CookieService, private router : Router){ 
    if(this.cookie.check('username')){
      this.username = this.cookie.get('username');
    } 
  }
  
  getFirstLetter(): string {
    return this.username ? this.username.charAt(0).toUpperCase() : '';
  }
  showModal(){
    this.showDropdown = !this.showDropdown;
  }
  viewProfile(){
    alert('In Pending');
  }
  logout() {
    this.cookie.deleteAll();
    this.username = '';
    this.showDropdown = false;
    this.router.navigate(['/login']);  // Redirect to login page after logout
  }
}
