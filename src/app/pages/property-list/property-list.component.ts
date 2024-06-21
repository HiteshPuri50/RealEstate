import { Component } from '@angular/core';
import { AuthApiService } from 'src/app/services/auth-api.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  constructor(private auth: AuthApiService){}
  allProperties: any;

  ngOnInit(){
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
}
