import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  username : string = '';
  constructor(private cookie: CookieService){
    this.username = this.cookie.get('username');
  }
}
