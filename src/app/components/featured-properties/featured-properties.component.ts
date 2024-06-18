import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http: HttpClient) {
    let payload = {
      featured: true
    }
    this.http.post('http://localhost:3000/api/featuredProperties', payload).subscribe(res => {
      this.featuredProperties = res
    }, err => {
      console.log(err);
    });
  }
  interestedButton() {
    alert("Why are you Interested");
  }
}
