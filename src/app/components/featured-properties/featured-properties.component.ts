import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthApiService } from 'src/app/services/auth-api.service';

@Component({
  selector: 'app-featured-properties',
  templateUrl: './featured-properties.component.html',
  styleUrls: ['./featured-properties.component.css']
})
export class FeaturedPropertiesComponent {
  counter!: number;
  featuredProperties: any;
  startIndex: number = 0;
  itemsPerPage: number = 3;
  increment(): void {
    if (this.startIndex + this.itemsPerPage < this.featuredProperties.length) {
      this.startIndex += this.itemsPerPage;
    }
  }

  decrement(): void {
    if (this.startIndex - this.itemsPerPage >= 0) {
      this.startIndex -= this.itemsPerPage;
    }
  }

  get displayedProperties(): any[] {
    return this.featuredProperties.slice(this.startIndex, this.startIndex + this.itemsPerPage);
  }
  constructor(private http: HttpClient, private auth: AuthApiService) {
    this.getProperties();
  }
  interestedButton() {
    alert("Why are you Interested");
  }
  getProperties(){
    let payload = {
      featured: true
    }
    this.auth.featuredPropertiesAPI(payload).subscribe(res => {
      this.featuredProperties = res
      return res;
    });
  }
}
