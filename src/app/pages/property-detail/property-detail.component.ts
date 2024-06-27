import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthApiService } from 'src/app/services/auth-api.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent {
  id: any;
  propertyDetail : any;
  constructor(private route: ActivatedRoute, private auth : AuthApiService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.auth.getProperty(this.id).subscribe(
        res => {
          console.log(res[0]);
          this.propertyDetail = res[0];
          console.log(this.propertyDetail.images[0]);
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
