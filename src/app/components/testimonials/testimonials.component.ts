import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { AuthApiService } from 'src/app/services/auth-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CommondataService } from 'src/app/services/commondata.service';

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
  shorlistProperties :any;
  shortlistedIds : any[] = [];
  constructor(private http : HttpClient, private auth: AuthApiService,private route: ActivatedRoute,
    private cookie : CookieService, private cmn : CommondataService, private router : Router
  ){}
  ngOnInit(){
    this.cmn.shortListedProperties$.subscribe(properties => {
      this.getShortlistProperty(properties);
    });
    this.route.queryParams.subscribe(params => {
      this.search = params['search'];
      this.budget = Number(params['budget']); 
    });
    let searchTerm = {
      search : this.search,
      budget : this.budget
    }
    this.auth.getFilter(searchTerm).subscribe(
      res => {
        this.relatedProperties = res;
      },
      err => {
        console.log(err);
      }
    );
  }
    seprateArray(arr: any){
    let seprateArray = arr.split(',');
    return seprateArray;
  }
  getShortlistProperty(properties : any){
    this.auth.getShortListProperty(properties).subscribe(res=>{
      console.log(res);
    }, err=>{
      console.log(err);
    })
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
        console.log(this.relatedProperties);
      },
      err => {
        console.log(err);
      }
    );

    console.log(searchTerm);
  }
  // shortlistProperty(button: any) {
  //   if (button.classList.contains('shortlisted')) {
  //     button.classList.remove('shortlisted');
  //   } else {
  //     button.classList.add('shortlisted');
  //   }
  // }
  shareFavBtn(num: any, Id: any){
    if(num == 1){
      alert("Why are you Sharing");
    }else{
      let data = {
        _id : Id,
        email : this.cookie.get('email')
      }
      this.auth.getShortListPropertyId(data).subscribe(res=> {
        this.shorlistProperties = res;
      })
    }
  }
  checkFav(Id : String){
    if(this.shortlistedIds.includes(Id)){
      return true
    }
    return false
  }
  buyNow(id:any){
    this.router.navigate(['paymentGateway'], { queryParams: { id: id } });
  }
}
