import { Component, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthApiService } from 'src/app/services/auth-api.service';
import { CommondataService } from 'src/app/services/commondata.service';

@Component({
  selector: 'app-shortlisted-properties',
  templateUrl: './shortlisted-properties.component.html',
  styleUrls: ['./shortlisted-properties.component.css']
})
export class ShortlistedPropertiesComponent {
  @Input() shortListedProperties: any;
  constructor(private auth : AuthApiService, private cookie: CookieService, private cmn : CommondataService){}
  currentLogin = this.cookie.get('email');
  
  ngOnInit() {
    const shortlisted = this.seprateArray(this.cookie.get('shortlisted'));
    // console.log('Shortlisted cookie value:', shortlisted);

    if (shortlisted && shortlisted !== 'undefined') {
      try {
        let data = {
          _id : '',
          email : this.cookie.get('email')
        }
        this.auth.getShortListProperty(data).subscribe(res=>{
          this.shortListedProperties = res
        })
      } catch (e) {
        console.error('Error parsing shortlisted properties from cookie:', e);
        // Optionally, clear the invalid cookie to avoid repeated errors
        this.cookie.delete('shortlisted');
        this.shortListedProperties = [];
      }
    } else {
      this.shortListedProperties = [];
    }
  }
  seprateArray(arr: any){
    let seprateArray = arr.split(',');
    return seprateArray;
  }
}