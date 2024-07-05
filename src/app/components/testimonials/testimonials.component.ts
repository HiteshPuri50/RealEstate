import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { AuthApiService } from 'src/app/services/auth-api.service';
import { ActivatedRoute } from '@angular/router';
interface Budget {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  search : string = '';
  budget !: number;
  relatedProperties !: any;
  constructor(private http : HttpClient, private auth: AuthApiService,private route: ActivatedRoute){}
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.search = params['search'];
      this.budget = Number(params['budget']);
    });
    let searchTerm = {
      search : this.search,
      budget : this.budget
    }
    console.log(searchTerm);
    this.auth.getFilter(searchTerm).subscribe(
      res => {
        this.relatedProperties = res;
      },
      err => {
        console.log(err);
      }
    );
  }
  selectedBudget!: number;
  budgets: Budget[] = [
    { value: '5000', viewValue: '5000' },
    { value: '10000', viewValue: '10000' },
    { value: '15000', viewValue: '15000' },
    { value: '20000', viewValue: '20000' },
    { value: '25000', viewValue: '25000' },
    { value: '30000', viewValue: '30000' },
    { value: '35000', viewValue: '35000' },
    { value: '40000', viewValue: '40000' },
    { value: '45000', viewValue: '45000' },
    { value: '50000', viewValue: '50000' },
    { value: '55000', viewValue: '55000' },
    { value: '60000', viewValue: '60000' },
  ];
  Coordinates: any;
  bannerHeading: HTMLElement | null | undefined;
  MoveContent(e: any) {
    let x = e.clientX;
    let y = e.clientY;
    let coor = "Coordinates: (" + x + "," + y + ")";
    this.Coordinates = coor;
    this.updatePosition(x, y);
  }
  updatePosition(x: number, y: number) {
    this.bannerHeading = document.getElementById('bannerHeading');
    if (this.bannerHeading) {
      const translateX = (x - window.innerWidth) / 50; // Dividing by 10 is just for adjusting the movement sensitivity
      const translateY = (y - window.innerHeight) / 50;

      // Calculate rotation values
      const rotateX = (y - window.innerHeight) / 50; // Adjust rotation sensitivity as needed
      const rotateY = (x - window.innerWidth) / 50;
      // this.Coordinates = `transform: translate(${translateX}px, ${translateY}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg);`;
      this.bannerHeading.style.transform = `translate(${translateX}px, ${translateY}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    }
  }
  onEnter(formValue: any) {
    const searchTerm = {
      search: formValue.search,
      budget: Number(this.selectedBudget)
    };

    this.auth.getFilter(searchTerm).subscribe(
      res => {
        this.relatedProperties = res;
      },
      err => {
        console.log(err);
      }
    );

    console.log(searchTerm);
  }
  shortlistProperty(button: any) {
    if (button.classList.contains('shortlisted')) {
      button.classList.remove('shortlisted');
    } else {
      button.classList.add('shortlisted');
    }
  }
}
