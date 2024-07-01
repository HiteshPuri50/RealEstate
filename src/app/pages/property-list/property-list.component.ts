import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApiService } from 'src/app/services/auth-api.service';
import { CommondataService } from 'src/app/services/commondata.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  constructor(private auth: AuthApiService, private commonData : CommondataService, private router : Router){}
  allProperties: any;
  userData!: Object;
  ngOnInit(){
    this.userData = this.commonData.userData;
    console.log(this.userData);
    this.getAllProperties();
  }

  getAllProperties(){
    this.auth.getAllProperties().subscribe(res => {
      this.allProperties = res;
      console.log(this.allProperties);
    })
  }
  reduceLength(text : string){
    // Check if the text length is less than or equal to 50 characters
    if (text.length <= 100) {
      return text;
    }

    // Return the first 50 characters followed by an ellipsis
    return text.slice(0, 100) + '...';
  }
  getFirstLetter(username : string): string {
    return username ? username.charAt(0).toUpperCase() : '';
  }
  getProperty(id: any){
    this.router.navigate(['/property-detail', id])
  }
}
